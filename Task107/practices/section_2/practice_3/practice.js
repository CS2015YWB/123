function count_same_elements(collection) {
  var result = [];
  var temp = {};  
  for (let i of collection) {
    if (!temp[i]){
      temp[i]=1;
    } else {
      temp[i]++;
    }
  }
  for (let i in temp) {
    if (i.length>1) {
      var name = i.slice(0,1);
      var summary = i.slice(2)
      summary = parseInt(summary);
      var object={name:name,summary:summary};
      result.push(object);
    } else {
      var object={name:i,summary:temp[i]};
      result.push(object);
    }
  }
  for(var i=0; i<result.length; i++)
  for(var j=i+1; j<result.length; j++)
    if(result[i].name == result[j].name) {
      result[i].summary = result[i].summary + result[j].summary;
      result.splice(j,1);
      j--;
    }
return result;
}

module.exports = count_same_elements;
