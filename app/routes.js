'use strict';

var SiteController = require('./modules/sites/controllers/siteController');
var DeviceController = require('./modules/devices/controllers/deviceController');

module.exports = function(app) {
  app.get('/api/sites', SiteController.get);
  
  app.get('/api/devices', DeviceController.get);
  app.get('/api/devices/:id', DeviceController.getById);

  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });
};