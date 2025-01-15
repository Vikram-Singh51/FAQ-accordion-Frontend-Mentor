document.querySelectorAll('.faq-item').forEach(item => {
      const button = item.querySelector('.toggle-button');
      const answer = item.querySelector('.answer');
    
      button.addEventListener('click', () => {
        answer.classList.toggle('hidden');
        button.textContent = button.textContent === '+' ? '-' : '+';
      });
    });