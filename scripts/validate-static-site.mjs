import fs from "node:fs";
import path from "node:path";

const root=process.cwd();
const errors=[];
const required=[
  "index.html","fa/index.html","ar/index.html",
  "assets/home.css","assets/home.js",
  "assets/brand/rezmesh-mark.svg",
  "assets/hero/rezmesh-city-scene.svg",
  "assets/social/rezmesh-og-v2.png"
];

for(const rel of required){
  if(!fs.existsSync(path.join(root,rel))) errors.push(`missing required file: ${rel}`);
}

function walk(dir){
  return fs.readdirSync(dir,{withFileTypes:true}).flatMap(ent=>{
    if(ent.name===".git"||ent.name==="_site") return [];
    const abs=path.join(dir,ent.name);
    return ent.isDirectory()?walk(abs):[abs];
  });
}
const htmlFiles=walk(root).filter(f=>f.endsWith(".html"));

function localTarget(ref,file){
  if(!ref||ref.startsWith("#")||/^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(ref)) return null;
  const clean=ref.split("#")[0].split("?")[0];
  if(!clean) return null;
  let abs;
  if(clean.startsWith("/")) abs=path.join(root,clean.slice(1));
  else abs=path.resolve(path.dirname(file),clean);
  if(clean.endsWith("/")) abs=path.join(abs,"index.html");
  else if(!path.extname(abs) && fs.existsSync(abs) && fs.statSync(abs).isDirectory()) abs=path.join(abs,"index.html");
  return abs;
}

for(const file of htmlFiles){
  const rel=path.relative(root,file).replaceAll(path.sep,"/");
  const html=fs.readFileSync(file,"utf8");

  if(html.includes("rezmesh-og.png")) errors.push(`${rel}: obsolete social image reference`);
  if(!/rel=["']icon["'][^>]*rezmesh-mark\.svg|rezmesh-mark\.svg[^>]*rel=["']icon["']/i.test(html)){
    errors.push(`${rel}: canonical RezMesh favicon missing`);
  }

  const ids=[...html.matchAll(/\bid=["']([^"']+)["']/g)].map(m=>m[1]);
  const seen=new Set();
  for(const id of ids){
    if(seen.has(id)) errors.push(`${rel}: duplicate id "${id}"`);
    seen.add(id);
  }

  for(const m of html.matchAll(/<img\b[^>]*>/gi)){
    if(!/\balt=["'][^"']*["']/i.test(m[0])) errors.push(`${rel}: image missing alt attribute`);
  }

  for(const m of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)){
    const target=localTarget(m[1],file);
    if(target && !fs.existsSync(target)) errors.push(`${rel}: broken local reference ${m[1]}`);
  }
}

for(const rel of ["index.html","fa/index.html","ar/index.html"]){
  const html=fs.readFileSync(path.join(root,rel),"utf8");
  const checks=[
    [/<link[^>]+rel=["']canonical["']/i,"canonical"],
    [/hreflang=["']en["']/i,"hreflang en"],
    [/hreflang=["']fa["']/i,"hreflang fa"],
    [/hreflang=["']ar["']/i,"hreflang ar"],
    [/hreflang=["']x-default["']/i,"hreflang x-default"],
    [/id=["']motionToggle["']/i,"motion control"],
    [/class=["'][^"']*hero-v3/i,"Phase 3 hero"],
    [/class=["'][^"']*feature-strip/i,"Phase 4 feature strip"],
    [/class=["'][^"']*connect-story/i,"Phase 5 connected story"]
  ];
  for(const [re,label] of checks) if(!re.test(html)) errors.push(`${rel}: missing ${label}`);

  const cards=(html.match(/class=["'][^"']*feature-card/g)||[]).length;
  if(cards!==5) errors.push(`${rel}: expected 5 feature cards, found ${cards}`);
  const steps=(html.match(/data-story-step=/g)||[]).length;
  if(steps!==4) errors.push(`${rel}: expected 4 connected-story steps, found ${steps}`);
  if(/id=["']heroScene["']/.test(html)) errors.push(`${rel}: legacy heroScene still present`);
}

if(errors.length){
  console.error("Static site validation failed:");
  for(const e of errors) console.error(" - "+e);
  process.exit(1);
}

console.log(`Static site validation passed: ${htmlFiles.length} HTML files checked.`);
