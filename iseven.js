/**
* https://eloquentjavascript.net/03_functions.html#i_jxl1p970Fy
* Define a recursive function isEven to define whether a positive whole number is even or odd
*/

function isEven(number) {
  // or: number = Math.abs(number); 
  if (number < 0 ) {
    number *= -1;
  }
  if (number === 0) {
    return true;
  }
  else if (number === 1) {
    return false;
  } else {
    return isEven(number - 2);
  }
}
