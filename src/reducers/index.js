import { combineReducers } from 'redux';
import movies from './movies';
import searchTerm from './searchTerm';

//this is the state
const moviesApp = combineReducers({
  movies,
  searchTerm
});

export default moviesApp;
