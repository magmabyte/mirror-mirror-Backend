'use strict';
module.exports = function(app) {
  var users = require('../controllers/userController');

  app.route('/users')
    .post(users.create);

  app.route('/users/:userId')
    .get(users.get)
    .put(users.update)
    .delete(users.delete);
};
