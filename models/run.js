var Sequelize = require('Sequelize');
var db = require('./db.js');

var Run = db.define('run' , {
  date: Sequelize.DATE,
  distance: Sequelize.FLOAT,
});

db.sync();

module.exports = Run;
