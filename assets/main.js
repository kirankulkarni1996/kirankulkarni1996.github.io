(()=>{
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
// normalise stroke lengths so every technical line can "draw in"
$$('.dim :is(path,circle),.ev :is(.base,.z) :is(path,circle)').forEach(e=>e.setAttribute('pathLength',1));
// scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
$$('.rv').forEach(e=>io.observe(e));
// mobile menu
const nav=$('.nav'),bg=$('.burger'),shut=()=>{nav.classList.remove('open');bg.setAttribute('aria-expanded','false')};
bg.onclick=()=>bg.setAttribute('aria-expanded',nav.classList.toggle('open'));
$$('#menu a').forEach(a=>a.addEventListener('click',shut));
// engineering view
const ev=$('#ev'),btn=$$('.zones button'),grp=$$('.z',ev),flow=$$('.flow span',ev),zd=$('#zd');let last,timer;
const setZ=n=>{btn.forEach((b,i)=>b.classList.toggle('on',i==n-1));grp.forEach(g=>g.classList.toggle('on',g.dataset.z==n));flow.forEach((s,i)=>s.classList.toggle('on',i==n-1));zd.textContent=btn[n-1].dataset.d};
btn.forEach((b,i)=>b.onclick=()=>{clearInterval(timer);setZ(i+1)});
grp.forEach(g=>g.onclick=()=>{clearInterval(timer);setZ(+g.dataset.z)});
const open=()=>{last=document.activeElement;ev.hidden=false;document.body.classList.add('lock');setZ(1);
  requestAnimationFrame(()=>requestAnimationFrame(()=>ev.classList.add('open')));$('#close-ev').focus();
  let n=1;clearInterval(timer);timer=setInterval(()=>{n=n%4+1;setZ(n);if(n==4)clearInterval(timer)},3200)};
const close=()=>{clearInterval(timer);ev.classList.remove('open');setTimeout(()=>{ev.hidden=true;document.body.classList.remove('lock');last&&last.focus()},600)};
$('#open-ev').onclick=open;$('#close-ev').onclick=close;
document.addEventListener('keydown',e=>{
  if(ev.hidden)return;
  if(e.key==='Escape')close();
  if(e.key==='Tab'){const f=$$('button',ev),a=f[0],z=f[f.length-1];
    if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}
});

// v2: ticker loop, cursor, scroll progress, car parallax
const mq=$('.mq div');mq.innerHTML+=mq.innerHTML;
const cur=$('.cur'),bar=$('.bar'),still=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(matchMedia('(pointer:fine)').matches){
  addEventListener('pointermove',e=>{cur.style.transform=`translate(${e.clientX}px,${e.clientY}px)`},{passive:true});
  $$('a,button,.bc,.cols article').forEach(e=>{e.addEventListener('pointerenter',()=>cur.classList.add('big'));e.addEventListener('pointerleave',()=>cur.classList.remove('big'))});
}
addEventListener('scroll',()=>{bar.style.transform=`scaleX(${scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)})`},{passive:true});
const img=$('.car img'),hero=$('.hero');
if(!still&&matchMedia('(pointer:fine)').matches)hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();img.style.transform=`translate(${(e.clientX/r.width-.5)*-16}px,${(e.clientY/r.height-.5)*-8}px)`});
// email assembled at runtime so bots scraping raw HTML do not harvest it
const ml=$('#mail');if(ml){const a=ml.dataset.u+'@'+ml.dataset.d;ml.href='mailto:'+a;ml.textContent=a}
})();
