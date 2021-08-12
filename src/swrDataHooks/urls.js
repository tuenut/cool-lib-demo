export const API_HOST = "http://localhost:8000";


export const api = {
  RANDOM_BOOKS_PATH: "/api/v0/books/random/",
  BOOKS_PATH: "/api/v0/books/",
  AUTHORS_PATH: "/api/v0/authors/",
  getRandomBooks: function () {
    return this.RANDOM_BOOKS_PATH;
  },
  getBooksList: function (searchParameters) {
    return this.BOOKS_PATH;
  },
  getBookDetails: function (id) {
    return `${this.BOOKS_PATH}${id}`;
  },
  getAuthorsList: function(searchParameters) {
    return this.AUTHORS_PATH;
  },
  getAuthorDetails: function (id) {
    return `${this.AUTHORS_PATH}${id}`;
  },
};

