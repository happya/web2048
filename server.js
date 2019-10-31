var express = require('express');
var app = express();

app.use(express.static('./public'));
port = 8091;
module.exports = app.listen(port, function(err) {
  if(err) {
    console.log(err);
    return;
  }
  console.log('listening to port ' + port + '\n');
})