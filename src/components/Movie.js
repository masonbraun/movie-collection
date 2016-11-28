import React, { PropTypes } from 'react'

const clean = (text) => {
  let newtext = text.replace(/\n/g, " - ");
  return newtext;
}

const Movie = ({ onClick, title, year, actors }) => (
  <div className="movie">
    <p className="movie__details movie__details--title">{title} ({year})</p>
    <p className="movie__details movie__details--actors">Starring: {clean(actors)}</p>
    <span className="movie__delete" onClick={onClick}>X</span>
  </div>
)

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  title:  PropTypes.string.isRequired,
  year:  PropTypes.string.isRequired,
  actors:  PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Movie
