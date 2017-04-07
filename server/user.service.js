"use strict";

var express = require('express');
var request = require('request');
var User = require('./models/user.model');
var router = express.Router();

module.exports = function (server) {

  router.get('/', function (req, res) {
    User.find({}, function(err, users) {
      console.log(users);
      res.json(users);
    });
  });

  router.post('/', function(req, res) {
    if (!req.body.username || !req.body.password) {
      res.status(400).send("user must have username and password");
      return;
    } 
    var newUser = User({
      username: req.body.username,
      password: req.body.password,
      salt: "asalt"
    })

    newUser.save(function(err) {
      if (err) {
        res.status(500).send("Error creating user");
      } else {
        res.status(201).json(newUser);
      }
    })
  });

  server.use('/user', router);

};
