'use strict';
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  added_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Users', UserSchema);
