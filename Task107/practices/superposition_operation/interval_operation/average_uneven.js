'use strict';

function average_uneven(collection) {
  var result = 0;
  var k = 0;
  for(var i=0; i<collection.length; i++)
    if(collection[i]%2 != 0) {
      result += collection[i];
      k++;
  }
  return result/k;
}

module.exports = average_uneven;
