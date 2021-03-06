CREATE DATABASE IF NOT EXISTS burger_db;

USE burger_db;

CREATE TABLE burgers(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured bool default false,
	date TIMESTAMP default current_timestamp,
	PRIMARY KEY (id)
);
