import React from 'react';

const WatchedButton = (props) => {

  return (
    <button className='watched' onClick={props.setWatchedMovies}>Watched</button>
  )
}

export default WatchedButton;