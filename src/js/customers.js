import jsonData from '../../customers.json';

document.addEventListener('DOMContentLoaded', () => {
  // Знаходимо таблицю, створюємо заголовок, тіло і завантажуємо початкові дані
  const table = document.querySelector('.customers-table');
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const headers = [
    'Customer Name',
    'Company',
    'Phone Number',
    'Email',
    'Country',
    'Status',
  ];

  headers.forEach((headerText) => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  table.appendChild(tbody);

  renderTable(currentPage);
  renderPagination();
  updateBottomText();

  // Пошук
  const searchInput = document.querySelector('.search-input');
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();

    currentFilteredData = jsonData.filter((customer) => {
      return customer.name.toLowerCase().includes(query);
    });

    currentPage = 1;

    totalPages = Math.ceil(currentFilteredData.length / itemPerPage);

    renderTable(currentPage, currentFilteredData);
    renderPagination(currentFilteredData);
    updateBottomText(currentFilteredData.length);
  });
});

const itemPerPage = 8;
let totalPages = Math.ceil(jsonData.length / itemPerPage);
let currentPage = 1;
let currentFilteredData = jsonData;

// Функція рендеринга таблиць з урахуванням поточної сторінки та відфільтрованих даних
function renderTable(pageNumber, filteredData) {
  const tableBody = document.querySelector('.customers-table tbody');
  tableBody.innerHTML = '';

  let dataToRender = filteredData || jsonData;
  const startIndex = (pageNumber - 1) * itemPerPage;
  const endIndex = Math.min(startIndex + itemPerPage, dataToRender.length);

  for (let i = startIndex; i < endIndex; i++) {
    const row = document.createElement('tr');
    Object.values(dataToRender[i]).forEach((value, j) => {
      const cell = document.createElement('td');

      if (j === 5 && value === true) {
        const div = document.createElement('div');
        div.classList.add('customers-status', 'active');
        div.textContent = 'Active';
        cell.appendChild(div);
      } else if (j === 5 && value === false) {
        const div = document.createElement('div');
        div.classList.add('customers-status');
        div.textContent = 'Inactive';
        cell.appendChild(div);
      } else {
        cell.textContent = value;
      }

      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  }
}

// Функція рендеринга пагінації
function renderPagination(filteredData) {
  const paginationContainer = document.querySelector('.pagination');
  paginationContainer.innerHTML = '';

  let dataToRender = filteredData || jsonData;
  const totalPages = Math.ceil(dataToRender.length / itemPerPage);

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      renderPaginationButton(i, paginationContainer, filteredData);
    }
  } else {
    if (currentPage <= 3) {
      for (let i = 1; i <= 4; i++) {
        renderPaginationButton(i, paginationContainer, filteredData);
      }
      if (currentPage < totalPages) {
        paginationContainer.appendChild(createSpanElement());
        renderPaginationButton(totalPages, paginationContainer, filteredData);
      }
    } else if (currentPage >= totalPages - 2) {
      renderPaginationButton(1, paginationContainer, filteredData);
      paginationContainer.appendChild(createSpanElement());
      for (let i = totalPages - 3; i <= totalPages; i++) {
        renderPaginationButton(i, paginationContainer, filteredData);
      }
    } else {
      renderPaginationButton(1, paginationContainer, filteredData);
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        renderPaginationButton(i, paginationContainer, filteredData);
      }
      paginationContainer.appendChild(createSpanElement());
      renderPaginationButton(totalPages, paginationContainer, filteredData);
    }
  }
}

//Відтворення кнопок пагінації
function renderPaginationButton(pageNumber, container) {
  const pageBtn = document.createElement('button');
  pageBtn.textContent = pageNumber;
  pageBtn.classList.add('pagination-btn');
  if (pageNumber === currentPage) {
    pageBtn.classList.add('active');
  }

  pageBtn.addEventListener('click', () => {
    currentPage = pageNumber;
    renderTable(currentPage, currentFilteredData);
    renderPagination(currentFilteredData);
    updateBottomText(currentFilteredData.length);
  });

  container.appendChild(pageBtn);
}

function createSpanElement() {
  const dots = document.createElement('span');
  dots.textContent = '...';
  return dots;
}

// Функція для оновлення тексту внизу таблиці
function updateBottomText(filteredDataLength) {
  const bottomText = document.querySelector('.customers-bottom-text');

  const dataLength =
    filteredDataLength !== undefined && filteredDataLength !== null
      ? filteredDataLength
      : jsonData.length;

  const startEntry = (currentPage - 1) * itemPerPage + 1;
  const endEntry = Math.min(startEntry + itemPerPage - 1, dataLength);
  bottomText.textContent = `Showing data ${startEntry} to ${endEntry} of ${dataLength} entries`;
}

//Обробники для кнопок "Previous" та "Next"
const leftBtn = document.querySelector('.pagination-btn.left');
const rightBtn = document.querySelector('.pagination-btn.right');

leftBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderTable(currentPage, currentFilteredData);
    renderPagination(currentFilteredData);
    updateBottomText(currentFilteredData.length);
  }
});

rightBtn.addEventListener('click', () => {
  const totalPages = Math.ceil(currentFilteredData.length / itemPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderTable(currentPage, currentFilteredData);
    renderPagination(currentFilteredData);
    updateBottomText(currentFilteredData.length);
  }
});
