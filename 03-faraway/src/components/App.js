import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./state";

export default function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItems((item) => item.filter((items) => items.id !== id));
  }

  function handletoggle(id) {
    setItems((item) =>
      item.map((items) =>
        items.id === id ? { ...items, packed: !items.packed } : items
      )
    );
  }

  function handleReset() {
    const confirm = window.confirm("Do you want to delete this thing");
    if (confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdditems={handleItems} />
      <PackingList
        items={items}
        ontoggle={handletoggle}
        onDeleteitems={handleDelete}
        reset={handleReset}
      />
      <Stats item={items} />
    </div>
  );
}
