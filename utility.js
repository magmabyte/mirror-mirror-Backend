
var returnErrorOrUseHandler =
  function(res, handler) {
    return function(err, res) {
      if (err)
        res.json(err);
      handler(res);
    }
  };

exports.returnErrorOrUseHandler =
  returnErrorOrUseHandler;

exports.returnErrorOrIdentity =
  returnErrorOrUseHandler(function(res) {
    res.json(user);
  });

exports.returnErrorOrSuccess =
  returnErrorOrUseHandler(function(res) {
    res.json({ message: 'Success' });
  });
