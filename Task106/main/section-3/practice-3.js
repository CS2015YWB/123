'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var collectionC = new Array();
  var key = collectionA[0];
  var count = 0;
  for(var i = 0; i < collectionA.length; i++) {
      if(key == collectionA[i]) {
        count++;
      }
      if((key != collectionA[i]) || (i == collectionA.length - 1)) {
          collectionC.push({key: key,count: count});
          key = collectionA[i];
          count = 1;
      }
    }
  for(var i = 0; i < collectionC.length; i++)
    for(var j = 0; j < objectB.value.length; j++)
      if(collectionC[i].key == objectB.value[j]) {
        collectionC[i].count = collectionC[i].count - parseInt(collectionC[i].count/3);
    }
  return collectionC;
}
    