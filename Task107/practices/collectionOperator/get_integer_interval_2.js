'use strict';

function get_integer_interval_2(number_a, number_b) {
  var result = [];
  var j = 0;
  if(number_a < number_b)
    for(var i=2; i<=number_b; i=i+2) {
      result[j++] = i;
  }
  if(number_a > number_b)
    for(var i=number_a; i>=2; i=i-2) {
      result[j++] = i;
  }
  if(number_a == number_b)
    if(number_a%2==0)
      result[0] = number_a;
  return result;
}

module.exports = get_integer_interval_2;
