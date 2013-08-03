var express = require('express');
var fs = require('fs');
var htmlfile = "./index.html";
var out = fs.readFileSync(htmlfile,'ascii');

var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(out);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
