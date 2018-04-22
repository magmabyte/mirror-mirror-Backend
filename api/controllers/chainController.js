'use strict';

var utility = require('../../utility');

var mongoose = require('mongoose'),
    User = mongoose.model('Users'),
    Chain = mongoose.model('Chains'),
    ChainPicture = mongoose.model('ChainPictures');

exports.create = function(req, res) {
  var chain = new Chain();
  chain.save(utility.returnErrorOrIdentity(res));
};

exports.random = function(req, res) {
  var userId = req.query['user_id'];
  var usersChains = ChainPicture.find({'user_id': userId.toObjectId()})
    .exec(utility.returnErrorOrUseHandler(
      function(res, queryRes) {
          ChainPicture.find({"chain_id" : { "$nin": [] }})
          .exec(utility.returnErrorOrUseHandler(function(res, queryRes) {
            var randomIndex = Math.floor((Math.random() * queryRes.length));
            res.send(queryRes[randomIndex]);
          })(res));
      })(res));
}

exports.getPictures = function(req, res) {
  var chainId = req.params.chainId;
  ChainPicture.find({"chain_id": chainId.toObjectId()}, utility.returnErrorOrIdentity(res));
}

exports.createNextPicture = function(req, res) {
  var picture = new ChainPicture(req.body);
  picture["chain_id"] = req.params.chainId;
  picture.save(utility.returnErrorOrIdentity(res));
}

exports.get = function(req, res) {
  Chain.findById(req.params.chainId, utility.returnErrorOrIdentity(res));
};

exports.getAll = function(req, res) {
  Chain.find({}, utility.returnErrorOrIdentity(res));
}

exports.delete = function(req, res) {
  Chain.remove({ _id: req.params.chainId }, utility.returnErrorOrSuccess(res));
};
