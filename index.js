
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('other message!');
});

app.listen(3200, function () {
  console.log('Example app listening on port 3000!');
});

