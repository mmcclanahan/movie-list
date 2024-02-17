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
    db.query('INSERT INTO movies (title, watched) VALUES (?, 0)',[name], (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },
  //update a movie watch
  toggle: function(data, callback) {
    console.log('toggle model', data)
    db.query(`UPDATE movies SET watched = ${data.watched} WHERE id = ${data.id}`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        console.log(results,'querys results variable');
        callback(null, results)
      }
    })
  }
}

//querys functions for select and insert