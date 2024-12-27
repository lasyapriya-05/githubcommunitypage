// Smooth Scroll for Navigation Links
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 70,  // Adjusting for the navbar height
      behavior: 'smooth',
    });
  });
});

// Hover Effect on Cards (Scaling Effect)
const domainCards = document.querySelectorAll('.domain-card');
const eventCards = document.querySelectorAll('.event-card');

const scaleOnHover = (element) => {
  element.style.transition = 'transform 0.3s ease-in-out';
  element.addEventListener('mouseenter', () => {
    element.style.transform = 'scale(1.05)';
  });
  element.addEventListener('mouseleave', () => {
    element.style.transform = 'scale(1)';
  });
};

domainCards.forEach(scaleOnHover);
eventCards.forEach(scaleOnHover);

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑ Back to Top';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 20px';
backToTopButton.style.fontSize = '16px';
backToTopButton.style.backgroundColor = '#004aad';
backToTopButton.style.color = 'white';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '8px';
backToTopButton.style.cursor = 'pointer';

document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});