'use strict';

module.exports = function countSameElements(collection) {
  var counting= new Array();
  var temp = {};  
  for (var i of collection) {
    if (!temp[i]){
      temp[i]=1;
    } else {
      temp[i]++;
    }
  }
  for (var i in temp) {
      var object={key:i,count:temp[i]};
      counting.push(object);
  }
  for(var i=0; i<counting.length; i++)
  for(var j=i+1; j<counting.length; j++)
    if(counting[i].key == counting[j].key) {
      counting[i].count = counting[i].count + counting[j].count;
      counting.splice(j,1);
      j--;
    }
 return counting;
}