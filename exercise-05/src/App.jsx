import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];
console.log(faqs);

export default function App() {
  return (
    <div>
      <Accordion item={faqs} />
    </div>
  );
}

function Accordion({ item }) {
  const [isopen, setisopen] = useState(null);
  return (
    <div className="accordion">
      {item.map((el, i) => (
        <AccordionItem
          curOpen={isopen}
          set={setisopen}
          key={el.title}
          title={el.title}
          text={el.text}
          num={i}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, text, title, curOpen, set }) {
  const isopen = curOpen === num;

  function handletoggle() {
    set(isopen ? "null" : num);
    // setisopen(false);
  }
  return (
    <div className={`item ${isopen ? "open" : ""}`} onClick={handletoggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="text">{title}</p>
      <p className="icon">{!isopen ? "+" : "-"}</p>

      {isopen && <div className="content-box">{text}</div>}
    </div>
  );
}
