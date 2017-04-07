/*jslint node: true */
'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var compression = require('compression');
var mongoose = require('mongoose');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());
app.use('/', express.static(__dirname + '/dist/'));

app.use(function(req, res, next) {
    // var origin = req.headers.origin;
    // if (origin) {
    //     res.header('Access-Control-Allow-Origin', "localhost**");
    //     res.header('Access-Control-Allow-Credentials', true);
    //     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    // }
    res.header('Access-Control-Allow-Origin', "localhost**");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

/* Express Services */

app.get('/test', function (req, res) {
    res.send("test");
})

mongoose.connect('mongodb://localhost/test');

var user = require('./server/user.service.js');
user(app);

var game = require('./server/game.service.js');
game(app);

app.all('*', function(req, res) {
    res.redirect('/');
});

var port = process.env.PORT || 3030;

var webServer = app.listen(port, function() {
    console.log('Listening on port %d', webServer.address().port);
});