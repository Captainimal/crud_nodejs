const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'jevon',
    password: 'NNHOwzDZS/F0b9Y)',
    database: 'nodejs_crud',
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('\x1b[38;5;240m[To stop server press Ctrl + C]\x1b[0m\n');
});

module.exports = db;
