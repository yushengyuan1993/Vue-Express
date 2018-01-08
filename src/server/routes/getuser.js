var express = require('express');
var router = express.Router();
const query = require('../lib/pool');

/* GET users listing. */
router.get('/getuser', (req, res, next) => {
	const str = query('SELECT * FROM `user_info`', (err, vals, fields) => {
		return JSON.stringify(vals);
	});
	res.send(str);
});

module.exports = router;
