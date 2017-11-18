'use strict';

function compute_average(collection) {
  var result = 0;
  for(var i=0; i<collection.length; i++)
    result = result + collection[i];
  return result/collection.length;
}

module.exports = compute_average;

