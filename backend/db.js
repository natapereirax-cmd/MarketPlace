const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_password",
  database: "marketplace",
});

db.connect(err => {
    if (err) throw err;
});

module.exports = db;