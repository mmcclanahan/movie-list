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
    console.log('controllerpost', req.body)
    models.insert(req.body.name, (err, results) => {
      if (err) {
        res.status(500).send('Internal Server Error')
      } else {
        res.status(201).send('added movie' + req.body.name);
      }

    })
  }
  // You can add more controller functions for inserting and updating movies
};
//use the models method and pass in a callback to them