const courses = [
	{ id: 1, name: "node" },
	{ id: 2, name: "JavaScript" },
];

courses.sort(function (a, b) {
	nameA = a.name.toLowerCase();
	nameB = b.name.toLowerCase();

	if (nameA > nameB) return 1;
	if (nameA < nameB) return -1;
	return 0;
});

console.log(courses);
