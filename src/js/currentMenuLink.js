document.addEventListener('DOMContentLoaded', () => {
  const menuList = document.querySelector('.menu-list');
  const menuLinks = menuList.querySelectorAll('.menu-link');
  const sections = document.querySelectorAll('section');

  menuList.addEventListener('click', (e) => {
    e.preventDefault();
    const clickedLink = e.target.closest('.menu-link');

    if (clickedLink) {
      sections.forEach((section) => section.classList.add('visually-hidden'));

      const targetData = clickedLink.getAttribute('data-target');
      const targetSection = document.querySelector(`.${targetData}`);

      if (targetSection) {
        targetSection.classList.remove('visually-hidden');
      }

      menuLinks.forEach((link) => {
        const icon = link.querySelector('.currentPointer');

        if (icon) {
          icon.classList.remove('visually-hidden');
        }
        link.classList.remove('active');
      });

      const clickedIcon = clickedLink.querySelector('.currentPointer');

      if (clickedIcon) {
        clickedIcon.classList.add('visually-hidden');
      }
      clickedLink.classList.add('active');
    }
  });
});
