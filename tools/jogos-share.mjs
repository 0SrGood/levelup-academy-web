// Páginas de compartilhar dos jogos aprovados: …/jogos/<id>/ com nome, descrição e miniatura (para o WhatsApp mostrar a foto).
// O site é estático: o WhatsApp lê só este HTML. A miniatura fica no próprio site, porque o servidor não entrega imagem sem chave.
// Uso: node jogos-share.mjs <pasta do site>. Roda ao montar o site e por uma tarefa do GitHub a cada 30 min.
// Gasto: 1 consulta da lista por vez; a miniatura só é baixada quando é nova ou mudou.
import fs from 'node:fs/promises';import path from 'node:path';import {pathToFileURL} from 'node:url';
const API='https://fguqnhjvfvneipaqnoce.supabase.co/functions/v1/academy',SITE='https://0srgood.github.io/levelup-academy-web/',KEY="sb_publishable_UCl41rKzbb90quPWEfyfng_Y4LPvMXn";
const ORIGIN='https://0srgood.github.io';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const headers=key=>({apikey:key,Authorization:'Bearer '+key,Origin:ORIGIN});
export async function run(site,key=KEY){
 const all=[];for(let offset=0;offset<2000;){
  const r=await fetch(API+'/platform',{method:'POST',headers:{...headers(key),'Content-Type':'application/json'},body:JSON.stringify({action:'games-list',sort:'recent',offset})});
  if(!r.ok)throw new Error('Lista dos jogos: '+r.status);const d=await r.json();all.push(...d.games);if(!d.more||!d.games.length)break;offset+=d.games.length}
 const root=path.join(site,'jogos');await fs.mkdir(root,{recursive:true});const keep=new Set();
 for(const g of all){
  if(!/^[\w-]{1,80}$/.test(g.id))continue;const code=g.id.replace(/-/g,'');keep.add(code);const dir=path.join(root,code);await fs.mkdir(dir,{recursive:true});
  const v=/-([a-f0-9]{10})$/.exec(g.thumb||'')?.[1];let image='';
  if(v){const have=(await fs.readdir(dir)).find(n=>n.startsWith('capa-'+v+'.'));
   if(have)image=have;else{const r=await fetch(API+g.thumb,{headers:headers(key)});
    if(r.ok){const ext={'image/jpeg':'jpg','image/png':'png','image/webp':'webp'}[r.headers.get('content-type')||'']||'jpg';image='capa-'+v+'.'+ext;
     for(const n of await fs.readdir(dir))if(n.startsWith('capa-'))await fs.rm(path.join(dir,n));await fs.writeFile(path.join(dir,image),new Uint8Array(await r.arrayBuffer()))}}}
  const url=SITE+'jogos/'+code+'/',title=`${g.title} · Jogos dos alunos Level Up`,desc=(g.description||`Jogo criado por ${g.author} no Laboratório da Level Up. Jogue no navegador, sem instalar nada.`).replace(/\s+/g,' ').trim().slice(0,200);
  await fs.writeFile(path.join(dir,'index.html'),`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title><meta name="description" content="${esc(desc)}">
<meta property="og:type" content="website"><meta property="og:site_name" content="Level Up Academy"><meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(g.title)} · criado por ${esc(g.author)}"><meta property="og:description" content="${esc(desc)}">
${image?`<meta property="og:image" content="${url}${image}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="${url}${image}">`:`<meta property="og:image" content="${SITE}logo.png">`}
<meta http-equiv="refresh" content="0;url=../../?jogos&amp;j=${g.id}"><script>location.replace("../../?jogos&j=${g.id}"+location.hash)</script></head>
<body><a href="../../?jogos&amp;j=${g.id}">Jogar ${esc(g.title)}</a></body></html>`);
 }
 // jogo que saiu do ar: a página sai junto
 for(const n of await fs.readdir(root,{withFileTypes:true}))if(n.isDirectory()&&!keep.has(n.name)&&/^[\w-]{1,80}$/.test(n.name))await fs.rm(path.join(root,n.name),{recursive:true,force:true});
 return all.length;
}
if(import.meta.url===pathToFileURL(process.argv[1]||'').href){const n=await run(process.argv[2]||'.');console.log(`Páginas de compartilhar: ${n} jogo(s).`)}
