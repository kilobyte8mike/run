var express = require('express');
var controller = express.Router();
var run = require('../models/run.js')

controller.get('/', function(req, res){
  console.log( req.query );
  res.json(run);
  //res.send('I\'m in a controller!');
});

controller.get('/:id', function(req, res){
  run.findById(req.params.id).then(function(aRun){
    res.json(aRun);
  })
});

controller.post('/', function( req, res){
  run.create({
    date: new Date('2016-01-01'),
    distance: 5.5
  }).then(function(createdRun){
    res.json(createdRun)
  });

});

controller.delete('/:id' , function(req, res){
  var index = run.findIndex( function(e){ return e.id == req.params.id;});
  if ( index > -1 )
    run.splice(index, 1);
  res.json(run);
});

controller.put('/:id' , function(req, res){
  req.body.id = req.params.id;
  run.push( req.body );
  res.json( run );
});
module.exports = controller;
