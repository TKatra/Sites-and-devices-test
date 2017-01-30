'use strict';

var SiteController = require('./modules/sites/controllers/siteController');

module.exports = function(app) {
  app.get('/api/sites', SiteController.get);

  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });
};