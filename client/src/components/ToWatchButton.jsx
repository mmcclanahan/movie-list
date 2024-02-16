import React from 'react';

const ToWatchButton = (props) => {

  return (
    <button className='toWatch' onClick={props.setWatchedMovies}>To Watch</button>
  )
}

export default ToWatchButton;