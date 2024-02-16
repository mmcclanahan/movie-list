//require the database connection
const db = require('../db');

module.exports = {
  /*get all movies is called and passed the callback:
  (err, movies) => {
      if (err) {
        console.error(err);
        res.status(500).send('error');
      } else {
        res.json(movies);
      }
    }
  */
  getAll: function(callback) {
    db.query('SELECT * FROM movies', (err, results) => {
      console.log('model');
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },
  //insert a movie // from a post quest
  insert: function(name, callback) {
    console.log('insert model', name)
    db.query('INSERT INTO movies (name, watched) VALUES (?, false)',[name], (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  }
  //update a movie watch
}

//querys functions for select and insert