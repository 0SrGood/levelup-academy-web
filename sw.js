/* Service worker da Level Up Academy.
 * - Página: rede primeiro (sempre a versão publicada), cache só sem conexão.
 * - Manifesto e ícones: nunca passam pelo service worker.
 * - Scripts e estilos com hash no nome: cache primeiro (o nome muda a cada publicação).
 * - Demais arquivos estáticos: cache imediato e atualização em segundo plano.
 * - Requisições de outros domínios (Supabase, YouTube, DevForum) não passam pelo cache.
 * __BUILD__ é trocado pelo empacotador a cada publicação, o que limpa os caches antigos. */
const VERSION='218d66db88d9';
const CACHE='levelup-'+VERSION;
const CORE=['./','./logo.png'];

self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE.map(url=>new Request(url,{cache:'reload'})))).catch(()=>{}).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('levelup-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});

async function networkFirst(request,key){
 const cache=await caches.open(CACHE);
 try{const response=await fetch(request,{cache:'no-cache'});if(response.ok)cache.put(key||request,response.clone());return response}
 catch{const cached=await cache.match(key||request,{ignoreSearch:true});if(cached)return cached;throw new Error('offline')}
}
async function cacheFirst(request){
 const cache=await caches.open(CACHE),cached=await cache.match(request);if(cached)return cached;
 const response=await fetch(request);if(response.ok)cache.put(request,response.clone());return response;
}
async function staleWhileRevalidate(event){
 const cache=await caches.open(CACHE),cached=await cache.match(event.request);
 const update=fetch(event.request).then(response=>{if(response.ok)cache.put(event.request,response.clone());return response}).catch(()=>cached);
 if(cached){event.waitUntil(update);return cached}
 return update;
}

self.addEventListener('fetch',event=>{
 const request=event.request;if(request.method!=='GET')return;
 const url=new URL(request.url);if(url.origin!==self.location.origin)return;
 if(request.mode==='navigate'){event.respondWith(networkFirst(request,'./').catch(()=>caches.match('./')));return}
 const path=url.pathname;
 if(/\/sw\.js$/.test(path))return;
 // Manifesto e ícones vão direto ao servidor, sem passar pelo service worker: é o que o iPhone e o Android leem ao instalar.
 if(/\/manifest\.webmanifest$/.test(path)||/\/icons\//.test(path)||/apple-touch-icon/.test(path))return;
 if(/\/index-[\w-]+\.(js|css)$/.test(path)){event.respondWith(cacheFirst(request));return}
 if(/\.(png|webp|jpg|jpeg|gif|svg|js|css|woff2?)$/.test(path)){event.respondWith(staleWhileRevalidate(event));return}
});

/* Notificações: prontas para receber envios do servidor (push) e abrir a plataforma ao tocar. */
self.addEventListener('push',event=>{
 let data={};try{data=event.data?event.data.json():{}}catch{data={body:event.data&&event.data.text()}}
 const options={body:data.body||'Há novidades na sua plataforma.',icon:'./icons/icon-192-v2.png',badge:'./icons/icon-192-v2.png',tag:data.tag||'levelup',renotify:!!data.tag,timestamp:Date.now(),data:{url:data.url||'./'}};
 // Imagem grande da novidade (Android/Chrome). O ícone continua sendo a logo oficial; o iPhone ignora "image".
 if(typeof data.image==='string'&&/^https:\/\//.test(data.image))options.image=data.image;
 event.waitUntil(self.registration.showNotification(data.title||'Level Up Academy',options));
});
self.addEventListener('notificationclick',event=>{
 event.notification.close();
 const target=new URL((event.notification.data&&event.notification.data.url)||'./',self.registration.scope).href;
 event.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(async list=>{
  const client=list.find(c=>c.url.startsWith(self.registration.scope));
  if(!client)return self.clients.openWindow(target);
  // App já aberto: traz para frente e leva direto à novidade (sem recarregar). Se a página não responder, navega até ela.
  try{await client.focus()}catch{}
  const answered=await new Promise(resolve=>{const channel=new MessageChannel();const finish=ok=>{clearTimeout(timer);channel.port1.close();resolve(ok)};const timer=setTimeout(()=>finish(false),1500);channel.port1.onmessage=()=>finish(true);try{client.postMessage({type:'levelup-open',url:target},[channel.port2])}catch{finish(false)}});
  if(!answered&&'navigate' in client)try{return await client.navigate(target)}catch{}
  if(!answered)return self.clients.openWindow(target);
 }));
});
