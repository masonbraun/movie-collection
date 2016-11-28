import { v4 } from 'uuid';

let next = 0

export const addMovie = (title, year, actors) => ({
  type: 'ADD_MOVIE',
  index: next++, 
  id: v4(),
  title: title,
  year: year,
  actors: [actors]
})

export const updateSearchTerm = (term) => ({
  type: 'UPDATE_SEARCH_TERM',
  term
})

export const updateFirstUse = (use) => ({
  type: 'UPDATE_FIRST_USE',
  use
})

export const deleteMovie = (id) => ({
  type: 'DELETE_MOVIE',
  id
})
