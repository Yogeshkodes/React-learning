export default function Items({ obj, onDeleteitems, ontoggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={obj.packed}
        onChange={() => ontoggle(obj.id)}
      ></input>
      <span style={obj.packed ? { textDecoration: "line-through" } : {}}>
        {obj.select}
      </span>
      <span style={obj.packed ? { textDecoration: "line-through" } : {}}>
        {obj.description}
      </span>

      <button onClick={() => onDeleteitems(obj.id)}>❌</button>
    </li>
  );
}
