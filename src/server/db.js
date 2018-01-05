// 连接数据库
const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'yushengyuan',
    database : 'test'
});

connection.connect();

// 查询
connection.query('SELECT * FROM `user_info` WHERE `ID`=0', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows);
});

// 关闭连接
connection.end();
