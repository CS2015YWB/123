function count_same_elements(collection) {
  var result = [];
  var key = collection[0];
  var count = 0;
  var arr = [];
  for(var i = 0; i < collection.length; i++) {
      if(key == collection[i]){
        count++;
      }
      if((key != collection[i])||(i == collection.length - 1)) {
        result.push({key: key,count: count});
        key = collection[i];
        count = 1;
      }
      if(collection[i].length > 1){
        key = collection[i].charAt(0);
        count = collection[i].charAt(2);
        count = parseInt(count);
        result.push({key:key,count:count});
      }
    }
  return result;
  }

module.exports = count_same_elements;
