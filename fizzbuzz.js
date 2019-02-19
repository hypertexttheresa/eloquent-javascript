/**
 * https://eloquentjavascript.net/02_program_structure.html#i_rebKE3gdjV
 * Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/

for (var i = 1; i <= 101; i += 1) {
  var printthis = "";
  if (i%3 == 0) {
    printthis += "Fizz";
  }
  if (i%5 == 0) {
    printthis += "Buzz";
  }
  if (printthis) {
  	console.log(i + ' ' + printthis);
  }
}
