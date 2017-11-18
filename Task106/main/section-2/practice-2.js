'use strict';

module.exports = function countSameElements(collection) {
  var counting= new Array();
  var key = collection[0];
  var count = 0;
  var arr = new Array();
  for(var i = 0; i < collection.length; i++) {
      if(key == collection[i]){
        count++;
      }
      if((key != collection[i])||(i == collection.length - 1)) {
        counting.push({key: key,count: count});
        key = collection[i];
        count = 1;
      }
      if(collection[i].length > 1){
        key = collection[i].charAt(0);
        count = collection[i].charAt(2);
        count = parseInt(count);
        counting.push({key:key,count:count});
      }
    }
  return counting;
  }
