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
