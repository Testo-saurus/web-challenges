console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);

  //create form data object
  const formData = new FormData(form);

  console.log(formData); //--> kein reg object

  // convert formData to a regular object

  const formDataObject = Object.fromEntries(formData);

  console.log(formDataObject);

  //Calculate and log the age-badness-sum 🤷‍♀️

  const ageBadnessSum = e.target.age.value + form.badness.value;
  const ageBadnessString = `The age-badness-sum of ${form.firstName.value} is ${ageBadnessSum}`;

  console.log(ageBadnessString);

  e.target.reset();

  e.target.firstName.focus();
});
