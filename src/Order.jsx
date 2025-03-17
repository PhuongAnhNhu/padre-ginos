import { useState } from "react";
import Pizza from "./Pizza";

export default function Order() {
  const [pizzaTypes, setPizzaTypes] = useState("pepperoni");
  const [pizzaSizes, setPizzaSize] = useState("M");
  console.log(pizzaTypes, pizzaSizes);
  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Type:</label>
            <select 
            name="pizza-type"
            onChange={(event) => setPizzaTypes(event.target.value)}
            value={pizzaTypes}>
              <option value="pepperoni">The Pepperoni Pizza</option>
              <option value="margherita">The Margherita Pizza</option>
              <option value="hawaiian">The Hawaiian Pizza</option>
              <option value="big_meat">The Meat Lovers Pizza</option>
            </select>
          </div>
          <div >
            <label htmlFor="pizza-size">Pizza Size:</label>
            <div >
              <span>
                <input 
                checked={pizzaSizes === "S"}
                onChange={(e) => setPizzaSize(e.target.value)}
                type="radio"
                name="pizza-size"
                value="S"
                id="pizza-s"
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input 
                checked={pizzaSizes === "M"}
                onChange={(e) => setPizzaSize(e.target.value)}
                type="radio"
                name="pizza-size"
                value="M"
                id="pizza-m"
                />
                <label htmlFor="pizza-s">Medium</label>
              </span>
              <span>
                <input 
                checked={pizzaSizes === "L"}
                onChange={(e) => setPizzaSize(e.target.value)}
                type="radio"
                name="pizza-size"
                value="L"
                id="pizza-l"
                />
                <label htmlFor="pizza-s">Large</label>
              </span>
            </div>
          </div>
            <button type="submit">Add to Cart</button>
          </div>
            <div className="order-pizza">
              <Pizza name="Pepperoni" 
              description="A classic pizza with pepperoni." 
              image={"/public/pizzas/pepperoni.webp"} 
              />
              <p>$13.12</p>
        </div>
      </form>
    </div>
  )
}