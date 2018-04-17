const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "node_js_demo_app"
});

findAll = function () {
    return new Promise((resolve, reject) => {
        con.query('SELECT * FROM users', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

findOne = function (id) {
    return new Promise((resolve, reject) => {
        con.query('SELECT * FROM users WHERE id =  ?', [id], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

module.exports = {
    findAll,
    findOne
};