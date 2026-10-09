import{ct as C,cu as A,cv as L,cw as B,b0 as k,cx as P}from"./content-BR6LDCp0.js";const s=e=>String(e).replace(/[&<>"]/g,i=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[i]),f=`
@page{size:A4;margin:16mm}
*{box-sizing:border-box}
body{font:14px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif;color:#201e1d;margin:0}
h1{font:700 26px/1.2 Georgia,serif;margin:0 0 4px}
h2{font:700 16px/1.3 Georgia,serif;margin:22px 0 8px;color:#643312}
.brand{display:flex;align-items:center;gap:8px;color:#643312;font:700 14px Georgia,serif;margin-bottom:12px}
.brand i{width:10px;height:10px;border-radius:50%;background:#c67139;display:inline-block}
.sub{color:#645c50;margin:0 0 16px}
.muted{color:#645c50}`;function j(e){switch(e.type){case"match":return(e.pairs??[]).map(([i,a])=>`${i} ↔ ${a}`).join(", ");case"sort":return(e.cats??[]).map((i,a)=>`${i}: ${(e.items??[]).filter(t=>t[1]===a).map(t=>t[0]).join(", ")}`).join(" · ");case"shape":return{circle:"rreth",square:"katror",triangle:"trekëndësh"}[String(e.ans)]??String(e.ans);default:return String(e.ans)}}function w(e){switch(e.type){case"mc":case"color":return`<div class="opts">${(e.opts??[]).map(i=>`<span class="opt">○ ${s(i)}</span>`).join("")}</div>`;case"shape":return`<div class="opts">${(e.opts??[]).map(i=>`<span class="opt">○ ${s({circle:"rreth",square:"katror",triangle:"trekëndësh"}[i]??i)}</span>`).join("")}</div>`;case"num":case"line":return'<div class="blank">Përgjigjja: <span class="line"></span></div>';case"order":return`<div class="opts">${(e.words??[]).map(i=>`<span class="chip">${s(i)}</span>`).join("")}</div><div class="blank">Fjalia: <span class="line line--long"></span></div>`;case"sort":return`<div class="opts">${(e.items??[]).map(([i])=>`<span class="chip">${s(i)}</span>`).join("")}</div><div class="two">${(e.cats??[]).map(i=>`<div class="box"><b>${s(i)}</b></div>`).join("")}</div>`;case"match":return`<div class="two">${(e.pairs??[]).map(([i,a])=>`<div class="pair"><span>${s(i)}</span><span class="dots">${"●".repeat(Number(a))}</span></div>`).join("")}</div>`;default:return""}}function I(e){const i=e.exercises.slice(0,10),a=t=>t.objects?`<div class="apples">${"🍎".repeat(Math.min(10,t.objects))}</div>`:"";return`<!doctype html><html lang="sq"><head><meta charset="utf-8"><title>Fletë ushtrimesh · ${s(e.skillName)}</title>
<style>${f}
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
${i.map((t,n)=>`<div class="q"><div><span class="n">${n+1}</span><span class="p">${s(t.prompt)}</span></div>${t.passage?`<div class="passage">${s(t.passage)}</div>`:""}${a(t)}${w(t)}</div>`).join("")}
<p class="muted" style="margin-top:14px">Ndihmëz për prindin: nëse fëmija ngec, pyeteni „Çka të kërkon detyra?" para se ta shpjegoni. Përgjigjet janë në faqen tjetër.</p>
<div class="key"><div class="brand"><i></i>ABC · përgjigjet</div><h1>${s(e.skillName)}</h1><p class="sub">Për prindin. Pas çdo përgjigjeje është shpjegimi që jep Lira.</p>
<ol>${i.map(t=>`<li><b>${s(j(t))}</b> <span class="muted">— ${s(t.explain)}</span></li>`).join("")}</ol></div>
</body></html>`}function O(e){return`<!doctype html><html lang="sq"><head><meta charset="utf-8"><title>Diplomë · ${s(e.nick)} · ${s(e.unitName)}</title>
<style>${f}
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
</div></body></html>`}function _(e){return`<!doctype html><html lang="sq"><head><meta charset="utf-8"><title>Certifikatë · ${s(e.className)}</title>
<style>${f}
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
</div></body></html>`}function R(e){const i=e.places.filter(t=>t.stamped).length,a=[["Kosova",e.places.filter(t=>t.region==="ks")],["Shqipëria",e.places.filter(t=>t.region==="al")]];return`<!doctype html><html lang="sq"><head><meta charset="utf-8"><title>Pasaporta e eksploruesit · ${s(e.nick)}</title>
<style>${f}
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
<div class="head"><div><h1>Pasaporta e eksploruesit</h1><p class="sub">${s(e.nick)} dhe ${s(e.heroName)} · ${s(e.date)}</p></div><div class="count">${i} nga ${e.places.length} vula</div></div>
${a.map(([t,n])=>`<h2>${t}</h2><div class="grid">${n.map(r=>`<div class="stamp${r.stamped?" on":""}" style="--c:${s(r.color)}"><b><i>${r.stamped?s(r.icon):"·"}</i>${s(r.name)}</b><small>${s(r.near)}</small><p>${r.stamped?s(r.fact):"Pa vulë ende — hape hartën në ABC."}</p></div>`).join("")}</div>`).join("")}
<div class="foot"><span>Çdo vulë: katër gjëra të zbuluara dhe tri pyetje të përgjigjura në hartën e ABC-së.</span><span>Lira, rrëqebulli</span></div>
</body></html>`}const z=`
.lab{border:2px solid #7e4f9c;border-radius:16px;padding:14px 18px}.lab h2{color:#7e4f9c;margin-top:0}
.adult{display:inline-block;background:#fbeccd;border-radius:999px;padding:2px 10px;font-weight:600}
.draw{height:150px;border:1.5px dashed #c9bfae;border-radius:12px;margin-top:12px;display:grid;place-items:center;color:#a19786}`;function S(e){return`<div class="lab"><h2>🧪 ${s(e.title)} · ${e.minutes} min</h2>
${e.adult?'<p><span class="adult">Me një të rritur pranë</span></p>':""}
<p><b>Të duhen:</b> ${e.needs.map(s).join(", ")}</p>
<ol>${e.steps.map(i=>`<li>${s(i)}</li>`).join("")}</ol>
<p><b>Shiko:</b> ${s(e.look)}</p>
<p class="muted"><b>Pse ndodh?</b> ${s(e.why)}</p>
<div class="draw">Vizato këtu çka pe</div></div>`}function K(e){return`<!doctype html><html lang="sq"><head><meta charset="utf-8"><title>Provo në shtëpi · ${s(e.experiment.title)}</title>
<style>${f}${z}
.name{font-size:13px;color:#645c50;margin:0 0 14px}.name span{display:inline-block;min-width:160px;border-bottom:1px solid #201e1d;margin-left:6px}
.foot{margin-top:16px;font-size:13px}
</style></head><body>
<div class="brand"><i></i>ABC · Provo në shtëpi</div>
<p class="name">Emri: <span>${e.nick?s(e.nick):""}</span> · ${s(e.gradeLabel)}</p>
${S(e.experiment)}
<p class="muted foot">Për të rriturin: para se të filloni, pyeteni „Çka mendon se do të ndodhë?". Pastaj le ta bëjë vetë sa më shumë, dhe lavdëroni pyetjet që bën, jo vetëm përgjigjen.</p>
</body></html>`}function U(e){const i=e.worksheet?e.worksheet.exercises.slice(0,8):[],a='<span class="tick"></span>';return`<!doctype html><html lang="sq"><head><meta charset="utf-8"><title>Paketa e javës · ${s(e.nick||"ABC")}</title>
<style>${f}
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
${z}
.story p{font-size:17px;line-height:1.6;margin:0 0 10px}
</style></head><body>
<div class="page">
<div class="brand"><i></i>ABC · Paketa e javës</div>
<div class="cover"><h1>Java e ${s(e.nick||"fëmijës")}</h1><p class="sub">${s(e.gradeLabel)} · ${s(e.range)}</p>
<p>Një javë pa ekran: çdo ditë një këshillë, një fletë ushtrimesh, një provë në shtëpi dhe një tregim për ta lexuar bashkë. Vendos një ✓ sa herë e kryen!</p></div>
<h2>Shtatë këshilla, një për çdo ditë</h2>
<div class="tips">${e.tips.map(t=>`<div class="tip">${a}<span class="e">${s(t.emoji)}</span><div><span class="d">${s(t.day)}</span><b>${s(t.title)}</b>${s(t.text)}</div></div>`).join("")}</div>
</div>
${e.worksheet?`<div class="page"><div class="brand"><i></i>ABC · fletë ushtrimesh</div><h1>${s(e.worksheet.skillName)}</h1><p class="sub">${s(e.worksheet.subjectName)} · ${s(e.gradeLabel)}</p>
${i.map((t,n)=>`<div class="q"><div><span class="n">${n+1}</span><span class="p">${s(t.prompt)}</span></div>${t.passage?`<div class="muted" style="margin:6px 0 0 34px;font-style:italic">${s(t.passage)}</div>`:""}${w(t)}</div>`).join("")}</div>`:""}
${e.experiment?`<div class="page"><div class="brand"><i></i>ABC · Provo në shtëpi</div>${S(e.experiment)}</div>`:""}
${e.story?`<div class="page story"><div class="brand"><i></i>ABC · tregimi i javës</div><h1>${s(e.story.title)}</h1><p class="sub">Lexojeni bashkë, me zë.</p>
${e.story.pages.map(t=>`<p>${s(t)}</p>`).join("")}
<h2>${s(e.story.q.prompt)}</h2><div class="opts" style="margin-left:0">${e.story.q.opts.map(t=>`<span class="opt"><span class="chip">${s(t)}</span></span>`).join("")}</div>
<div class="draw">Vizato pjesën që të pëlqeu më shumë</div></div>`:""}
<div class="page"><div class="brand"><i></i>ABC · për prindin</div><h1>Përgjigjet</h1>
${i.length?`<h2>${s(e.worksheet.skillName)}</h2><ol>${i.map(t=>`<li><b>${s(j(t))}</b> <span class="muted">— ${s(t.explain)}</span></li>`).join("")}</ol>`:""}
${e.story?`<h2>Tregimi</h2><p>${s(e.story.q.prompt)} <b>${s(e.story.q.ans)}</b></p>`:""}
<p class="muted">Pyeteni fëmijën „Si e gjete?" para se t'ia tregoni përgjigjen. Lavdëroni përpjekjen, jo vetëm përgjigjen e saktë.</p></div>
</body></html>`}const D={math:"Matematikë",alb:"Gjuhë shqipe",sci:"Njeriu dhe natyra",soc:"Shoqëria dhe mjedisi"},N={math:"math",alb:"alb",sci:"sci",soc:"soc"},T=new Set(["dhe","me","në","ne","nga","për","per","të","te","e","i","a","së","se","sa","si","që","qe","një","nje","deri","mbi","nën","nen","apo","ose","ku","kur","ky","kjo","im","ime","detyra","ushtrime","ushtrim","provo","veten","vlerësojmë","vlerësim","përsëritje","kontrollues","kontrolluese"]);function $(e){return e.toLowerCase().replace(/[^a-zçë0-9\s]/g," ").split(/\s+/).filter(i=>i&&!T.has(i)).map(i=>/^\d+$/.test(i)?i:i.slice(0,5)).filter(i=>i.length>=2)}const h=e=>e.toLowerCase().replace(/[^a-zçë0-9\s]/g," ").replace(/\s+/g," ").trim();function H(e,i){const a=N[e.s];if(!a)return;const t=h(e.t);let n;for(const o of k)if(!(o.g!==i||o.sid!==a||o.cp))for(const p of P[o.id]??[])t.includes(p)&&(!n||p.length>n.len)&&(n={id:o.id,len:p.length});if(n)return n.id;const r=$(e.t),l=new Set(r);if(!l.size)return;let c;for(const o of k){if(o.g!==i||o.sid!==a||o.cp)continue;const p=$(o.name);if(!p.length||p.some(u=>!l.has(u))||!(p.length>1?p.length/r.length>=.3:r[0]===p[0]))continue;const m=p.length*2+(r[0]===p[0]?1:0);(!c||m>c.score)&&(c={id:o.id,score:m})}return c==null?void 0:c.id}function J(e,i){if(e.s==="alb")return B[i]}function V(e){const i=h(e);return/përsërit|përsëritje|vlerësojmë|vlerësim|ushtrim kontrollues|ushtrime kontrolluese|provoj veten|provojmë veten|detyra sfiduese|zbavit|test/.test(i)}const G=(e,i)=>(" "+e).includes(" "+i);function v(e,i){return e.find(a=>a.words.some(t=>G(i,t)))}function W(e){var i;return(i=v(A,h(e.t)))==null?void 0:i.game}function Y(e){var i;return(i=v(L,h(e.t)))==null?void 0:i.story}function Z(e){var i;return(i=v(C,h(e.t)))==null?void 0:i.place}const y=["DH","GJ","LL","NJ","RR","SH","TH","XH","ZH"];function X(e){const i=/[Ss]hkronj[a-zëç]*\s*(?:(?:e|s[ëe])\s+(?:shtypit|dor[ëe]s|m[ëe]suar|madhe)\s*)?[:,–-]?\s*([A-ZÇË][a-zëç]?)(?=[\s,;.]|$)/.exec(e);if(!i){const t=/(?:shkrimi|leximi)[^A-ZÇË]{0,12}([A-ZÇË][a-zëç]?)\s*,\s*([a-zëç]{1,2})/.exec(e);if(t&&t[1].toLowerCase().startsWith(t[2][0])){const n=t[1].toUpperCase();return y.includes(n)?n:n[0]}return}const a=i[1].toUpperCase();return y.includes(a)?a:a[0]}const x=e=>{const i=new Date(e),a=t=>String(t).padStart(2,"0");return`${i.getFullYear()}-${a(i.getMonth()+1)}-${a(i.getDate())}`};function q(e){const i=new Date(e);return i.setHours(12,0,0,0),i.setDate(i.getDate()-(i.getDay()+6)%7),i.getTime()}function M(e){const i=new Date(e),a=i.getMonth()>=7?i.getFullYear():i.getFullYear()-1,t=new Date(a,8,1,12,0,0,0);for(;t.getDay()!==1;)t.setDate(t.getDate()+1);return t.getTime()}function Q(e,i,a){const t=e.filter(d=>d.g===i).sort((d,m)=>d.week-m.week);if(!t.length)return null;const n=t.length,r=x(a),l=t.find(d=>d.from<=r&&r<=d.to);if(l)return{week:l,byDate:!0,onBreak:!1,total:n};const c=M(a),o=Math.floor((q(a)-c)/(7*864e5))+1;return o<1?{week:t[0],byDate:!1,onBreak:!0,total:n}:o>n?{week:t[n-1],byDate:!1,onBreak:!0,total:n}:{week:t.find(d=>d.week===o)??t[Math.min(o,n)-1],byDate:!1,onBreak:!1,total:n}}function ee(e,i,a,t){if(i.byDate)return{from:e.from,to:e.to};const n=864e5,r=Math.round((Date.parse(e.to)-Date.parse(e.from))/n),l=q(t)+a*7*n;return{from:x(l),to:x(l+(r>0&&r<14?r:4)*n)}}function ie(e,i,a,t){var u;const n=(u=t.p)==null?void 0:u[0];if(!n)return;const r=t.w?"wp":"base",l=e.filter(g=>g.g===i&&g.s===t.s),c=l.filter(g=>g.kind===r),o=c.length?c:l,p=a<=20?"A":"B",d=o.filter(g=>g.vol===p||g.vol==="");if(!d.length)return;let m;for(const g of d)for(const b of g.lessons)b.p<=n&&(!m||b.p>m.p)&&(m=b);return m&&n-m.p<=1?m:void 0}function se(e,i=["math","alb","sci","soc"]){return i.map(a=>({subject:a,name:D[a],topics:e.topics.filter(t=>t.s===a).map(t=>({...t,skillId:H(t,e.g)}))})).filter(a=>a.topics.length>0)}function F(e){var i;return(i=e.p)!=null&&i.length?e.p.length>4?`${e.p[0]}–${e.p[e.p.length-1]}`:e.p.join(", "):""}function te(e){const i=F(e);return i?e.w?`fletore pune fq. ${i}`:`fq. ${i}`:""}function ae(e){const i=e.k??"";return i.includes("v")?"Vlerësim":i.includes("zh")?i.includes("p")||i.includes("u")?"Mësim i ri · ushtrime":"Mësim i ri":i.includes("p")||i.includes("u")?"Ushtrime":""}export{U as a,Q as b,O as c,se as d,K as e,ee as f,F as g,ie as h,Z as i,V as j,ae as k,X as l,W as m,te as n,_ as o,R as p,J as r,Y as s,I as w};
