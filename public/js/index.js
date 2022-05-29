
  const removeMenu = document.querySelector('#icon');
  const logo = document.querySelector('#logo');
  const addNav = document.querySelector('#flex-nav');
  const nav = document.querySelector('#nav');

  const menu = document.getElementById('icon');

  menu.addEventListener('click', function() {
    
    const removeMenu = document.getElementById('icon').remove();
    const logo = document.getElementById('logo').remove();

    const addNav = document.getElementById('flex-nav');
    addNav.classList.remove('d-none');

    
  });

  /*Contact form script 
   */

 