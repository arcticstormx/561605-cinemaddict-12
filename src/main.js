import {createUserRank} from "./view/createUserRank.js";
import {createMainNav} from "./view/createMainNav.js";
import {createMainSort} from "./view/createMainSort.js";
import {createFilmsBlock} from "./view/createFilmsBlock.js";
import {createShowMoreButton} from "./view/createShowMoreButton.js";
import {createTopRatedBlock} from "./view/createTopRatedBlock.js";
import {createMostCommentedBlock} from "./view/createMostCommentedBlock.js";
import {createFilmCard} from "./view/createFilmCard.js";
import {createFilmStatistics} from "./view/createFilmStatistics.js";
import {createFilmPopup} from "./view/createFilmPopup.js";
import {createFilmComment} from "./view/createFilmComment.js";
import {createMockFilmData} from "./mock/createMockFilmData.js";

let filmsData = [...new Array(20)]
    .map(createMockFilmData);
const filmsDataCopy = [...filmsData];

// функция отрисовки компонентов на HTML странице
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);

// отрисуем ранк юзера, навигацию, сортировку и пока пустую секцию фильмов
render(siteHeaderElement, createUserRank(), `beforeend`);
render(siteMainElement, createMainNav(), `beforeend`);
render(siteMainElement, createMainSort(), `beforeend`);
render(siteMainElement, createFilmsBlock(), `beforeend`);

const mainFilmsBlock = siteMainElement.querySelector(`.films`);
const filmsList = mainFilmsBlock.querySelector(`.films-list`);
const filmsListContainer = filmsList.querySelector(`.films-list__container`);

// отрисуем карточки фильмов внутри главного блока фильмов
for (let i = 0; i < 5; i++) {
  render(filmsListContainer, createFilmCard(filmsData[i]), `beforeend`);
}
render(filmsListContainer, createShowMoreButton(), `beforeend`);

// отрисуем блок топовых фильмов
render(mainFilmsBlock, createTopRatedBlock(), `beforeend`);

const topRatedBlock = mainFilmsBlock.querySelector(`.films-list--extra`);
const topRatedBlockContainer = topRatedBlock.querySelector(`.films-list__container`);

// отсортируем копию массива по рейтингу
filmsDataCopy.sort((a, b)=>  parseFloat(b.rating) - parseFloat(a.rating));

for (let i = 0; i < 2; i++) {
  render(topRatedBlockContainer, createFilmCard(filmsDataCopy[i]), `beforeend`);
}

// отрисуем блок комментируемых фильмов
render(mainFilmsBlock, createMostCommentedBlock(), `beforeend`);

const mostCommentedBlock = mainFilmsBlock.querySelector(`.films-list--extra:nth-of-type(3)`);
const mostCommentedBlockContainer = mostCommentedBlock.querySelector(`.films-list__container`);

// отсортирум копию массива по количеству комментариев
filmsDataCopy.sort((a, b)=>  b.comments.length - a.comments.length);

for (let i = 0; i < 2; i++) {
  render(mostCommentedBlockContainer, createFilmCard(filmsDataCopy[i]), `beforeend`);
}

// отрисуем количество фильмов на сайте в футере
render(siteFooterElement, createFilmStatistics(filmsData.length), `beforeend`);


// const siteBodyElement = document.querySelector(`body`);

// отрисуем попап с описанием фильма при клике на постер
// render(siteBodyElement, createFilmPopup(filmsData[0]), `beforeend`);

// const popupCommentsList = document.querySelector('.film-details__comments-list');

// добавим комментарии к попапу
// filmsData[0].comments.forEach(el => render(popupCommentsList, createFilmComment(el), `beforeend`));


// очистить основной контейнер с фильмами
const clearFilmsContainer = () => filmsListContainer.innerHTML = "";

const sortElement = document.querySelector(".sort");
const sortButtons = sortElement.querySelectorAll(".sort__button");

console.log(sortButtons[0]);

// вешаем на контейнер сортировки один слушатель
sortElement.addEventListener("click", (evt) => {
  // если кликнули по активному фильтру - возврат
  if (evt.target.classList.contains("sort__button--active")) return;
  // убираем с предыдущей кнопки класс активной
  sortButtons.forEach(el => el.classList.remove("sort__button--active"));
  // для простоты, переименовываем кликнутые кнопки
  const clickedSort = evt.target;
  const clickedSortName = evt.target.textContent.toLowerCase();
  // добавляем к новой сортировке класс активной
  clickedSort.classList.add("sort__button--active");

  // через замыкание добавляем переменную индекс для отслеживания количества отрендеренных фильмов
  //
  //
  //
  // СЕРЁЖ ПОСМОТРИ ТУТ, НЕ ЗНАЮ КАК СДЕЛАТЬ, ЧТОБЫ РЕНДЕРИЛ 5 КАРТОЧЕК
  // И ЗАПОМИНАЛ КАКИЕ ОТРЕНДЕРИТЬ ЕЩЁ И КОГДА НУЖНО РЕНДЕРИТЬ КНОПКУ ПОКАЗАТЬ ЕЩЁ
  const renderFilms = {
    this.idx = 0;


    this.add = function(films) {
    return function (films) {
      for (let i = 0; i < 5; i++) {
        if (films[idx] === false) {
          console.log("filmsData с таким индексом не существует", idx);
          console.log(films);
          return;
        };
        render(filmsListContainer, createFilmCard(films[idx]), `beforeend`);
        idx++;
      }
      return;
      };
    };
  }

  switch (clickedSortName) {
      case "sort by default":
        console.log("def");
        clearFilmsContainer();
        addFilms(filmsData);
        if (filmsDataNotRendered.length > 5) {
          const showMoreBtn = document.querySelector(".films-list__show-more");
          showMoreBtn.addEventListener("click", (evt) => {
            addFilms(filmsDataCopy);
            // render ещё 5 не отрендереных картинок
            // если ещё остаются не отрендеренные фильмы, кнопка остаётся
            // если всё отрендерено, кнопка удаляется после рендера
          });
        }
        break;

      case "sort by date":
        console.log("date");

        clearFilmsContainer();
        filmsDataCopy.sort((a, b) => a.date.getTime() - b.date.getTime());
        for (let i = 0; i < 5; i++) {
          render(filmsListContainer, createFilmCard(filmsDataCopy[i]), `beforeend`);
        }
        if (filmsData.length > 5) render(filmsListContainer, createShowMoreButton(), `beforeend`);
        break;

      case "sort by rating":
        console.log("rating");

        clearFilmsContainer();
        filmsDataCopy.sort((a, b)=>  parseFloat(b.rating) - parseFloat(a.rating) );
        for (let i = 0; i < 5; i++) {
          render(filmsListContainer, createFilmCard(filmsDataCopy[i]), `beforeend`);
        }
        if (filmsData.length > 5) render(filmsListContainer, createShowMoreButton(), `beforeend`);
        break;
    }
});
