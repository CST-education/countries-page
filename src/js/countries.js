
// импортируем объект доступов из файла refs.js
import refs from "./refs.js";
// деструктуризируем свойства объекта доступов,
// чтобы обращаться к DOM-элементам напрямую,
// не через объект refs
const { searchForm, searchResults, modal, modalContent, coutriesList } = refs;
// импортируем шаблоны из папки template
import countriesListItem from "../template/countriesListItem.hbs";
import modalCountryItem from "../template/modalCountryItem.hbs";
import countrySearchItem from "../template/countrySearchItem.hbs";

// СЛУШАТЕЛИ СОБЫТИЙ
// вешаем слушателя событий на глобальный объект window
// и слушаем событие загрузки страницы, передаем функцию запроса и отрисовки списка стран
// при загрузке страницы
window.addEventListener("DOMContentLoaded", getAllCountries);
// вешаем слушателя событий на форму с полем ввода названия страны и вызываем функцию запроса и
// отрисоки полученных стран или страны для отрисовки в результатах поиска
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let searchName = event.target.elements.search.value;
  //   имя, шаблон, место встраивания
  searchCountry(searchName);
  // зачищаем форму после отправки запроса
  searchForm.reset();
});
// закрываем модальное окно по Escape
window.addEventListener("keydown", (e) => {
  //   console.log(e);
  if (e.code === "Escape") {
    modal.classList.add("is-hidden");
    modalContent.innerHTML = "";
  }
});
// закрываем модальное окно по клику за пределами карточки
modal.addEventListener("click", (e) => {
  //   console.log(e.target);
  if (e.target.id !== "content-modal") {
    modal.classList.add("is-hidden");
    modalContent.innerHTML = "";
  }
});

let base_url = `https://restcountries.eu/rest/v2/`;

// создаем функцию запроса всех стран для вывода общего списка
function getAllCountries() {
  let all_point = `all`;
  fetch(base_url + all_point)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const items = countriesListItem(data);
      coutriesList.insertAdjacentHTML("afterbegin", items);
      const countries = [...coutriesList.children];
      countries.forEach((country) => {
        country.addEventListener("click", (event) => {
          let name = event.target.textContent.trim();
          let country_point = `name/${name}`;
          fetch(base_url + country_point)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              const item = modalCountryItem(data);
              modalContent.insertAdjacentHTML("afterbegin", item);
              modal.classList.remove("is-hidden");
            });
        });
      });
    });
}

// создаем функцию запроса и отрисовки данных по имени страны
function searchCountry(searchName) {
  let country_point = `name/${searchName}`;
  fetch(base_url + country_point)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const items = countrySearchItem(data);
      searchResults.insertAdjacentHTML("afterbegin", items);
      const countries = [...searchResults.children];

      countries.forEach((country) => {
        country.addEventListener("click", (event) => {
          let name = event.target.textContent.trim();

          let country_point = `name/${name}`;
          fetch(base_url + country_point)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              const item = modalCountryItem(data);
              modalContent.insertAdjacentHTML("afterbegin", item);
              modal.classList.remove("is-hidden");
            });
        });
      });
    });
}
