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
    if (i.length>1) {
      var name = i.slice(0,1);
      var summary = i.slice(2)
      summary = parseInt(summary);
      var object={name:name,summary:summary};
      counting.push(object);
    } else {
      var object={name:i,summary:temp[i]};
      counting.push(object);
    }
  }
  for(var i=0; i<counting.length; i++)
  for(var j=i+1; j<counting.length; j++)
    if(counting[i].name == counting[j].name) {
      counting[i].summary = counting[i].summary + counting[j].summary;
      counting.splice(j,1);
      j--;
    }
return counting;
}