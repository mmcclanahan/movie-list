import React from 'react';

const AddMovie = (props) => {



    return (
      <div className="addMovieInputAndButton">
        <input className='addMovieInput' onKeyDown={props.addMovieOnEnterPress} placeholder='Add movie title here'/>
        <button onClick={props.addMovie}>Add</button>
      </div>
  )
}

export default AddMovie;