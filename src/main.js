"use strict";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

// создать звание пользователя
const createUserRank = () => {
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">Movie Buff</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
     </section>`
    );
};

// создать меню навигации по разделам
const createMainNav = () => {
  return (
    `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
    );
}
// создать сортировку по дате и т.д.
const createMainSort = () => {
  return (
    `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`
    );
}
// создать контейнер секцию для карточек с фильмами
const createFilmsBlock = () => {
  return (
    `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

      <div class="films-list__container">
      </div>

    </section>`
  );
}
// создать кнопку show more
const createShowMoreButton = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
    );
}

// создать секцию топовых фильмов
const createTopRatedBlock = () => {
  return (
    `<section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>

      <div class="films-list__container"></div>
    </section>`
  );
}
// создать секцию с фильмов с наибольшими комментариями
const createMostCommentedBlock = () => {
  return (
    `<section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>

      <div class="films-list__container">
      </div>
    </section>`
  );
}

// создать карточку фильма
const createFilmCard = () => {
  return (
    `<article class="film-card">
      <h3 class="film-card__title">The Dance of Life</h3>
      <p class="film-card__rating">8.3</p>
      <p class="film-card__info">
        <span class="film-card__year">1929</span>
        <span class="film-card__duration">1h 55m</span>
        <span class="film-card__genre">Musical</span>
      </p>
      <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
      <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>
      <a class="film-card__comments">5 comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>`
    );
}
// создать статистику количества фильмов на сайте
const createFilmStatistics = () => {
  return (
    `<section class="footer__statistics">
    <p>130 291 movies inside</p>
    </section>`
    );
}

const siteHeaderElement = document.querySelector(".header");
const siteMainElement = document.querySelector(".main");
const siteFooterElement = document.querySelector(".footer");

// отрисуем ранк юзера, навигацию, сортировку и пока пустую секцию фильмов
render(siteHeaderElement, createUserRank(), 'beforeend');
render(siteMainElement, createMainNav(), 'beforeend');
render(siteMainElement, createMainSort(), 'beforeend');
render(siteMainElement, createFilmsBlock(), 'beforeend');

const mainFilmsBlock = siteMainElement.querySelector('.films');
const filmsList = mainFilmsBlock.querySelector('.films-list');
const filmsListContainer = filmsList.querySelector('.films-list__container');

// отрисуем карточки фильмов внутри главного блока фильмов
for (let i = 0; i < 5; i++) {
  render(filmsListContainer, createFilmCard(), 'beforeend');
}
render(filmsListContainer, createShowMoreButton(), 'beforeend');

// отрисуем блок топовых фильмов
render(mainFilmsBlock, createTopRatedBlock(), 'beforeend');

const topRatedBlock = mainFilmsBlock.querySelector('.films-list--extra');
const topRatedBlockContainer = topRatedBlock.querySelector('.films-list__container');

for (let i = 0; i < 2; i++) {
  render(topRatedBlockContainer, createFilmCard(), 'beforeend');
}

// отрисуем блок комментируемых фильмов
render(mainFilmsBlock, createMostCommentedBlock(), 'beforeend');

const mostCommentedBlock = mainFilmsBlock.querySelector('.films-list--extra:nth-of-type(3)');
const mostCommentedBlockContainer = mostCommentedBlock.querySelector('.films-list__container');

for (let i = 0; i < 2; i++) {
  render(mostCommentedBlockContainer, createFilmCard(), 'beforeend');
}

// отрисуем количество фильмов на сайте в футере
render(siteFooterElement, createFilmStatistics(), 'beforeend');
