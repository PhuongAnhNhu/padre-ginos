
import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1 className="title">Padre Gino's</h1>
      <Pizza name="Pepperoni" description="A classic pizza with pepperoni." />
      <Pizza name="Margherita" description="A simple pizza with basil and fresh mozzarella." />
      <Pizza name="Hawaiian" description="A controversial pizza with pineapple and ham." />
      <Pizza name="Meat Lovers" description="A hearty pizza with pepperoni, sausage, and bacon." />
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);