const query = require('./lib/pool');

query('SELECT * FROM `user_info`', (err, vals, fields) => {
    console.log(err, vals, fields)
})