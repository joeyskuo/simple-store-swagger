'use strict';

var url = require('url');


var Store = require('./StoreService');


module.exports.getInventory = function getInventory (req, res, next) {
  Store.getInventory(req.swagger.params, res, next);
};

module.exports.loginUser22 = function loginUser22 (req, res, next) {
  Store.loginUser22(req.swagger.params, res, next);
};

module.exports.storeStoreNameDELETE = function storeStoreNameDELETE (req, res, next) {
  Store.storeStoreNameDELETE(req.swagger.params, res, next);
};
