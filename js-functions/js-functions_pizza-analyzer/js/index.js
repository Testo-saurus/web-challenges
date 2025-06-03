console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = Number(pizzaInput1.value);
  const pizzaSize2 = Number(pizzaInput2.value);

  output.textContent = Math.round(calculatePizzaGain(pizzaSize1, pizzaSize2));
});

console.log(pizzaInput1);

pizzaInput2.addEventListener("input", () => {
  const pizzaSize1 = Number(pizzaInput1.value);
  const pizzaSize2 = Number(pizzaInput2.value);

  output.textContent = Math.round(calculatePizzaGain(pizzaSize1, pizzaSize2));

  // Write your code here
});

// Task 1: Define the function `calculatePizzaGain` here
// The formula for the area of a circle is: A = π × r²
//  Since the radius is half the diameter A = π × (d/2)²

function calculatePizzaGain(diameter1, diameter2) {
  const areaPizza1 = Math.PI * (diameter1 / 2) * (diameter1 / 2);
  const areaPizza2 = Math.PI * (diameter2 / 2) * (diameter2 / 2);

  if (areaPizza1 >= areaPizza2) {
    return ((areaPizza1 - areaPizza2) / areaPizza2) * 100;
  } else if (areaPizza2 >= areaPizza1) {
    return ((areaPizza2 - areaPizza1) / areaPizza1) * 100;
  } else {
    return "Error";
  }
}

console.log(calculatePizzaGain(14, 12));

// output.textContent = Math.round(calculatePizzaGain(14, 12));

// Task 2: Define the function `updatePizzaDisplay` here

// Task 3: Define the function `updateOutputColor` here
