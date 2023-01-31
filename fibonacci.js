// assigment-1: create a function that will return an array of fibonacci series using itretive and recursive methods
// fibonacci series using itretive method
function fibs(n) {
	let arr = [];
	for (let i = 0; i < n; i++) {
		if (i == 0 || i == 1) {
			arr.push(i);
		} else {
			arr.push(arr[i - 1] + arr[i - 2]);
		}
	}

	return arr;
}

// fibonacci series using recursive method
const fibsRec = (n, arr = [0, 1]) => (arr.length >= n ? arr : fibsRec(n, [...arr, arr[arr.length - 1] + arr[arr.length - 2]]));

// this is more vorbose version of fibsRec function
/*
function fibsRec(n, arr = [0, 1]) {
    if (arr.length >= n) {
		return arr;
	} else {
		return fibsRec(n, [...arr, arr[arr.length - 1] + arr[arr.length - 2]]);
	}
}
*/

console.log(fibs(4)); // [ 0, 1, 1, 2 ]
console.log(fibs(8)); // [ 0, 1, 1, 2, 3, 5, 8, 13 ]

console.log(fibsRec(6)); // [ 0, 1, 1, 2, 3, 5 ]
console.log(fibsRec(12)); // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ]
