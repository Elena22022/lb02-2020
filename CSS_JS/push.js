var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "jugendfuerkeniaDB"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO spender (nachname, vorname, telefon, email, passwort) VALUES ('Baur', 'Feli', '', 'baurf@bzz.ch', '1234')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});
