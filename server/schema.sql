CREATE DATABASE 'movies';
USE 'movies';
CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(64) NOT NULL,
  watched INT NOT NULL,
  PRIMARY KEY (id)
);
INSERT INTO movies(name, watched) VALUES
('Shrek', 0),
('Fight Club', 0),
('The Godfather', 0);
/*create the database and tables