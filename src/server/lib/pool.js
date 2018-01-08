const mysql = require('mysql');

// 创建连接池
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'yushengyuan',
    database: 'test'
});

const query = (sql, callback) => {
    pool.getConnection((err, conn) => {
        if (err) {
            callback(err, null, null);
        } else {
            conn.query(sql, (qerr, vals, fields) => {
                // 释放链接
                conn.release();

                // 回调函数
                callback(qerr, vals, fields);
            });
        }
    });
}

module.exports = query;


// ------------------------------------------------------------------------------------

// 使用示例
// const query = require(./pool);
// query("SELECT * FROM `user_info`", (err, vals, fields) => { })

// ------------------------------------------------------------------------------------