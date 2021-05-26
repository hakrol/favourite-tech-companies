import { getFavourites } from "./components/favFunctions.js";
import { clearButton } from "./components/clearButton.js";

const favourites = getFavourites();

let companiesContainer = document.querySelector(".list-wrapper ul");
clearButton();

if (favourites.length === 0) {
  companiesContainer.innerHTML = `<h2>You need to choose some favourites!</h2>`;
}

favourites.forEach((favourite) => {
  companiesContainer.innerHTML += `<li class="list-card-fav">
    <div>
      <h2>${favourite.name}</h2>
      <p>Founded: ${favourite.founded}</p>
      <p>CEO: ${favourite.ceo}</p>
      <p>Employees: ${favourite.Employees}</p>
    </div>
  </li>`;
});
