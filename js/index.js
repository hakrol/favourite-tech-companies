import { baseUrl } from "./settings/api.js";
import { showCompanies } from "./components/showCompanies.js";
import { searchCompanies } from "./components/searchCompanies.js";

let companiesUrl = baseUrl + "companies";
const container = ".list";

async function createList() {
    try {
        const response = await fetch(companiesUrl);
        const json = await response.json();

        showCompanies(json, container);
        searchCompanies(json, container);
    } catch (error) {
        console.log(error);
    }
}

createList();
