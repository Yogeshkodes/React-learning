export default function Stats({ item }) {
  if (item.length === 0) {
    return (
      <footer className="stats">
        <em>Start packing your bags to start journey 🚀</em>
      </footer>
    );
  }

  let numItems = item.length;
  let packedItems = item.filter((item) => item.packed).length;
  let percentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything Ready to go ✈"
          : `💼 You have ${numItems} items in Your list, and you are already packed
          ${packedItems} Items (${percentage}%)`}
      </em>
    </footer>
  );
}
