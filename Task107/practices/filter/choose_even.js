'use strict';

function choose_even(collection) {
  var result = [];
  var k = 0;
  for(var i=0; i<collection.length; i++) {
    if(collection[i]%2 === 0) {
      result[k++] = collection[i];
    }
  }
  return result;
}

module.exports = choose_even;
