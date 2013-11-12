// var express = require("express");
// var app = express();
// app.use(express.logger());

// app.get('/', function(request, response) {
//   response.send('Hello Worwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwld!');
// });

// var port = process.env.PORT || 5000;
// app.listen(port, function() {
//   console.log("Listening on " + port);
// });


// var pg = require('pg').native
//   , connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/fathomless-shore-6467'
//   , client
//   , query;

// client = new pg.Client(connectionString);
// client.connect();
// query = client.query('SELECT * FROM mytable');
// query.on('end', function() { client.end(); });

var express = require('express')
  , app = express()
  , pg = require('pg')
  , connectionString = process.env.DATABASE_URL
  , start = new Date()
  , port = process.env.PORT || 5432
  , client;

client = new pg.Client(connectionString);
client.connect();

app.get('/', function(req, res) {
  var date = new Date();

  client.query('INSERT INTO visits(date) VALUES($1)', [date]);

  query = client.query('SELECT COUNT(date) AS count FROM visits WHERE date = $1', [date]);
  query.on('row', function(result) {
    console.log(result);

    if (!result) {
      return res.send('No data found');
    } else {
      res.send('Visits today: ' + result.count);
    }
  });
});

app.listen(port, function() {
  console.log('Listening on:', port);
});