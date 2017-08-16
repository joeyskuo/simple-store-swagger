'use strict';

exports.addItem = function(args, res, next) {
  /**
   * parameters expected in the args:
  * itemName (String)
  * body (Item)
  **/
    var examples = {};
  examples['application/json'] = {
  "price" : 17.99,
  "name" : "piano"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deletePet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * itemName (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "message" : "Item deleted"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.itemItemNameGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * jWT {token} (String)
  * itemName (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "price" : 15.99,
  "name" : "chair"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.itemsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "items_" : [ {
    "name" : "piano",
    "price" : 17.99
  }, {
    "name" : "chair",
    "price" : 15.99
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.updatePet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * itemName (String)
  * body (Item)
  **/
    var examples = {};
  examples['application/json'] = {
  "price" : 17.99,
  "name" : "piano"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

