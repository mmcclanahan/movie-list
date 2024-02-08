import React from 'react';
import MovieListView from './MovieListView.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';
import WatchedButton from './WatchedButton.jsx'
import ToWatchButton from './ToWatchButton.jsx'

const App = () => {
  //movies being shown
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
      let arrayOfMovies = movieList.filter((movie) => {
        return (movie.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
      })
      if(arrayOfMovies.length === 0) {
        alert('No Movies contain that name! Please try again with a different search.')
      } else {
        setMovieList(arrayOfMovies);
      }
      document.getElementsByClassName('searchMovieInput')[0].value = '';
    }
  };

  const showAllMovies = () => {
    let movies = allMovies;
    setMovieList(movies);
  }

  const addMovie = () => {
    let movieName = document.getElementsByClassName('addMovieInput')[0].value;
    let newMovieName = {'title': movieName, 'watched': false};
    let movies = allMovies.slice().concat(newMovieName);
    setAllMovies(movies);
    setMovieList(movies);
    document.getElementsByClassName('addMovieInput')[0].value = '';
  };
  const toggleWatched = (videoObject) => {
    if (videoObject.watched === true) {
      videoObject.watched = false;
    } else {
      videoObject.watched = true;
    }
  };
//
  return (
    <div className='allElements'>
      <div className='header'>
        <h1>Movie List</h1>
      </div>
      <div>
        <AddMovie addMovie={addMovie}/>
      </div>
      <div className='buttonsAndSearch'>
        <div className='watchedButtons'>
            <WatchedButton setWatchedMovies={() => setWatchedMovies(true)}/>
            <ToWatchButton setWatchedMovies={() => setWatchedMovies(false)}/>
        </div>
        <div>
          <SearchBar handleSearch={handleSearch} showAllMovies={showAllMovies}/>
        </div>
      </div>
      <div>
        <MovieListView videos={movieList} watchedMovies={watchedMovies} toggleWatched={toggleWatched}/>
      </div>
    </div>
  );
}

export default App;