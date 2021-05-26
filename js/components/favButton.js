// Adds a clickable button so the user can favourite companies

import { getFavourites, saveUserFavs } from "./favFunctions.js";

export function favButton() {
  const favButton = document.querySelectorAll(".list-card i");

  favButton.forEach(function (button) {
    button.addEventListener("click", handleClick);
  });
}

function handleClick(event) {
  event.target.classList.toggle("fa-check-circle");
  event.target.classList.toggle("fa-circle");

  const id = event.target.dataset.id;
  const name = event.target.dataset.name;
  const founded = event.target.dataset.founded;
  const ceo = event.target.dataset.ceo;
  const employees = event.target.dataset.employees;

  const userFavs = getFavourites();

  const companyFavourited = userFavs.find(function (fav) {
    return fav.id === id;
  });

  if (!companyFavourited) {
    const company = {
      id: id,
      name: name,
      founded: founded,
      ceo: ceo,
      Employees: employees,
    };

    userFavs.push(company);

    saveUserFavs(userFavs);
  } else {
    const newFavourite = userFavs.filter((fav) => fav.id !== id);
    saveUserFavs(newFavourite);
  }
}
