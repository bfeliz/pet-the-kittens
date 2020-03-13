-- creation of database and table

CREATE DATABASE kittens_db;

USE kittens_db;

CREATE TABLE kittens (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(70) NOT NULL,
    pet BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);