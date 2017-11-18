'use strict';

function get_union(collection_a, collection_b) {
  var collection_c = collection_a;
  var j = 0;
  for(var i=0; i<collection_b.length; i++)
    if(collection_a.indexOf(collection_b[i]) == -1)
      collection_c.push(collection_b[i]);
  return collection_c;
}

module.exports = get_union;

