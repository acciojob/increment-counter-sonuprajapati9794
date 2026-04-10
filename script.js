// Get elements
const counter = document.getElementById("counter");
const button = document.getElementById("incrementBtn");

// Add click event
button.addEventListener("click", function () {
  
  // Get current value (before increment)
  let currentValue = parseInt(counter.innerText);

  // Show alert with un-incremented value
  alert("Current Value: " + currentValue);

  // Increment value
  currentValue++;

  // Update counter
  counter.innerText = currentValue;
});