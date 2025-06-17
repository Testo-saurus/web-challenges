function Sum({ valueA, valueB }) {
  return (
    <p>
      {valueA} + {valueB} = {valueA + valueB}
    </p>
  );
}

export default function App() {
  return <Sum valueA={1} valueB={2} />;
}
