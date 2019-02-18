/**
 * https://eloquentjavascript.net/05_higher_order.html#i_gKQ1S54F4o
 * Write a higher-order function loop that provides something like a for loop statement.
 */

function loop(val, test, update, body) {
  if(!test(val)) {
    return;
  }
  body(val); 
  val = update(val); 
  loop(val, test, update, body)
}

/**
 * https://eloquentjavascript.net/05_higher_order.html#i_SmbRSAd5GA
 * Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.
 */
function every(array, test) {
  for(var i = 0; i < array.length; i++) {
    if(!test(array[i])) {
      return false;
    }
  }
  return true;
}

function every(array, test) {
  return !array.some(value => !test(value));
}
