'use strict';

var utility = require('../../utility');

var mongoose = require('mongoose'),
    User = mongoose.model('Users');

exports.create = function(req, res) {
  var user = new User(req.body);
  user.save(utility.returnErrorOrIdentity(res));
};

exports.get = function(req, res) {
  User.findById(req.params.userId, utility.returnErrorOrIdentity(res));
};

exports.update = function(req, res) {
  User.findOneAndUpdate({_id: req.params.userId},
                        req.query,
                        {new: true},
                        utility.returnErrorOrIdentity(res));
};

exports.delete = function(req, res) {
  User.remove({ _id: req.params.userId }, utility.returnErrorOrSuccess(res));
};
