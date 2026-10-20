/* Service worker da Level Up Academy.
 * - Página: rede primeiro (sempre a versão publicada), cache só sem conexão.
 * - Manifesto e ícones: nunca passam pelo service worker.
 * - Scripts e estilos com hash no nome: cache primeiro (o nome muda a cada publicação).
 * - Demais arquivos estáticos: cache imediato e atualização em segundo plano.
 * - Requisições de outros domínios (Supabase, YouTube, DevForum) não passam pelo cache.
 * - Estudo offline: o app inteiro (página, scripts, estilos, marca) fica guardado ao instalar cada versão;
 *   a biblioteca offline (levelup-offline-*) guarda o laboratório e as capas baixadas e NUNCA é apagada nas atualizações.
 * __BUILD__ é trocado pelo empacotador a cada publicação, o que limpa os caches antigos. */
const VERSION='a801001211e1';
const CACHE='levelup-'+VERSION;
const CORE=['./','./logo.png'];
// Lista preenchida pelo empacotador (scripts/package-pages.mjs) com os arquivos desta versão do app.
const PRECACHE=["./studio/icons/Dark/BoolValue.png","./studio/icons/Dark/ClickDetector.png","./studio/icons/Dark/Event.png","./studio/icons/Dark/Folder.png","./studio/icons/Dark/Frame.png","./studio/icons/Dark/Function.png","./studio/icons/Dark/Humanoid.png","./studio/icons/Dark/ImageButton.png","./studio/icons/Dark/ImageLabel.png","./studio/icons/Dark/IntValue.png","./studio/icons/Dark/Lighting.png","./studio/icons/Dark/LocalScript.png","./studio/icons/Dark/MeshPart.png","./studio/icons/Dark/Method.png","./studio/icons/Dark/Model.png","./studio/icons/Dark/ModuleScript.png","./studio/icons/Dark/NegateOperation.png","./studio/icons/Dark/NumberValue.png","./studio/icons/Dark/Part.png","./studio/icons/Dark/Player.png","./studio/icons/Dark/Players.png","./studio/icons/Dark/PointLight.png","./studio/icons/Dark/Property.png","./studio/icons/Dark/ReplicatedStorage.png","./studio/icons/Dark/ScreenGui.png","./studio/icons/Dark/Script.png","./studio/icons/Dark/ServerScriptService.png","./studio/icons/Dark/ServerStorage.png","./studio/icons/Dark/SpawnLocation.png","./studio/icons/Dark/StarterGui.png","./studio/icons/Dark/StarterPlayer.png","./studio/icons/Dark/StringValue.png","./studio/icons/Dark/TextButton.png","./studio/icons/Dark/TextLabel.png","./studio/icons/Dark/UICorner.png","./studio/icons/Dark/UIGradient.png","./studio/icons/Dark/UIListLayout.png","./studio/icons/Dark/UIStroke.png","./studio/icons/Dark/UnionOperation.png","./studio/icons/Dark/Workspace.png","./studio/icons/Light/BoolValue.png","./studio/icons/Light/ClickDetector.png","./studio/icons/Light/Event.png","./studio/icons/Light/Folder.png","./studio/icons/Light/Frame.png","./studio/icons/Light/Function.png","./studio/icons/Light/Humanoid.png","./studio/icons/Light/ImageButton.png","./studio/icons/Light/ImageLabel.png","./studio/icons/Light/IntValue.png","./studio/icons/Light/Lighting.png","./studio/icons/Light/LocalScript.png","./studio/icons/Light/MeshPart.png","./studio/icons/Light/Method.png","./studio/icons/Light/Model.png","./studio/icons/Light/ModuleScript.png","./studio/icons/Light/NegateOperation.png","./studio/icons/Light/NumberValue.png","./studio/icons/Light/Part.png","./studio/icons/Light/Player.png","./studio/icons/Light/Players.png","./studio/icons/Light/PointLight.png","./studio/icons/Light/Property.png","./studio/icons/Light/ReplicatedStorage.png","./studio/icons/Light/ScreenGui.png","./studio/icons/Light/Script.png","./studio/icons/Light/ServerScriptService.png","./studio/icons/Light/ServerStorage.png","./studio/icons/Light/SpawnLocation.png","./studio/icons/Light/StarterGui.png","./studio/icons/Light/StarterPlayer.png","./studio/icons/Light/StringValue.png","./studio/icons/Light/TextButton.png","./studio/icons/Light/TextLabel.png","./studio/icons/Light/UICorner.png","./studio/icons/Light/UIGradient.png","./studio/icons/Light/UIListLayout.png","./studio/icons/Light/UIStroke.png","./studio/icons/Light/UnionOperation.png","./studio/icons/Light/Workspace.png","./index-Cdmwv1KK.js","./index-DO7Q5X3o.css","./LabScene-eZIpFeZo.js","./play-BNK4Llp-.js","./rbxlx-ioQuatiS.js","./RoomEnvironment-DrPfiCa3.js","./Shirt3D-D6WTDtnA.js","./StudioLite-CoO8EWk7.js","./brand/emblem-192.png","./brand/emblem-512.png","./brand/emblem-96.png","./brand/emblem-dark-192.png","./brand/emblem-dark-512.png","./brand/wordmark-dark.png","./brand/wordmark-light.png"];
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
 // Laboratório 3D: personagem (.glb) e peças (.json) ficam guardados depois do primeiro uso (e na biblioteca offline).
 if(/\/studio\/[\w.-]+\.(glb|json)$/.test(path)){event.respondWith(staleWhileRevalidate(event));return}
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
