// импортируем файл плагина regenerator-runtime
// для обеспечения работы асинхронных функций async/await
import "regenerator-runtime/runtime.js";
import css from "./css/styles.css";

// импорты файлов стилей
import modalStyles from "./css/modal.css";
import normalize from "./css/modern-normalize.css";

// импорт файла с кодом запросов инфо о странах
// import "./js/countries.js";
import "./js/asyncCountries.js";
