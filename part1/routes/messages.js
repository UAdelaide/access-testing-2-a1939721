var express = require('express');
var router = express.Router();
var db = require('../db');

var CURRENT_BUYER_ID = 3;
var CURRENT_SELLER_ID = 3;

router.get('/items', async (req,res) => {
    const[rows] = await db.query(`
        SELECT bl.BookID, bi.Title, u.Name AS SellerName, bl.SellerID
        FROM BookListings bl
        JOIN BookInfo bi ON bl.BookInfoID = bi.BookInfoID
        JOIN Users u ON bl.SellerID = u.UserID
        `);
        res.json(rows);
});

router.get('/messages', async (req, res) => {
    const [rows] = await db.query(`
        SELECT m.MESSAGE AS MessageText, m.SentAt, bi.Title, u.Name AS BuyerName
        FROM messages m
        JOIN BookListings bl ON m.BookID = bl.BookID
        JOIN BookInfo bi ON bl.BookInfoID = bi.BookInfoID
        JOIN Users u ON m.BuyerID = u.UserID
        WHERE m.SellerID = ?
        ORDER BY m.SentAt Desc
        `, [CURRENT_SELLER_ID]);
        res.json(rows);
});

router.post('/messages', async (req,res) => {
    const { bookID, sellerID, message } = req.body;
    await db.query(`
        INSERT INTO messages (BuyerID, SellerID, BookID, MESSAGE, SentAt)
        VALUES(?,?,?,?, NOW())
        `, [CURRENT_BUYER_ID, sellerID, bookID, message]);
        res.status(201).json({MESSAGE: 'Message sent!'});
});

module.exports = router;