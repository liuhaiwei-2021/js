const array = [undefined, NaN, 0, 1, 3, 5, ""];
console.log(countTruthy(array));

function countTruthy(array) {
	let count = 0;
	for (let value of array)
		if (value) {
			count++;
		}
	return count;
}
