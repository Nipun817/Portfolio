const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{const h=document.documentElement;progress.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';});
const cursor=document.querySelector('.cursor'),dot=document.querySelector('.cursor-dot');
window.addEventListener('mousemove',e=>{cursor.style.left=e.clientX-17+'px';cursor.style.top=e.clientY-17+'px';dot.style.left=e.clientX-2+'px';dot.style.top=e.clientY-2+'px';});
document.querySelectorAll('a,.skill-card,.project,.button').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cursor.style.transform='scale(1.5)';});
  el.addEventListener('mouseleave',()=>{cursor.style.transform='scale(1)';});
});
document.querySelectorAll('.skill-card,.project').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    if(window.innerWidth<900)return;
    const r=card.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(700px) rotateX(${y*-3}deg) rotateY(${x*3}deg) translateY(-5px)`;
  });
  card.addEventListener('mouseleave',()=>card.style.transform='');
});
const menu=document.getElementById('menu');
menu.addEventListener('click',()=>document.querySelector('.nav nav').classList.toggle('open'));
