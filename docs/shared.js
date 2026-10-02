window.$=(s)=>document.querySelector(s);
window.esc=(s)=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
window.money=(n)=>new Intl.NumberFormat('zh-CN',{style:'currency',currency:'CNY'}).format(n);
window.toast=(s)=>{document.querySelector('.toast')?.remove();const e=document.createElement('div');e.className='toast';e.setAttribute('role','status');e.textContent=s;document.body.append(e);setTimeout(()=>e.remove(),3600)};
window.download=(name,text,type='text/plain;charset=utf-8')=>{const u=URL.createObjectURL(new Blob([text],{type}));const a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),500)};
window.csv=(rows)=>'\ufeff'+rows.map(r=>r.map(v=>'"'+String(v??'').replace(/"/g,'""')+'"').join(',')).join('\r\n');
