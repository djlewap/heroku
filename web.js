var express = require("express");
var pg = require('pg');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello Worwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwld!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});




pg.connect(process.env.HEROKU_POSTGRESQL_ROSE_URL, function(err, client) {
  var query = client.query('SELECT * FROM your_table');

  query.on('row', function(row) {
    console.log(JSON.stringify(row));
  });
});