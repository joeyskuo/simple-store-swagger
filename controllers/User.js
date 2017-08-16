'use strict';

var url = require('url');


var User = require('./UserService');


module.exports.loginUser = function loginUser (req, res, next) {
  User.loginUser(req.swagger.params, res, next);
};

module.exports.loginUser1 = function loginUser1 (req, res, next) {
  User.loginUser1(req.swagger.params, res, next);
};
