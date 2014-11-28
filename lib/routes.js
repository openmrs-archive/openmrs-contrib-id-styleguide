var path = require('path');

module.exports = function (app) {
  app.get('/styleguide', function(req, res, next) {
    res.render(__dirname + '/../views/styleguide');
  });
}