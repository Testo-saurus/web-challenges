console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

for (const language of programmingLanguages) {
  const li = document.createElement("li");
  li.textContent = language;
  ol.append(li);
}

// --v-- write or modify code below this line --v--

// --^-- write or modify code above this line --^--

// n `./js/index.js`, you'll find:

// - An `ol` element that’s been created and appended to the document.
// - A string array stored in a variable called `programmingLanguages`.

// Your task is to create a list item for each array item and add it to the ordered list.
//  Each list item should display the value of the current array item.
// Use a `for...of` loop to accomplish this.

// The following hints may guide you:

// - Do you remember the property for setting the text of an HTML element?
// - Be sure to append each list item to the ordered list.

// Switch to the `./js/index.js` to begin!
