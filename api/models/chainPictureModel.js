'use strict';
var mongoose = require('mongoose');

var ChainPictureSchema = new mongoose.Schema({
  chain_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Chains', required: true },
  chain_pos: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  picture: { data: Buffer, contentType: String },
  added_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('ChainPictures', ChainPictureSchema);
