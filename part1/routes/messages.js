var express = require('express');
var router = express.Router();
var db = require('../db');

var CURRENT_BUYER_ID = 1;
var CURRENT_SEOLLER_ID = 2;

router.get('/items', async (req,res) => {
    const[rows] = await db.query(`
        SELECT bl.BookID, bi.Title, u.Name AS SellerName
        FROM BookListings bl
        JOIN BookInfo bi ON bl.BookInfoID = bi.BookInfoID
        JOIN Users u ON bl.SellerID = u.UserID
        `);
        res.json(rows);
});

router.post('/messages', async (req,res)=>{
    const { bookID, message } = req.body;
    await db.query(`
        INSERT INTO Messages (BuyerID, SellerID, BookID, MessageText, SentAt)
        VALUES(?,?,?,?, NOW())
        `, [CURRENT_BUYER_ID, CURRENT_SEOLLER_ID, bookID, message]);
        
});

module.exports = router;