import React from 'react'
import { connect } from 'react-redux'
import { addMovie, updateFirstUse } from '../actions'

let AddMovie = ({ dispatch }) => {

  let title;
  let year;
  let actors;
  
  return (
    <section className="add-movie">
      <h2 className="add-movie__title">Add movies to your collection!</h2>
      <form onSubmit={e => {
        
        e.preventDefault()
        if (!title.value.trim()) {
          //this is the basic validation for the empty form field
          return
        }
        dispatch(addMovie(title.value, year.value, actors.value))
        dispatch(updateFirstUse(false))

        title.value = '';
        year.value = '';
        actors.value = '';
      }}>
        <input className="input" placeholder="Title" ref={node => {title = node}} />
        <input className="input" placeholder="Year" ref={node => {year = node}} /> 
        <textarea className="input input--textarea" placeholder="Actors / Actresses" ref={node => {actors = node}}></textarea> 
        <input className="input input--submit" type="submit" value="Add Movie" />
      </form>
    </section>
  )
}
AddMovie = connect()(AddMovie)

export default AddMovie