var express = require('express'),
  path = require('path'),
  fs = require('fs'),
  http = require('http'),
  path = require('path'),
  morgan = require('morgan'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  sample = './samples/',
  app = express(),
  port = 4202;
var request = require('request');
app.use(cors());
app.use(bodyParser());

var example = {
  supplier: require(sample + 'supplier.json'),
  admin: require(sample + 'permissions-admin.json'),
  guest: require(sample + 'permissions-guest.json')
};

app.get('/admin/supplier', function (req, res) {
  var page = req.param('page');
  var per_page = req.param('per_page');
  setTimeout( function() {
    res.setHeader('Content-Type', 'application/json');
    res.send({
      list: example.supplier.list.slice(((page - 1) * per_page), (page * per_page)),
      total: example.supplier.total
    });
  }, 0);
});

app.get('/admin/supplier/:id', function (req, res) {
  setTimeout( function() {
    res.setHeader('Content-Type', 'application/json');
    var index = Number(req.params.id) - 1;
    res.send(example.supplier.list[index]);
  }, 0);
});

app.put('/admin/supplier/:id', function (req, res) {
  setTimeout( function() {
    res.setHeader('Content-Type', 'application/json');
    var index = Number(req.params.id) - 1;
    example.supplier.list[index] = req.body;
    res.send(req.body);
  }, 0);
});

app.post('/admin/supplier', function (req, res) {
  setTimeout( function() {
    res.setHeader('Content-Type', 'application/json');
    example.supplier.list.push(req.body);
    req.body.id = example.supplier.total + 1;
    req.body.site = {
      "id": 1,
      "name": "Office"
    };
    example.supplier.total += 1;
    res.send(req.body);
  }, 0);
});

app.delete('/admin/supplier/:id', function (req, res) {
  setTimeout( function() {
    res.setHeader('Content-Type', 'application/json');
    var index = Number(req.params.id) - 1;
    example.supplier.list[index].is_active = false
    res.send(example.supplier.list[index]);
  }, 0);
});

app.post('/admin/auth/signin', function (req, res) {
  var user = req.body.username;
  setTimeout( function() {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGFpbXMiOnsidXNlciI6eyJpZCI6MiwidXNlcm5hbWUiOiJrYW1hcmEiLCJlbWFpbCI6ImluZm9AbW9vdmV4LmNvbSIsImZpcnN0X25hbWUiOiJDdXN0b21lciIsImxhc3RfbmFtZSI6IkN1c3RvbWVyb3YiLCJwaG9uZSI6IiszNTk4OTk3NzY2NDQiLCJleHBpcmVzX29uIjoiMTYwMzE1MjAwMCIsImN1c3RvbWVyIjp7ImlkIjoxLCJuYW1lIjoiS2FtYXJhIn19fSwiZXhwIjozMTUzMTQ4MzcxMn0.2e8IPvWPVTc9KlkcEFKRPnpmhhRHYYquNugNZSoJVMA');
    res.setHeader('Refresh', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGFpbXMiOnsidXNlciI6eyJpZCI6MiwidXNlcm5hbWUiOiJrYW1hcmEiLCJlbWFpbCI6ImluZm9AbW9vdmV4LmNvbSIsImZpcnN0X25hbWUiOiJDdXN0b21lciIsImxhc3RfbmFtZSI6IkN1c3RvbWVyb3YiLCJwaG9uZSI6IiszNTk4OTk3NzY2NDQiLCJleHBpcmVzX29uIjoiMTYwMzE1MjAwMCIsImN1c3RvbWVyIjp7ImlkIjoxLCJuYW1lIjoiS2FtYXJhIn19fSwiZXhwIjo4NzkzMTQ4MzcxMn0.WBi5ZnrVhiK0_hsZf1_9N_w2Xtfsne1SNxr-WihH5K4');
    res.header("Access-Control-Expose-Headers", ["Authorization", "Refresh"]);
    res.send(user == 'moovex' ? example.admin : example.guest);
  }, 0);
});

app.post('/admin/auth/refresh-access-token', function (req, res) {
  setTimeout( function() {
    // console.log(req.get('Refresh'));
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGFpbXMiOnsidXNlciI6eyJpZCI6MiwidXNlcm5hbWUiOiJrYW1hcmEiLCJlbWFpbCI6ImluZm9AbW9vdmV4LmNvbSIsImZpcnN0X25hbWUiOiJDdXN0b21lciIsImxhc3RfbmFtZSI6IkN1c3RvbWVyb3YiLCJwaG9uZSI6IiszNTk4OTk3NzY2NDQiLCJleHBpcmVzX29uIjoiMTYwMzE1MjAwMCIsImN1c3RvbWVyIjp7ImlkIjoxLCJuYW1lIjoiS2FtYXJhIn19fSwiZXhwIjozMTUzMTQ4MzcxMn0.2e8IPvWPVTc9KlkcEFKRPnpmhhRHYYquNugNZSoJVMA');
    res.setHeader('Refresh', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGFpbXMiOnsidXNlciI6eyJpZCI6MiwidXNlcm5hbWUiOiJrYW1hcmEiLCJlbWFpbCI6ImluZm9AbW9vdmV4LmNvbSIsImZpcnN0X25hbWUiOiJDdXN0b21lciIsImxhc3RfbmFtZSI6IkN1c3RvbWVyb3YiLCJwaG9uZSI6IiszNTk4OTk3NzY2NDQiLCJleHBpcmVzX29uIjoiMTYwMzE1MjAwMCIsImN1c3RvbWVyIjp7ImlkIjoxLCJuYW1lIjoiS2FtYXJhIn19fSwiZXhwIjo4NzkzMTQ4MzcxMn0.WBi5ZnrVhiK0_hsZf1_9N_w2Xtfsne1SNxr-WihH5K4');
    res.header("Access-Control-Expose-Headers", ["Authorization", "Refresh"]);
    res.send();
  }, 0);
});

app.listen(port, function () {
  console.log("Express server listening on port " + port);
});
