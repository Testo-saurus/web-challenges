console.clear();

/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)

- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday (1): "darkgray"
  - Tuesday (2) - Friday(5): "lightblue"
  - Saturday(6) - Sunday(0): "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  const currentHour = new Date().getHours();

  if (currentHour >= 6 && currentHour < 13) {
    return "Good Morning";
  } else if (currentHour >= 13 && currentHour < 19) {
    return "Good Afternoon";
  } else if (currentHour >= 19 && currentHour < 23) {
    return "Good Evening";
  } else if (currentHour >= 23 && currentHour < 6) {
    return "Good Night";
  } else {
    return "hi";
  }
}

function getDayColor() {
  const indexWeekday = new Date().getDay();

  if (indexWeekday === 0) {
    return "darkgray";
  } else if (indexWeekday >= 1 && indexWeekday < 6) {
    return "lightblue";
  } else if (indexWeekday === 6 || indexWeekday === 0) {
    return "hotpink";
  } else {
    return "white";
  }
}
//   // Code here
// }

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();

// For Node.js testing
console.log("Current greeting:", getGreeting());
console.log("Current day color:", getDayColor());
