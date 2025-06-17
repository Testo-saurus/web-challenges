function Button({ color, disabled, text, onClick }) {
  return (
    <button
      disabled={disabled}
      type="button"
      onClick={onClick}
      style={{
        height: "60px",
        width: "100px",
        backgroundColor: color,
        cursor: "pointer",
        borderRadius: "10px",
      }}
    >
      {text}
    </button>
  );
}

function handleClick() {
  return alert("You clicked me!");
}

export default function App() {
  return (
    <Button text="hey" color="red" disabled={false} onClick={handleClick} />
  );
}
