export function getAnimal(animals) {
  return animals
    ? animals === "cats"
      ? `I totally love ${animals}!`
      : `I like ${animals}!`
    : "I do not like animals at all!";
}

console.log(getAnimal("fish"));
