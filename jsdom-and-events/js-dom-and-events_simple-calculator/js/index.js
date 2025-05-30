console.clear();

let operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--

const addButton = document.querySelector('[data-js="add"]');

addButton.addEventListener("click", () => {
  addResult = operand1 + operand2;
  console.log(`AddButton clicked - Result: ${addResult}`);
});

const subtractButton = document.querySelector('[data-js="subtract"]');

subtractButton.addEventListener("click", () => {
  subtractResult = operand1 - operand2;
  console.log(`SubtractButton clicked -  Result: ${subtractResult}`);
});

const multiplyButton = document.querySelector('[data-js="multiply"]');

multiplyButton.addEventListener("click", () => {
  multiplyResult = operand1 * operand2;
  console.log(`multiplyButton clicked - Result ${multiplyResult}`);
});

const divideButton = document.querySelector('[data-js="divide"]');
divideButton.addEventListener("click", () => {
  devideResult = operand1 / operand2;
  console.log(`multiplyButton clicked - Result ${devideResult}`);
});

const exponentButton = document.querySelector('[data-js="exponent"]');
exponentButton.addEventListener("click", () => {
  exponentResult = operand1 ** operand2;
  console.log(`exponentButton clicked - Result ${exponentResult}`);
});

const moduloButton = document.querySelector('[data-js="modulo"]');
moduloButton.addEventListener("click", () => {
  moduloResult = operand1 % operand2;
  console.log(`moduloButton clicked - Result ${moduloResult}`);
});

//  <button type="button" class="button" data-js="add">+</button>
//         <button type="button" class="button" data-js="subtract">-</button>
//         <button type="button" class="button" data-js="multiply">x</button>
//         <button type="button" class="button" data-js="divide">/</button>
//         <button type="button" class="button" data-js="exponent"></button>

// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--

// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.

      <h2>Update the First Operand</h2>
      <div class="update-operand">
        <button type="button" class="button" data-js="increase-by-one">
          Increase first operand by one
        </button>
        <button type="button" class="button" data-js="increase-by-five">
          Increase first operand by five
        </button>
        <button type="button" class="button" data-js="decrease-by-one">
          Decrease first operand by one
        </button>
        <button type="button" class="button" data-js="decrease-by-five">
          Decrease first operand by five
        </button>
        <button type="button" class="button" data-js="multiply-by-two">
          Multiply first operand by two
        </button>
        <button type="button" class="button" data-js="divide-by-two">
          Divide first operand by two
        </button>

*/

// --v-- write your code here --v--

const increaseByoneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
increaseByoneButton.addEventListener("click", () => {
  operand1++;
  console.log(`increaseByoneButton clicked - Result ${operand1}`);
});

const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
increaseByFiveButton.addEventListener("click", () => {
  operand1 = operand1 + 5;
  console.log(`increaseByFiveButton clicked - Result ${operand1}`);
});

const decreaseByoneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
decreaseByoneButton.addEventListener("click", () => {
  operand1--;
  console.log(`decreaseByoneButton clicked - Result ${operand1}`);
});

const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
decreaseByFiveButton.addEventListener("click", () => {
  operand1 = operand1 - 5;
  console.log(`decreaseByFiveButton clicked - Result ${operand1}`);
});

const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
multiplyByTwoButton.addEventListener("click", () => {
  operand1 = operand1 * 2;
  console.log(`multiplyByTwoButton clicked - Result ${operand1}`);
});

// --^-- write your code here --^--
