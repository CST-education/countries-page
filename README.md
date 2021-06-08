# countries-page# Техническое задание

# Содержание

1. репозиторий на Github
2. клон репозитория на компьютер
3. структура проекта в репозитории
4. работа с кодом
5. деплой на Github-pages

# 1. Создание удаленного репозитория на Github

- зайди в свой профиль на `Github`
- в разделе `Repositories` нажми на зеленую кнопку `New`
- в открывшейся странице укажи имя нового репозитория
- выбери файл `.gitignore` от `Node` из выпадающего списка
- выбери файл `LICENSE` от `MIT License` из выпадающего списка

<b>Помни правила именования файлов и папок <i>(без верхнего регистра и
пробелов)</i></b>

- внизу нажми зеленую кнопку Create repository

# 2. Клонирование удаленного репозитория с Github себе на компьютер

- после создания нового репо на Github, открывается его страница, где указан его
  url-адрес. Скопируй этот адрес в буфер обмена (`Ctrl+C`)
- у себя на компьютере найди место в какой-то папке или на рабочем столе, где
  планируешь хранить свой репозиторий с проектом и не будешь его перемещать
- находясь в такой папке, открой консоль Git Bash (правой кнопкой мыши в пустом
  месте папки - нажать `Git Bash Here`)
- в открывшейся консоли введи команду для клонирования себе на комп твоего
  нового репозитория из Github `git clone url-repo` `url-repo` - это тот
  url-адрес твоего репозитория, что ты копировал/а в буфер. вставить его в
  консоль из буфера можно комбинацией клавиш `Shift+Insert` или нажав правую
  кнопку мыши и выбрать `paste`
- после ввода команды с url-адресом, нажми `Enter` - начнется инициализация
  (клонирование) твоего репозитория тебе в папку
- после успешного клона у тебя в проводнике (папке, куда клонировал/а) появится
  папка с таким же именем, что и твой удаленный репозиторий на Github.

Зайди в эту папку и убедись, что в ней есть полупрозрачная (скрытая) папка
`.git`.

Если ее нет и у тебя Windows, в верхней панели папки выбери вкладку `Вид` и
поставь галочку в пункте `Скрытые элементы`.

Для Mac комбинация клавиш `Command + Shift + .`

# 3. Структура проекта и начало работы

- открой склонированный репозиторий в редакторе кода VSCode.

Помни, что в редакторе должен быть открыт только текущий репозиторий, в котором
работаешь, не все содержимое твоего компьютера.

Пока что структура твоего проекта пуста. Давай создавать.

- в папку твоего проекта нужно скопировать файлы из папки рабочей сборки
  `Webpack`.

