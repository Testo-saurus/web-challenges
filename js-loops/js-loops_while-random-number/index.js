console.clear();

let number = 0;
let count = 0;

// --v-- write or modify code below this line --v--

while (number <= 0.9) {
  number = Math.random();
  count++;
  console.log(number, count);

  // --^-- write or modify code above this line --^--

  console.log(
    `The number that ended the loop was ${number} and it took ${count} rounds to do this!`
  );
}
// Create a `while` loop that:

// - runs while `number` is less than or equal to 0.9,
// - increments `count` by 1 in each iteration,
// - logs `number` to the console,
// - sets `number` to a new random number (using `Math.random()`).

// Once complete, test your loop by refreshing the browser a few times and checking the console output!
