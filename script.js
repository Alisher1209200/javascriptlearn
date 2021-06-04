"Use strict";
const numberFilms = +prompt('Сколько вы посмотрели фильмов','');

const personalMovieDB = {
    count: numberFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов',''),
      b = prompt('Насколько оцениго его',''),
      c = prompt('Один из последних просмотренных фильмов',''),
      d = prompt('Насколько оцениго его','');

personalMovieDB.movies.a = b;
personalMovieDB.movies.c = d;

console.log(personalMovieDB);
