import MovieListEntry from './MovieListEntry.jsx';
import React from 'react';
const MovieListView = (props) => {

  let filteredArray = props.videos.filter((video) => (video.watched === props.watchedMovies));
  return (
    <div className='MovieList'>
    {filteredArray.map((video) => (<MovieListEntry key={video.id} video={video} deleteMovie={props.deleteMovie} toggleWatched={props.toggleWatched}/>))}
    </div>
  )
}

export default MovieListView;
