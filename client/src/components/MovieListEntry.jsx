import React from 'react';
const MovieListEntry = (props) => {

  let id = props.video.watched === 1 ? 'watched' : 'toWatch';
//want button onclick to toggle props.video.watched
  let videoObject = props.video;

  return (
    <div className='videoTitleAndButton'>
      <div className='videoTitle'>{props.video.title}</div>
      <button className={id} onClick={(e)=>{props.toggleWatched(videoObject)}}>{props.video.watched === 1 ? 'Watched' : 'Watch'}</button>
      <button className='delete' onClick={(e)=>{console.log(videoObject); props.deleteMovie(videoObject)}}>'Delete'</button>
    </div>
  );
}

export default MovieListEntry;