'use strict';
module.exports = function(app) {
  var users = require('../controllers/userController');

  app.route('/users')
    .post(users.create)
    .get(users.getAll);

  app.route('/users/:userId')
    .get(users.get);
};
