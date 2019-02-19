/*
 * https://eloquentjavascript.net/05_higher_order.html#i_aIOczlLyX1
 * Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
 */
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(
    arrays.reduce(
        function(previousval, currentval) {
            return previousval.concat(currentval);
        }
    )
);

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

function loop(value, test, update, body) {
  for(var i = value; test(i); i = update(i)) {
      body(i);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);

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
