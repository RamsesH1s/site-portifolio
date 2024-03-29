/*========TOGGLE ICON NAVBAR========*/
if (typeof document !== 'undefined') {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
     };
};
 

/*========SCROll SECTIONS AVTIVE LINK========*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset &&  top < offset + heigth ) {
            navLinks.forEach(links => {
                 links.classList.remove('active');
                 document.querySelector('header nav a[href*='+ id + ']').classList.add('active');   

            });
        };
    });
    
    /*========STICKY NAVBAR========*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*========remove toggle icon and navbar when click navbar link (scrool)========*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
        
};
  