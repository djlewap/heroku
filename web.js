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

var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});



var pg = require('pg');
var client;

pg.connect(process.env.DATABASE_URL, function(err, client, done) {
  client.query('SELECT * FROM your_table', function(err, result) {
    done();
    if(err) return console.error(err);
    console.log(result.rows);
  });
});