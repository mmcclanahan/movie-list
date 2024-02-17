//import the models functions
var models = require('../models/movies');

module.exports = {
  // from index.js// it runs this function which takes in the req and response objects
  // runs models function
  getAllMovies: function(req, res) {
    console.log('controller')
    models.getAll((err, movies) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log(movies);
        res.status(200).json(movies);
      }
    });
  }, //uses insert from models takes in a name parameter and callback
  postAMovie: function(req, res) {
    console.log('controllerpost', req.body);
    console.log('req.body.name', req.body.title);
    models.insert(req.body.title, (err, results) => {
      if (err) {
        res.status(500).send('Internal Server Error')
      } else {
        res.status(201).send('added movie' + req.body.title);
      }
    })
  }, // put request toggle watched // passes a js object
  toggleWatchedInt: function (req, res) {
    //call the model and pass it the req object and a callback
    console.log('toggleWatched controller', req.body);
    models.toggle(req.body, (err, result) => {
      if (err) {
        res.status(500).send('Internal server error patch');
      } else {
        res.status(200).send('watched value updated in DataBase');
      }
    })
  }
};
//use the models method and pass in a callback to them