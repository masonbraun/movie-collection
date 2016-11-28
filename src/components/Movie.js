import React, { PropTypes } from 'react'

const Movie = ({ onClick, title, year, actors }) => (
  <div>
    <p>{title} ({year})</p>
    <p>Starring: {actors.replace(/\n/g, " - ")}</p>
    <span onClick={onClick}>X</span>
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
