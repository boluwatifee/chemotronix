const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', responsiveNav);

 function responsiveNav(){
     navLinks.style.display = 'block';
 }
 
 ScrollReveal({
    reset: true,
    distance :'60px' ,
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.hero-section', { delay: 400, origin: 'bottom' });
ScrollReveal().reveal('#quote, .arr', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('#solution, #team, #contact, #about', { delay: 400, origin: 'bottom'});