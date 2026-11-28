// Páginas de compartilhar dos jogos aprovados: …/jogos/<id>/ com nome, descrição e miniatura (para o WhatsApp mostrar a foto).
// O site é estático: o WhatsApp lê só este HTML. A miniatura fica no próprio site, porque o servidor não entrega imagem sem chave.
// Uso no site publicado: node tools/jogos-share.mjs <pasta do site>.
// Gasto: 1 consulta da lista por vez; a miniatura só é baixada quando é nova ou mudou.
import fs from 'node:fs/promises';import {gamePage,cataloguePage} from './game-public-layout.mjs';import path from 'node:path';import {pathToFileURL} from 'node:url';
const API="https://fguqnhjvfvneipaqnoce.supabase.co/functions/v1/academy",SITE='https://0srgood.github.io/levelup-academy-web/',KEY="sb_publishable_UCl41rKzbb90quPWEfyfng_Y4LPvMXn";
const ORIGIN='https://0srgood.github.io';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const headers=key=>({apikey:key,Authorization:'Bearer '+key,Origin:ORIGIN});
export {gamePage,cataloguePage};
export function gameSitemap(games,site=SITE){return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+[site+'descobrir/',...games.map(g=>site+'jogos/'+g.id.replace(/-/g,'')+'/')].map(url=>'<url><loc>'+esc(url)+'</loc></url>').join('')+'</urlset>\n'}
export async function run(site,key=KEY,api=API){
 const all=[];for(let offset=0;offset<2000;){
  const r=await fetch(api+'/platform',{method:'POST',headers:{...headers(key),'Content-Type':'application/json'},body:JSON.stringify({action:'games-list',sort:'recent',offset})});
  if(!r.ok)throw new Error('Lista dos jogos: '+r.status);const d=await r.json();all.push(...d.games);if(!d.more||!d.games.length)break;offset+=d.games.length}
 const root=path.join(site,'jogos');await fs.mkdir(root,{recursive:true});const keep=new Set(),published=[];
 for(const g of all){
  if(!/^[\w-]{1,80}$/.test(g.id))continue;const code=g.id.replace(/-/g,'');keep.add(code);const dir=path.join(root,code);await fs.mkdir(dir,{recursive:true});
  const v=/-([a-f0-9]{10})$/.exec(g.thumb||'')?.[1];let image='';
  if(v){const have=(await fs.readdir(dir)).find(n=>n.startsWith('capa-'+v+'.'));
   if(have)image=have;else{const r=await fetch(api+g.thumb,{headers:headers(key)});
    if(r.status===402||r.status===503)continue;
    if(r.ok){const ext={'image/jpeg':'jpg','image/png':'png','image/webp':'webp'}[r.headers.get('content-type')||'']||'jpg';image='capa-'+v+'.'+ext;
     for(const n of await fs.readdir(dir))if(n.startsWith('capa-'))await fs.rm(path.join(dir,n));await fs.writeFile(path.join(dir,image),new Uint8Array(await r.arrayBuffer()))}}}
  const imageUrl=image?SITE+'jogos/'+code+'/'+image:SITE+'brand/share/principal-v1.jpg';
  published.push({...g,imageUrl});
 }
 // jogo que saiu do ar: a página sai junto
 for(const n of await fs.readdir(root,{withFileTypes:true}))if(n.isDirectory()&&!keep.has(n.name)&&/^[\w-]{1,80}$/.test(n.name))await fs.rm(path.join(root,n.name),{recursive:true,force:true});
 // cada jogo sugere outros (os mais jogados), e o catálogo mostra as categorias
 const popular=[...published].sort((a,b)=>(Number(b.plays)||0)-(Number(a.plays)||0));
 for(const g of published)await fs.writeFile(path.join(root,g.id.replace(/-/g,''),'index.html'),gamePage(g,g.imageUrl,SITE,popular));
 const discovery=path.join(site,'descobrir');await fs.mkdir(discovery,{recursive:true});
 await fs.writeFile(path.join(discovery,'index.html'),cataloguePage(published,SITE));
 await fs.writeFile(path.join(site,'sitemap-jogos.xml'),gameSitemap(published));
 return published.length;
}
if(import.meta.url===pathToFileURL(process.argv[1]||'').href){const n=await run(process.argv[2]||'.');console.log(`Páginas de compartilhar: ${n} jogo(s).`)}
