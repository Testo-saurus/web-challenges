import { mutate } from "swr";

export default function Form() {
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    //Convert to regular object if needed
    const data = Object.fromEntries(formData.entries());

    console.log("FormData entries:", data);

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      mutate("/api/products");
      event.target.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name"> Fish Name: </label>
      <input type="text" name="name" id="name" />

      <label htmlFor="description"> Description: </label>
      <textarea name="description" id="description" rows="3"></textarea>

      <label htmlFor="price"> Price: </label>
      <input type="number" name="price" id="price" step="0.01" min="0" />

      <label htmlFor="currency"> currency: </label>
      <input type="text" name="currency" id="currency" />

      <button type="submit">Add Fish</button>
    </form>
  );
}
