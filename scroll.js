function checkVisibility() {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) { 
        element.classList.add('show');
      }
    });
  }
  
  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); 
  
