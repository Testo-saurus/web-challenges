console.clear();

const borderRadiusInput = document.querySelector('[ data-js="input-radius"]');
const box = document.querySelector('[data-js="box"]');
const colorInput = document.getElementById("color");
const rotationInput = document.getElementById("rotation");

// border Radius

borderRadiusInput.addEventListener("input", () => {
  document.getElementById("text-paragraph").innerText = borderRadiusInput.value;

  box.style.borderRadius = borderRadiusInput.value + "px";
});

// color

colorInput.addEventListener(
  "input",

  () => {
    document.getElementById("text-paragraph").innerText = colorInput.value;

    box.style.backgroundColor = `hsl(${colorInput.value}, 70%, 60%)`;
  }
);

//rotation data-js="input-rotation"

rotationInput.addEventListener(
  "input",

  () => {
    document.getElementById("text-paragraph").innerText = rotationInput.value;
    box.style.transform = `rotate(${rotationInput.value}deg)`;
  }
);
