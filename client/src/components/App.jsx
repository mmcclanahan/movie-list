import React from 'react';
import MovieListView from './MovieListView.jsx';
import SearchBar from './SearchBar.jsx'
import allMovies from '../allMovies.js'
const App = () => {
  const [movieList, setMovieList] = React.useState(allMovies);
  const [currentList, setCurrentList] = React.useState(allMovies);
  //when add movies use setMovieList(movieList + object)
  //when search
  const handleSearch = (event) => {
    let searchValue = event.target.parentElement.querySelector('input[name="title"]').value;
    let arrayOfMovies = currentList.filter((movie) => {
      return (movie.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
    })
    if(arrayOfMovies.length === 0) {
      alert('No Movies contain that name! Please try again with a different search.')
    } else {
      setMovieList(arrayOfMovies);
    }

  };
//
  return (
    <div>
      <h1>Movie List</h1>
      <div>
        <SearchBar handleSearch={handleSearch}/>
      </div>
      <div>
        <MovieListView videos={movieList} />
      </div>
    </div>
  );
}

export default App;