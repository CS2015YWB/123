'use strict';

function compute_chain_median(collection) {
  var result1 = collection.split('->');
  var result2 = [];
  for(var i=0; i<result1.length; i++) {
    result2[i] = parseInt(result1[i]);
  }
  var result = result2.sort(function(a, b)
  { return a - b; });
  var len = result.length;
  if(result.length % 2 === 0)
    return ((result[len/2]+result[len/2-1])/2);
  else
    return result[(len-1)/2];
}

module.exports = compute_chain_median;
