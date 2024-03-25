function calculateDemeritPoints(speed) {
  // Check if speed is within the limit
  if (speed <= 70) {
    return "Ok";
  } else {
    // Calculate demerit points
    const demeritPoints = Math.floor((speed - 70) / 5);

    // Check for license suspension
    if (demeritPoints > 12) {
      return "License suspended";
    } else {
      return `Points: ${demeritPoints}`;
    }
  }
}

// Get speed input from the user
let speed = parseInt(prompt("Enter car speed (km/h):"));

// Ensure valid input before processing
while (isNaN(speed) || speed < 0) {
  speed = parseInt(prompt("Invalid speed. Please enter a non-negative number:"));
}

const result = calculateDemeritPoints(speed);
console.log(result);