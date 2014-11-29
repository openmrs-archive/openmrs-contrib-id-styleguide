var path = require('path');
var express = require('express');

module.exports = function (app) {
  app.get('/styleguide', function(req, res, next) {
    res.render(__dirname + '/../views/styleguide');
  });
  app.use('/styleguide/static', express.static(__dirname + '/../static'));
}
