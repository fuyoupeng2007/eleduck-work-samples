const PRODUCTS = [
  {id:'MM01',name:'Fold Ring',type:'ring',price:128,photo:'fold-ring.png',sizes:['US 6','US 7','US 8'],form:'Rounded fold',profile:'Bold, sculptural',pair:'A single statement',desc:'A rounded fold, held in a single sculptural gesture. One continuous surface, shifting with the light.'},
  {id:'MM02',name:'Contour Ring',type:'ring',price:148,photo:'contour-ring.png',sizes:['US 6','US 7','US 8'],form:'Organic contour',profile:'Fluid, expressive',pair:'An everyday signature',desc:'An organic silhouette with a quiet, polished presence. A fluid contour that feels different from every angle.'},
  {id:'MM03',name:'Layer Ring',type:'ring',price:138,photo:'layer-ring.png',sizes:['US 6','US 7','US 8'],form:'Layered curves',profile:'Soft, architectural',pair:'With a simple cuff',desc:'Soft lines, stacked into a considered everyday form. A layered rhythm with space to make it your own.'},
  {id:'MM04',name:'Arc Cuff',type:'cuff',price:228,crop:'crop4',sizes:['Small','Medium'],form:'Open arc',profile:'Clean, minimal',pair:'With a sculptural ring',desc:'An open arc that catches the light as you move. A clean gesture for the wrist, designed to stand on its own.'}
];
const usd=n=>'$'+n.toFixed(2);
const asset=name=>(window.MASON_ASSET_BASE||'assets/')+name;
function stored(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
function store(key,value){try{localStorage.setItem(key,JSON.stringify(value))}catch{toast('Browser storage is unavailable. Keep this page open to retain your selection.')}}
const byId=id=>PRODUCTS.find(p=>p.id===id);
let cart=stored('mason-sample-bag',[]);
cart=Array.isArray(cart)?cart.filter(x=>byId(x.id)&&Number.isInteger(x.qty)&&x.qty>0&&x.qty<=9&&byId(x.id).sizes.includes(x.size)):[];
let favorites=stored('mason-saved',[]);
favorites=Array.isArray(favorites)?favorites.filter(id=>byId(id)):[];
let compared=[], filter='all', search='', sort='featured', giftNote=stored('mason-gift-note','');
if(typeof giftNote!=='string')giftNote='';
let selectedProduct;
function shot(p){return `<div class="productshot ${p.photo?'dedicated-photo':p.crop}"><img src="${esc(asset(p.photo||'silver-editorial.png'))}" loading="lazy" width="${p.photo?1122:1672}" height="${p.photo?1402:941}" alt="${esc(p.name)} — original design concept photograph"></div>`}
function renderProducts(next=filter){
  filter=next;
  const list=PRODUCTS.filter(p=>(filter==='all'||p.type===filter||(filter==='saved'&&favorites.includes(p.id)))&&`${p.name} ${p.form} ${p.profile}`.toLowerCase().includes(search.toLowerCase().trim()));
  if(sort==='price-low')list.sort((a,b)=>a.price-b.price);
  if(sort==='price-high')list.sort((a,b)=>b.price-a.price);
  $('#products').innerHTML=list.length?list.map(p=>`<article class="productcard"><button class="product" data-product="${p.id}" aria-label="View ${esc(p.name)}">${shot(p)}<div class="productinfo"><strong>${p.name}</strong><span>${usd(p.price)}</span></div><div class="producttype">${esc(p.profile.toUpperCase())}</div></button><div class="productcontrols"><button data-save="${p.id}" aria-pressed="${favorites.includes(p.id)}">${favorites.includes(p.id)?'♥ Saved':'♡ Save'}</button><button data-compare="${p.id}" aria-pressed="${compared.includes(p.id)}">${compared.includes(p.id)?'✓ Comparing':'+ Compare'}</button></div></article>`).join(''):'<div class="collection-empty"><h3>A little more space.</h3><p>'+ (filter==='saved'?'Save an object you love, and find it here.':'Try a different name or clear your filters.') +'</p><button id="clearfilters" class="solidlink">Explore all objects</button></div>';
  $('#collectioncount').textContent=`${list.length} object${list.length===1?'':'s'} · Concept collection`;
  document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active',b.dataset.filter===filter));
  document.querySelectorAll('[data-product]').forEach(b=>b.onclick=()=>openProduct(b.dataset.product));
  document.querySelectorAll('[data-save]').forEach(b=>b.onclick=()=>{const id=b.dataset.save;favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];store('mason-saved',favorites);renderProducts()});
  document.querySelectorAll('[data-compare]').forEach(b=>b.onclick=()=>toggleCompare(b.dataset.compare));
  $('#clearfilters')?.addEventListener('click',()=>{search='';$('#collectionsearch').value='';renderProducts('all')});
  updateCompareBar();
}
function toggleCompare(id){if(compared.includes(id))compared=compared.filter(x=>x!==id);else{if(compared.length>=3){toast('Compare up to three objects. Remove one to add another.');return}compared.push(id)}renderProducts()}
function updateCompareBar(){const bar=$('#comparebar');bar.hidden=compared.length===0;$('#compareselected').textContent=compared.map(id=>byId(id).name).join(' · ');$('#opencompare').textContent=`Compare objects (${compared.length})`;$('#opencompare').disabled=compared.length<2;}
function openCompare(){
  const list=compared.map(byId);
  const rows=[['Concept price',p=>usd(p.price)+' USD'],['Form',p=>p.form],['Presence',p=>p.profile],['Wear it',p=>p.pair],['Sample sizes',p=>p.sizes.join(' / ')],['Finish concept',()=> 'Polished silver tone'],['Final specification',()=> 'Material, dimensions and availability to be confirmed by the brand']];
  $('#comparebody').innerHTML=`<p class="detailnote">Find a form that feels like you. Images, sizes and prices describe design concepts.</p><div class="comparison-scroll"><table class="comparison"><thead><tr><th scope="col">Your objects</th>${list.map(p=>`<th scope="col">${shot(p)}<h3>${p.name}</h3></th>`).join('')}</tr></thead><tbody>${rows.map(([label,fn])=>`<tr><th scope="row">${label}</th>${list.map(p=>`<td>${esc(fn(p))}</td>`).join('')}</tr>`).join('')}<tr><th scope="row">Take a closer look</th>${list.map(p=>`<td><button class="textlink" data-compare-open="${p.id}">View object →</button></td>`).join('')}</tr></tbody></table></div>`;
  document.querySelectorAll('[data-compare-open]').forEach(b=>b.onclick=()=>{$('#comparedialog').close();openProduct(b.dataset.compareOpen)});$('#comparedialog').showModal();
}
function openProduct(id){
  const p=selectedProduct=byId(id);if(!p)return;
  $('#productdetail').innerHTML=`<div class="detailgrid">${shot(p)}<div class="detailtext"><span class="overline">FORM STUDIES / ${p.id}</span><h2 id="producttitle">${p.name}</h2><div class="detailprice">${usd(p.price)} <small>USD · concept price</small></div><p>${p.desc}</p><dl class="objectfacts"><div><dt>Form</dt><dd>${p.form}</dd></div><div><dt>Presence</dt><dd>${p.profile}</dd></div><div><dt>Finish concept</dt><dd>Polished silver tone</dd></div></dl><div class="sizelabel"><label for="size">Choose size</label><button class="textlink" id="detailsizeguide">Size reference ↗</button></div><select id="size">${p.sizes.map(s=>`<option>${s}</option>`).join('')}</select><button class="solidlink" id="addtobag">Add to bag</button><p class="detailnote">Original design concept. Final material, measurements, stock, delivery and returns need brand approval before launch.</p><details class="productfaq"><summary>How to care for your object</summary><p>Keep pieces separate and use a soft, dry cloth. Follow the verified care instructions for the final material and finish.</p></details></div></div>`;
  $('#productdialog').showModal();$('#detailsizeguide').onclick=openSizeGuide;
  $('#addtobag').onclick=()=>{const size=$('#size').value;const item=cart.find(x=>x.id===p.id&&x.size===size);if(item){if(item.qty>=9){toast('Sample quantity limit: 9');return}item.qty++}else cart.push({id:p.id,size,qty:1});saveCart();$('#productdialog').close();toast(p.name+' added to your bag')};
}
function openSizeGuide(){
  $('#sizeguidebody').innerHTML=`<p>Start with a ring that fits the finger you plan to wear it on. Measure its inside diameter, without including the band.</p><table class="sizetable"><thead><tr><th>US size</th><th>Inside diameter</th></tr></thead><tbody><tr><td>6</td><td>16.5 mm</td></tr><tr><td>7</td><td>17.3 mm</td></tr><tr><td>8</td><td>18.1 mm</td></tr></tbody></table><div class="sizehint"><strong>Between sizes?</strong><p>Fit depends on the band width and the actual piece. Ask for a verified product chart before ordering.</p></div><p class="detailnote">General reference adapted from <a href="https://mejuri.com/how-to/sizing/ring-sizing-101" target="_blank" rel="noopener noreferrer">Mejuri’s ring size guide</a>. These are not verified MASON METAL measurements. Cuff Small / Medium are sample labels; wrist measurements remain to be confirmed.</p>`;$('#sizeguidedialog').showModal();
}
function saveCart(){store('mason-sample-bag',cart);$('#bagcount').textContent='('+cart.reduce((s,x)=>s+x.qty,0)+')'}
function renderBag(){
  $('#bagbody').innerHTML=cart.length?cart.map((x,i)=>{const p=byId(x.id);return `<div class="bagrow"><div class="bagobject">${shot(p)}<div><strong>${p.name}</strong><small>${esc(x.size)} · ${usd(p.price)} each</small><button class="textlink removeitem" data-remove="${i}">Remove</button></div></div><div class="quantity"><button data-minus="${i}" aria-label="Remove one ${p.name}">−</button><span>${x.qty}</span><button data-plus="${i}" aria-label="Add one ${p.name}">+</button></div></div>`}).join('')+`<label class="giftnote">Make a note<textarea id="giftnote" maxlength="300" rows="2" placeholder="A gift message, or a detail to discuss with the studio…">${esc(giftNote)}</textarea></label><div class="bagtotal"><span>Subtotal</span><strong>${usd(cart.reduce((s,x)=>s+x.qty*byId(x.id).price,0))}</strong></div><p class="bagfoot">USD · Illustrative prices. Shipping and tax have not been calculated.</p><button class="solidlink" id="savebag" style="width:100%">Download selection</button><p class="bagfoot" style="margin-top:16px">A selection for design review. No order is placed and no payment is processed.</p>`:'<div class="empty"><h3>Make room for your first object.</h3><p>Find a form that feels like you.</p><button class="solidlink" id="continuecollection">Explore the collection</button></div>';
  document.querySelectorAll('[data-minus]').forEach(b=>b.onclick=()=>{const i=+b.dataset.minus;if(--cart[i].qty===0)cart.splice(i,1);saveCart();renderBag()});
  document.querySelectorAll('[data-plus]').forEach(b=>b.onclick=()=>{const i=+b.dataset.plus;if(cart[i].qty>=9){toast('Sample quantity limit: 9');return}cart[i].qty++;saveCart();renderBag()});
  document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{cart.splice(+b.dataset.remove,1);saveCart();renderBag()});
  $('#giftnote')?.addEventListener('input',e=>{giftNote=e.target.value;store('mason-gift-note',giftNote)});
  $('#continuecollection')?.addEventListener('click',()=>{$('#bagdialog').close();$('#collection').scrollIntoView({behavior:'smooth'})});
  $('#savebag')?.addEventListener('click',()=>download('mason-metal-selection.txt','MASON METAL — Design sample selection\n\n'+cart.map(x=>{const p=byId(x.id);return `${p.id} | ${p.name} | ${x.size} | quantity ${x.qty} | ${usd(p.price*x.qty)}`}).join('\n')+`\n\nSubtotal: ${usd(cart.reduce((s,x)=>s+x.qty*byId(x.id).price,0))} USD\nNote: ${giftNote||'—'}\n\nIllustrative products and prices. Shipping/tax not calculated. No order placed.`));
}
document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>renderProducts(b.dataset.filter));
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>$('#'+b.dataset.close).close());
$('#collectionsearch').oninput=e=>{search=e.target.value;renderProducts()};$('#collectionsort').onchange=e=>{sort=e.target.value;renderProducts()};$('#opencompare').onclick=openCompare;$('#clearcompare').onclick=()=>{compared=[];renderProducts()};$('#collectionguide').onclick=openSizeGuide;
$('#bag').onclick=()=>{renderBag();$('#bagdialog').showModal()};
$('#menu').onclick=()=>{const open=$('#mobilenav').hidden;$('#mobilenav').hidden=!open;$('#menu').setAttribute('aria-expanded',String(open))};
$('#mobilenav').querySelectorAll('a').forEach(b=>b.onclick=()=>{$('#mobilenav').hidden=true;$('#menu').setAttribute('aria-expanded','false')});
$('#contact').onclick=()=>$('#contactdialog').showModal();
$('#contactform').onsubmit=e=>{e.preventDefault();const f=Object.fromEntries(new FormData(e.target));if(!f.name.trim()||!f.message.trim()){toast('Please enter your name and message.');return}download('studio-message.txt',`MASON METAL design review\nName: ${f.name}\nEmail: ${f.email}\n\n${f.message}\n\nDemo only. This message has not been sent.`);$('#contactdialog').close();toast('Message downloaded. Nothing has been sent.')};
saveCart();renderProducts();
