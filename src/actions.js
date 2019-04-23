export const setMovieList = (list) => ({
  type: 'SET_MOVIE_LIST',
  list,
});

export const setGenres = (list) =>({
  type: 'SET_GENRES',
  list,
});

export const setMoviesByGenre = (list) => ({
  type: 'SET_MOVIES_BY_GENRE',
  list,
});


export const heart = (id) => ({
  type: "HEART",
  id,
});

export const unheart = (id) => ({
  type: "UNHEART",
  id,
});

export const log = (entry) => ({
  type: "LOG",
  entry, 
});