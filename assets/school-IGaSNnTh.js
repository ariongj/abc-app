import{bp as w,cB as B,cC as I,cD as E,cE as G,b3 as A,cF as H}from"./content-ZXgsLMgz.js";const F=["lessons","stories","game","skill","experiment"],se={together:1e3,each:20},_=3*864e5,O=e=>typeof e=="string"&&F.includes(e);function R(e,t){if(!t.completed)return!1;switch(e.kind){case"lessons":return w.has(t.kind)&&(!e.ref||t.subject===e.ref);case"stories":return t.kind==="story";case"game":return t.kind==="game"&&t.refId===e.ref;case"skill":return w.has(t.kind)&&t.refId===e.ref;case"experiment":return t.kind==="experiment"&&t.refId===e.ref;default:return!1}}function U(e,t,a,i){const n=new Set,r=[];for(const d of[...t].sort((l,o)=>l.endedAt-o.endedAt))if(!(d.endedAt<a||d.endedAt>i||!R(e,d))){if(e.kind==="stories"){if(n.has(d.refId))continue;n.add(d.refId)}r.push(d.endedAt)}return r}const z=(e,t)=>e.each?Math.min(t,e.target):t,S={lessons:["mësim","mësime"],stories:["tregim","tregime"],game:["lojë e mbaruar","lojëra të mbaruara"],skill:["praktikë","praktika"],experiment:["eksperiment","eksperimente"]},k=(e,t)=>t===1?S[e][0]:S[e][1],K={math:"Matematike",alb:"Gjuhe shqipe",think:"Mendimi",sci:"për Njeriun dhe natyrën",eng:"Anglishteje",art:"Arti dhe muzike",soc:"për Shoqërinë dhe mjedisin",code:"Informatike",bio:"Biologjie",chem:"Kimie"},W=(e,t)=>K[e]??`nga „${t}"`,b=e=>e===1?"":` ${e} herë`;function ae(e,t){const a=e.target,i=e.each?"Secili":"Gjithë klasa";switch(e.kind){case"lessons":return`${i} kryen ${a} ${k("lessons",a)}${e.ref?" "+W(e.ref,t):""}`;case"stories":return`${i} lexon ${a} ${k("stories",a)}`;case"game":return`${i} e mbaron lojën „${t}"${b(a)}`;case"skill":return`${i} praktikon „${t}"${b(a)}`;case"experiment":return`${i} bën në shtëpi eksperimentin „${t}"${b(a)}`;default:return"Sfida e klasës"}}const J=(e,t)=>t<e.startsAt?"upcoming":t>e.endsAt?"ended":"active",u=(e,t=0)=>typeof e=="number"&&Number.isFinite(e)?e:t,g=(e,t=200)=>typeof e=="string"?e.slice(0,t):"";function ne(e){return Array.isArray(e)?e.filter(t=>!!t&&typeof t=="object"&&typeof t.id=="string"&&O(t.kind)).slice(0,12).map(t=>({id:g(t.id,64),childId:g(t.childId,64),classId:g(t.classId,64),className:g(t.className,60),teacherName:g(t.teacherName,80),kind:t.kind,ref:g(t.ref,64),refName:g(t.refName,120),title:g(t.title,200),target:Math.max(1,Math.round(u(t.target,1))),each:t.each===!0,startsAt:u(t.startsAt),endsAt:u(t.endsAt),goal:Math.max(0,Math.round(u(t.goal))),total:Math.max(0,Math.round(u(t.total))),mine:Math.max(0,Math.round(u(t.mine))),helpers:Math.max(0,Math.round(u(t.helpers))),students:Math.max(0,Math.round(u(t.students))),reachedAt:typeof t.reachedAt=="number"?t.reachedAt:null})):[]}function C(e){const t=e.target;switch(e.kind){case"game":return`ta mbarosh lojën${b(t)}`;case"skill":return t===1?"ta praktikosh një herë":`ta praktikosh${b(t)}`;case"experiment":return`ta bësh eksperimentin${b(t)}`;default:return`${t} ${k(e.kind,t)}`}}function re(e,t,a){const i=J(e,a),n=i==="upcoming"?0:U(e,t,e.startsAt,e.endsAt).length,r=Math.max(n,e.mine),d=Math.max(e.total,e.total-z(e,e.mine)+z(e,r)),l=e.goal,o=e.reachedAt!==null||l>0&&d>=l,p=e.helpers+(r>0&&e.mine===0?1:0),c=Math.max(0,Math.ceil((e.endsAt-a)/864e5)),m=e.each&&r>=e.target,f=e.each?m?`Pjesa jote u krye! Ti ndihmove me ${r}!`:r>0?`Ti ndihmove me ${r}! Pjesa jote: ${C(e)}.`:`Ndihmo edhe ti! Pjesa jote: ${C(e)}.`:r>0?`Ti ndihmove me ${r}!`:"Ndihmo edhe ti!";return{status:i,visible:i==="active"||i==="ended"&&o&&a-e.endsAt<_,goal:l,total:d,mine:r,partDone:m,reached:o,pct:l>0?Math.min(100,Math.round(d/l*100)):0,daysLeft:c,line:`${d} nga ${l} ${k(e.kind,l)}`,mineLine:f,when:o?"Klasa ia doli! 🎉":i==="upcoming"?"Fillon së shpejti":i==="ended"?"Sfida mbaroi":c<=1?"Dita e fundit!":`Edhe ${c} ditë`,helpers:p}}function oe(e,t,a="text/plain"){if(typeof document>"u")return;const i=new Blob([t],{type:`${a};charset=utf-8`}),n=URL.createObjectURL(i),r=document.createElement("a");r.href=n,r.download=e,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function de(e){if(typeof document>"u")return;const t=document.createElement("iframe");t.setAttribute("aria-hidden","true"),Object.assign(t.style,{position:"fixed",right:"0",bottom:"0",width:"0",height:"0",border:"0"}),document.body.appendChild(t);const a=t.contentDocument,i=t.contentWindow;if(!a||!i){t.remove();return}a.open(),a.write(e),a.close();const n=()=>{i.focus(),i.print(),setTimeout(()=>t.remove(),1500)};a.readyState==="complete"?setTimeout(n,150):t.onload=()=>setTimeout(n,150)}const s=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),x=`
@page{size:A4;margin:16mm}
*{box-sizing:border-box}
body{font:14px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif;color:#201e1d;margin:0}
h1{font:700 26px/1.2 Georgia,serif;margin:0 0 4px}
h2{font:700 16px/1.3 Georgia,serif;margin:22px 0 8px;color:#643312}
.brand{display:flex;align-items:center;gap:8px;color:#643312;font:700 14px Georgia,serif;margin-bottom:12px}
.brand i{width:10px;height:10px;border-radius:50%;background:#c67139;display:inline-block}
.sub{color:#645c50;margin:0 0 16px}
.muted{color:#645c50}`;function M(e){switch(e.type){case"match":return(e.pairs??[]).map(([t,a])=>`${t} ↔ ${a}`).join(", ");case"sort":return(e.cats??[]).map((t,a)=>`${t}: ${(e.items??[]).filter(i=>i[1]===a).map(i=>i[0]).join(", ")}`).join(" · ");case"shape":return{circle:"rreth",square:"katror",triangle:"trekëndësh"}[String(e.ans)]??String(e.ans);default:return String(e.ans)}}function N(e){switch(e.type){case"mc":case"color":return`<div class="opts">${(e.opts??[]).map(t=>`<span class="opt">○ ${s(t)}</span>`).join("")}</div>`;case"shape":return`<div class="opts">${(e.opts??[]).map(t=>`<span class="opt">○ ${s({circle:"rreth",square:"katror",triangle:"trekëndësh"}[t]??t)}</span>`).join("")}</div>`;case"num":case"line":return'<div class="blank">Përgjigjja: <span class="line"></span></div>';case"order":return`<div class="opts">${(e.words??[]).map(t=>`<span class="chip">${s(t)}</span>`).join("")}</div><div class="blank">Fjalia: <span class="line line--long"></span></div>`;case"sort":return`<div class="opts">${(e.items??[]).map(([t])=>`<span class="chip">${s(t)}</span>`).join("")}</div><div class="two">${(e.cats??[]).map(t=>`<div class="box"><b>${s(t)}</b></div>`).join("")}</div>`;case"match":return`<div class="two">${(e.pairs??[]).map(([t,a])=>`<div class="pair"><span>${s(t)}</span><span class="dots">${"●".repeat(Number(a))}</span></div>`).join("")}</div>`;default:return""}}function le(e){const t=e.exercises.slice(0,10),a=i=>i.objects?`<div class="apples">${"🍎".repeat(Math.min(10,i.objects))}</div>`:"";return`<!doctype html><html lang="sq"><head><meta charset="utf-8"><title>Fletë ushtrimesh · ${s(e.skillName)}</title>
<style>${x}
.head{display:flex;justify-content:space-between;align-items:flex-end;gap:12px;border-bottom:2px solid #c67139;padding-bottom:8px;margin-bottom:14px}
.name{font-size:13px;color:#645c50}.name span{display:inline-block;min-width:160px;border-bottom:1px solid #201e1d;margin-left:6px}
.q{break-inside:avoid;padding:10px 0 12px;border-bottom:1px dashed #e6dccb}
.q .n{display:inline-grid;place-items:center;width:26px;height:26px;border-radius:50%;background:#f3e6d3;color:#643312;font-weight:700;margin-right:8px}
.q .p{font-size:15px;font-weight:600}
.passage{background:#fbf6ee;border:1px solid #e6dccb;border-radius:8px;padding:8px 10px;margin:6px 0;font-style:italic}
.opts{display:flex;flex-wrap:wrap;gap:8px 18px;margin:8px 0 0 34px}
.opt{font-size:15px}.chip{border:1px solid #c9bfae;border-radius:999px;padding:2px 10px}
.blank{margin:10px 0 0 34px}.line{display:inline-block;width:120px;border-bottom:1.5px solid #201e1d;height:18px;vertical-align:bottom}.line--long{width:75%}
.two{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:8px 0 0 34px}
.box{min-height:56px;border:1.5px solid #c9bfae;border-radius:8px;padding:6px 8px}
.pair{display:flex;justify-content:space-between;border:1px solid #e6dccb;border-radius:8px;padding:6px 10px}.dots{letter-spacing:2px;color:#c67139}
.apples{font-size:22px;letter-spacing:4px;margin:6px 0 0 34px}
.key{page-break-before:always}.key li{margin:4px 0}
</style></head><body>
<div class="brand"><i></i>ABC · fletë ushtrimesh</div>
<div class="head"><div><h1>${s(e.skillName)}</h1><div class="sub">${s(e.subjectName)} · ${s(e.gradeLabel)} · ${s(e.date)}</div></div>
<div class="name">Emri:<span>${e.nick?s(e.nick):""}</span></div></div>
${t.map((i,n)=>`<div class="q"><div><span class="n">${n+1}</span><span class="p">${s(i.prompt)}</span></div>${i.passage?`<div class="passage">${s(i.passage)}</div>`:""}${a(i)}${N(i)}</div>`).join("")}
<p class="muted" style="margin-top:14px">Ndihmëz për prindin: nëse fëmija ngec, pyeteni „Çka të kërkon detyra?" para se ta shpjegoni. Përgjigjet janë në faqen tjetër.</p>
<div class="key"><div class="brand"><i></i>ABC · përgjigjet</div><h1>${s(e.skillName)}</h1><p class="sub">Për prindin. Pas çdo përgjigjeje është shpjegimi që jep Lira.</p>
<ol>${t.map(i=>`<li><b>${s(M(i))}</b> <span class="muted">— ${s(i.explain)}</span></li>`).join("")}</ol></div>
</body></html>`}function pe(e){return`<!doctype html><html lang="sq"><head><meta charset="utf-8"><title>Diplomë · ${s(e.nick)} · ${s(e.unitName)}</title>
<style>${x}
@page{size:A4 landscape;margin:12mm}
body{background:#fff}
.cert{border:10px double #c67139;border-radius:18px;padding:34px 48px;min-height:640px;display:flex;flex-direction:column;align-items:center;text-align:center;background:#fbf6ee}
.brand{justify-content:center;font-size:16px}
.title{font:700 44px/1.1 Georgia,serif;color:#643312;margin:18px 0 6px}
.for{font-size:16px;color:#645c50}
.nick{font:700 40px/1.2 Georgia,serif;margin:8px 0}
.what{font-size:19px;max-width:620px;margin:6px auto}
.what b{color:#643312}
.detail{margin:14px 0 0;font-size:15px;color:#645c50}
.stars{font-size:30px;letter-spacing:8px;color:#d6a83a;margin:16px 0}
.sign{display:flex;gap:80px;margin-top:auto;padding-top:26px;font-size:14px;color:#645c50}
.sign span{display:block;border-top:1px solid #201e1d;padding-top:6px;min-width:200px}
</style></head><body><div class="cert">
<div class="brand"><i></i>ABC</div>
<div class="title">Diplomë</div>
<div class="for">i jepet</div>
<div class="nick">${s(e.nick)}</div>
<div class="what">për përfundimin e njësisë <b>„${s(e.unitName)}"</b> (${s(e.region)}) në lëndën <b>${s(e.subjectName)}</b>, ${s(e.gradeLabel)}, bashkë me heroin ${s(e.heroName)}.</div>
<div class="detail">${s(e.detail)}</div>
<div class="stars">★ ★ ★</div>
<div class="sign"><span>${s(e.date)}</span><span>${s(e.parentName)}</span><span>Lira, rrëqebulli</span></div>
</div></body></html>`}function ce(e){return`<!doctype html><html lang="sq"><head><meta charset="utf-8"><title>Certifikatë · ${s(e.className)}</title>
<style>${x}
@page{size:A4 landscape;margin:12mm}
body{background:#fff}
.cert{border:10px double #557d34;border-radius:18px;padding:34px 48px;min-height:640px;display:flex;flex-direction:column;align-items:center;text-align:center;background:#f6f9ef}
.brand{justify-content:center;font-size:16px}
.title{font:700 42px/1.1 Georgia,serif;color:#3d5a24;margin:18px 0 6px}
.for{font-size:16px;color:#645c50}
.nick{font:700 46px/1.2 Georgia,serif;margin:8px 0 2px}
.grade{font-size:16px;color:#645c50}
.what{font-size:20px;max-width:640px;margin:14px auto 6px}
.what b{color:#3d5a24}
.detail{margin:8px 0 0;font-size:15px;color:#645c50}
.stars{font-size:30px;letter-spacing:8px;color:#d6a83a;margin:16px 0}
.sign{display:flex;gap:80px;margin-top:auto;padding-top:26px;font-size:14px;color:#645c50}
.sign span{display:block;border-top:1px solid #201e1d;padding-top:6px;min-width:200px}
</style></head><body><div class="cert">
<div class="brand"><i></i>ABC</div>
<div class="title">Certifikatë e klasës</div>
<div class="for">Sfida e klasës u arrit nga</div>
<div class="nick">${s(e.className)}</div>
<div class="grade">${s(e.gradeLabel)}${e.school?" · "+s(e.school):""}</div>
<div class="what">Të gjithë së bashku ia dolën: <b>„${s(e.title)}"</b></div>
<div class="detail">${s(e.line)} · ${s(e.dates)}</div>
<div class="stars">★ ★ ★</div>
<div class="sign"><span>${s(e.date)}</span><span>${s(e.teacherName)}</span><span>Lira, rrëqebulli</span></div>
</div></body></html>`}function me(e){const t=e.places.filter(i=>i.stamped).length,a=[["Kosova",e.places.filter(i=>i.region==="ks")],["Shqipëria",e.places.filter(i=>i.region==="al")]];return`<!doctype html><html lang="sq"><head><meta charset="utf-8"><title>Pasaporta e eksploruesit · ${s(e.nick)}</title>
<style>${x}
.head{display:flex;align-items:baseline;justify-content:space-between;gap:16px;border-bottom:3px double #c67139;padding-bottom:8px;margin-bottom:12px}
.count{font:700 18px Georgia,serif;color:#643312}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.stamp{border:2px dashed #c9bfae;border-radius:12px;padding:8px 10px;min-height:86px;color:#8a8070;page-break-inside:avoid}
.stamp.on{border-style:solid;border-color:var(--c);color:#201e1d;background:#fbf6ee}
.stamp b{display:block;font:700 14px Georgia,serif;color:var(--c,#645c50)}
.stamp i{font-style:normal;font-size:20px;margin-right:6px}
.stamp small{display:block;color:#645c50;font-size:11px;margin-bottom:4px}
.stamp p{margin:0;font-size:12px;line-height:1.35}
.foot{margin-top:14px;font-size:12px;color:#645c50;display:flex;justify-content:space-between}
</style></head><body>
<div class="brand"><i></i>ABC</div>
<div class="head"><div><h1>Pasaporta e eksploruesit</h1><p class="sub">${s(e.nick)} dhe ${s(e.heroName)} · ${s(e.date)}</p></div><div class="count">${t} nga ${e.places.length} vula</div></div>
${a.map(([i,n])=>`<h2>${i}</h2><div class="grid">${n.map(r=>`<div class="stamp${r.stamped?" on":""}" style="--c:${s(r.color)}"><b><i>${r.stamped?s(r.icon):"·"}</i>${s(r.name)}</b><small>${s(r.near)}</small><p>${r.stamped?s(r.fact):"Pa vulë ende — hape hartën në ABC."}</p></div>`).join("")}</div>`).join("")}
<div class="foot"><span>Çdo vulë: katër gjëra të zbuluara dhe tri pyetje të përgjigjura në hartën e ABC-së.</span><span>Lira, rrëqebulli</span></div>
</body></html>`}const T=`
.lab{border:2px solid #7e4f9c;border-radius:16px;padding:14px 18px}.lab h2{color:#7e4f9c;margin-top:0}
.adult{display:inline-block;background:#fbeccd;border-radius:999px;padding:2px 10px;font-weight:600}
.draw{height:150px;border:1.5px dashed #c9bfae;border-radius:12px;margin-top:12px;display:grid;place-items:center;color:#a19786}`;function D(e){return`<div class="lab"><h2>🧪 ${s(e.title)} · ${e.minutes} min</h2>
${e.adult?'<p><span class="adult">Me një të rritur pranë</span></p>':""}
<p><b>Të duhen:</b> ${e.needs.map(s).join(", ")}</p>
<ol>${e.steps.map(t=>`<li>${s(t)}</li>`).join("")}</ol>
<p><b>Shiko:</b> ${s(e.look)}</p>
<p class="muted"><b>Pse ndodh?</b> ${s(e.why)}</p>
<div class="draw">Vizato këtu çka pe</div></div>`}function he(e){return`<!doctype html><html lang="sq"><head><meta charset="utf-8"><title>Provo në shtëpi · ${s(e.experiment.title)}</title>
<style>${x}${T}
.name{font-size:13px;color:#645c50;margin:0 0 14px}.name span{display:inline-block;min-width:160px;border-bottom:1px solid #201e1d;margin-left:6px}
.foot{margin-top:16px;font-size:13px}
</style></head><body>
<div class="brand"><i></i>ABC · Provo në shtëpi</div>
<p class="name">Emri: <span>${e.nick?s(e.nick):""}</span> · ${s(e.gradeLabel)}</p>
${D(e.experiment)}
<p class="muted foot">Për të rriturin: para se të filloni, pyeteni „Çka mendon se do të ndodhë?". Pastaj le ta bëjë vetë sa më shumë, dhe lavdëroni pyetjet që bën, jo vetëm përgjigjen.</p>
</body></html>`}function ue(e){const t=e.worksheet?e.worksheet.exercises.slice(0,8):[],a='<span class="tick"></span>';return`<!doctype html><html lang="sq"><head><meta charset="utf-8"><title>Paketa e javës · ${s(e.nick||"ABC")}</title>
<style>${x}
.page{page-break-after:always}.page:last-child{page-break-after:auto}
.cover{border:3px solid #c67139;border-radius:18px;padding:18px 20px;margin-bottom:16px;background:#fbf6ee}
.cover h1{font-size:30px}
.tips{display:grid;gap:8px}
.tip{display:grid;grid-template-columns:26px 44px 1fr;gap:10px;align-items:start;border:1px solid #e6dccb;border-radius:12px;padding:8px 10px;break-inside:avoid}
.tip .e{font-size:28px;line-height:1}.tip b{display:block;font-size:15px}.tip .d{font-size:12px;color:#645c50;text-transform:uppercase;letter-spacing:.04em}
.tick{display:inline-block;width:20px;height:20px;border:2px solid #c67139;border-radius:6px;margin-top:4px}
.q{break-inside:avoid;padding:9px 0 11px;border-bottom:1px dashed #e6dccb}
.q .n{display:inline-grid;place-items:center;width:26px;height:26px;border-radius:50%;background:#f3e6d3;color:#643312;font-weight:700;margin-right:8px}
.q .p{font-size:15px;font-weight:600}
.opts{display:flex;flex-wrap:wrap;gap:8px 18px;margin:8px 0 0 34px}.opt{font-size:15px}.chip{border:1px solid #c9bfae;border-radius:999px;padding:2px 10px}
.blank{margin:10px 0 0 34px}.line{display:inline-block;width:120px;border-bottom:1.5px solid #201e1d;height:18px;vertical-align:bottom}.line--long{width:75%}
.two{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:8px 0 0 34px}.box{min-height:56px;border:1.5px solid #c9bfae;border-radius:8px;padding:6px 8px}
.pair{display:flex;justify-content:space-between;border:1px solid #e6dccb;border-radius:8px;padding:6px 10px}.dots{letter-spacing:2px;color:#c67139}
${T}
.story p{font-size:17px;line-height:1.6;margin:0 0 10px}
</style></head><body>
<div class="page">
<div class="brand"><i></i>ABC · Paketa e javës</div>
<div class="cover"><h1>Java e ${s(e.nick||"fëmijës")}</h1><p class="sub">${s(e.gradeLabel)} · ${s(e.range)}</p>
<p>Një javë pa ekran: çdo ditë një këshillë, një fletë ushtrimesh, një provë në shtëpi dhe një tregim për ta lexuar bashkë. Vendos një ✓ sa herë e kryen!</p></div>
<h2>Shtatë këshilla, një për çdo ditë</h2>
<div class="tips">${e.tips.map(i=>`<div class="tip">${a}<span class="e">${s(i.emoji)}</span><div><span class="d">${s(i.day)}</span><b>${s(i.title)}</b>${s(i.text)}</div></div>`).join("")}</div>
</div>
${e.worksheet?`<div class="page"><div class="brand"><i></i>ABC · fletë ushtrimesh</div><h1>${s(e.worksheet.skillName)}</h1><p class="sub">${s(e.worksheet.subjectName)} · ${s(e.gradeLabel)}</p>
${t.map((i,n)=>`<div class="q"><div><span class="n">${n+1}</span><span class="p">${s(i.prompt)}</span></div>${i.passage?`<div class="muted" style="margin:6px 0 0 34px;font-style:italic">${s(i.passage)}</div>`:""}${N(i)}</div>`).join("")}</div>`:""}
${e.experiment?`<div class="page"><div class="brand"><i></i>ABC · Provo në shtëpi</div>${D(e.experiment)}</div>`:""}
${e.story?`<div class="page story"><div class="brand"><i></i>ABC · tregimi i javës</div><h1>${s(e.story.title)}</h1><p class="sub">Lexojeni bashkë, me zë.</p>
${e.story.pages.map(i=>`<p>${s(i)}</p>`).join("")}
<h2>${s(e.story.q.prompt)}</h2><div class="opts" style="margin-left:0">${e.story.q.opts.map(i=>`<span class="opt"><span class="chip">${s(i)}</span></span>`).join("")}</div>
<div class="draw">Vizato pjesën që të pëlqeu më shumë</div></div>`:""}
<div class="page"><div class="brand"><i></i>ABC · për prindin</div><h1>Përgjigjet</h1>
${t.length?`<h2>${s(e.worksheet.skillName)}</h2><ol>${t.map(i=>`<li><b>${s(M(i))}</b> <span class="muted">— ${s(i.explain)}</span></li>`).join("")}</ol>`:""}
${e.story?`<h2>Tregimi</h2><p>${s(e.story.q.prompt)} <b>${s(e.story.q.ans)}</b></p>`:""}
<p class="muted">Pyeteni fëmijën „Si e gjete?" para se t'ia tregoni përgjigjen. Lavdëroni përpjekjen, jo vetëm përgjigjen e saktë.</p></div>
</body></html>`}const V={math:"Matematikë",alb:"Gjuhë shqipe",sci:"Njeriu dhe natyra",soc:"Shoqëria dhe mjedisi"},Y={math:"math",alb:"alb",sci:"sci",soc:"soc"},Z=new Set(["dhe","me","në","ne","nga","për","per","të","te","e","i","a","së","se","sa","si","që","qe","një","nje","deri","mbi","nën","nen","apo","ose","ku","kur","ky","kjo","im","ime","detyra","ushtrime","ushtrim","provo","veten","vlerësojmë","vlerësim","përsëritje","kontrollues","kontrolluese"]);function q(e){return e.toLowerCase().replace(/[^a-zçë0-9\s]/g," ").split(/\s+/).filter(t=>t&&!Z.has(t)).map(t=>/^\d+$/.test(t)?t:t.slice(0,5)).filter(t=>t.length>=2)}const v=e=>e.toLowerCase().replace(/[^a-zçë0-9\s]/g," ").replace(/\s+/g," ").trim();function X(e,t){const a=Y[e.s];if(!a)return;const i=v(e.t);let n;for(const o of A)if(!(o.g!==t||o.sid!==a||o.cp))for(const p of H[o.id]??[])i.includes(p)&&(!n||p.length>n.len)&&(n={id:o.id,len:p.length});if(n)return n.id;const r=q(e.t),d=new Set(r);if(!d.size)return;let l;for(const o of A){if(o.g!==t||o.sid!==a||o.cp)continue;const p=q(o.name);if(!p.length||p.some(f=>!d.has(f))||!(p.length>1?p.length/r.length>=.3:r[0]===p[0]))continue;const m=p.length*2+(r[0]===p[0]?1:0);(!l||m>l.score)&&(l={id:o.id,score:m})}return l==null?void 0:l.id}function ge(e,t){if(e.s==="alb")return G[t]}function fe(e){const t=v(e);return/përsërit|përsëritje|vlerësojmë|vlerësim|ushtrim kontrollues|ushtrime kontrolluese|provoj veten|provojmë veten|detyra sfiduese|zbavit|test/.test(t)}const Q=(e,t)=>(" "+e).includes(" "+t);function j(e,t){return e.find(a=>a.words.some(i=>Q(t,i)))}function be(e){var t;return(t=j(I,v(e.t)))==null?void 0:t.game}function xe(e){var t;return(t=j(E,v(e.t)))==null?void 0:t.story}function ve(e){var t;return(t=j(B,v(e.t)))==null?void 0:t.place}const L=["DH","GJ","LL","NJ","RR","SH","TH","XH","ZH"];function ke(e){const t=/[Ss]hkronj[a-zëç]*\s*(?:(?:e|s[ëe])\s+(?:shtypit|dor[ëe]s|m[ëe]suar|madhe)\s*)?[:,–-]?\s*([A-ZÇË][a-zëç]?)(?=[\s,;.]|$)/.exec(e);if(!t){const i=/(?:shkrimi|leximi)[^A-ZÇË]{0,12}([A-ZÇË][a-zëç]?)\s*,\s*([a-zëç]{1,2})/.exec(e);if(i&&i[1].toLowerCase().startsWith(i[2][0])){const n=i[1].toUpperCase();return L.includes(n)?n:n[0]}return}const a=t[1].toUpperCase();return L.includes(a)?a:a[0]}const y=e=>{const t=new Date(e),a=i=>String(i).padStart(2,"0");return`${t.getFullYear()}-${a(t.getMonth()+1)}-${a(t.getDate())}`};function P(e){const t=new Date(e);return t.setHours(12,0,0,0),t.setDate(t.getDate()-(t.getDay()+6)%7),t.getTime()}function ee(e){const t=new Date(e),a=t.getMonth()>=7?t.getFullYear():t.getFullYear()-1,i=new Date(a,8,1,12,0,0,0);for(;i.getDay()!==1;)i.setDate(i.getDate()+1);return i.getTime()}function $e(e,t,a){const i=e.filter(c=>c.g===t).sort((c,m)=>c.week-m.week);if(!i.length)return null;const n=i.length,r=y(a),d=i.find(c=>c.from<=r&&r<=c.to);if(d)return{week:d,byDate:!0,onBreak:!1,total:n};const l=ee(a),o=Math.floor((P(a)-l)/(7*864e5))+1;return o<1?{week:i[0],byDate:!1,onBreak:!0,total:n}:o>n?{week:i[n-1],byDate:!1,onBreak:!0,total:n}:{week:i.find(c=>c.week===o)??i[Math.min(o,n)-1],byDate:!1,onBreak:!1,total:n}}function ye(e,t,a,i){if(t.byDate)return{from:e.from,to:e.to};const n=864e5,r=Math.round((Date.parse(e.to)-Date.parse(e.from))/n),d=P(i)+a*7*n;return{from:y(d),to:y(d+(r>0&&r<14?r:4)*n)}}function je(e,t,a,i){var f;const n=(f=i.p)==null?void 0:f[0];if(!n)return;const r=i.w?"wp":"base",d=e.filter(h=>h.g===t&&h.s===i.s),l=d.filter(h=>h.kind===r),o=l.length?l:d,p=a<=20?"A":"B",c=o.filter(h=>h.vol===p||h.vol==="");if(!c.length)return;let m;for(const h of c)for(const $ of h.lessons)$.p<=n&&(!m||$.p>m.p)&&(m=$);return m&&n-m.p<=1?m:void 0}function we(e,t=["math","alb","sci","soc"]){return t.map(a=>({subject:a,name:V[a],topics:e.topics.filter(i=>i.s===a).map(i=>({...i,skillId:X(i,e.g)}))})).filter(a=>a.topics.length>0)}function te(e){var t;return(t=e.p)!=null&&t.length?e.p.length>4?`${e.p[0]}–${e.p[e.p.length-1]}`:e.p.join(", "):""}function Ae(e){const t=te(e);return t?e.w?`fletore pune fq. ${t}`:`fq. ${t}`:""}function ze(e){const t=e.k??"";return t.includes("v")?"Vlerësim":t.includes("zh")?t.includes("p")||t.includes("u")?"Mësim i ri · ushtrime":"Mësim i ri":t.includes("p")||t.includes("u")?"Ushtrime":""}export{se as M,pe as a,me as b,re as c,oe as d,he as e,ue as f,$e as g,we as h,ye as i,te as j,ze as k,je as l,ve as m,fe as n,ke as o,de as p,be as q,xe as r,ne as s,ge as t,Ae as u,ae as v,le as w,C as x,k as y,ce as z};
