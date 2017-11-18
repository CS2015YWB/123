'use strict';
var single_element = function(collection){
    var result1 = [], result = [];
    for(var i=1; i<collection.length; i=i+2) {
        result1.push(collection[i]);
    }
    console.log(result1);
    var counting = [];
    var key = result1[0];
    var count = 0;
    for(var i = 0; i < result1.length; i++) {
        if(key == result1[i-1]) {
            count++;
        }
        if(key != result1[i] && (i != result1.length-1)){
            key = result1[i];
            count = 1;
            counting.push({key: key,count: count});
        }
        if(key != result1[i] && (i == result1.length-1)){
            key = result1[i];
            count = 1;
            counting.push({key: key,count: count});
        }
    }
    console.log(counting);
    for(var p in counting)
        if(counting[p].count == 1)
            result.push(counting[p].key);
    return result;
}
module.exports = single_element;
