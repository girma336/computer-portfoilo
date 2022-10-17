const mobileBtn = document.getElementById('menu-bar');
const exitBtn = document.getElementById('close-menu');
const aboutBtn = document.getElementById('about-2');
const PortfolioBtn = document.getElementById('portifolio-2');
const contactBtn = document.getElementById('contact-2');
const nav = document.querySelector('nav');
mobileBtn.addEventListener('click', () => {
  nav.classList.add('menu-btn');
  
});
function display() {
  nav.classList.remove('menu-btn');
}

exitBtn.addEventListener('click', display);
aboutBtn.addEventListener('click', display);
PortfolioBtn.addEventListener('click', display);
contactBtn.addEventListener('click', display);