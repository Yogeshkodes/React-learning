import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, stateStep] = useState(1);
  const [count, setcount] = useState(0);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setcount(0);
    stateStep(1);
  }
  return (
    <div>
      <input
        type="range"
        min={1}
        max={10}
        value={step}
        onChange={(e) => stateStep(+e.target.value)}
      />
      <span>{step}</span>
      <div>
        <button onClick={() => setcount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setcount(+e.target.value)}
        />
        <button onClick={() => setcount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}
