'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  var match = new Array();
  var num = 0;
  for(var i = 0; i < collectionA.length; i++)
    for(var j = 0; j < collectionB.length; j++) {
      if(collectionA[i] == collectionB[j])
        match[num++] = collectionA[i];
  }
  return match;
}