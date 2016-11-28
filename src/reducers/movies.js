const movie = (state, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        index: action.index,
        id: action.id,
        title: action.title,
        year: action.year,
        actors: action.actors
      }
    case 'DELETE_MOVIE':

      return state
    default:
      return state
  }
}

const movies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        movie(undefined, action)
      ]
    case 'DELETE_MOVIE':
      // return state.map(t =>
      //   movie(t, action)
      // )
      return state.filter(t => t.id !== action.id);
    case 'REMOVE_TODO':
      return state.map(t =>
        movie(t, action)
      )
    default:
      return state
  }
}

// const undoableTodos = undoable(todos, {
//   filter: distinctState()
// })

export default movies
