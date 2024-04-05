function calculateGrade(marks) {
  if (marks < 0 || marks > 100) {
    return "Invalid marks. Please enter a number between 0 and 100.";
  }

  if (marks >= 79) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  } else if (marks >= 49) {
    return "C";
  } else if (marks >= 40) {
    return "D";
  } else {
    return "E";
  }
}

let marks = parseInt(prompt("Enter student marks (0-100): "));

while (isNaN(marks) || marks < 0 || marks > 100) {
  marks = parseInt(prompt("Invalid marks. Please enter a number between 0 and 100: "));
}

const grade = calculateGrade(marks);
const resultDiv = document.getElementById("result");
resultDiv.innerHTML = "The student's grade is: <strong>" + calculateGrade(marks) + "</strong>";
