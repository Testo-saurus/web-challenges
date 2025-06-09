console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--

  for (let i = 1; i <= 5; i++) {
    const starImg = document.createElement("img");

    starImg.src =
      i <= filledStars ? "./assets/star-filled.svg" : "./assets/star-empty.svg";

    starImg.alt = i <= filledStars ? "filled star" : "empty star";

    starImg.addEventListener("click", () => {
      renderStars(i);
    });

    starContainer.append(starImg);
  }

  // --^-- write or modify code above this line --^--
}

renderStars(0);

// ### Part 2: Change the Number of Filled Stars

// Now let's display a specific number of filled stars, depending on the argument given to the function:

// - Add a parameter `filledStars` to the `renderStars` function, expecting it to be a number.
// - Inside the loop, use the value of `filledStars` to decide if each star should be filled or empty.
//   💡 _Use the loop's counter variable to check which star is currently being created (first, second, third, etc.)._
// - Set the `src` attribute of each `img` element to the appropiate image path, either filled or empty.
// - Update the code that calls `renderStars` to pass a number between 0 and 5 as an argument to check if it displays correctly.
