'use strict';

var url = require('url');


var Item = require('./ItemService');


module.exports.addItem = function addItem (req, res, next) {
  Item.addItem(req.swagger.params, res, next);
};

module.exports.deletePet = function deletePet (req, res, next) {
  Item.deletePet(req.swagger.params, res, next);
};

module.exports.itemItemNameGET = function itemItemNameGET (req, res, next) {
  Item.itemItemNameGET(req.swagger.params, res, next);
};

module.exports.itemsGET = function itemsGET (req, res, next) {
  Item.itemsGET(req.swagger.params, res, next);
};

module.exports.updatePet = function updatePet (req, res, next) {
  Item.updatePet(req.swagger.params, res, next);
};
