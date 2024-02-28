const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mainController = require('./controllers/mainController');

// DB Koneksi
const dbConfig = {
    host: 'localhost',
    user: 'jevon',
    password: 'NNHOwzDZS/F0b9Y)',
    database: 'nodejs_crud',
};



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/', mainController.getAllData);
app.get('/add', mainController.showAddForm);
app.post('/add', mainController.addForm);
app.get('/update/:id', mainController.showUpdateForm);
app.post('/update/:id', mainController.updateData);
app.get('/delete/:id', mainController.deleteData);
app.delete('/delete/:id', mainController.deleteData);

// Server Response
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('\x1b[33mHost: \x1b[0m"' + dbConfig.host + '"');
    console.log('\x1b[33mUser: \x1b[0m"' + dbConfig.user + '"');
    console.log('\x1b[33mDatabase: \x1b[0m"' + dbConfig.database + '" \n');
    console.log('Server running on \x1b[38;5;211m"http://localhost:' + `${PORT}` + '"\x1b[0m \n');
});
