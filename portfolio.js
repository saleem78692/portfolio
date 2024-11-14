
menu=document.querySelector('#menu-icon');
navbar=document.querySelector('.navbar');

menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('v-class-resp')
});
var typed = new Typed('#element', {
    strings: ['Software Engineer.', 'Web Developer.','Frontend Developer.','Backend Developer.'],
    typeSpeed: 50,
  });