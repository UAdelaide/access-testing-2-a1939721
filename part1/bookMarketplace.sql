
--Create database--
DROP DATABASE IF EXISTS BookMarketplace;
CREATE DATABASE BookMarketplace;
USE BookMarketplace;


--Create tables--
CREATE TABLE Locations (
    LocationID INT AUTO_INCREMENT PRIMARY KEY,
    City VARCHAR (100) NOT NULL,
    State VARCHAR (100) NOT NULL,
    Country VARCHAR (100) NOT NULL
)

CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR (100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    LocationID INT NOT NULL,
    FOREIGN KEY (LocationID) REFERENCES Locations(LocationID)
);

CREATE TABLE BookInfo (
    BookInfoID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR (255) NOT NULL,
    Author VARCHAR (255) NOT NULL,
    ISBN VARCHAR (20) NOT NULL
);

CREATE TABLE BookListings (
    BookID INT AUTO_INCREMENT PRIMARY KEY,
    BookInfoID INT NOT NULL,
    SellerID INT NOT NULL,
    Price DECIMAL(8,2),
    BookCondition VARCHAR (50) NOT NULL,
    ListingDate DATE NOT NULL,
    FOREIGN KEY (BookInfoID) REFERENCES BookInfo(BookInfoID),
    FOREIGN Key (SellerID) REFERENCES Users(UserID)
);

CREATE TABLE Purchases (
    PurcaseID INT AUTO_INCREMENaT PRIMARY KEY,
    BuyerID INT NOT NULL,
    BookID INT NOT NULL,
    PurchaseDate DATE NOT NULL,
    FOREIGN KEY (BuyerID) REFERENCES Users(UserID),
    FOREIGN Key (BookID) REFERENCES BookListings(BookID)
);

--Insert values--
INSERT INTO Locations (City, State, Country)
VALUES ('Adelaide', 'SA', 'Australia');

INSERT INTO Users (Name, Email, Password, LocationID)
VALUES ('Alice Johnson', 'alice@example.com', 'hashedpassword123', 1);

INSERT INTO BookInfo (Title, Author, ISBN)
VALUES ('Introduction to Algorithms', 'Thomas H. Cormen', '19780262033848');

INSERT INTO BookListings (BookInfoID, SellerID, Price, BookCondition, ListingDate)
VALUES (1, 1, 79.95, 'Good', CURDATE());