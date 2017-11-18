'use strict';
var calculate_average = function(collection){
    var result = 0, k = 0;
    for(var i=1; i<collection.length; i=i+2){
        result += collection[i];
        k++;
    }
    return result/k;
}
module.exports = calculate_average;
