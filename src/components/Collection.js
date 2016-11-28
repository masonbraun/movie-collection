import React, { PropTypes } from 'react'
import Movie from './Movie'

const Collection = ({ movies, onTodoClick, searchTerm }) => (
  <section className="collection">
    <h2 className="collection__title">My Collection</h2>
    
    <section className="collection__list">
      {movies.map(movie =>
        <Movie
          key={movie.id}
          {...movie}
          onClick={() => onTodoClick(movie.id)}
        />
      )}
    </section>
  </section>
)

Collection.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title:  PropTypes.string.isRequired,
    year:  PropTypes.string.isRequired,
    actors:  PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default Collection