var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    port: 3306,
    database : 'nodeAuth'
});

db.connect(function(err){
    if(err) throw err;
    console.log("Database Connected.");
});

module.exports = db;
