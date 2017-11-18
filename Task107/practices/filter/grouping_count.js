'use strict';

function grouping_count(collection) {
  var result = {};
  var hash = {};
  for(var i=0; i<collection.length; i++) {
    collection[i] += "";  //转为字符数组
    if(!hash[collection[i]]) {
      result[collection[i]] = 1;
      hash[collection[i]] = 1;
    } else {
      result[collection[i]]++;
    }
  }
  return result;
}

module.exports = grouping_count;
