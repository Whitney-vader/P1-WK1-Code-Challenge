function calculateDemeritPoints(speed) {
  if (speed <= 70) {
    return "Ok";
  } else { 
    const demeritPoints = Math.floor((speed - 70) / 5);
    if (demeritPoints > 12) {
      return "License suspended";
    } else { 
      return `Points: ${demeritPoints}`;
    }
  }
}

let speed = parseInt(prompt("Enter car speed (km/h): "));

while (isNaN(speed) || speed < 0) {
  speed = parseInt(prompt("Invalid speed. Please enter a non-negative number:"));
}

const resultDiv = document.getElementById("result");
resultDiv.innerHTML = "Demerit points: <strong>" + calculateDemeritPoints(speed) + "</strong>";