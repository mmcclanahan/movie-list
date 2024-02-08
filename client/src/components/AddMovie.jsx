import React from 'react';

const AddMovie = (props) => {
    return (
      <div>
        <input className='addMovieInput' placeholder='Add movie title here'/>
        <button onClick={props.addMovie}>Add</button>
      </div>
  )
}

export default AddMovie;