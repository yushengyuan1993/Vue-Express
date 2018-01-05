var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.header("Access-Control-Allow-Origin", "http://111.231.78.140:8080");
  // res.header('Access-Control-Allow-Credentials', true);//告诉客户端可以在HTTP请求中带上Cookie
  res.header("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, Content-Language, Cache-Control, X-E4M-With,X_FILENAME");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  // res.header("X-Powered-By",' 3.2.1')
  // res.header("Content-Type", "application/json;charset=utf-8");
=======
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header('Access-Control-Allow-Credentials', true);//告诉客户端可以在HTTP请求中带上Cookie
  res.header("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, " +
      "Last-Modified, Cache-Control, Expires, Content-Type, Content-Language, Cache-Control, X-E4M-With,X_FILENAME");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
>>>>>>> 6f1d0ea58196ae288f7510b419636f2af09db505

  res.send('hello yushengyuan');
});

module.exports = router;
