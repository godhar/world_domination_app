var express = require('express');
var app = express();
var path = require('path');
var countries = require('./data/countries.js');


app.get('/', function (req, res){
  console.log(countries[249].name);
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.get('/markers', function(req, res){
  res.json(countries);
});

app.use(express.static('client/build'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
