var express = require('express'),
  path = require('path'),
  fs = require('fs'),
  http = require('http'),
  path = require('path'),
  morgan = require('morgan'),
  cors = require('cors'),
  sample = './samples/',
  app = express(),
  port = 4202;
var request = require('request');
app.use(cors());

var example = {
  recipes: require(sample + 'recipes.json')
};

app.get('/api/recipes', function (req, res) {
  setTimeout( function() {
    res.setHeader('Content-Type', 'application/json');
    res.send(example.recipes);
  }, 0);
});

app.put('/api/sign', function (req, res) {
  setTimeout( function() {
    res.setHeader('Content-Type', 'application/json');
    res.send({token: 'MALIN'});
  }, 0);
});

app.post('/api/sign', function (req, res) {
  setTimeout( function() {
    res.setHeader('Content-Type', 'application/json');
    res.send({token: 'MALIN'});
  }, 0);
});

app.listen(port, function () {
  console.log("Express server listening on port " + port);
});
