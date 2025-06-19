var express = require('express');
var router = express.Router();
var db = require('../db');

var CURRENT_BUYER_ID = 1;
var CURRENT_SELLER_ID = 2;

router.get('/items', async (req,res) => {
    const[rows] = await db.query(`
        SELECT bl.BookID, bi.Title, u.Name AS SellerName
        FROM BookListings bl
        JOIN BookInfo bi ON bl.BookInfoID = bi.BookInfoID
        JOIN Users u ON bl.SellerID = u.UserID
        `);
        res.json(rows);
});

router.get('/messages', async (req, res) => {
    const [rows] = await db.query(`
        SELECT m.MESSAGE, m.SentAt, bi.Title, u.Name AS BuyerName
        FROM Messages m
        JOIN BookListings bl ON m.BookID = bl.BookID
        JOIN BookInfo bi ON bl.BookInfoID = bi.BookInfoID
        JOIN Users u ON m.BuyerID = u.UserID
        WHERE m.SellerID = ?
        ORDER BY m.SentAt Desc
        `, [CURRENT_BUYER_ID]);
        res.json(rows);
});

router.post('/messages', async (req,res) => {
    const { bookID, MESSAGE } = req.body;
    await db.query(`
        INSERT INTO Messages (BuyerID, SellerID, BookID, MESSAGE, SentAt)
        VALUES(?,?,?,?, NOW())
        `, [CURRENT_BUYER_ID, CURRENT_SELLER_ID, bookID, MESSAGE]);
        res.status(201).json({MESSAGE: 'Message sent!'});
});

module.exports = router;