import axios from 'axios';
import { endpoints } from '../config';
import { setMovieList } from './actions';
import{ setGenres} from './actions';

export const getGenres = () => (dispatch) => {
  axios
      .get(endpoints.genres())
      .then((res) => dispatch(setGenres(res.data.genres)))
      .catch((error) => console.log(error));
};

export const getMovieList = () => (dispatch) => {
  axios
    .get(endpoints.mostPopularMovies())
    .then((res) => dispatch(setMovieList(res.data.results)))
    .catch((error) => console.log(error));
};

export const getMoviesByGenre = (id) => (dispatch) => {
  axios
    .get(endpoints.genreMovies(id))
    .then(res => dispatch(setMovieList(res.data.results)))
    .catch(error => console.log(error));
}


