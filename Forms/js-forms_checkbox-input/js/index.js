console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

hideTosError();

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(tosCheckbox.value);
  console.log(event.target.tos.value); //  value of checkbox defaults to "on". better use checked
  console.log(event.target.tos.checked); //  value of checkbox defaults to "on". better use checked

  // --v-- write your code here --v--

  event.target.tos.checked
    ? (alert("Form submitted"), hideTosError())
    : showTosError();
});
