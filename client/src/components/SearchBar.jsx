import React from 'react';
const SearchBar = (props) => {

  return (
    <div>
        <input className='searchMovieInput' name='title' type='text' placeholder='Search...' />
        <button onClick={props.handleSearch}>Search</button>
        <button onClick={props.showAllMovies}>Back</button>
    </div>
  )
}

export default SearchBar;