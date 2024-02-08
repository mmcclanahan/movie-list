import MovieListEntry from './MovieListEntry.jsx';
import React from 'react';
const MovieListView = (props) => {

  let filteredArray = props.videos.filter((video) => (video.watched === props.watchedMovies));
  return (
    <div className='MovieList'>
    {filteredArray.map((video) => (<MovieListEntry video={video} toggleWatched={props.toggleWatched}/>))}
    </div>
  )
}

export default MovieListView;
