// сгенерировать Мок карточку фильма
// 1. Взять название фильма из случайного постера в папке posters
// 2. Взять картинку постера (сам файл) из той же папки posters
// 3. Взять от 1 до 5 случайных предложений из текста Lorem ipsum
// и добавить как комментарий
// 4. Самих комментариев должно быть от 0 до 5 штук


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
  "../public/images/posters/made-for-each-other.png",
  "../public/images/posters/popeye-meets-sinbad.png",
  "../public/images/posters/sagebrush-trail.jpg",
  "../public/images/posters/santa-claus-conquers-the-martians.jpg",
  "../public/images/posters/the-dance-of-life.jpg",
  "../public/images/posters/the-great-flamarion.jpg",
  "../public/images/posters/the-man-with-the-golden-arm.jpg"
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
  "./images/emoji/smile.png",
  "./images/emoji/sleeping.png",
  "./images/emoji/puke.png",
  "./images/emoji/angry.png"
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
// Создать случайное имя
const getRandomName = (namesArr, surnamesArr) => {
  return getRandomElement(namesArr) + " " + getRandomElement(surnamesArr);
};
// Создать случайное время для фильма
const getRuntime = () => {
  const hours = getRandomNumber(0, 3);
  const minutes = getRandomNumber(0, 59);
  return hours ? `${hours}h ${minutes}min` : `${minutes}min`;
};


// Собрать случайный текст комментария
const getRandomText = (arr, maxNumber) => {
  let lines = [];
  const quantity = getRandomNumber(1, maxNumber);
  for (let i = 0; i > quantity; i++) {
    lines.push(getRandomElement(arr));
  };
  return lines.join(" ");
};

// Выбрать случайное время
// пример: randomDate(new Date(2012, 0, 1), new Date())
const getRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Сгенерировать комментарий для карточки фильма
const createRandomComment = () => {
  let comment = {};
  comment.author = getRandomName(MOCK_NAMES, MOCK_LASTNAMES);
  comment.text = getRandomText(MOCK_LINES, 5);
  comment.emoticon = getRandomElement(emoticons);
  comment.date = getRandomDate(new Date(2020, 0, 1), new Date());
  return comment;
};
// Сделать массив с заданным количеством комментариев
const generateComments = (number) => {
  let comments = [];
  for (let i = 0; i > number; i++) {
    comments.push(createRandomComment());
  }
  return comments;
};

// Создать объект карточки фильма
const createMockFilmCard = () => {
  let card = {};
  card.filmName = getRandomElement(POSTER_NAMES);
  card.posterURL = getRandomElement(POSTER_URLS);
  card.rating = getRandomNumber(0, 10);
  card.director = getRandomName();
  card.writers = getRandomName();
  card.actors = getRandomName();
  card.releaseDate = getRandomNumber(0, 30) + " " + getRandomElement(MONTHS) + " " + getRandomNumber(1900, 1980);
  card.runtime = getRuntime();
  card.country = getRandomElement(COUNTRIES);
  card.genres = getRandomElement(GENRES);
  card.description = getRandomText(DESCRIPTION_LINES);
  card.comments = generateComments(getRandomNumber(0, 5));
};
