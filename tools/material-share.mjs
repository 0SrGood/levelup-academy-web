// Prévia HTML estática: funciona para robôs de mensagens que não executam JavaScript.
import fs from 'node:fs/promises';import path from 'node:path';import {pathToFileURL} from 'node:url';import {createHash} from 'node:crypto';
const API="https://fguqnhjvfvneipaqnoce.supabase.co/functions/v1/academy",KEY="sb_publishable_UCl41rKzbb90quPWEfyfng_Y4LPvMXn",SITE='https://0srgood.github.io/levelup-academy-web/';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function previewHtml(material,image,site=SITE){
 const url=new URL('materiais/'+material.id+'/',site).href,target='../../?material='+encodeURIComponent(material.id);
 const title=String(material.title),description=String(material.description);
 return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)} · Level Up Academy</title><meta name="description" content="${esc(description)}">
<link rel="canonical" href="${esc(url)}"><meta property="og:type" content="article"><meta property="og:site_name" content="Level Up Academy"><meta property="og:locale" content="pt_BR"><meta property="og:url" content="${esc(url)}">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:image" content="${esc(image)}"><meta property="og:image:alt" content="${esc('Imagem de referência: '+title)}"><meta property="og:image:type" content="image/jpeg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(description)}"><meta name="twitter:image" content="${esc(image)}">
<meta http-equiv="refresh" content="0;url=${esc(target)}"><script>location.replace(${JSON.stringify(target)})</script></head><body><h1>${esc(title)}</h1><p>${esc(description)}</p><a href="${esc(target)}">Entrar para abrir o material</a></body></html>`;
}
export async function run(site,key=KEY,api=API){
 const response=await fetch(api+'/platform',{method:'POST',headers:{apikey:key,Authorization:'Bearer '+key,Origin:'https://0srgood.github.io','Content-Type':'application/json'},body:JSON.stringify({action:'material-previews'})});
 if(!response.ok)throw Error('Prévias dos materiais: '+response.status);const {materials}=await response.json();if(!Array.isArray(materials))throw Error('Catálogo de prévias inválido');
 const root=path.join(site,'materiais');await fs.mkdir(root,{recursive:true});let total=0;
 for(const material of materials){
  if(!/^[a-zA-Z0-9_-]{1,100}$/.test(material.id))continue;
  const dir=path.join(root,material.id);await fs.mkdir(dir,{recursive:true});let bytes;
  if(/^\.\/[a-z0-9-]+\.(webp|png|jpe?g)$/i.test(material.image))bytes=new Uint8Array(await fs.readFile(path.join(site,material.image.slice(2))));
  else if(/^https:\/\//.test(material.image)){
   // Capas enviadas pela equipe: copia somente a capa publicada, sem disponibilizar a aula.
   const result=await fetch(material.image);if(!result.ok)throw Error('Capa indisponível: '+material.id);
   const mime=(result.headers.get('content-type')||'').split(';')[0],ext={'image/webp':'webp','image/png':'png','image/jpeg':'jpg','image/gif':'gif'}[mime];if(!ext)throw Error('Formato inválido de capa');
   bytes=new Uint8Array(await result.arrayBuffer());if(bytes.length>8_000_000)throw Error('Capa muito grande');
  }else throw Error('Capa inválida: '+material.id);
  const name='capa-'+createHash('sha256').update(bytes).digest('hex').slice(0,16)+'.jpg';
  try{await fs.access(path.join(dir,name))}catch{const {default:sharp}=await import('sharp');await sharp(bytes).rotate().resize(1200,630,{fit:'contain',background:'#f9f7ef'}).flatten({background:'#f9f7ef'}).jpeg({quality:88}).toFile(path.join(dir,name));}
  const image=new URL('materiais/'+material.id+'/'+name,SITE).href;
  await fs.writeFile(path.join(dir,'index.html'),previewHtml(material,image));total++;
 }
 const keep=new Set(materials.map(m=>m.id));
 // Conteúdo despublicado deixa de anunciar título, descrição e imagem em novos acessos.
 for(const entry of await fs.readdir(root,{withFileTypes:true}))if(entry.isDirectory()&&!keep.has(entry.name)&&/^[a-zA-Z0-9_-]{1,100}$/.test(entry.name)){
  await fs.writeFile(path.join(root,entry.name,'index.html'),'<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="robots" content="noindex"><title>Material indisponível · Level Up Academy</title><p>Este material não está disponível.</p></html>');
 }
 return total;
}
if(import.meta.url===pathToFileURL(process.argv[1]||'').href)console.log('Prévias de materiais: '+await run(process.argv[2]||'.'));
