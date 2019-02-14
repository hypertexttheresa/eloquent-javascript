/**
 * https://eloquentjavascript.net/04_data.html
 * Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list.
 */

 function arrayToList(array) {
  var list;
  for (var i = array.length - 1; i >= 0; i--) {
    if (i === array.length - 1) {
      list = {value: array[i], rest: null};
    } else {
      list = {value: array[i], rest: list};
    }
  }
  return list;
}

function listToArray(list) {
  var array = [];
  for (let node = list; node !== null; node = node.rest) {
    array.push(node.value);
  }

  return array;
}

/**
 * https://eloquentjavascript.net/04_data.html
 * Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list
 */
function prepend(value, list) {
  return {value: value, rest: list}
}

function nth(list, index) {
	if (list === null) {
		return undefined;
	}	else if (index === 0) {
		return list.value;
  } else {
    return nth(list.rest, index - 1);
  }
}

/**
 * https://eloquentjavascript.net/04_data.html
 * Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties
 */
function deepEqual(object1, object2) {
  if (typeof object1 === 'object' && typeof object2 === 'object' && object1 !== null && object2 !== null) {
    for (var key of Object.keys(object1)) {
      if (!object2[key] || !deepEqual(object1[key], object2[key])) {
        return false;
      }
    }
  } else if (object1 !== object2) {
    return false;
  }

  return true;
}
