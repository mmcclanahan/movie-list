import React from 'react';
const MovieListEntry = (props) => {

  let id = props.video.watched === true ? 'watched' : 'toWatch';
//want button onclick to toggle props.video.watched
  let videoObject = props.video;

  return (
    <div className='videoTitleAndButton'>
      <div className='videoTitle'>{props.video.title}</div>
      <button className={id} onClick={(e)=>{props.toggleWatched(videoObject)}}>Watched</button>
    </div>
  );
}

export default MovieListEntry;