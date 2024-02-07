import React from 'react';
const SearchBar = (props) => {

  return (
    <div>
        <input name='title' type='text' placeholder='Search...' />
        <button onClick={props.handleSearch}>Go!</button>
    </div>
  )
}

export default SearchBar;