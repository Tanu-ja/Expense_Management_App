const express = require('express');
const { addTransaction, getAllTransaction } = require('../controllers/transactionCtrl');


//router object
const router = express.Router();

//routes
//add transaction POST
router.post('/add-transaction',addTransaction);
//GET TRANsaction
router.post("/get-transaction",getAllTransaction);
module.exports = router;