console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible.

HINT: You can find more information about arrow functions and implicit returns in the handout.
*/

// function getCurrentHour() {
//   const now = new Date();
//   const currentHour = now.getHours();
//   if (currentHour === 0) {
//     return "12am";
//   } else if (currentHour === 12) {
//     return "12pm";
//   } else if (currentHour <= 11) {
//     return currentHour + "am";
//   } else {
//     return currentHour - 12 + "pm";
//   }}

const getCurrentHour = () => {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
};

console.log(getCurrentHour());

// function getVectorLength(x, y, z) {
//   return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
// }

const getVectorLength = (x, y, z) => {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
};

console.log(getVectorLength(1, 2, 6));

const cleanInput = (string) => {
  return string.toLowerCase().trim();
};

console.log(cleanInput(" Was geht ab !!! ZZZZ"));
/*
Rewrite the following arrow functions as classic functions.
*/

function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}

console.log(isOddAndSmall(3));

function add3(a, b, c) {
  return a + b + c;
}

console.log(add3(1, 2, 3));

function repeat10(string) {
  return string.repeat(10);
}

console.log(repeat10("hi "));
