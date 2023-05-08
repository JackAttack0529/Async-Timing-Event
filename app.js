// 1. Display "Hi" in the div with the id "first" 1 second after the page loads
setTimeout(() => {
    const firstDiv = document.getElementById("first");
    const p = document.createElement("p");
    p.textContent = "Hi";
    firstDiv.appendChild(p);
  }, 1000);
  
  // 2. Display "One" and "Two" in the div with the id "timeout-nesting" using nested setTimeout methods
  setTimeout(() => {
    const timeoutNestingDiv = document.getElementById("timeout-nesting");
    const p1 = document.createElement("p");
    p1.textContent = "One";
    timeoutNestingDiv.appendChild(p1);
  
    setTimeout(() => {
      const p2 = document.createElement("p");
      p2.textContent = "Two";
      timeoutNestingDiv.appendChild(p2);
    }, 1000);
  }, 2000);
  
  // 3a. Display a counter in the console that starts at 1 and continues going up one number at a time every second
  let counter = 1;
  const intervalId = setInterval(() => {
    console.log(counter++);
  }, 1000);
  
  // 3b. Stop the setInterval method created in 3a when the "STOP" button is pressed
  const stopButton = document.getElementById("stop-button");
  stopButton.addEventListener("click", () => {
    clearInterval(intervalId);
  });
  
  // 4. Display a countdown clock in the div with the id "countdown"
  const countdownDiv = document.getElementById("countdown");
  let timeLeft = 120; // 2 minutes in seconds
  const countdownIntervalId = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const countdownText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    countdownDiv.textContent = countdownText;
    timeLeft--;
  
    if (timeLeft < 0) {
      clearInterval(countdownIntervalId);
      countdownDiv.textContent = "TIME IS UP";
    }
  }, 1000);
  