function checkSpeed() {
  const speed = parseFloat(prompt("Enter the car's speed:"));

  if (speed < 70) {
    console.log("Ok");
  } else {
    const demeritPoints = Math.floor((speed - 70) / 5);
    console.log(`Points: ${demeritPoints}`);

    if (demeritPoints > 12) {
      console.log("License suspended");
    }
  }
}

checkSpeed();
  