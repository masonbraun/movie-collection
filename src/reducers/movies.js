const movie = (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        index: action.index,
        id: action.id,
        title: action.title,
        year: action.year,
        actors: action.actors
      }
    default:
      return state
  }
};

const movies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        movie(undefined, action)
      ]
    case 'DELETE_MOVIE':
      return state.filter(t => t.id !== action.id);
    default:
      return state
  }
};

export default movies;
