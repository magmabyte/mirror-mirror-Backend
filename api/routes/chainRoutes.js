'use strict';
module.exports = function(app) {
  var chains = require('../controllers/chainController');

  app.route('/chains')
    .post(chains.create)
    .get(chains.getAll);

  app.route('/chainsRandom')
    .get(chains.random);

  app.route('/chains/:chainId')
    .get(chains.get);

  app.route('/chains/:chainId/pictures')
    .post(chains.createNextPicture)
    .get(chains.getPictures);
};
