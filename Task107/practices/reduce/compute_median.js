'use strict';

function compute_median(collection) {
  var result = collection.sort(function(a, b)
  { return a - b; });
  var len = result.length;
  if(result.length % 2 === 0)
    return ((result[len/2]+result[len/2-1])/2);
  else
    return result[(len-1)/2];
}

module.exports = compute_median;


