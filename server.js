var express = require('express');
var fakeArray = require ('./models/fakeArray.js');
var app = express();

 app.get('/', function (req, res){
  res.render('index.ejs');
  console.log(fakeArray[1]);
 }
)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
