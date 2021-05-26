import { showCompanies } from "./showCompanies.js";

export function searchCompanies(data, targetElement) {
  const searchInput = document.querySelector(".search");
  console.log(searchInput);

  function filterCompaniesByName(event) {
    const field = event.target.dataset.field;
    console.log(field);
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredCompanies = data.filter(function (company) {
      if (company[field].toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });

    showCompanies(filteredCompanies, targetElement);
  }

  searchInput.addEventListener("keyup", filterCompaniesByName);
}
