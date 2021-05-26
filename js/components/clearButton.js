import { showCompanies } from "./showCompanies.js";

const container = ".list";

export function clearButton () {
    const clearBtn = document.querySelector(".clearButton");

    clearBtn.addEventListener("click", clearFavourites);

    function clearFavourites() {

        //clear local storage
        localStorage.clear();
            
        showCompanies([], container);
        //clear the ul
        

    }
}