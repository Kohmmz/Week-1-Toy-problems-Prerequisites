function speedDetector(speed) {
    const speedLimit = 70; // Maximum speed
    const maxPoints = 12;  // Maximum points before license suspension

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

// Results
speedDetector(80);
speedDetector(90);
speedDetector(135);
speedDetector(150);
