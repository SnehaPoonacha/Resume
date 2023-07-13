let nav=document.querySelector('nav');
let moon=document.querySelector('.moon');
let sun=document.querySelector('.sun');

window.addEventListener('scroll',()=>{
    nav.classList.toggle('navScroll',window.scrollY>100);
});

moon.addEventListener('click',()=>{
    document.querySelector('body').classList.add('dark-mood');
    moon.style.display='none';
    sun.style.display='block';
});
sun.addEventListener('click',()=>{
    document.querySelector('body').classList.remove('dark-mood');
    sun.style.display='none';
    moon.style.display='block';
});

let open=document.querySelector('.open');
let close=document.querySelector('.close');
let navLinks=document.querySelector('.nav-links');

open.addEventListener('click',()=>{
   navLinks.style.display='block';
   open.style.display='none';
   close.style.display='block';
});

close.addEventListener('click',()=>{
    navLinks.style.display='none';
    open.style.display='block';
    close.style.display='none';
});
