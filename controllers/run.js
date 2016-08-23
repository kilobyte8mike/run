var express = require('express');
var controller = express.Router();
var run = require('../models/run.js')

controller.get('/', function(req, res){
  run.all(req.params.id).then(function(allRuns){
    res.json(allRuns);
  });
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
  run.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(didSucceed){
    res.json(didSucceed);
  });
});

controller.put('/:id' , function(req, res){
  req.body.id = req.params.id;
  run.push( req.body );
  res.json( run );
});
module.exports = controller;
