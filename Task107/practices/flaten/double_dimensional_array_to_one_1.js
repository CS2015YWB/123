'use strict';

function double_to_one(collection) {
  var result = [];
  for(var i=0; i<collection.length; i++){
    if(collection[i].length > 0)
      for(var j=0; j<collection[i].length; j++){
        result.push(collection[i][j]);
    }
    else
        result.push(collection[i]);
  }
  return result;
}
module.exports = double_to_one;
