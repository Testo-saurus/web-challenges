import ListOfCards from "./components/ListOfCards";

export default function App() {
  const fruitsArr = [
    {
      id: 145,
      name: "🍌 Banana",
      color: "yellow",
    },

    {
      id: 14537,
      name: "🥝 Kiwi",
      color: "green",
    },

    {
      id: 13345457,
      name: "🍒 CHerry",
      color: "red",
    },

    {
      id: 13454537,
      name: "🍍 Pineapple",
      color: "yellow",
    },

    {
      id: 133457,
      name: "🍎 Apple",
      color: "green",
    },
  ];

  return (
    <div className="app">
      <ListOfCards fruits={fruitsArr} />
    </div>
  );
}
