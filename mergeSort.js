// assigment-2: recursive function that return a sorted array using merge sort method

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	let midPoint = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, midPoint)); // sort the left part of array
	let right = mergeSort(arr.slice(midPoint)); // sort the right part of array

	// compare left and right part and return sorted array
	const mergedArr = ((left, right) => {
		let sortedArr = [];
		while (left.length > 0 && right.length > 0) {
			let mergeElement = left[0] < right[0] ? left.shift() : right.shift();
			sortedArr.push(mergeElement);
		}
		// return sorted array
		return sortedArr.concat(left, right);
	})(left, right);

	return mergedArr;
}

console.log(mergeSort([8, 7, 3, 6, 2, 9, 4])); //[ 2, 3, 4, 6, 7, 8, 9 ]
