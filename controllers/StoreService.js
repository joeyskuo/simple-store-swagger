'use strict';

exports.getInventory = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "stores" : [ {
    "items" : [ {
      "name" : "chair",
      "price" : 15.99
    } ],
    "name" : "store1"
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

exports.loginUser22 = function(args, res, next) {
  /**
   * parameters expected in the args:
  * storeName (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "items_" : [ "{}" ],
  "name" : "store1"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.storeStoreNameDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * storeName (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "message" : "Store deleted"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

