const elements = document.querySelectorAll('.paragraph');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // optional: stop observing
    }
  });
}, { threshold: 0.1 }); // triggers when 10% of element is visible
elements.forEach(el => observer.observe(el));