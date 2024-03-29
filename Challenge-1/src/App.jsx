import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setbill] = useState("");
  const [percentage1, setpercentage1] = useState(0);
  const [percentage2, setpercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handlereset() {
    setbill("");
    setpercentage1(0);
    setpercentage2(0);
  }
  return (
    <div>
      <Bill bill={bill} setbill={setbill} />
      <Selectpercentage percentage={percentage1} setpercentage={setpercentage1}>
        How much you liked the food?
      </Selectpercentage>
      <Selectpercentage percentage={percentage2} setpercentage={setpercentage2}>
        How much your friend liked the food?
      </Selectpercentage>
      {bill > 0 && (
        <>
          <Order bill={bill} setbill={setbill} tip={tip} />
          <Reset onchange={handlereset} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, setbill }) {
  return (
    <div>
      How Much was the bill?
      <input
        type="text"
        value={bill}
        placeholder="Value Bill"
        onChange={(e) => setbill(Number(e.target.value))}
      />
    </div>
  );
}

function Selectpercentage({ children, percentage, setpercentage }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => setpercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Order({ bill, setbill, tip }) {
  return (
    <div>
      <h3>
        You pay ${bill}(${bill} + ${tip} tip)
      </h3>
    </div>
  );
}

function Reset({ onchange }) {
  return <button onClick={onchange}>Reset</button>;
}
