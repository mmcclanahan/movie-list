import React from 'react';
import MovieListView from './MovieListView.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';
import WatchedButton from './WatchedButton.jsx'
import ToWatchButton from './ToWatchButton.jsx'

const App = () => {
  //movies to be shown
  const [movieList, setMovieList] = React.useState([]);
  //holds all movies added
  const [allMovies, setAllMovies] = React.useState([]);
  //state of which movies are shown watched or to watch
  const [watchedMovies, setWatchedMovies] = React.useState(false);

  const handleSearch = () => {
    let searchValue = document.getElementsByClassName('searchMovieInput')[0].value;
    if (searchValue === '') {
      setMovieList(allMovies);
    } else {
      let arrayOfMovies = allMovies.filter((movie) => {
        return (movie.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
      })
      if(arrayOfMovies.length === 0) {
        alert('No Movies contain that name! Please try again with a different search.')
      } else {
        setMovieList(arrayOfMovies);
      }

    }
  };
//checked
  const showAllMovies = () => {
    let movies = allMovies;
    setMovieList(movies);
    document.getElementsByClassName('searchMovieInput')[0].value = '';
  }
//checked
  const addMovie = () => {
    let userInput = document.getElementsByClassName('addMovieInput')[0].value;
    let newMovieName = {'title': userInput, 'watched': false};
    let movies = allMovies.slice().concat(newMovieName);
    setAllMovies(movies);
    setMovieList(movies);
    document.getElementsByClassName('addMovieInput')[0].value = '';
  };
//checked
  const addMovieOnEnterPress = (event) => {
    if (event.key === 'Enter') {
      addMovie();
    }
  }
//checked  undooooo
  const toggleWatched = (videoObject) => {
    allMovies.indexOf(videoObject)
    if (videoObject.watched === true) {
      videoObject.watched = false;
    } else {
      videoObject.watched = true;
    }
  };
//d
  return (
    <div className='allElements'>
      <div className='header'>
        <h1>Movie List</h1>
      </div>
        <AddMovie addMovieOnEnterPress={addMovieOnEnterPress} addMovie={addMovie}/>
      <div className='buttonsAndSearch'>
        <div className='watchedButtons'>
            <WatchedButton watchedMovies={watchedMovies} setWatchedMovies={() => setWatchedMovies(true)}/>
            <ToWatchButton watchedMovies={watchedMovies} setWatchedMovies={() => setWatchedMovies(false)}/>
        </div>
        <div>
          <SearchBar handleSearch={handleSearch} showAllMovies={showAllMovies}/>
        </div>
      </div>
        <MovieListView videos={movieList} watchedMovies={watchedMovies} toggleWatched={toggleWatched}/>
    </div>
  );
}

export default App;