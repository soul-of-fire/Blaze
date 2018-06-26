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
  transport: require(sample + 'transport.json')
};

app.get('/api/transport', function (req, res) {
  setTimeout( function() {
    res.setHeader('Content-Type', 'application/json');
    res.send(example.transport);
  }, 0);
});

app.put('/api/sign', function (req, res) {
  setTimeout( function() {
    res.setHeader('Content-Type', 'application/json');
    res.send({token: 'TOKEN'});
  }, 0);
});

app.post('/api/sign', function (req, res) {
  setTimeout( function() {
    res.setHeader('Content-Type', 'application/json');
    res.send({token: 'TOKEN'});
  }, 0);
});

app.listen(port, function () {
  console.log("Express server listening on port " + port);
});
