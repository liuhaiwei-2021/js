const marks = [80, 80, 50];

console.log(caculateGrade(marks));

function caculateGrade(marks) {
	const average = caculateAverage(marks);
	if (average < 60) return "F";
	if (average < 70) return "E";
	if (average < 80) return "D";
	if (average < 90) return "C";
	return "B";
}

function caculateAverage(array) {
	let sum = 0;
	for (let value of array) sum += value;

	return (average = sum / array.length);
}
