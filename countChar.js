/**
* https://eloquentjavascript.net/03_functions.html
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
