document.addEventListener('DOMContentLoaded', () => {
  const paginationBox = document.querySelector('.pagination-box');
  const title = document.querySelector('.customers-title');

  let counter = 1;

  paginationBox.addEventListener('click', (e) => {
    const activeBtn = paginationBox.querySelector('.pagination-btn.active');

    if (counter === Number(activeBtn.textContent)) {
      return;
    }

    if (e.target.classList.contains('pagination-btn')) {
      if (
        e.target.classList.contains('active') ||
        counter === activeBtn.textContent
      ) {
        return;
      }

      counter = Number(activeBtn.textContent);

      title.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
