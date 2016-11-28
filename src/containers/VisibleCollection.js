import { connect } from 'react-redux';
import { deleteMovie } from '../actions';
import Collection from '../components/Collection';

const mapStateToProps = (state) => {

  const searchTerm = state.searchTerm.toLowerCase();

  if (searchTerm === '') {
    return {
      movies: state.movies
    }
  };

  return {
    movies: state.movies.filter((movie) => {
      let title = movie.title.toLowerCase();
      let year = movie.year.toLowerCase();
      let actors = movie.actors.toLowerCase();
      
      return (
        title.includes(searchTerm) || year.includes(searchTerm) ||  actors.includes(searchTerm)
      )
    }),
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = ({
  onTodoClick: deleteMovie
});

const VisibleCollection = connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection);

export default VisibleCollection;
