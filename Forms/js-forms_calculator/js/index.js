console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numbA = Number(document.getElementById("number-a").value); //option 1
  const numbB = Number(event.target.numberB.value); // option2 to get the numb

  let result;

  // --v-- write your code here --v--

  console.log(event.target.numberA.value);

  console.log(event.target.operator);

  const operation = event.target.operator.value;

  if (operation === "addition") {
    result = add(numbA, numbB);
  } else if (operation === "subtraction") {
    result = subtract(numbA, numbB);
  } else if (operation === "multiplication") {
    result = multiply(numbA, numbB);
  } else if (operation === "division") {
    result = divide(numbA, numbB);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
