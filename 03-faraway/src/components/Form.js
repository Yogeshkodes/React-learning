import { useState } from "react";

export default function Form({ onAdditems }) {
  const [description, Setdescription] = useState("");
  const [select, setselect] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, select, packed: false, id: Date.now() };
    onAdditems(newItem);
    Setdescription("");
    setselect(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need 😍 for your trips?</h3>

      <select value={select} onChange={(e) => setselect(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Search items here..."
        value={description}
        onChange={(e) => Setdescription(e.target.value)}
      ></input>
      <button>GO</button>
    </form>
  );
}
