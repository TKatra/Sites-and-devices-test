'use strict';

var fs = require('fs');

exports.get = function(req, res) {
  var devices = JSON.parse(fs.readFileSync("data/devices.json", 'utf8'));
  var result = [];

  for (var key in devices) {
    if (devices.hasOwnProperty(key)) {
      result.push(devices[key]);
    }
  }
  
  res.json(result);
}