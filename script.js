//Nav Navigation
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.connection div a');
    navLinks.forEach(function(navLink) {
      navLink.addEventListener('click', function(event) {
        navLinks.forEach(link => link.classList.remove('navBar-font-weight'));
        this.classList.add('navBar-font-weight');
        
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 105, // Adjust as needed
            behavior: 'smooth'
          });
        }
      });
    });
});
//default class to About weight
document.addEventListener("DOMContentLoaded", function() {
  // Add 'active' class to the "About" navigation link
  const aboutNavLink = document.querySelector('.about a');
  aboutNavLink.classList.add('navBar-font-weight');
});
  

//expereince selectc hange applle class
document.addEventListener("DOMContentLoaded", function() {
const sofiDiv = document.getElementById('sofi-select');
sofiDiv.classList.add('applle');

const parentDiv = document.querySelector('.applle-parent');
parentDiv.querySelectorAll('img').forEach(img => {
    img.style.display = 'none';
});

const svg = sofiDiv.querySelector('img');
if (svg) {
    svg.style.display = 'block';
}

const divs = parentDiv.querySelectorAll('div');
divs.forEach(div => {
    div.addEventListener('click', function() {
    divs.forEach(d => {
        d.classList.remove('applle');
    });
    
    this.classList.add('applle');
    
    parentDiv.querySelectorAll('img').forEach(img => {
        img.style.display = 'none';
    });

    const svg = this.querySelector('img');
    if (svg) {
        svg.style.display = 'block';
    }
    });
});
});
