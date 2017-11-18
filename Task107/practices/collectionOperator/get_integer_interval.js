'use strict';

function get_integer_interval(number_a, number_b) {
  var result = [];
  var j = 0;
  if(number_a < number_b)
    for(var i = number_a; i<=number_b; i++)
      result[j++] = i;
  if(number_a > number_b)
    for(var k = number_a; k>=number_b; k--)
      result[j++] = k;
  if(number_a == number_b)
    result[0] = number_a;
  return result;
}
module.exports = get_integer_interval;

