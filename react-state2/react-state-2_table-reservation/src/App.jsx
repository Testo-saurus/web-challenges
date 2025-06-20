import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  const handleAdd = () => setPeople(people + 1);

  const handleSubtract = () => setPeople(people - 1);

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onAdd={handleAdd} onSubtract={handleSubtract} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
