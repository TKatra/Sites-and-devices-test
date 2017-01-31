'use strict';

var fs = require('fs');

exports.get = function(req, res) {
  var sites = JSON.parse(fs.readFileSync("data/sites.json", 'utf8'));
  var result = [];

  for (var key in sites) {
    var deviceArray = [];
    if (sites.hasOwnProperty(key)) {

      for (var device in sites[key].devices) {
        deviceArray.push(sites[key].devices[device]);
      }
      sites[key].devices = deviceArray;
      sites[key].showDevices = false;
      result.push(sites[key]);
    }
  }

  res.json(result);
}