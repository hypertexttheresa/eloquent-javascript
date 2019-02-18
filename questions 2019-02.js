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
