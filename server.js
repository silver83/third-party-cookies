#!/usr/bin/env node

var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.get('/getcookie', function(req, res){
  if (!req.cookies['cookie.monster'])
    res.cookie('cookie.monster', 'aaaAAAArgh!!', { domain: '.domain2.com', expires: new Date(Date.now() + 900000) });
  res.jsonp(req.cookies);
});

app.listen(3000);