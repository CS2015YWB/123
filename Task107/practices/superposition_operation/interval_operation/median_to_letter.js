'use strict';

function median_to_letter(collection) {
  var num = 0;
  var arr = [], n = 0;
  for(let i=97;i<=122;i++)
      arr[n++] = String.fromCharCode(i);
  for(let i=97;i<=122;i++)
      for(let k=97;k<=122;k++)
          arr[n++] = String.fromCharCode(i)+String.fromCharCode(k);
  var result1 = collection.sort(function(a,b){
      return a-b;
  });
  var result = 0;
  if(result1.length%2==0)
      result = arr[parseInt((result1[result1.length/2]+result1[result1.length/2-1])/2)];
  else
      result = arr[result1[(result1.length-1)/2]];
  return result;
}

module.exports = median_to_letter;
