// var express = require("express");
// var app = express();
// app.use(express.logger());

// var html = '<h1 style="position:fixed;top:50%;left:50%;font-size:24px;">САША МОЛОДЕЧИК</h1>'

// app.get('/', function(request, response) {
//   response.send(html);
// });

// var port = process.env.PORT || 5000;
// app.listen(port, function() {
//   console.log("Listening on " + port);
// });

var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
 
var connectionString = process.env.DATABASE_URL || 'postgres://qwhoxmulnhxiax:vdt5elD96k9K4_g7Nvz73BdQpV@ec2-54-204-2-217.compute-1.amazonaws.com:5432/d24sejgbj31vo2'


var pg = require('pg');
var client = new pg.Client(connectionString);

pg.connect(connectionString, function(err, client, done) {
  client.query('SELECT * FROM your_table', function(err, result) {
    done();
    if(err) return console.error(err);
    console.log(result.rows);
  });
});