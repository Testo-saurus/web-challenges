import Card from "./Card.jsx";

export default function ListOfCards({ fruits }) {
  return (
    <ul>
      {fruits.map((fruit) => {
        return (
          <li key={fruit.id}>
            <Card name={fruit.name} color={fruit.color} />
          </li>
        );
      })}
    </ul>
  );
}
