import React, { PropTypes } from 'react';

const Search = ({onSubmit}) => {
  
  let term;

  return (
    <div>
      <form className="search">
        <input className="search__input" placeholder="Search Collection" ref={node => {term = node}} onChange={e => {e.preventDefault(); onSubmit(term.value); }} />
      </form>
    </div>
  );

}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Search;
