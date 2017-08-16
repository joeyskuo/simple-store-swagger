'use strict';

exports.loginUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (User)
  **/
    var examples = {};
  examples['application/json'] = {
  "access_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDA2MDg3NjYsImlkZW50aXR5IjoxLCJuYmYiOjE1MDA2MDg3NjYsImV4cCI6MTUwMDYwOTA2Nn0.CdD6pa75e2iGGDYXJa7B8annmhUrgqRMMspZE_GLSr0"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.loginUser1 = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (User)
  **/
    var examples = {};
  examples['application/json'] = {
  "access_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDA2MDg3NjYsImlkZW50aXR5IjoxLCJuYmYiOjE1MDA2MDg3NjYsImV4cCI6MTUwMDYwOTA2Nn0.CdD6pa75e2iGGDYXJa7B8annmhUrgqRMMspZE_GLSr0"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

