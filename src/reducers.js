import { combineReducers } from 'redux';
import {store } from './index.js';

const initialState = {
  list: [],
  genresList: [],
  hearted: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIE_LIST':
      return {
        ...state,
        list: action.list,
      };
    case 'SET_MOVIES_BY_GENRE':
      return {
        ...state,
       list: action.list,
    };
    // case 'HEART':
    //     return{
    //       ...state,
    //       hearted: [...state.hearted, action.id]
    //     };
    //   case 'UNHEART':
    //      return {
    //         ...state,
    //        hearted: state.hearted.filter(id => id !== action.id)
    //   };
    default: return state;
  }
};

const heartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HEART':
      return{
      ...state,
      hearted: [...state.hearted, action.id]
    };
    case 'UNHEART':
      return {
      ...state,
      hearted: state.hearted.filter((id) => id !== action.id) 
    };
    default: return state;
  }
};
 

const genreReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_GENRES':
      return {
        ...state,
        genresList: action.list ,
      };
      default: return state;
    }
};


const logsReducer = (state = initialState, action) =>{
        switch (action.type) {
          case 'LOG':
              const date = new Date();
              const year = date.getFullYear();
              const month = date.getMonth() + 1;
              const day = date.getDate();
              const hour = date.getHours();
              const minutes = date.getMinutes();
              const seconds = date.getSeconds();
              const formatedDate = year+"-"+month+"-"+day+" "+ hour+":"+minutes+":"+seconds; 

              return {
                ...state,
              [formatedDate]: action.entry
              }
          
          default: return state;

        }
};


export default combineReducers({
  genres: genreReducer,
  movies: moviesReducer,
  logs: logsReducer,
  hearts: heartReducer
});
