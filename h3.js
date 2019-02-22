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

/**
* https://eloquentjavascript.net/03_functions.html#i_3rsiDgC2do
* Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
*/

function countBs(string) {
	return countChar(string, 'B');
}

function countChar(string, char) {
	var stringLength = string.length - 1
	var count = 0;
	for (i = 0; i <= stringLength; i++) {
		if (string[i] === char) {
			count++;
		}
	}
	return count;
}
