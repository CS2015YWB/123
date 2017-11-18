'use strict';

function hybrid_operation(collection) {
  var result = 0;
  for(var i=0; i<collection.length; i++)
    result += (collection[i]*3+2);
  return result;
}
module.exports = hybrid_operation;

