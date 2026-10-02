(()=>{const u={};
u.$=(s)=>document.querySelector(s);
u.esc=(s)=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
u.money=(n)=>new Intl.NumberFormat('zh-CN',{style:'currency',currency:'CNY'}).format(n);
u.toast=(s)=>{document.querySelector('.toast')?.remove();const e=document.createElement('div');e.className='toast';e.setAttribute('role','status');e.textContent=s;document.body.append(e);setTimeout(()=>e.remove(),3600)};
u.download=(name,text,type='text/plain;charset=utf-8')=>{const u=URL.createObjectURL(new Blob([text],{type}));const a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),500)};
u.csv=(rows)=>'\ufeff'+rows.map(r=>r.map(v=>'"'+String(v??'').replace(/"/g,'""')+'"').join(',')).join('\r\n');

window.MASON_UTILS=u;})();