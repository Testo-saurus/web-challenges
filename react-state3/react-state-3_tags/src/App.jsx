import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(dataTag) {
    console.log("data:", dataTag);

    setTags([...tags, dataTag]);
  }

  function handleDelete(deleteTagName) {
    console.log("deletID");
    console.log(tags);

    setTags(tags.filter((tag) => tag !== deleteTagName));
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDelete} />
    </main>
  );
}
