import MovieListEntry from './MovieListEntry.jsx';
import React from 'react';
const MovieListView = (props) => {
  return (
    <div className='MovieList'>
    {props.videos.map((video) => (<MovieListEntry video={video} />))}
    </div>
  )
}

export default MovieListView;
