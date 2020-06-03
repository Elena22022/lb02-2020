var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "jugendfuerkeniaDB"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT vorname, nachname FROM spender ORDER BY vorname, nachname", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
