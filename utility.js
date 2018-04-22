
var returnErrorOrUseHandler =
  function(handler) {
    return function(res) {
      return function(err, queryRes) {
        if (err) {
          res.json({ message: "Error handling request" })
          throw(err);
        }
        
        handler(res, queryRes);
      }
    }
  };

exports.returnErrorOrUseHandler =
  returnErrorOrUseHandler;

exports.returnErrorOrIdentity =
  returnErrorOrUseHandler(function(res, queryRes) {
    res.json(queryRes);
  });

exports.returnErrorOrSuccess =
  returnErrorOrUseHandler(function(res, queryRes) {
    res.json({ message: 'Success' });
  });

var mongoose = require('mongoose');
String.prototype.toObjectId = function() {
  return new mongoose.Types.ObjectId(this.toString());
};
