import {createUserRank} from "./view/createUserRank.js";
import {createMainNav} from "./view/createMainNav.js";
import {createMainSort} from "./view/createMainSort.js";
import {createFilmsBlock} from "./view/createFilmsBlock.js";
import {createShowMoreButton} from "./view/createShowMoreButton.js";
import {createTopRatedBlock} from "./view/createTopRatedBlock.js";
import {createMostCommentedBlock} from "./view/createMostCommentedBlock.js";
import {createFilmCard} from "./view/createFilmCard.js";
import {createFilmStatistics} from "./view/createFilmStatistics.js";
import {createMockFilmCard} from "./view/createMockFilmCard.js";

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
  render(filmsListContainer, createFilmCard(), `beforeend`);
}
render(filmsListContainer, createShowMoreButton(), `beforeend`);

// отрисуем блок топовых фильмов
render(mainFilmsBlock, createTopRatedBlock(), `beforeend`);

const topRatedBlock = mainFilmsBlock.querySelector(`.films-list--extra`);
const topRatedBlockContainer = topRatedBlock.querySelector(`.films-list__container`);

for (let i = 0; i < 2; i++) {
  render(topRatedBlockContainer, createFilmCard(), `beforeend`);
}

// отрисуем блок комментируемых фильмов
render(mainFilmsBlock, createMostCommentedBlock(), `beforeend`);

const mostCommentedBlock = mainFilmsBlock.querySelector(`.films-list--extra:nth-of-type(3)`);
const mostCommentedBlockContainer = mostCommentedBlock.querySelector(`.films-list__container`);

for (let i = 0; i < 2; i++) {
  render(mostCommentedBlockContainer, createFilmCard(), `beforeend`);
}

// отрисуем количество фильмов на сайте в футере
render(siteFooterElement, createFilmStatistics(), `beforeend`);
