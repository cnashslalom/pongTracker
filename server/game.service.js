"use strict";

var express = require('express');
var request = require('request');
var Game = require('./models/game.model');
var router = express.Router();

module.exports = function (server) {

  router.get('/', function (req, res) {
    Game.find({}, function(err, games) {
      console.log(games);
      res.json(games);
    });
  });

  router.post('/', function(req, res) {
    if (!req.body.a1 || !req.body.b1 || !req.body.a_score || !req.body.b_score 
      || !req.body.created_user || !req.body.verified_user) {
      res.status(400).send("Please enter required fields");
      return;
    } 
    var newGame = Game({
      a1: req.body.a1,
      a2:req.body.a2,
      b1: req.body.b1,
      b2: req.body.b2,
      a_score: req.body.a_score,
      b_score: req.body.b_score,
      doubles: req.body.doubles,
      created_user: req.body.created_user,
      updated_user: req.body.updated_user,
      verified_user: req.body.verified_user,
      location: req.body.location,
      created_at: Date.now(),
      updated_at: Date.now()
    })

    newGame.save(function(err) {
      if (err) {
        res.status(500).send("Error creating game");
      } else {
        res.status(201).json(newGame);
      }
    })
  });

  router.put('/', (req, res) => {
    if (!req.body._id) {
      res.status(400).send("Bad Input");
      return;
    }
    Game.findById(req.body._id, (err, game) => {
      if(err) {
        res.status(500).send(err);
        return;
      }
      if (!game) {
        res.status(404).send("Game not found");
        return;
      }
      game.a1 = req.body.a1 ? req.body.a1 : game.a1;
      game.a2 = req.body.a2 ? req.body.a2 : game.a2;
      game.b1 = req.body.b1 ? req.body.b1 : game.b1;
      game.b2 = req.body.b2 ? req.body.b2 : game.b2;
      game.a_score = req.body.a_score ? req.body.a_score : game.a_score;
      game.b_score = req.body.b_score ? req.body.b_score : game.b_score;
      game.doubles = req.body.doubles ? req.body.doubles : game.doubles;
      game.created_user = req.body.created_user ? req.body.created_user : game.created_user;
      game.updated_user = req.body.updated_user ? req.body.updated_user : game.updated_user;
      game.verified_user = req.body.verified_user ? req.body.verified_user : game.verified_user;
      game.location = req.body.location ? req.body.location : game.location;
      game.updated_at = Date.now();

      game.save((err, game) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.status(200).json(game);
        }
      })
    })
  });

  router.delete('/:id', (req, res) => {
    if(!req.params.id) {
      res.status(400).send("No ID supplied");
      return;
    } 
    Game.findById(req.params.id, (err, game) => {
      if (err) {
        res.status(500).send(err);
        return;
      } 
      if (!game) {
        res.status(404).send("Game not found");
        return;
      }
      game.remove((err) => {
        if(err) {
          res.status(500).send(err);
        } else{
          res.send(200).end();
        }
      })
    })
  });

  server.use('/game', router);

};
