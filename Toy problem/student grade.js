function determineGrade() {
  const marks = parseFloat(prompt("Enter student marks (between 0 and 100):"));

  if (marks < 0 || marks > 100) {
    alert("Invalid marks entered. Please enter marks between 0 and 100.");
    return;
  }

  let grade;
  if (marks >= 80) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "B";
  } else if (marks >= 50) {
    grade = "C";
  } else if (marks >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }

  return(`The grade is: ${grade}`);
}

determineGrade();

