(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const main = "";
document.addEventListener("DOMContentLoaded", () => {
  const menuList = document.querySelector(".menu-list");
  const menuLinks2 = menuList.querySelectorAll(".menu-link");
  const sections = document.querySelectorAll("section");
  menuList.addEventListener("click", (e) => {
    e.preventDefault();
    const clickedLink = e.target.closest(".menu-link");
    if (clickedLink) {
      sections.forEach((section) => section.classList.add("visually-hidden"));
      const targetData = clickedLink.getAttribute("data-target");
      const targetSection = document.querySelector(`.${targetData}`);
      if (targetSection) {
        targetSection.classList.remove("visually-hidden");
      }
      menuLinks2.forEach((link) => {
        const icon = link.querySelector(".currentPointer");
        if (icon) {
          icon.classList.remove("visually-hidden");
        }
        link.classList.remove("active");
      });
      const clickedIcon = clickedLink.querySelector(".currentPointer");
      if (clickedIcon) {
        clickedIcon.classList.add("visually-hidden");
      }
      clickedLink.classList.add("active");
    }
  });
});
const jsonData = [
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Popy Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Popy Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Popy Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Popy Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Popy Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Popy Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  },
  {
    name: "Jane Cooper",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: true
  },
  {
    name: "Popy Jones",
    company: "Google",
    phone: "(302) 555-0107",
    email: "floyd@yahoo.com",
    country: "Iran",
    status: false
  }
];
document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector(".customers-table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = [
    "Customer Name",
    "Company",
    "Phone Number",
    "Email",
    "Country",
    "Status"
  ];
  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);
  renderTable(currentPage);
  renderPagination();
  updateBottomText();
  const searchInput = document.querySelector(".search-input");
  searchInput.addEventListener("input", () => {
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
function renderTable(pageNumber, filteredData) {
  const tableBody = document.querySelector(".customers-table tbody");
  tableBody.innerHTML = "";
  let dataToRender = filteredData || jsonData;
  const startIndex = (pageNumber - 1) * itemPerPage;
  const endIndex = Math.min(startIndex + itemPerPage, dataToRender.length);
  for (let i = startIndex; i < endIndex; i++) {
    const row = document.createElement("tr");
    Object.values(dataToRender[i]).forEach((value, j) => {
      const cell = document.createElement("td");
      if (j === 5 && value === true) {
        const div = document.createElement("div");
        div.classList.add("customers-status", "active");
        div.textContent = "Active";
        cell.appendChild(div);
      } else if (j === 5 && value === false) {
        const div = document.createElement("div");
        div.classList.add("customers-status");
        div.textContent = "Inactive";
        cell.appendChild(div);
      } else {
        cell.textContent = value;
      }
      row.appendChild(cell);
    });
    tableBody.appendChild(row);
  }
}
function renderPagination(filteredData) {
  const paginationContainer = document.querySelector(".pagination");
  paginationContainer.innerHTML = "";
  let dataToRender = filteredData || jsonData;
  const totalPages2 = Math.ceil(dataToRender.length / itemPerPage);
  if (totalPages2 <= 5) {
    for (let i = 1; i <= totalPages2; i++) {
      renderPaginationButton(i, paginationContainer);
    }
  } else {
    if (currentPage <= 3) {
      for (let i = 1; i <= 4; i++) {
        renderPaginationButton(i, paginationContainer);
      }
      if (currentPage < totalPages2) {
        paginationContainer.appendChild(createSpanElement());
        renderPaginationButton(totalPages2, paginationContainer);
      }
    } else if (currentPage >= totalPages2 - 2) {
      renderPaginationButton(1, paginationContainer);
      paginationContainer.appendChild(createSpanElement());
      for (let i = totalPages2 - 3; i <= totalPages2; i++) {
        renderPaginationButton(i, paginationContainer);
      }
    } else {
      renderPaginationButton(1, paginationContainer);
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        renderPaginationButton(i, paginationContainer);
      }
      paginationContainer.appendChild(createSpanElement());
      renderPaginationButton(totalPages2, paginationContainer);
    }
  }
}
function renderPaginationButton(pageNumber, container) {
  const pageBtn = document.createElement("button");
  pageBtn.textContent = pageNumber;
  pageBtn.classList.add("pagination-btn");
  if (pageNumber === currentPage) {
    pageBtn.classList.add("active");
  }
  pageBtn.addEventListener("click", () => {
    currentPage = pageNumber;
    renderTable(currentPage, currentFilteredData);
    renderPagination(currentFilteredData);
    updateBottomText(currentFilteredData.length);
  });
  container.appendChild(pageBtn);
}
function createSpanElement() {
  const dots = document.createElement("span");
  dots.textContent = "...";
  return dots;
}
function updateBottomText(filteredDataLength) {
  const bottomText = document.querySelector(".customers-bottom-text");
  const dataLength = filteredDataLength !== void 0 && filteredDataLength !== null ? filteredDataLength : jsonData.length;
  const startEntry = (currentPage - 1) * itemPerPage + 1;
  const endEntry = Math.min(startEntry + itemPerPage - 1, dataLength);
  bottomText.textContent = `Showing data ${startEntry} to ${endEntry} of ${dataLength} entries`;
}
const leftBtn = document.querySelector(".pagination-btn.left");
const rightBtn = document.querySelector(".pagination-btn.right");
leftBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderTable(currentPage, currentFilteredData);
    renderPagination(currentFilteredData);
    updateBottomText(currentFilteredData.length);
  }
});
rightBtn.addEventListener("click", () => {
  const totalPages2 = Math.ceil(currentFilteredData.length / itemPerPage);
  if (currentPage < totalPages2) {
    currentPage++;
    renderTable(currentPage, currentFilteredData);
    renderPagination(currentFilteredData);
    updateBottomText(currentFilteredData.length);
  }
});
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
var hasPassiveEvents = false;
if (typeof window !== "undefined") {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return void 0;
    }
  };
  window.addEventListener("testPassive", null, passiveTestOptions);
  window.removeEventListener("testPassive", null, passiveTestOptions);
}
var isIosDevice = typeof window !== "undefined" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPosition = void 0;
var previousBodyPaddingRight = void 0;
var allowTouchMove = function allowTouchMove2(el) {
  return locks.some(function(lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }
    return false;
  });
};
var preventDefault = function preventDefault2(rawEvent) {
  var e = rawEvent || window.event;
  if (allowTouchMove(e.target)) {
    return true;
  }
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
};
var setOverflowHidden = function setOverflowHidden2(options) {
  if (previousBodyPaddingRight === void 0) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
    if (_reserveScrollBarGap && scrollBarGap > 0) {
      var computedBodyPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = computedBodyPaddingRight + scrollBarGap + "px";
    }
  }
  if (previousBodyOverflowSetting === void 0) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
};
var restoreOverflowSetting = function restoreOverflowSetting2() {
  if (previousBodyPaddingRight !== void 0) {
    document.body.style.paddingRight = previousBodyPaddingRight;
    previousBodyPaddingRight = void 0;
  }
  if (previousBodyOverflowSetting !== void 0) {
    document.body.style.overflow = previousBodyOverflowSetting;
    previousBodyOverflowSetting = void 0;
  }
};
var setPositionFixed = function setPositionFixed2() {
  return window.requestAnimationFrame(function() {
    if (previousBodyPosition === void 0) {
      previousBodyPosition = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left
      };
      var _window = window, scrollY = _window.scrollY, scrollX = _window.scrollX, innerHeight = _window.innerHeight;
      document.body.style.position = "fixed";
      document.body.style.top = -scrollY;
      document.body.style.left = -scrollX;
      setTimeout(function() {
        return window.requestAnimationFrame(function() {
          var bottomBarHeight = innerHeight - window.innerHeight;
          if (bottomBarHeight && scrollY >= innerHeight) {
            document.body.style.top = -(scrollY + bottomBarHeight);
          }
        });
      }, 300);
    }
  });
};
var restorePositionSetting = function restorePositionSetting2() {
  if (previousBodyPosition !== void 0) {
    var y = -parseInt(document.body.style.top, 10);
    var x = -parseInt(document.body.style.left, 10);
    document.body.style.position = previousBodyPosition.position;
    document.body.style.top = previousBodyPosition.top;
    document.body.style.left = previousBodyPosition.left;
    window.scrollTo(x, y);
    previousBodyPosition = void 0;
  }
};
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled2(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};
var handleScroll = function handleScroll2(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;
  if (allowTouchMove(event.target)) {
    return false;
  }
  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    return preventDefault(event);
  }
  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    return preventDefault(event);
  }
  event.stopPropagation();
  return true;
};
var disableBodyScroll = function disableBodyScroll2(targetElement, options) {
  if (!targetElement) {
    console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
    return;
  }
  if (locks.some(function(lock2) {
    return lock2.targetElement === targetElement;
  })) {
    return;
  }
  var lock = {
    targetElement,
    options: options || {}
  };
  locks = [].concat(_toConsumableArray(locks), [lock]);
  if (isIosDevice) {
    setPositionFixed();
  } else {
    setOverflowHidden(options);
  }
  if (isIosDevice) {
    targetElement.ontouchstart = function(event) {
      if (event.targetTouches.length === 1) {
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function(event) {
      if (event.targetTouches.length === 1) {
        handleScroll(event, targetElement);
      }
    };
    if (!documentListenerAdded) {
      document.addEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = true;
    }
  }
};
var clearAllBodyScrollLocks = function clearAllBodyScrollLocks2() {
  if (isIosDevice) {
    locks.forEach(function(lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });
    if (documentListenerAdded) {
      document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = false;
    }
    initialClientY = -1;
  }
  if (isIosDevice) {
    restorePositionSetting();
  } else {
    restoreOverflowSetting();
  }
  locks = [];
};
var enableBodyScroll = function enableBodyScroll2(targetElement) {
  if (!targetElement) {
    console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
    return;
  }
  locks = locks.filter(function(lock) {
    return lock.targetElement !== targetElement;
  });
  if (isIosDevice) {
    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;
    if (documentListenerAdded && locks.length === 0) {
      document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = false;
    }
  }
  if (isIosDevice) {
    restorePositionSetting();
  } else {
    restoreOverflowSetting();
  }
};
const bodyScrollLock = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll
}, Symbol.toStringTag, { value: "Module" }));
const refsMenu = {
  openMenuBtn: document.querySelector(".js-menu-open"),
  closeMenuBtn: document.querySelector(".js-menu-close"),
  overlayMenu: document.querySelector(".js-menu")
};
const toggleMenu = () => {
  const isMenuOpen = refsMenu.openMenuBtn.getAttribute("aria-expanded") === "true" || false;
  refsMenu.openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
  refsMenu.overlayMenu.classList.toggle("is-open");
  const scrollLockMethod = !isMenuOpen ? "disableBodyScroll" : "enableBodyScroll";
  bodyScrollLock[scrollLockMethod](document.body);
};
refsMenu.openMenuBtn.addEventListener("click", toggleMenu);
refsMenu.closeMenuBtn.addEventListener("click", toggleMenu);
window.matchMedia("(min-width: 1200px)").addEventListener("change", (event) => {
  if (!event.matches)
    return;
  refsMenu.overlayMenu.classList.remove("is-open");
  refsMenu.openMenuBtn.setAttribute("aria-expanded", false);
  enableBodyScroll(document.body);
});
const menuLinks = document.querySelectorAll(".menu-list .menu-link");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMenu();
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const paginationBox = document.querySelector(".pagination-box");
  const header = document.querySelector("header");
  let counter = 1;
  paginationBox.addEventListener("click", (e) => {
    const activeBtn = paginationBox.querySelector(".pagination-btn.active");
    if (counter === Number(activeBtn.textContent)) {
      return;
    }
    if (e.target.classList.contains("pagination-btn")) {
      if (e.target.classList.contains("active") || counter === activeBtn.textContent) {
        return;
      }
      counter = Number(activeBtn.textContent);
      header.scrollIntoView({ behavior: "smooth" });
    }
  });
});
