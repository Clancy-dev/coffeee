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


  //FORM
  const deliveryBtn = document.querySelector('.order1-now');

  const form = document.querySelector('.form-section');
  let isFormOpen = false;

  deliveryBtn.addEventListener('click', () => {
    if (isFormOpen) {
      form.style.display = 'none';
    } else {
      form.style.display = 'block';
    }
    isFormOpen = !isFormOpen;
  });
  

  //cancel
  const cancelBtn = document.querySelector('#cancel');

  const foorm = document.querySelector('#form-cancel');
  let isFoormOpen = false;

  cancelBtn.addEventListener('click', () => {
    if (isFoormOpen) {
      foorm.style.display = 'none';
    } else {
      foorm.style.display = 'block';
    }
    isFoormOpen = !isFoormOpen;
  });
  











