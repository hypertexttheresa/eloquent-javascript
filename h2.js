/**
 * https://eloquentjavascript.net/02_program_structure.html#i_swb9JBtSQQ
 * Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
 */

var makeMyString = function(size = 8, uneven) {
    var string = '';
    for (var i = 0; i < size; i += 1) {
      if (i%2 == 0) {
        uneven ? string += '#' : string += ' '
      } else {
        uneven ? string += ' ' : string += '#'
      }
    }
    return string;
  }

var makeMyCheckBoard = function(size = 8) {
    for (var i = 0;  i < size; i += 1) {
        if (i%2 == 0) {
            console.log(makeMyString(size, true));
        } else {
            console.log(makeMyString(size, false));
        }
    }
}

makeMyCheckBoard();

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
