var express = require('express');
var router = express.Router();
var db = require('../db');

var CURRENT_BUYER_ID = 1;
var CURRENT_SEOLLER_ID = 2;

router.get('/items', async (req,res)=>{
    const[rows] = await db.query('
        SELECT bl.
        ');
});