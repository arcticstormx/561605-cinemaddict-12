// создать статистику количества фильмов на сайте
export const createFilmStatistics = (filmsNumber) => {
  return (
    `<section class="footer__statistics">
    <p>${filmsNumber} movies inside</p>
    </section>`
  );
};
