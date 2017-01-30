'use strict';

var fs = require('fs');

exports.get = function(req, res) {
  var sites = JSON.parse(fs.readFileSync("data/sites.json", 'utf8'));
  var result = [];

  for (var key in sites) {
    if (sites.hasOwnProperty(key)) {
      result.push(sites[key]);
    }
  }

  res.json(result);
}