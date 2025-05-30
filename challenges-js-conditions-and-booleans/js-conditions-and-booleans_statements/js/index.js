console.clear();

console.log("Script is running");

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Access granted! Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 7;

if (number % 2 === 0) {
  console.log("the number is even");
} else {
  console.log("the number is odd");
}

// Part 3: Hotdogs
const numberOfHotdogs = 1000000;
let price = 0;

switch (true) {
  case numberOfHotdogs < 5:
    price = 2;
    break;

  case numberOfHotdogs < 100:
    price = 1.5;
    break;

  case numberOfHotdogs < 1000000:
    price = 1;
    break;

  case numberOfHotdogs >= 1000000:
    price = 0.1;
    break;

  default:
    price = 0;
}

console.log(`I you buy ${numberOfHotdogs} you need to pay ${price} each`);

// Part 4: Daytime
const now = new Date();
const currentHour = now.getHours();

// let statement = "";

// currentHour < 17
//   ? (statement = "still need to learn ")
//   : (statement = "Partytime");

// console.log(statement);

const statement =
  currentHour < 17
    ? `its ${currentHour} Uhr, still need to learn `
    : "Partytime";

console.log(statement);

// Part 5: Greeting
const userName = "Archibaldo";

const greeting = `Hello ${
  userName == "Archibald" ? "Archibald" : "unknown person"
} !`;

console.log(greeting);
