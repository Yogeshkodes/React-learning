import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// console.log(pizzaData);
function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Main() {
  const pizzas = pizzaData;
  const numbers = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numbers > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our storm oven, all organic. all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p> We're working on our Menu , Please visit later :)</p>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        img="pizzas/spinaci.jpg"
        price={12}
      />
      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        img="pizzas/prosciutto.jpg"
        price={10}
      /> */}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  // console.log(hour);
  const openhours = 12;
  const closehours = 22;
  const isOpen = hour >= openhours && hour <= closehours;
  // console.log(isOpen);
  //   if (hour >= openhours && hour <= closehours) alert("we're currently open");
  //   else alert("Sorry We're not open");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closehours={closehours} openhours={openhours} />
      ) : (
        <p>
          We'll happy to have you between {openhours}:00 to {closehours}:00 :).
        </p>
      )}
    </footer>
  );
}

function Order({ closehours, openhours }) {
  return (
    <div className="order">
      <p>
        We're open from {openhours}:00 until {closehours}:00. Come visit us or
        order online.
      </p>

      <button className="btn">order now </button>
    </div>
  );
}

function Pizza({ pizzObj }) {
  return (
    <li className={`${pizzObj.soldOut ? "pizza sold-out" : "pizza"}`}>
      <img src={pizzObj.photoName} alt={pizzObj.name} />
      <div>
        <h3>{pizzObj.name}</h3>
        <p>{pizzObj.ingredients}</p>
        <span>{pizzObj.soldOut ? `SOLD OUT` : pizzObj.price}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
