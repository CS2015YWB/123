'use strict';
var number_map_to_word = function(collection){
  var result = [];
  var arr = [], n = 0;
  for(let i=97;i<=122;i++)
    arr[n++] = String.fromCharCode(i);
  for(let i=97;i<=122;i++)
    for(let k=97;k<=122;k++)
      arr[n++] = String.fromCharCode(i)+String.fromCharCode(k);
  for(var i in collection)
    result.push(arr[collection[i]-1]);
  return result;
}

module.exports = number_map_to_word;
