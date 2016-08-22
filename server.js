var express = require('express');
var fakeArray = require ('./models/fakeArray.js');
var app = express();

var PORT = process.env.PORT || 3000;

 app.get('/', function (req, res){
  res.render('index.ejs', {
    dataArray: fakeArray
  });
 })

app.listen(PORT, function () {
  console.log('Example app listening on port 3000!');
});
