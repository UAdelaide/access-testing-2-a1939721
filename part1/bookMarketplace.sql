DROP DATABASE IF EXISTS BookMarketplace;
CREATE DATABASE BookMarketplace;
USE BookMarketplace;

CREATE TABLE User (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR (50) NOT NULL UNIQUE,
    email VARCHAR (100) NOT NULL UNIQUE,
    pw password VARCHAR (100 NOT NULL UNIQUE,
    location
)