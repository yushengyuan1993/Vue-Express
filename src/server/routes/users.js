var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  	res.send('hello yushengyuan');
});

// router.post('/countryList', (req, res) => {
// 	db('select id, country_name from tour_country', (error, data) => {
// 		data && res.json({countryList: data});
// 	});
// });

module.exports = router;
