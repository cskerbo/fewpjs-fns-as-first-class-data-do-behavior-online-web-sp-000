/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  const houe = parseInt(timeString, 10)
  if (hour < 12) {
    greeting = "Good Morning"
  }

  else if (hour > 17) {
    greeting = "Good Evening"
  }

  else {
    greeting = "Good Afternoon"
  }
  return greeting
}
/* Write your implementation of displayMessage() */