Рабочую сборку можно скачать архивом из репозитория по
[ссылке](https://github.com/CST-education/webpack_base_bundle).

- все файлы с кодом размещены в папке `src`. В этой папке следует создавать
  вложенные папки и файлы для работы с проектом.

- открой `Terminal VSCode` через вкладку вверху окна редактора
  `Terminal -> New Terminal` или комбинацией клавиш `` Ctrl + ` ``
- в терминале редактора запусти команду установки всех необходимых зависимостей
  `npm install` или краткую команду `npm i`. В структуре проекта должна
  появиться папка `node_modules`. В этой папке не нужно ничего править, в ней
  находятся скачанные плагины и библиотеки, перечисленные в файле
  `package.json`, необходимые для работы проекта.
- после установки всех зависимостей можно запускать сборку проекта командой в
  терминале `npm start`
- при отсутствии ошибок в коде, проект должен открыться в окне браузера.
- для работы над заданием нужно дополнить существующую структуру папки `scr`, а
  именно, следует создать:

1. вложенную папку `template` и три файла в ней
   1. countriesListItem.hbs
   2. countrySearchItem.hbs
   3. modalCountryItem.hbs
2. вложенную папку `js` и два файла в ней
   1. refs.js
   2. counties.js
3. в существующую папку `css` добавь файлы
   1. modal.css
   2. modern-normalize.css

Код файла modern-normalize.css можно взять
[здесь](https://github.com/CST-education/custom-files/blob/main/modern-normalize.css)

# 4. Работа с кодом

- доки API стран по [ссылке](https://restcountries.eu/)
- в `index.html` добавь следующую разметку документа

```
 <body>
    <header class="header">
      <div class="container">
        <nav>
          <ul class="nav-list">
            <li>
              <a href="#search">search country</a>
            </li>
            <li>
              <h1>Find Your Country</h1>
            </li>
            <li>
              <a href="#all">all countries</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <section class="seacrh-section" id="search">
        <h2>Search</h2>
        <form class="search-form" id="search-form">
          <label for="">Country name</label>
          <input
            type="text"
            name="search"
            placeholder="Enter the country name please"
          />
          <button type="submit" id="search-btn">search</button>
        </form>
        <h3>search results</h3>
        <ul class="search-results" id="search-results"></ul>
      </section>
      <section class="all-countries-section" id="all">
        <h2>All Countries</h2>
        <ul class="coutries-list" id="coutries-list"></ul>
      </section>
      <div class="modal is-hidden" id="modal">
        <div class="modal-content" id="modal-content"></div>
      </div>
    </main>
  </body>
```

- в `modal.css` добавь следующие стили

```
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-content {

  display: flex;
  justify-content: center;
  background-color: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
  width: 100%;
  height: auto;
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
}
.is-hidden {
  display: none;
}

```

- в `styles.css` добавь следующие стили

```
body {
  background: black;
  color: wheat;
  font-size: 16px;
}
.container {
  min-width: 320px;
  max-width: 1200px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}

.header {
  padding: 20px 0;
  border-bottom: 1px solid;
  position: fixed;
  background-color: inherit;
  width: 100%;
  text-transform: uppercase;
}
.nav-list {
  display: flex;
  justify-content: space-around;
}

.seacrh-section {
  padding-top: 100px;
  text-align: center;
}
.search-form {
  margin: 100px 0;
}
.search-form input {
  display: block;
  margin: 50px auto;
  width: 300px;
  padding: 10px 20px;
  border: none;
  border-bottom: 1px solid wheat;
  background-color: transparent;
  color: yellowgreen;
}
.search-form button[type="submit"] {
  padding: 10px 20px;
  border: 1px solid wheat;
  background-color: transparent;
  color: wheat;
  cursor: pointer;
}
.search-form button[type="submit"]:hover,
.search-form button[type="submit"]:focus {
  border-color: yellowgreen;
  color: yellowgreen;
}
.search-results {
  border: 1px solid;
  width: 90%;
  margin: 50px auto;
  padding: 100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: center;
}
.search-results li {
  margin: 10px;
  padding: 50px;
  cursor: pointer;
}
.all-countries-section {
  text-align: center;
  padding: 100px 0;
}
.all-countries-section h2 {
  text-transform: uppercase;
  font-size: 5rem;
}
.coutries-list {
  display: flex;
  flex-flow: row wrap;
  padding: 100px;
  justify-content: center;
  cursor: pointer;
}
.coutries-list li {
  display: flex;
  align-items: center;
  padding: 20px;
  margin: 20px;
  border: 1px solid;
  min-width: 300px;
  width: 40%;
}
.coutries-list li img {
  margin-right: 20px;
}
.modal-item {
  background-color: rgba(255, 255, 255, 0.794);
  color: rgb(18, 15, 39);
  padding: 20px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  font-size: 2rem;
}
.modal-item h3 {
  margin-bottom: 10px;
}
.info {
  margin: 20px auto;
  padding: 10px;
}
.info h4 {
  margin-bottom: 10px;
}

```

- в файле `refs.js` пропиши доступы к элементам:

1.  `<form class="search-form" id="search-form">`
2.  `<ul class="search-results" id="search-results"></ul>`
3.  `<ul class="countries-list" id="countries-list"></ul>`
4.  `<div class="modal is-hidden" id="modal">`
5.  `<div class="modal-content" id="modal-content"></div>`

<b>Доступы к вышеуказанным элементам указать внутри экспортируемого по дефолту
объекта в виде пар - ключ: значение. </b>

Пример:

```
export default {
  element: document.getElementById("id"),
  nextElement: document.querySelector(".class"),
};

```

- в файлах шаблонов не хватаем имен свойств из полученных объектов, чтобы
  отрисовывать их значения. Перенеси код файлов себе и укажи нужные имена
  свойств в `{{}}`

файл countriesListItem.hbs

```
{{#each this}}
  <li>
    <div>
      <img src={{-------}} alt={{---------}} width="100" />
    </div>
    <h3>
      {{----------}}
    </h3>
  </li>
{{/each}}
```

файл modalCountryItem.hbs

```
{{#each this}}
  <div class="modal-item">
    <h3>
      {{----------}} - {{----------}}
      <br />
      ({{------------}})
    </h3>
    <div>
      <img src={{-----------}} alt={{-----------}} width="250" />
    </div>
    <div class="info">
        <h4>region: <span>{{----------}} - {{----------}}</span></h4>
        <h4>area: <span>{{-----}} km<sup>2</sup></span></h4>
        <h4>population: <span>{{----------}}</span></h4>
        <h4>languages: </h4>
          <ul>{{#each languages}}
            <li>{{-----}}-{{-------}}</li>
            {{/each }}
    </div>
  </div>
{{/each}}
```

файл countrySearchItem.hbs

```
{{#each this}}
  <li>
    <h2>
      {{------}}
    </h2>
  </li>
{{/each}}
```

- в главный файл `index.js` подключи все другие файлы <b>JavaScript</b> и
  <b>CSS</b>

```
import css from "./css/styles.css";

// импорты файлов стилей
import modalStyles from "./css/modal.css";
import normalize from "./css/modern-normalize.css";

// импорт файла с кодом запросов инфо о странах
import "./js/countries.js";
```

- порядок работы в файле `countries.js`

## ИМПОРТЫ

1. импортируем объект доступов из файла refs.js под именем refs
2. деструктуризируем свойства объекта доступов, чтобы обращаться к DOM-элементам
   напрямую, не через объект refs

```
const { ...здесь... } = refs;
```

3. импортируем шаблоны из папки template

```
import countriesListItem from "../template/countriesListItem.hbs";
import modalCountryItem from "../template/modalCountryItem.hbs";
import countrySearchItem from "../template/countrySearchItem.hbs";
```

## СЛУШАТЕЛИ СОБЫТИЙ

4. вешаем слушателя событий на глобальный объект window по событию загрузки
   страницы, передаем ссылку на функцию <b>getAllCountries</b> для запроса и
   отрисовки списка стран сразу при загрузке

```
window.addEventListener("DOMContentLoaded", getAllCountries);
```

5. вешаем слушателя событий на форму с полем ввода названия страны и вызываем
   функцию запроса и отрисоки полученных стран или страны для отрисовки в
   результатах поиска

```
searchForm.addEventListener("submit", (event) => {

    <!-- отменяем дефолтное событие браузера - отправку формы -->

    <!-- получаем значение из инпута с  name="search" и сохраняем в переменную searchName -->

    <!-- вызываем функцию searchCountry для запроса и отрисовки страны по введенному значению, передаем в ее вызов полученное из формы значение значение  -->

    <!-- зачищаем форму после отправки запроса -->
    searchForm.reset();
});
```

6. закрываем модальное окно по Escape, добавляя класс is-hidden всему модальному
   окну и зачищаем див с классом modal-content

```
window.addEventListener("keydown", (e) => {
  <!-- тут пишем инструкции -->
});
```

7. закрываем модальное окно по клику за пределами карточки, т.е. если целевой
   элеменет не имеет id="content-modal"

```
modal.addEventListener("click", (e) => {
  <!-- тут пишем инструкции -->
});
```

## ФУНКЦИИ

8. создаем функцию getAllCountries для запроса всех стран для вывода общего
   списка

```
function getAllCountries() {

  let url = `https://restcountries.eu/rest/v2/all`;

  fetch(url)
    .then((response) => {

      // преобразуем полученный ответ в формат json
      // и возвращаем его

    })
    .then((data) => {
      // вызываем шаблон countriesListItem, передаем в него полученную data и записываем результат в переменную items

      // встраиваем созданную шаблоном разметку items в `<ul class="coutries-list" id="coutries-list"></ul>` - вспоминаем, как назвали деструктуризированную из объекта refs переменную с ссылкой на этот ul
        для встраивания разметки используем метод insertAdjacentHTML

      // теперь создаем переменную countries и записываем в нее преобразование коллекции "детей" вышеуказанного списка стран в полноценный массив с помощью [...SPREAD]

      // перебираем через forEach созданный массив стран и на каждую вешаем слушателя по клику

      countries.forEach((country) => {
        country.addEventListener("click", (event) => {

      // записываем в переменную name значение свойства textContent с применением метода trim(), чтобы убить лишние пробелы из целевого элемента события

      // снова добавляем переменную с адресом запроса
    let url = `https://restcountries.eu/rest/v2/name/${name}`;

      // делаем новый запрос через метод fetch(url)
    обрабатываем методами then

          fetch(url)
            .then((response) => {
              return response.json();
            })
            .then((data) => {

        // при получении данных о стране, передаем их в вызов шаблона modalCountryItem
    результат встраиваем в `<div class="modal-content" id="modal-content"></div>` - его переменная должна быть деструктуризирована из refs


        // у `<div class="modal is-hidden" id="modal">` - переменная, там же из refs
    удаляем класс "is-hidden" для отображения

            });
        });
      });
    });
}
```

9. создаем функцию searchCountry для запроса и отрисовки страны по введенному
   значению

```
function searchCountry(searchName) {

    let url = `https://restcountries.eu/rest/v2/name/${searchName}`;

    fetch(url)
    .then((response) => {
      // возвращаем ответ в формате json
    })
    .then((data) => {
      // передаем полученную data в вызов countrySearchItem

      // встраиваем разметку из countrySearchItem в
      `<ul class="search-results" id="search-results"></ul>` методом insertAdjacentHTML


      // теперь создаем переменную countries и записываем в нее преобразование коллекции "детей" вышеуказанного списка стран в полноценный массив с помощью [...SPREAD]

      // перебираем через forEach созданный массив стран и на каждую вешаем слушателя по клику

      countries.forEach((country) => {
        country.addEventListener("click", (event) => {

    // записываем в переменную name значение свойства textContent с применением метода trim(), чтобы убить лишние пробелы из целевого элемента события


    // добавляем переменную с адресом запроса
    let url = `https://restcountries.eu/rest/v2/name/${name}`;

    // делаем новый запрос через метод fetch(url)
    // обрабатываем методами then
          fetch(url)
            .then((response) => {
              return response.json();
            })
            .then((data) => {

    // при получении данных о стране, передаем их в вызов шаблона modalCountryItem
    результат встраиваем в `<div class="modal-content" id="modal-content"></div>` - его переменная должна быть деструктуризирована из refs


    // у `<div class="modal is-hidden" id="modal">` - переменная, там же из refs
    удаляем класс "is-hidden" для отображения

            });
        });
      });
    });
}

```

## 5. деплой на Github-pages

- отправь в удаленный Github-репозиторий свой код команды в терминале:  
  `git add .` - добавить под контроль все новые файлы и папки  
  `git commit -m "commit-name"` - сохранить текущую версию кода и всего
  проекта  
  `git push` - отправить в удаленный репозиторий на Github все свои коммиты, ну
  или хотя бы один)

- зайди на страницу своего репозитория в Github, убедись, что код запушился
  (<i>напротив имени папок и файлов, в которых были последние изменения будет
  указано имя твоего последнего коммита</i>)

- если все гут, запусти в терминале команду `npm run deploy`. Эта команда
  создаст gh-pages за тебя, тебе останется только проверить работоспособность
  созданной страницы в разделе ```settings -> PAGES ```и скопировать ее ссылку в раздел `about` в репозитории (для быстрого запуска страницы)

ВАЖНО! 

в файле `package.json` в свойстве ```url``` должна быть указана ссылка на твой репозиторий, а в свойстве ```homepage``` - ссылка на будущую gh-pages в формате, как на примере:

```
 "repository": {
    "type": "git",
    "url": "git+https://github.com/CST-education/countries-page.git"
  },

  "homepage": "https://github.com/CST-education/countries-page#readme",
```
