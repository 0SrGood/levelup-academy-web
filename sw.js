/* Service worker da Level Up Academy.
 * - Página: rede primeiro (sempre a versão publicada), cache só sem conexão.
 * - Manifesto e ícones: nunca passam pelo service worker.
 * - Scripts e estilos com hash no nome: cache primeiro (o nome muda a cada publicação).
 * - Demais arquivos estáticos: cache imediato e atualização em segundo plano.
 * - Requisições de outros domínios (Supabase, YouTube, DevForum) não passam pelo cache.
 * - Estudo offline: o app inteiro (página, scripts, estilos, marca) fica guardado ao instalar cada versão;
 *   a biblioteca offline (levelup-offline-*) guarda o laboratório e as capas baixadas e NUNCA é apagada nas atualizações.
 * __BUILD__ é trocado pelo empacotador a cada publicação, o que limpa os caches antigos. */
const VERSION='f5ef22344680';
const CACHE='levelup-'+VERSION;
const CORE=['./','./logo.png'];
// Lista preenchida pelo empacotador (scripts/package-pages.mjs) com os arquivos desta versão do app.
const PRECACHE=["./index-BpWs9Egh.css","./index-Bw4D0Fm5.js","./brand/emblem-192.png","./brand/emblem-512.png","./brand/emblem-96.png","./brand/emblem-dark-192.png","./brand/emblem-dark-512.png","./brand/wordmark-dark.png","./brand/wordmark-light.png"];
const OFFLINE='levelup-offline-v1';

self.addEventListener('install',event=>{
 // Um arquivo que falhe não impede os outros de ficarem guardados (addAll desistiria de todos).
 event.waitUntil(caches.open(CACHE).then(cache=>Promise.allSettled([...CORE,...PRECACHE].map(url=>cache.add(new Request(url,{cache:'reload'}))))).catch(()=>{}).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('levelup-')&&key!==CACHE&&!key.startsWith('levelup-offline')).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});

async function networkFirst(request,key){
 const cache=await caches.open(CACHE);
 try{const response=await fetch(request,{cache:'no-cache'});if(response.ok)cache.put(key||request,response.clone());return response}
 catch{const cached=await cache.match(key||request,{ignoreSearch:true})||await caches.match(key||request,{ignoreSearch:true});if(cached)return cached;throw new Error('offline')}
}
async function cacheFirst(request){
 const cache=await caches.open(CACHE),cached=await cache.match(request);if(cached)return cached;
 try{const response=await fetch(request);if(response.ok)cache.put(request,response.clone());return response}
 catch(error){const saved=await caches.match(request,{ignoreSearch:true});if(saved)return saved;throw error}
}
async function staleWhileRevalidate(event){
 const cache=await caches.open(CACHE),cached=await cache.match(event.request);
 // Sem internet e sem cópia nesta versão: procura na biblioteca offline (ex.: laboratório Lua baixado).
 const update=fetch(event.request).then(response=>{if(response.ok)cache.put(event.request,response.clone());return response}).catch(async error=>cached||await caches.match(event.request,{ignoreSearch:true})||Promise.reject(error));
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
