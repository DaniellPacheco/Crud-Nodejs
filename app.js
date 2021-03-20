const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const routes = require('./config/routes');
const mysql = require('./config/dbConfig');
const sql = require('./config/dbConfig');
sql.query("use test");

// CONFIG BODY PARSER
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Routes
app.use('/', routes);

// CONFIG HANDLEBARS
app.engine("handlebars", handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// STATIC FILES
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/img', express.static(__dirname + '/public/img'));

const PORT = 8000;
app.listen(PORT, console.log("Server is running at: http://localhost:" + PORT));