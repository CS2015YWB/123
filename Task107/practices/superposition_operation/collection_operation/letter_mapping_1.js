'use strict';

function even_to_letter(collection) {
  var result =[],result1 = [];
  var arr = [], n = 0;
  for(let i=97;i<=122;i++)
      arr[n++] = String.fromCharCode(i);
  for(let i=97;i<=122;i++)
      for(let k=97;k<=122;k++)
          arr[n++] = String.fromCharCode(i)+String.fromCharCode(k);
  for(var i in collection){
      if(collection[i]%2==0)
          result1.push(collection[i]);
  }
  for(var i in result1)
      result.push(arr[result1[i]-1]);
  return result;
}

module.exports = even_to_letter;
