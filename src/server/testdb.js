const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'yushengyuan',
    database: 'test'
});

db.connect();
db.query('SELECT * FROM `user_info`', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
    
    db.end();    
});
