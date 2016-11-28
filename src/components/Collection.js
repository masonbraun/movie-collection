import React, { PropTypes } from 'react'
import Movie from './Movie'

const Collection = ({ movies, onTodoClick }) => (
  <section className="collection">
    <h2 className="collection__title">My Collection</h2>
    <p style={{display: movies.length ? 'none' : 'block'}}>There are no movies in your collection! Start adding some!</p>
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
    actors:  PropTypes.array.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default Collection