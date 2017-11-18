'use strict';

function average_to_letter(collection) {
  var num = 0;
  var arr = [], n = 0;
  for(let i=97;i<=122;i++)
      arr[n++] = String.fromCharCode(i);
  for(let i=97;i<=122;i++)
      for(let k=97;k<=122;k++)
          arr[n++] = String.fromCharCode(i)+String.fromCharCode(k);
  for(let i in collection)
      num +=collection[i];
  var result = arr[parseInt(num/collection.length)];
  return result;
}

module.exports = average_to_letter;

