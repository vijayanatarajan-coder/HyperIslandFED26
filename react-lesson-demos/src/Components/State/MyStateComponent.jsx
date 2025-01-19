import React, { useState } from "react";

const MyStateComponent = (props) => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(props.user);
  const [items, setItems] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [randomNumber, setRandomNumber] = useState(() => Math.random());
  const [formData, setFormData] = useState({ name: "", email: "" });

  const job = "developer";

  function incrementCount(num) {
    setCount(count + num);
  }

  function updateUser() {
    setUser({ ...user, age: user.age + 1 });
  }

  function addItem() {
    setItems([...items, `Item ${items.length + 1}`]);
  }

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  function generateRandomNumber() {
    setRandomNumber(Math.random());
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Data:", formData);
  }

  return (
    <div>
      <h1>useState Hook Examples</h1>
      <button onClick={props.clickEventHandler}>increment parent</button>
      <div>
        <h2>Basic State</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>

      <div>
        <h2>State with Object</h2>
        <p>
          User: {user.name}, {user.job}, {user.email}, Age: {user.age},
          {props.user.age}
        </p>
        <button onClick={updateUser}>Increase Age</button>
      </div>

      <div>
        <h2>State with Array</h2>
        <p>Items: {items.join(", ")}</p>
        <button onClick={addItem}>Add Item</button>
      </div>

      <div>
        <h2>State with Boolean</h2>
        <p>Visibility: {isVisible ? "Visible" : "Hidden"}</p>
        <button onClick={toggleVisibility}>Toggle Visibility</button>
      </div>

      <div>
        <h2>State with Function Initialization</h2>
        <p>Random Number: {randomNumber}</p>
        <button onClick={generateRandomNumber}>Generate Random Number</button>
      </div>

      <div>
        <h2>Form with useState</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MyStateComponent;
