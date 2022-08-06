function cheekSpeed(speed) {
	const speedLimit = 70;
	const kmPerPoint = 5;

	if (speed < speedLimit + kmPerPoint) {
		console.log("OK");
	} else {
		const points = Math.floor((speed - speedLimit) / kmPerPoint);
		if (points >= 12) {
			console.log("Lisence suspended!");
		} else {
			console.log("Points", points);
		}
	}
}

cheekSpeed(80);
