// import files and packages up here
var express = require('express');
var morgan = require('morgan');
var data = require('./data.json');
// create your express server below
var app = express();

// add your routes and middleware below
app.get('/data', function(req, res) {
    res.type('json');
    res.end(JSON.stringify(data));
});

app.use(express.static(__dirname + '/startnow-web101-san-diego-top-spots'));
app.use(morgan('dev'));

app. get('/', function(req, res) {
    res.send('Hello');
});

var server = app.listen(3000, function() {
    console.log('Listening on port 3000');
});
// finally export the express application
module.exports = app;
