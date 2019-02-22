/* How widely implemented/useful is this syntax?
- `let` in stead of `var` to define a scoped variable
- `let x of z` as a sort of `foreach`
- array.forEach()
- arrow notation of functions: parameters => functiondef
 */

for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events.`);
}

["A", "B"].forEach(l => console.log(l));

/* Of the following two functions, the latter seems to be less readable to me.
The book seems to prefer the use of abstractions in most cases.
Would you agree that in this case it would be less useful?
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
