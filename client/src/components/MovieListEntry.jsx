import React from 'react';
const MovieListEntry = (props) => {
  console.log(props.video)
  return (
    <div>
      {props.video.title}
    </div>
  );
}

export default MovieListEntry;