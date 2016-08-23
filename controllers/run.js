var express = require('express');
var controller = express.Router();
var run = require('../models/run.js')

controller.get('/', function(req, res){
  console.log( req.query );
  res.json(run);
  //res.send('I\'m in a controller!');
});

controller.get('/:id', function(req, res){
  res.json( run.filter( function(obj){
    return obj.id == req.params.id;
  }) );
});

controller.post('/', function( req, res){
  run.push(req.body);
  //console.log(req.body);
  res.json(run);
});

controller.delete('/:id' , function(req, res){
  var index = run.findIndex( function(e){ return e.id == req.params.id;});
  if ( index > -1 )
    run.splice(index, 1);
  res.json(run);
});

controller.put('/:id' , function(req, res){
  var index = run.findIndex( function(e) { return e.id == req.params.id; });
  if (index > 0){
      req.body.id = req.params.id;
      run[index] = req.body;
      res.json( run );
  }

});
module.exports = controller;
