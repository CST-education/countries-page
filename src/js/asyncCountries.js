import refs from "./refs.js";
const { searchForm, searchResults, modal, modalContent, coutriesList } = refs;
import countriesListItem from "../template/countriesListItem.hbs";
import modalCountryItem from "../template/modalCountryItem.hbs";
import countrySearchItem from "../template/countrySearchItem.hbs";

window.addEventListener("DOMContentLoaded", getAllCountries);

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let searchName = event.target.elements.search.value;
  searchCountry(searchName);
  searchForm.reset();
});

window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    modal.classList.add("is-hidden");
    modalContent.innerHTML = "";
  }
});

modal.addEventListener("click", (e) => {
  if (e.target.id !== "content-modal") {
    modal.classList.add("is-hidden");
    modalContent.innerHTML = "";
  }
});

let base_url = `https://restcountries.eu/rest/v2/`;

async function getAllCountries() {
  let all_point = `all`;
  let url = base_url + all_point;

  const response = await fetch(url);
  const data = await response.json();

  const items = countriesListItem(data);
  coutriesList.insertAdjacentHTML("afterbegin", items);

  const countries = [...coutriesList.children];
  return countries.forEach((country) => {
    return country.addEventListener("click", async (event) => {
      let name = event.currentTarget.textContent.trim();
      let country_point = `name/${name}`;
      let url = base_url + country_point;

      const response = await fetch(url);
      const data = await response.json();

      const item = modalCountryItem(data);
      modalContent.insertAdjacentHTML("afterbegin", item);
      modal.classList.remove("is-hidden");
    });
  });
}

async function searchCountry(searchName) {
  let country_point = `name/${searchName}`;
  let url = base_url + country_point;
  const response = await fetch(url);
  const data = await response.json();

  const items = countrySearchItem(data);
  searchResults.insertAdjacentHTML("afterbegin", items);
  const countries = [...searchResults.children];
  countries.forEach((country) => {
    country.addEventListener("click", async (event) => {
      let name = event.target.textContent.trim();
      let country_point = `name/${name}`;
      let url = base_url + country_point;

      const response = await fetch(url);
      const data = await response.json();

      const item = modalCountryItem(data);
      modalContent.insertAdjacentHTML("afterbegin", item);
      modal.classList.remove("is-hidden");
    });
  });
}
