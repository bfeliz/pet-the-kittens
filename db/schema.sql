-- creation of database and table

DROP DATABASE IF EXISTS kittens_db;

CREATE DATABASE kittens_db;

USE kittens_db;

CREATE TABLE kittens (
    id INT NOT NULL AUTO_INCREMENT,
    kitten_name VARCHAR(30) NOT NULL,
    petted BOOLEAN,
    PRIMARY KEY (id)
);