//https://expressjs.com/en/api.html#express
const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

//import the controller
const moviesController = require('./controllers/movies');
//allows to get body instead of having to chunk
app.use(express.json());
app.use(express.static('client/dist'));

//set a route to an endpoint and use the right controller function
//get request to enpoint /movies runs getAllMovies function
app.get('/movies', moviesController.getAllMovies);
//post request
app.post('/movies', moviesController.postAMovie)
//update the watched integer with a put or patch

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})