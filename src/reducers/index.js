import { combineReducers } from 'redux'
import movies from './movies'
import searchTerm from './searchTerm'
import firstUse from './firstUse'

//this is the state
const moviesApp = combineReducers({
  movies,
  searchTerm,
  firstUse
})

export default moviesApp
