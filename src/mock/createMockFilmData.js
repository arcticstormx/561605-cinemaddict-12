// Данные
// Названия фильмов
const POSTER_NAMES = [
  "made-for-each-other",
  "popeye-meets-sinbad",
  "sagebrush-trail",
  "santa-claus-conquers-the-martians",
  "the-dance-of-life",
  "the-great-flamarion",
  "the-man-with-the-golden-arm"
];

// URL до самих постеров
const POSTER_URLS = [
  "./images/posters/made-for-each-other.png",
  "./images/posters/popeye-meets-sinbad.png",
  "./images/posters/sagebrush-trail.jpg",
  "./images/posters/santa-claus-conquers-the-martians.jpg",
  "./images/posters/the-dance-of-life.jpg",
  "./images/posters/the-great-flamarion.jpg",
  "./images/posters/the-man-with-the-golden-arm.jpg"
];

// Строки lorem ipsum
const MOCK_LINES = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Cras aliquet varius magna, non porta ligula feugiat eget.",
  "Fusce tristique felis at fermentum pharetra.",
  "Aliquam id orci ut lectus varius viverra.",
  "Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.",
  "Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.",
  "Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.",
  "Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.",
  "Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus."
];


// Моковые имена
const MOCK_NAMES = [
  "Bill",
  "Brad",
  "John",
  "Will",
  "Konstantin"
];

// Моковые фамилии
const MOCK_LASTNAMES = [
  "Murray",
  "Willis",
  "Pitt",
  "Malkovich",
  "Khabenskiy"
];

// Моковые жанры фильмов
const GENRES = [
  "Drama",
  "Film-Noir",
  "Mystery",
  "Thriller",
  "Horror"
];

// URL эмотиконов
const EMOTICONS = [
  "smile",
  "sleeping",
  "puke",
  "angry"
];

// Страны
const COUNTRIES = [
  "Russia",
  "USA",
  "England",
  "Canada"
];

// Месяца для даты
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

// Функции помощники
// Взять случайное число в заданных пределах
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// Взять случайный элемент массива
const getRandomElement = (arr) => {
  const max = arr.length - 1;
  return arr[getRandomNumber(0, max)];
};
// Создать случайный рейтинг фильма
const getRandomRating = (min, max) => {
  let rating = (Math.random() * (max - min + 1) + min).toFixed(1);
  return rating > 10 ? 10.0 : rating;
};
// Создать случайное имя
const getRandomName = (namesArr, surnamesArr) => {
  return getRandomElement(namesArr) + " " + getRandomElement(surnamesArr);
};
// Создать случайный список жанров
const getRandomGenres = (number) => {
  const arr = [];
  for (let i = 0; i < number; i++) {
    arr.push(getRandomElement(GENRES));
  }
  return arr;
};
// Создать случайное время для фильма
const getRuntime = () => {
  const hours = getRandomNumber(0, 3);
  const minutes = getRandomNumber(0, 59);
  return hours ? `${hours}h ${minutes}min` : `${minutes}min`;
};

// Собрать случайный текст комментария
const getRandomText = (arr, maxNumber) => {
  const lines = [];
  const quantity = getRandomNumber(1, maxNumber);
  for (let i = 0; i < quantity; i++) {
    lines.push(getRandomElement(arr));
  };
  return lines.join(" ");
};

// Выбрать случайное время
// пример: randomDate(new Date(2012, 0, 1), new Date())
const getRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

// Сгенерировать комментарий для карточки фильма
const createRandomComment = () => {
  let comment = {};
  comment.author = getRandomName(MOCK_NAMES, MOCK_LASTNAMES);
  comment.text = getRandomText(MOCK_LINES, 5);
  comment.emoticon = getRandomElement(EMOTICONS);
  comment.date = getRandomDate(new Date(2020, 0, 1), new Date());
  return comment;
};
// Сделать массив с заданным количеством комментариев
const generateComments = (number) => {
  let comments = [];
  for (let i = 0; i < number; i++) {
    comments.push(createRandomComment());
  }
  return comments;
};


// Создать объект карточки фильма
// Экспортиурем эту функцию
export const createMockFilmData = () => {
  let card = {};
  card.title = getRandomElement(POSTER_NAMES);
  card.posterURL = getRandomElement(POSTER_URLS);
  card.rating = getRandomRating(1, 10);
  card.ageRating = "+" + getRandomNumber(0, 18);
  card.director = getRandomName(MOCK_NAMES, MOCK_LASTNAMES);
  card.writers = getRandomName(MOCK_NAMES, MOCK_LASTNAMES);
  card.actors = getRandomName(MOCK_NAMES, MOCK_LASTNAMES);
  card.date = getRandomDate(new Date(1900, 0, 1), new Date());
  card.runtime = getRuntime();
  card.country = getRandomElement(COUNTRIES);
  card.genres = getRandomGenres(3);
  card.description = getRandomText(MOCK_LINES, 5);
  card.comments = generateComments(getRandomNumber(0, 5));
  return card;
};
