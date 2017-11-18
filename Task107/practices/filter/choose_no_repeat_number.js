'use strict';

function choose_no_repeat_number(collection) {
  var result = [];
  var hash = {};
  for(var i=0; i<collection.length; i++) {
    if(!hash[collection[i]]) {
      result.push(collection[i]);
      hash[collection[i]] = 1;
    }
  }
  return result;
}

module.exports = choose_no_repeat_number;
