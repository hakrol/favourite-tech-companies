import { favButton } from "./favButton.js";
import { getFavourites } from "./favFunctions.js";

export function showCompanies(data, targetElement) {
  const listContainer = document.querySelector(targetElement);

  const favourites = getFavourites();

  listContainer.innerHTML = "";

  data.forEach(function (company) {
    let cssClass = "fa-circle";

    const doesObjectExist = favourites.find(function (fav) {
      return parseInt(fav.id) === company.id;
    });

    if (doesObjectExist) {
      cssClass = "fa-check-circle";
    }

    listContainer.innerHTML += `<li class="list-card">
        <div>
          <h2>${company.name}</h2>
          <p>Founded: ${company.founded}</p>
          <p>CEO: ${company.ceo}</p>
          <p>Employees: ${company.Employees}</p>
        </div>
        <i class="fa ${cssClass} fa-3x button" data-id="${company.id}" data-name="${company.name}" data-founded="${company.founded}" data-ceo="${company.ceo}" data-employees="${company.Employees}"></i>
      </li>`;
  });

  favButton();
}
