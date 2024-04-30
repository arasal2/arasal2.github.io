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


//github redirect
document.addEventListener("DOMContentLoaded", function() {
  const githubIcon = document.querySelector('.github-icon1');
  const githubIconHomePage = document.querySelector('.github-icon');
  const githubUrl = 'https://github.com/arasal2';
  
  githubIcon.addEventListener('click', function() {

    // Open the GitHub page in a new tab
    window.open(githubUrl, '_blank');
  });

  githubIconHomePage.addEventListener('click', function() {

    // Open the GitHub page in a new tab
    window.open(githubUrl, '_blank');
  });
});

//linkedIn Redirect
document.addEventListener("DOMContentLoaded", function() {
  const linkedInIcon = document.querySelector('.linkedin-icon1');
  const linkedInHomePage = document.querySelector('.linkedin-icon');
  const linkedInUrl = 'http://www.linkedin.com/in/arasal1';
  
  linkedInIcon.addEventListener('click', function() {
    window.open(linkedInUrl, '_blank');
  });

  linkedInHomePage.addEventListener('click', function() {

    // Open the GitHub page in a new tab
    window.open(linkedInUrl, '_blank');
  });
});


//github redirect
document.addEventListener("DOMContentLoaded", function() {
  const githubIcon = document.querySelector('.github-icon1');
  const githubIconHomePage = document.querySelector('.github-icon');
  const githubUrl = 'https://github.com/arasal2';
  
  githubIcon.addEventListener('click', function() {

    // Open the GitHub page in a new tab
    window.open(githubUrl, '_blank');
  });

  githubIconHomePage.addEventListener('click', function() {

    // Open the GitHub page in a new tab
    window.open(githubUrl, '_blank');
  });
});

// JavaScript
document.addEventListener("DOMContentLoaded", function() {
  const emailIcon = document.querySelector('.email-icon1');
  const emailIconHomePage = document.querySelector('.email-icon');
  
  const emailAddress = 'akashrrasal@gmail.com';

  // Event listener for clicking on the email icon
  emailIcon.addEventListener('click', function() {
    const subject = 'Hello, Akash wanted to get int touch';
    const body = 'Hello,';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  });

  emailIconHomePage.addEventListener('click', function() {
    const subject = 'Hello, Akash wanted to get int touch';
    const body = 'Hello,';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  });


});



document.addEventListener("DOMContentLoaded", function() {
  const downloadButton = document.getElementById('download-resume-id');

  downloadButton.addEventListener('click', function() {
    // GitHub raw file URL of the PDF
    const pdfUrl = 'https://github.com/arasal2/portfolio/raw/main/Resume/Resume_AkashRasal.pdf';
    
    // Create a link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'filename.pdf'; // Set the filename for the downloaded file
    link.target = '_blank'; // Open the link in a new tab
    
    // Append the link to the document body
    document.body.appendChild(link);
    
    // Programmatically trigger the click event on the link
    link.click();
    
    // Remove the link from the document body
    document.body.removeChild(link);
  });
});
