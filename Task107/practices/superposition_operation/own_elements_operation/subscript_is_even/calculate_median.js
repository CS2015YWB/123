'use strict';
var calculate_median = function(collection){
    var result = [];
    var median = 0;
    for(var i=1; i<collection.length; i=i+2){
        result.push(collection[i]);
    }
    if(result.length % 2 == 0)
        return (result[result.length/2]+result[result.length/2-1])/2;
    else
        return result[(result.length-1)/2];
}
module.exports = calculate_median;
