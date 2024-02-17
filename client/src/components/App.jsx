import React from 'react';
import MovieListView from './MovieListView.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';
import WatchedButton from './WatchedButton.jsx'
import ToWatchButton from './ToWatchButton.jsx'
import axios from 'axios';

const App = () => {
  //movies to be shown
  const [movieList, setMovieList] = React.useState([]);


  //holds all movies added
  const [allMovies, setAllMovies] = React.useState([]);
  //state of which movies are shown watched or to watch
  const [watchedMovies, setWatchedMovies] = React.useState(0);

  React.useEffect(() => {
    //axios.get('/movies').then(response => {setMovieList(response.data)}).catch(error => console.error('axiosget', error))
    axios.get('/movies')
      .then(function(response) {
        console.log(response.data);
        setAllMovies(response.data);
      })
      .catch(function(error) {
        console.log(error,'axios');
      })
  }, []);

  const handleSearch = () => {
    let searchValue = document.getElementsByClassName('searchMovieInput')[0].value;
    if (searchValue === '') {
      setAllMovies(allMovies);
    } else {
      let arrayOfMovies = allMovies.filter((movie) => {
        return (movie.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
      })
      if(arrayOfMovies.length === 0) {
        alert('No Movies contain that name! Please try again with a different search.')
      } else {
        setAllMovies(arrayOfMovies);
      }

    }
  };
//checked
  const showAllMovies = () => {
    axios.get('/movies').then(function(response) {setAllMovies(response.data)})
    document.getElementsByClassName('searchMovieInput')[0].value = '';
  }
//adds movies with a post
  const addMovie = () => {
    let userInput = document.getElementsByClassName('addMovieInput')[0].value;
    axios.post('/movies', { 'title': `${userInput}` })
      .then(function(response) {
        console.log('movie added',response)
        axios.get('/movies').then(function(response) {setAllMovies(response.data)})
      });
    //let movies = allMovies.slice().concat(newMovieName);
    //setAllMovies(movies);
    //setMovieList(movies);
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
    console.log(videoObject);
    if (videoObject.watched === 1) {
      videoObject.watched = 0;
    } else {
      videoObject.watched = 1;
    }
    axios.patch('/movies', videoObject)
    .then(function(response) {
      axios.get('/movies').then(function(response) {setAllMovies(response.data)})
    })
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
            <WatchedButton watchedMovies={watchedMovies} setWatchedMovies={() => setWatchedMovies(1)}/>
            <ToWatchButton watchedMovies={watchedMovies} setWatchedMovies={() => setWatchedMovies(0)}/>
        </div>
        <div>
          <SearchBar handleSearch={handleSearch} showAllMovies={showAllMovies}/>
        </div>
      </div>
        <MovieListView videos={allMovies} watchedMovies={watchedMovies} toggleWatched={toggleWatched}/>
    </div>
  );
}

export default App;