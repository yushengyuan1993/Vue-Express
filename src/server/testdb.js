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
<<<<<<< HEAD
    }    
=======
    }
>>>>>>> 50067984103526a6a036dcadb9c21229beb66959
});
db.end();
