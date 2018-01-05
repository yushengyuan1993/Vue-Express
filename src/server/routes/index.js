var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/movie', function(req, res, next) {
  res.sendFile('../static/data/top50.json');
});

module.exports = router;
