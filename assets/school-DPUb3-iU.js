import{D as S,a as u,b as q,d as g}from"./io-CyRCAKaK.js";import{cw as C,cx as L,cy as N,cz as P,b1 as y,cA as T}from"./content-CyUOfMKn.js";const s=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),f=`
@page{size:A4;margin:16mm}
*{box-sizing:border-box}
body{font:14px/1.5 ${S};color:#111A2E;margin:0}
h1{font:700 26px/1.2 ${u};margin:0 0 4px}
h2{font:700 16px/1.3 ${u};margin:22px 0 8px;color:#111A2E}
${q}
.sub{color:#4A5468;margin:0 0 16px}
.muted{color:#4A5468}`;function w(e){switch(e.type){case"match":return(e.pairs??[]).map(([t,a])=>`${t} ↔ ${a}`).join(", ");case"sort":return(e.cats??[]).map((t,a)=>`${t}: ${(e.items??[]).filter(i=>i[1]===a).map(i=>i[0]).join(", ")}`).join(" · ");case"shape":return{circle:"rreth",square:"katror",triangle:"trekëndësh"}[String(e.ans)]??String(e.ans);default:return String(e.ans)}}function E(e){switch(e.type){case"mc":case"color":return`<div class="opts">${(e.opts??[]).map(t=>`<span class="opt">○ ${s(t)}</span>`).join("")}</div>`;case"shape":return`<div class="opts">${(e.opts??[]).map(t=>`<span class="opt">○ ${s({circle:"rreth",square:"katror",triangle:"trekëndësh"}[t]??t)}</span>`).join("")}</div>`;case"num":case"line":return'<div class="blank">Përgjigjja: <span class="line"></span></div>';case"order":return`<div class="opts">${(e.words??[]).map(t=>`<span class="chip">${s(t)}</span>`).join("")}</div><div class="blank">Fjalia: <span class="line line--long"></span></div>`;case"sort":return`<div class="opts">${(e.items??[]).map(([t])=>`<span class="chip">${s(t)}</span>`).join("")}</div><div class="two">${(e.cats??[]).map(t=>`<div class="box"><b>${s(t)}</b></div>`).join("")}</div>`;case"match":return`<div class="two">${(e.pairs??[]).map(([t,a])=>`<div class="pair"><span>${s(t)}</span><span class="dots">${"●".repeat(Number(a))}</span></div>`).join("")}</div>`;default:return""}}function G(e){const t=e.exercises.slice(0,10),a=i=>i.objects?`<div class="apples">${"🍎".repeat(Math.min(10,i.objects))}</div>`:"";return`<!doctype html><html lang="sq"><head><meta charset="utf-8"><title>Fletë ushtrimesh · ${s(e.skillName)}</title>
<style>${f}
.head{display:flex;justify-content:space-between;align-items:flex-end;gap:12px;border-bottom:2px solid #FFA447;padding-bottom:8px;margin-bottom:14px}
.name{font-size:13px;color:#4A5468}.name span{display:inline-block;min-width:160px;border-bottom:1px solid #111A2E;margin-left:6px}
.q{break-inside:avoid;padding:10px 0 12px;border-bottom:1px dashed #E3E8EF}
.q .n{display:inline-grid;place-items:center;width:26px;height:26px;border-radius:50%;background:#FFF1E0;color:#111A2E;font-weight:700;margin-right:8px}
.q .p{font-size:15px;font-weight:600}
.passage{background:#F5F7FA;border:1px solid #E3E8EF;border-radius:8px;padding:8px 10px;margin:6px 0;font-style:italic}
.opts{display:flex;flex-wrap:wrap;gap:8px 18px;margin:8px 0 0 34px}
.opt{font-size:15px}.chip{border:1px solid #C9D3E3;border-radius:999px;padding:2px 10px}
.blank{margin:10px 0 0 34px}.line{display:inline-block;width:120px;border-bottom:1.5px solid #111A2E;height:18px;vertical-align:bottom}.line--long{width:75%}
.two{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:8px 0 0 34px}
.box{min-height:56px;border:1.5px solid #C9D3E3;border-radius:8px;padding:6px 8px}
.pair{display:flex;justify-content:space-between;border:1px solid #E3E8EF;border-radius:8px;padding:6px 10px}.dots{letter-spacing:2px;color:#FFA447}
.apples{font-size:22px;letter-spacing:4px;margin:6px 0 0 34px}
.key{page-break-before:always}.key li{margin:4px 0}
</style></head><body>
${g("fletë ushtrimesh")}
<div class="head"><div><h1>${s(e.skillName)}</h1><div class="sub">${s(e.subjectName)} · ${s(e.gradeLabel)} · ${s(e.date)}</div></div>
<div class="name">Emri:<span>${e.nick?s(e.nick):""}</span></div></div>
${t.map((i,n)=>`<div class="q"><div><span class="n">${n+1}</span><span class="p">${s(i.prompt)}</span></div>${i.passage?`<div class="passage">${s(i.passage)}</div>`:""}${a(i)}${E(i)}</div>`).join("")}
<p class="muted" style="margin-top:14px">Ndihmëz për prindin: nëse fëmija ngec, pyeteni „Çka të kërkon detyra?" para se ta shpjegoni. Përgjigjet janë në faqen tjetër.</p>
<div class="key">${g("përgjigjet")}<h1>${s(e.skillName)}</h1><p class="sub">Për prindin. Pas çdo përgjigjeje është shpjegimi që jep Lira.</p>
<ol>${t.map(i=>`<li><b>${s(w(i))}</b> <span class="muted">— ${s(i.explain)}</span></li>`).join("")}</ol></div>
</body></html>`}function J(e){return`<!doctype html><html lang="sq"><head><meta charset="utf-8"><title>Diplomë · ${s(e.nick)} · ${s(e.unitName)}</title>
<style>${f}
@page{size:A4 landscape;margin:12mm}
body{background:#fff}
.cert{border:10px double #A8DC31;border-radius:18px;padding:34px 48px;min-height:640px;display:flex;flex-direction:column;align-items:center;text-align:center;background:#FFF6EA}
.brand{justify-content:center;font-size:16px}
.title{font:700 44px/1.1 ${u};color:#111A2E;margin:18px 0 6px}
.for{font-size:16px;color:#4A5468}
.nick{font:700 40px/1.2 ${u};margin:8px 0}
.what{font-size:19px;max-width:620px;margin:6px auto}
.what b{color:#111A2E}
.detail{margin:14px 0 0;font-size:15px;color:#4A5468}
.stars{font-size:30px;letter-spacing:8px;color:#d6a83a;margin:16px 0}
.sign{display:flex;gap:80px;margin-top:auto;padding-top:26px;font-size:14px;color:#4A5468}
.sign span{display:block;border-top:1px solid #111A2E;padding-top:6px;min-width:200px}
</style></head><body><div class="cert">
${g()}
<div class="title">Diplomë</div>
<div class="for">i jepet</div>
<div class="nick">${s(e.nick)}</div>
<div class="what">për përfundimin e njësisë <b>„${s(e.unitName)}"</b> (${s(e.region)}) në lëndën <b>${s(e.subjectName)}</b>, ${s(e.gradeLabel)}, bashkë me heroin ${s(e.heroName)}.</div>
<div class="detail">${s(e.detail)}</div>
<div class="stars">★ ★ ★</div>
<div class="sign"><span>${s(e.date)}</span><span>${s(e.parentName)}</span><span>Lira, rrëqebulli</span></div>
</div></body></html>`}function U(e){return`<!doctype html><html lang="sq"><head><meta charset="utf-8"><title>Certifikatë · ${s(e.className)}</title>
<style>${f}
@page{size:A4 landscape;margin:12mm}
body{background:#fff}
.cert{border:10px double #A8DC31;border-radius:18px;padding:34px 48px;min-height:640px;display:flex;flex-direction:column;align-items:center;text-align:center;background:#F0F9DC}
.brand{justify-content:center;font-size:16px}
.title{font:700 42px/1.1 ${u};color:#4A6B00;margin:18px 0 6px}
.for{font-size:16px;color:#4A5468}
.nick{font:700 46px/1.2 ${u};margin:8px 0 2px}
.grade{font-size:16px;color:#4A5468}
.what{font-size:20px;max-width:640px;margin:14px auto 6px}
.what b{color:#4A6B00}
.detail{margin:8px 0 0;font-size:15px;color:#4A5468}
.stars{font-size:30px;letter-spacing:8px;color:#d6a83a;margin:16px 0}
.sign{display:flex;gap:80px;margin-top:auto;padding-top:26px;font-size:14px;color:#4A5468}
.sign span{display:block;border-top:1px solid #111A2E;padding-top:6px;min-width:200px}
</style></head><body><div class="cert">
${g()}
<div class="title">Certifikatë e klasës</div>
<div class="for">Sfida e klasës u arrit nga</div>
<div class="nick">${s(e.className)}</div>
<div class="grade">${s(e.gradeLabel)}${e.school?" · "+s(e.school):""}</div>
<div class="what">Të gjithë së bashku ia dolën: <b>„${s(e.title)}"</b></div>
<div class="detail">${s(e.line)} · ${s(e.dates)}</div>
<div class="stars">★ ★ ★</div>
<div class="sign"><span>${s(e.date)}</span><span>${s(e.teacherName)}</span><span>Lira, rrëqebulli</span></div>
</div></body></html>`}function V(e){const t=e.places.filter(i=>i.stamped).length,a=[["Kosova",e.places.filter(i=>i.region==="ks")],["Shqipëria",e.places.filter(i=>i.region==="al")]];return`<!doctype html><html lang="sq"><head><meta charset="utf-8"><title>Pasaporta e eksploruesit · ${s(e.nick)}</title>
<style>${f}
.head{display:flex;align-items:baseline;justify-content:space-between;gap:16px;border-bottom:3px double #FFA447;padding-bottom:8px;margin-bottom:12px}
.count{font:700 18px ${u};color:#111A2E}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.stamp{border:2px dashed #C9D3E3;border-radius:12px;padding:8px 10px;min-height:86px;color:#66728A;page-break-inside:avoid}
.stamp.on{border-style:solid;border-color:var(--c);color:#111A2E;background:#F5F7FA}
.stamp b{display:block;font:700 14px ${u};color:var(--c,#4A5468)}
.stamp i{font-style:normal;font-size:20px;margin-right:6px}
.stamp small{display:block;color:#4A5468;font-size:11px;margin-bottom:4px}
.stamp p{margin:0;font-size:12px;line-height:1.35}
.foot{margin-top:14px;font-size:12px;color:#4A5468;display:flex;justify-content:space-between}
</style></head><body>
${g()}
<div class="head"><div><h1>Pasaporta e eksploruesit</h1><p class="sub">${s(e.nick)} dhe ${s(e.heroName)} · ${s(e.date)}</p></div><div class="count">${t} nga ${e.places.length} vula</div></div>
${a.map(([i,n])=>`<h2>${i}</h2><div class="grid">${n.map(r=>`<div class="stamp${r.stamped?" on":""}" style="--c:${s(r.color)}"><b><i>${r.stamped?s(r.icon):"·"}</i>${s(r.name)}</b><small>${s(r.near)}</small><p>${r.stamped?s(r.fact):"Pa vulë ende — hape hartën në ABC."}</p></div>`).join("")}</div>`).join("")}
<div class="foot"><span>Çdo vulë: katër gjëra të zbuluara dhe tri pyetje të përgjigjura në hartën e ABC-së.</span><span>Lira, rrëqebulli</span></div>
</body></html>`}const F=`
.lab{border:2px solid #7134A8;border-radius:16px;padding:14px 18px}.lab h2{color:#7134A8;margin-top:0}
.adult{display:inline-block;background:#FFF1E0;border-radius:999px;padding:2px 10px;font-weight:600}
.draw{height:150px;border:1.5px dashed #C9D3E3;border-radius:12px;margin-top:12px;display:grid;place-items:center;color:#8E99AB}`;function z(e){return`<div class="lab"><h2>🧪 ${s(e.title)} · ${e.minutes} min</h2>
${e.adult?'<p><span class="adult">Me një të rritur pranë</span></p>':""}
<p><b>Të duhen:</b> ${e.needs.map(s).join(", ")}</p>
<ol>${e.steps.map(t=>`<li>${s(t)}</li>`).join("")}</ol>
<p><b>Shiko:</b> ${s(e.look)}</p>
<p class="muted"><b>Pse ndodh?</b> ${s(e.why)}</p>
<div class="draw">Vizato këtu çka pe</div></div>`}function Y(e){return`<!doctype html><html lang="sq"><head><meta charset="utf-8"><title>Provo në shtëpi · ${s(e.experiment.title)}</title>
<style>${f}${F}
.name{font-size:13px;color:#4A5468;margin:0 0 14px}.name span{display:inline-block;min-width:160px;border-bottom:1px solid #111A2E;margin-left:6px}
.foot{margin-top:16px;font-size:13px}
</style></head><body>
${g("Provo në shtëpi")}
<p class="name">Emri: <span>${e.nick?s(e.nick):""}</span> · ${s(e.gradeLabel)}</p>
${z(e.experiment)}
<p class="muted foot">Për të rriturin: para se të filloni, pyeteni „Çka mendon se do të ndodhë?". Pastaj le ta bëjë vetë sa më shumë, dhe lavdëroni pyetjet që bën, jo vetëm përgjigjen.</p>
</body></html>`}function Z(e){const t=e.worksheet?e.worksheet.exercises.slice(0,8):[],a='<span class="tick"></span>';return`<!doctype html><html lang="sq"><head><meta charset="utf-8"><title>Paketa e javës · ${s(e.nick||"ABC")}</title>
<style>${f}
.page{page-break-after:always}.page:last-child{page-break-after:auto}
.cover{border:3px solid #FFA447;border-radius:18px;padding:18px 20px;margin-bottom:16px;background:#F5F7FA}
.cover h1{font-size:30px}
.tips{display:grid;gap:8px}
.tip{display:grid;grid-template-columns:26px 44px 1fr;gap:10px;align-items:start;border:1px solid #E3E8EF;border-radius:12px;padding:8px 10px;break-inside:avoid}
.tip .e{font-size:28px;line-height:1}.tip b{display:block;font-size:15px}.tip .d{font-size:12px;color:#4A5468;text-transform:uppercase;letter-spacing:.04em}
.tick{display:inline-block;width:20px;height:20px;border:2px solid #FFA447;border-radius:6px;margin-top:4px}
.q{break-inside:avoid;padding:9px 0 11px;border-bottom:1px dashed #E3E8EF}
.q .n{display:inline-grid;place-items:center;width:26px;height:26px;border-radius:50%;background:#FFF1E0;color:#111A2E;font-weight:700;margin-right:8px}
.q .p{font-size:15px;font-weight:600}
.opts{display:flex;flex-wrap:wrap;gap:8px 18px;margin:8px 0 0 34px}.opt{font-size:15px}.chip{border:1px solid #C9D3E3;border-radius:999px;padding:2px 10px}
.blank{margin:10px 0 0 34px}.line{display:inline-block;width:120px;border-bottom:1.5px solid #111A2E;height:18px;vertical-align:bottom}.line--long{width:75%}
.two{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:8px 0 0 34px}.box{min-height:56px;border:1.5px solid #C9D3E3;border-radius:8px;padding:6px 8px}
.pair{display:flex;justify-content:space-between;border:1px solid #E3E8EF;border-radius:8px;padding:6px 10px}.dots{letter-spacing:2px;color:#FFA447}
${F}
.story p{font-size:17px;line-height:1.6;margin:0 0 10px}
</style></head><body>
<div class="page">
${g("Paketa e javës")}
<div class="cover"><h1>Java e ${s(e.nick||"fëmijës")}</h1><p class="sub">${s(e.gradeLabel)} · ${s(e.range)}</p>
<p>Një javë pa ekran: çdo ditë një këshillë, një fletë ushtrimesh, një provë në shtëpi dhe një tregim për ta lexuar bashkë. Vendos një ✓ sa herë e kryen!</p></div>
<h2>Shtatë këshilla, një për çdo ditë</h2>
<div class="tips">${e.tips.map(i=>`<div class="tip">${a}<span class="e">${s(i.emoji)}</span><div><span class="d">${s(i.day)}</span><b>${s(i.title)}</b>${s(i.text)}</div></div>`).join("")}</div>
</div>
${e.worksheet?`<div class="page">${g("fletë ushtrimesh")}<h1>${s(e.worksheet.skillName)}</h1><p class="sub">${s(e.worksheet.subjectName)} · ${s(e.gradeLabel)}</p>
${t.map((i,n)=>`<div class="q"><div><span class="n">${n+1}</span><span class="p">${s(i.prompt)}</span></div>${i.passage?`<div class="muted" style="margin:6px 0 0 34px;font-style:italic">${s(i.passage)}</div>`:""}${E(i)}</div>`).join("")}</div>`:""}
${e.experiment?`<div class="page">${g("Provo në shtëpi")}${z(e.experiment)}</div>`:""}
${e.story?`<div class="page story">${g("tregimi i javës")}<h1>${s(e.story.title)}</h1><p class="sub">Lexojeni bashkë, me zë.</p>
${e.story.pages.map(i=>`<p>${s(i)}</p>`).join("")}
<h2>${s(e.story.q.prompt)}</h2><div class="opts" style="margin-left:0">${e.story.q.opts.map(i=>`<span class="opt"><span class="chip">${s(i)}</span></span>`).join("")}</div>
<div class="draw">Vizato pjesën që të pëlqeu më shumë</div></div>`:""}
<div class="page">${g("për prindin")}<h1>Përgjigjet</h1>
${t.length?`<h2>${s(e.worksheet.skillName)}</h2><ol>${t.map(i=>`<li><b>${s(w(i))}</b> <span class="muted">— ${s(i.explain)}</span></li>`).join("")}</ol>`:""}
${e.story?`<h2>Tregimi</h2><p>${s(e.story.q.prompt)} <b>${s(e.story.q.ans)}</b></p>`:""}
<p class="muted">Pyeteni fëmijën „Si e gjete?" para se t'ia tregoni përgjigjen. Lavdëroni përpjekjen, jo vetëm përgjigjen e saktë.</p></div>
</body></html>`}const B={math:"Matematikë",alb:"Gjuhë shqipe",sci:"Njeriu dhe natyra",soc:"Shoqëria dhe mjedisi"},H={math:"math",alb:"alb",sci:"sci",soc:"soc"},_=new Set(["dhe","me","në","ne","nga","për","per","të","te","e","i","a","së","se","sa","si","që","qe","një","nje","deri","mbi","nën","nen","apo","ose","ku","kur","ky","kjo","im","ime","detyra","ushtrime","ushtrim","provo","veten","vlerësojmë","vlerësim","përsëritje","kontrollues","kontrolluese"]);function j(e){return e.toLowerCase().replace(/[^a-zçë0-9\s]/g," ").split(/\s+/).filter(t=>t&&!_.has(t)).map(t=>/^\d+$/.test(t)?t:t.slice(0,5)).filter(t=>t.length>=2)}const x=e=>e.toLowerCase().replace(/[^a-zçë0-9\s]/g," ").replace(/\s+/g," ").trim();function O(e,t){const a=H[e.s];if(!a)return;const i=x(e.t);let n;for(const o of y)if(!(o.g!==t||o.sid!==a||o.cp))for(const p of T[o.id]??[])i.includes(p)&&(!n||p.length>n.len)&&(n={id:o.id,len:p.length});if(n)return n.id;const r=j(e.t),d=new Set(r);if(!d.size)return;let c;for(const o of y){if(o.g!==t||o.sid!==a||o.cp)continue;const p=j(o.name);if(!p.length||p.some(b=>!d.has(b))||!(p.length>1?p.length/r.length>=.3:r[0]===p[0]))continue;const m=p.length*2+(r[0]===p[0]?1:0);(!c||m>c.score)&&(c={id:o.id,score:m})}return c==null?void 0:c.id}function X(e,t){if(e.s==="alb")return P[t]}function Q(e){const t=x(e);return/përsërit|përsëritje|vlerësojmë|vlerësim|ushtrim kontrollues|ushtrime kontrolluese|provoj veten|provojmë veten|detyra sfiduese|zbavit|test/.test(t)}const M=(e,t)=>t.endsWith("$")?(" "+e+" ").includes(" "+t.slice(0,-1)+" "):(" "+e).includes(" "+t);function k(e,t){return e.find(a=>a.words.some(i=>M(t,i)))}function ee(e){var t;return(t=k(L,x(e.t)))==null?void 0:t.game}function te(e){var t;return(t=k(N,x(e.t)))==null?void 0:t.story}function se(e){var t;return(t=k(C,x(e.t)))==null?void 0:t.place}const A=["DH","GJ","LL","NJ","RR","SH","TH","XH","ZH"];function ie(e){const t=/[Ss]hkronj[a-zëç]*\s*(?:(?:e|s[ëe])\s+(?:shtypit|dor[ëe]s|m[ëe]suar|madhe)\s*)?[:,–-]?\s*([A-ZÇË][a-zëç]?)(?=[\s,;.]|$)/.exec(e);if(!t){const i=/(?:shkrimi|leximi)[^A-ZÇË]{0,12}([A-ZÇË][a-zëç]?)\s*,\s*([a-zëç]{1,2})/.exec(e);if(i&&i[1].toLowerCase().startsWith(i[2][0])){const n=i[1].toUpperCase();return A.includes(n)?n:n[0]}return}const a=t[1].toUpperCase();return A.includes(a)?a:a[0]}const $=e=>{const t=new Date(e),a=i=>String(i).padStart(2,"0");return`${t.getFullYear()}-${a(t.getMonth()+1)}-${a(t.getDate())}`};function D(e){const t=new Date(e);return t.setHours(12,0,0,0),t.setDate(t.getDate()-(t.getDay()+6)%7),t.getTime()}function I(e){const t=new Date(e),a=t.getMonth()>=7?t.getFullYear():t.getFullYear()-1,i=new Date(a,8,1,12,0,0,0);for(;i.getDay()!==1;)i.setDate(i.getDate()+1);return i.getTime()}function ae(e,t,a){const i=e.filter(l=>l.g===t).sort((l,m)=>l.week-m.week);if(!i.length)return null;const n=i.length,r=$(a),d=i.find(l=>l.from<=r&&r<=l.to);if(d)return{week:d,byDate:!0,onBreak:!1,total:n};const c=I(a),o=Math.floor((D(a)-c)/(7*864e5))+1;return o<1?{week:i[0],byDate:!1,onBreak:!0,total:n}:o>n?{week:i[n-1],byDate:!1,onBreak:!0,total:n}:{week:i.find(l=>l.week===o)??i[Math.min(o,n)-1],byDate:!1,onBreak:!1,total:n}}function ne(e,t,a,i){if(t.byDate)return{from:e.from,to:e.to};const n=864e5,r=Math.round((Date.parse(e.to)-Date.parse(e.from))/n),d=D(i)+a*7*n;return{from:$(d),to:$(d+(r>0&&r<14?r:4)*n)}}function re(e,t,a,i){var b;const n=(b=i.p)==null?void 0:b[0];if(!n)return;const r=i.w?"wp":"base",d=e.filter(h=>h.g===t&&h.s===i.s),c=d.filter(h=>h.kind===r),o=c.length?c:d,p=a<=20?"A":"B",l=o.filter(h=>h.vol===p||h.vol==="");if(!l.length)return;let m;for(const h of l)for(const v of h.lessons)v.p<=n&&(!m||v.p>m.p)&&(m=v);return m&&n-m.p<=1?m:void 0}function oe(e,t=["math","alb","sci","soc"]){return t.map(a=>({subject:a,name:B[a],topics:e.topics.filter(i=>i.s===a).map(i=>({...i,skillId:O(i,e.g)}))})).filter(a=>a.topics.length>0)}function R(e){var t;return(t=e.p)!=null&&t.length?e.p.length>4?`${e.p[0]}–${e.p[e.p.length-1]}`:e.p.join(", "):""}function pe(e){const t=R(e);return t?e.w?`fletore pune fq. ${t}`:`fq. ${t}`:""}function le(e){const t=e.k??"";return t.includes("v")?"Vlerësim":t.includes("zh")?t.includes("p")||t.includes("u")?"Mësim i ri · ushtrime":"Mësim i ri":t.includes("p")||t.includes("u")?"Ushtrime":""}export{Z as a,ae as b,J as c,oe as d,Y as e,ne as f,R as g,re as h,se as i,Q as j,le as k,ie as l,ee as m,pe as n,U as o,V as p,X as r,te as s,G as w};
