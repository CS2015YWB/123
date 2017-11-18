function count_same_elements(collection) {
  var result = [];
  var key = collection[0];
  var count = 0;
  for(var i = 0; i < collection.length; i++) {
     if(key == collection[i]) {
       count++;
     }
     if((key != collection[i])||(i == collection.length - 1)) {
       result.push({key: key,count: count});
       key = collection[i];
       count = 1;
     }
   }
  return result;
 }

module.exports = count_same_elements;
