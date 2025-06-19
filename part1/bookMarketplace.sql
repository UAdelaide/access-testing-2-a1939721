DROP DATABASE IF EXISTS BookMarketplace;
CREATE DATABASE BookMarketplace;
USE BookMarketplace;

CREATE TABLE Locations (
    LocationID INT AUTO_INCREMENT PRIMARY KEY,
    City VARCHAR (100) NOT NULL,
    State VARCHAR (100) NOT NULL,
    Country VARCHAR (100) NOT NULL
);

CREATE TABLE Users (
    
)
