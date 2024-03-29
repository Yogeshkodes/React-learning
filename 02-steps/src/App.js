import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  const [steps, stepStat] = useState(1);
  const [isOpen, stateisOpen] = useState(true);

  function handelPrevious() {
    if (steps > 1) stepStat((s) => s - 1);
  }

  function handelNext() {
    if (steps < 3) stepStat((s) => s + 1);
  }
  return (
    <div>
      <button className="close" onClick={() => stateisOpen((i) => !i)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={steps >= 1 ? "active" : ""}>1</div>
            <div className={steps >= 2 ? "active" : ""}>2</div>
            <div className={steps >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">Steps : {messages[steps - 1]}</p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handelPrevious}
            >
              Previous{" "}
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handelNext}
            >
              Next{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// export default function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

// function Counter() {
//   const [plus, StepPlus] = useState(1);
//   const [step, statestep] = useState(1);
//   function handleincrement() {
//     StepPlus((n) => n + step);
//   }

//   function handledecrement() {
//     StepPlus((n) => n - step);
//   }

//   function stepIncrement() {
//     statestep((n) => n + 1);
//   }

//   function stepdecrement() {
//     statestep((n) => n - 1);
//   }

//   const date = new Date("Nov 21 2023");
//   date.setDate(date.getDate() + plus);
//   return (
//     <div>
//       <div>
//         <button onClick={stepdecrement}>-</button>
//         <span>Step:{step}</span>
//         <button onClick={stepIncrement}>+</button>
//       </div>
//       <div>
//         <button onClick={handledecrement}>-</button>
//         <span>Count:{plus}</span>
//         <button onClick={handleincrement}>+</button>
//       </div>

//       <p>
//         <span>
//           {plus === 0
//             ? "Today is "
//             : plus > 0
//             ? `${plus} days from today is `
//             : `${Math.abs(plus)} days ago was `}
//         </span>
//         <span>{date.toDateString()}</span>
//       </p>
//     </div>
//   );
// }
