var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  console.log('<>GET /');
  console.log(req.body);
  res.sendStatus(200);
});

app.put('/', function(req, res) {
  console.log('<>PUT /');
  console.log(req.body);
  res.sendStatus(200);
});

app.post('/', function(req, res) {
  console.log('<>POST /');
  console.log(req.body);
  res.sendStatus(200);
});

app.delete('/', function(req, res) {
  console.log('<>DELETE /');
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
