import React, { PropTypes } from 'react'


const Movie = ({ onDeleteClick, onClick, completed, title, year, actors, id }) => (
  <div>
    <p>{title} ({year})</p>
    <p>Starring: {actors}</p>
    <span onClick={onClick}>X</span>
  </div>
)

Movie.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Movie
