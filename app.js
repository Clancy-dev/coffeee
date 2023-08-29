const icon = document.querySelector('#menu');
  const menu = document.querySelector('.visible');
  let isMenuOpen = false;

  icon.addEventListener('click', () => {
    if (isMenuOpen) {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
    isMenuOpen = !isMenuOpen;
  });










