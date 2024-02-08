import React from 'react';
const MovieListEntry = (props) => {
  const [watched, setWatched] = React.useState(false);

  const toggleButtonColor = () => {
    setWatched(!watched);
  };
  let id = props.video.watched === true ? 'watched' : 'toWatch';
//want button onclick to toggle props.video.watched
  let videoObject = props.video;

  return (
    <div className='videoTitleAndButton'>
      <div className='videoTitle'>{props.video.title}</div>
      <button className={id} onClick={(e)=>{props.toggleWatched(videoObject); toggleButtonColor()}}>{watched ? 'Watched' : 'To Watch'}</button>
    </div>
  );
}

export default MovieListEntry;