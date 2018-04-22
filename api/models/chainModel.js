'use strict';
var mongoose = require('mongoose');

var ChainSchema = new mongoose.Schema({
  added_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Chains', ChainSchema);
