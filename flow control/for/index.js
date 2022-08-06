for (i = 0; i < 5; i++) {
	console.log("hello", i);
}

const person = {
	name: "Mosh",
	age: 30,
};

for (key in person) console.log(key, person[key]);
