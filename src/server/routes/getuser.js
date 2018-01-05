var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET users listing. */
router.get('/getuser', (req, res, next) => {
	// db('SELECT * FROM `user_info` WHERE `ID`=0', (error, data) => {
	//   	data && res.json({user_data: data});
	// });
	res.send('15107156924');
});

module.exports = router;
