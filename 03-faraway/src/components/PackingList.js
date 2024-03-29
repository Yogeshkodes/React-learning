import { useState } from "react";

import Items from "./Items";

export default function PackingList({ items, onDeleteitems, ontoggle, reset }) {
  const [sort, setSort] = useState("input");

  let sortedItems;

  if (sort === "input") sortedItems = items;

  if (sort === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sort === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Items
            obj={item}
            onDeleteitems={onDeleteitems}
            ontoggle={ontoggle}
            key={item.description}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="packed">Sort by packed </option>
          <option value="description">Sort by description</option>
        </select>
        <button onClick={reset}>Clear Out</button>
      </div>
    </div>
  );
}
