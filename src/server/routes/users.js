var express = require('express');
var router = express.Router();
const db = require('../db');
debugger;
/* GET users listing. */
router.get('/users', function(req, res, next) {
  	res.send('hello yushengyuan');
});

router.post('/getuser', (req, res, next) => {
	db('SELECT * FROM `user_info` WHERE `ID`=0', (error, data) => {
		data && res.json({user_data: data});
	});
});

module.exports = router;
