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
    // get those chain ids which the user does not have an image in
    // select random findOneAndUpdate
  var userId = req.query['user_id'];
  var usersChains = ChainPicture.find({'user_id': userId})
    .exec(utility.returnErrorOrUseHandler(res,
      function(res) {
        console.log(res);
        //var freeUserChains = ChainPicture
        //  .where('chain_id').nin(res['chain_id']);
      }));
}

// todo get last?
exports.getPictures = function(req, res) {

}

exports.createNextPicture = function(req, res) {

}

exports.get = function(req, res) {
  Chain.findById(req.params.chainId, utility.returnErrorOrIdentity(res));
};

exports.delete = function(req, res) {
  Chain.remove({ _id: req.params.chainId }, utility.returnErrorOrSuccess(res));
};
