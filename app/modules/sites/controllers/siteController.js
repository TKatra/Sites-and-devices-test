'use strict';

var fs = require('fs');

exports.get = function(req, res) {
  res.json(JSON.parse(fs.readFileSync("data/sites.json", 'utf8')));
}