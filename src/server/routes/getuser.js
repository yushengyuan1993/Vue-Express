const express = require('express');
const router = express.Router();
const query = require('../lib/pool');

/* GET users listing. */
router.get('/getuser', (req, res, next) => {
	query('SELECT * FROM `user_info`', (err, vals, fields) => {
		res.send(JSON.stringify(vals));
	});
});

module.exports = router;
