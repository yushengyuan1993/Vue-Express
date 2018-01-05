var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  	res.send('hello yushengyuan');
});

router.post('/getuser', (req, res) => {
	db('SELECT * FROM `user_info` WHERE `id`=0', (error, data) => {
		data && res.json({user_data: data});
	});
});

module.exports = router;
