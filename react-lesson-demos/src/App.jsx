import EventComponent from "./Components/Events/EventComponent";
import MyFirstComponent from "./Components/Props/MyFirstComponent";
import MyWrapperComponent from "./Components/Props/MyWrapperComponent";
import MyStateComponent from "./Components/State/MyStateComponent";
import { useState } from "react";

function App() {
  const userName = "John";
  const [count, setCount] = useState(10);
  let user;
  let allUsers = [
    {
      name: "John",
      age: 25,
      city: "Stockholm",
      hobbies: ["Reading", "Swimming"],
    },
    {
      name: "Jane",
      age: 23,
      city: "Lund",
      hobbies: ["Cycling", "Hiking", "Cooking"],
    },
    {
      name: "Alice",
      age: 27,
      city: "Gothenburg",
      hobbies: ["Running", "Painting", "Dancing", "Singing"],
    },
  ];

  switch (userName) {
    case "John":
      user = {
        name: "John",
        age: 25,
        city: "Stockholm",
        hobbies: ["Reading", "Swimming"],
      };
      break;
    case "Jane":
      user = {
        name: "Jane",
        age: 23,
        city: "Lund",
        hobbies: ["Cycling", "Hiking", "Cooking"],
      };
      break;
    case "Alice":
      user = {
        name: "Alice",
        job: "ux",
        email: "exam@bjf.hfo",
        age: 27,
        city: "Gothenburg",
        hobbies: ["Running", "Painting", "Dancing", "Singing"],
      };
      break;
    default:
      user = {
        name: "Unknown",
        age: 0,
        city: "Unknown",
        hobbies: [],
      };
  }

  const isLoading = false;
  const isLoggedIn = true;
  const showContent = true;

  function clickEventHandler() {
    setCount(count + 1);
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {isLoggedIn ? <h1>Welcome</h1> : <h1>Login</h1>}
      {showContent && (
        <MyWrapperComponent
          Component={MyFirstComponent}
          ComponentProps={user}
        />
      )}
      <h4>Available users:</h4>
      {allUsers.map((user) => (
        <p key={user.name}>{user.name}</p>
      ))}
      <h1>{count}</h1>
      <MyStateComponent
        user={user}
        count={count}
        clickEventHandler={clickEventHandler}
      />
      <EventComponent />
    </div>
  );
}

export default App;
