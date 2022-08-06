const result = fuzzBuzz("s");
console.log(result);

function fuzzBuzz(a) {
	if (typeof a !== "number") {
		return "Not a number!";
	} else if (a % 3 === 0 && a % 5 === 0) {
		return "FizzBuzz";
	} else if (a % 3 === 0) {
		return "Fizz";
	} else if (a % 5 !== 0) {
		return "Buzz";
	} else {
		return a;
	}
}
