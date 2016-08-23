var express = require('express');
var bodyParser  = require('body-parser');

var app = express();
var runController = require('./controllers/run.js');

app.use(express.static('public'));
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/run', runController);

app.use(function( req, res, next){
  console.log('use called');
  next();
});


app.use(function( req, res, next){
  console.log('use called again');
  next();
});


app.use( '/mike' , function( req, res, next){
  console.log('Mike called');
  next();
});

 app.get('/', function (req, res){
  res.render('index.ejs' );
 })

app.listen(PORT, function () {
  console.log('Example app listening on port 3000!');
});
