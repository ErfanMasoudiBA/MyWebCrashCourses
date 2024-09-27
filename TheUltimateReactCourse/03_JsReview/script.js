const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// // Destructuring
// book = getBook(1);
// book;
// // const title = book.title;
// // const author = book.author;
// // title;
// // author;
// // console.log(author, title);

// // const { pages, publicationDate } = book;
// // const { title, author } = book;

// // console.log(pages, publicationDate);
// // console.log(author, title);

// const { title, author, genres, pages, publicationDate, hasMovieAdaptation } =
//   book;

// console.log(author, title, genres);
// console.log(book);
// // const primaryGenre = genres[0];
// // const secondaryGenre = genres[1];

// // const [primaryGenre, secondaryGenre, thirdGenre] = genres;
// const [primaryGenre, ...otherGenres] = genres;

// // console.log(primaryGenre, secondaryGenre, thirdGenre);
// console.log(primaryGenre, otherGenres);

// const newGenres = ["epic fantasy", ...genres];
// newGenres;

// const updatedBook = {
//   ...book,
//   moviePublicationDate: "2001-12-19",
//   pages: 1200,
// };
// updatedBook;

// const summary = `${title}, a ${pages}-page long book, was written by ${author} and publication in ${
//   publicationDate.split("-")[0]
// }`;
// summary;

// const pagesRange = pages > 1000 ? "OVER than 1000" : "LESS than 1000 ";
// pagesRange;
// console.log(`The book has ${pagesRange} pages!`);

// const getYear = (str) => str.split("-")[0];
// console.log(getYear(publicationDate));

// console.log(true && "some string");
// console.log(false && "some string");
// console.log(hasMovieAdaptation && "some string");

// // falsy value: 0,'',null,undefined

// console.log("jonas" && "some string");
// console.log(0 && "some string");

// console.log(true || "some string");
// console.log(false || "some string");

// const spanishTranslation = book.translations.spanish || "not translated!";
// spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

// const totalCount =
//   book.reviews.goodreads.reviewsCount + book.reviews.librarything.reviewsCount;
// totalCount;
// book = getBook(3);

// function getTotalReviewCount(book) {
//   const goodreads = book.reviews.goodreads.reviewsCount;
//   const librarything = book.reviews.librarything?.reviewsCount ?? 0;
//   librarything;
//   return librarything + goodreads;
// }

// // console.log(getTotalReviewCount(book));

// const books = getBooks();

// const x = [1, 2, 3, 4, 5].map((el) => el * 2);
// console.log(x);

// const titles = books.map((book) => book.title);
// titles;

// const essentioalData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
//   reviewsCount: getTotalReviewCount(book),
// }));
// essentioalData;

// const longBooks = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.hasMovieAdaptation);
// longBooks;

// const adventureBooks = books
//   .filter((books) => books.genres.includes("adventure"))
//   .map((book) => book.title);
// adventureBooks;

// const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
// pagesAllBooks;

// const arr = [3, 7, 1, 9, 6];
// const sorted = arr.sort((a, b) => b - a);
// sorted;
// arr;
// const sorted2 = arr.slice().sort((a, b) => a - b);
// arr;
// sorted2;

// const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
// sortedByPages;

// const newBook = {
//   id: 6,
//   title: "harryPotter123",
//   author: "JK rrrrrroling",
// };
// const booksAfterAdd = [...books, newBook];
// booksAfterAdd;

// const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
// booksAfterDelete;

// const booksAfterUpdate = booksAfterDelete.map((book) =>
//   book.id === 1 ? { ...book, pages: 1210 } : book
// );
// booksAfterUpdate;

// console.log(fetch("https://jsonplaceholder.typicode.com/todos"));
// console.log("jonas");

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}

const todos = getTodos();
console.log(todos);

console.log("jonas");
