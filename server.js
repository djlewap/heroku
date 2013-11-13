var express = require("express");
var app = express();
app.use(express.logger());

var html = '<h1 style="position:fixed;top:50%;left:50%;font-size:24px;">САША МОЛОДЕЧИК</h1>'

app.get('/', function(request, response) {
  response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
 
var http = require("http");


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

var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    request.setEncoding("utf8");

    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk '"+
      postDataChunk + "'.");
    });

    request.addListener("end", function() {
      route(handle, pathname, response, postData);
    });

  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;