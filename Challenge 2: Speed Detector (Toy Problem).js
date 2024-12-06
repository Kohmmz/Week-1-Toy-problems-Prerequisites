function speedDetector() {
    const speedLimit = 70; // Maximum speed
    const maxPoints = 12;  // Maximum points before license suspension

    // Get the speed from the user
    const speed = parseInt(prompt("Enter your speed: "), 10);

    if (isNaN(speed)) {
        console.log("Please enter a valid number for speed.");
        return;
    }

    if (speed <= speedLimit) {
        console.log("OK"); // Speed is within limit
        return;
    }

    // Calculate demerit points
    const points = Math.floor((speed - speedLimit) / 5);

    if (points >= maxPoints) {
        console.log("License is suspended"); // Too many points
    } else {
        console.log("Demerit points: " + points); // Points less than max
    }
}

// Call the function
speedDetector();
