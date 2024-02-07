import MovieListEntry from 'client/src/components/MovieListEntry.jsx';
const MovieListView = (props) => {

  return (
    props.videos.forEach((video) => {
      <MovieListEntry video={video}/>
    });
  )
}

export default MovieListView;
