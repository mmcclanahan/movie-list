CREATE DATABASE movies;
USE movies;
CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(64) NOT NULL,
  watched TINYINT(1) NOT NULL,
  PRIMARY KEY (id)
);
INSERT INTO movies(title, watched) VALUES
('Shrek', 0),
('Fight Club', 0),
('The Godfather', 0);
/*create the database and tables
maybe add unique key (name) to stop dublicates