document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  
    // Trigger animations when sections are scrolled into view
    const sections = document.querySelectorAll('section');
    const options = {
      threshold: 0.5 // 50% of the section must be in view
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  
  // Toggle mobile menu visibility
  function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
  }
  