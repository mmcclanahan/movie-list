import React from 'react';
import MovieListView from 'client/src/components/MovieListView.jsx';

const App = (props) => {
  const [movieList, setMovieList] = React.useState([
    { title: 'Mean Girls' },
    { title: 'Hackers' },
    { title: 'The Grey' },
    { title: 'Sunshine' },
    { title: 'Ex Machina' },
  ]);

  return (
    <div>
      <h1>Movie List</h1>
      <div>
        <MovieListView videos={movieList} />
      </div>
    </div>
  );
}

export default App;