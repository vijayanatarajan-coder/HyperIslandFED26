import EventComponent from "./Components/Events/EventComponent";
import MyFirstComponent from "./Components/Props/MyFirstComponent";
import MyWrapperComponent from "./Components/Props/MyWrapperComponent";
import MyStateComponent from "./Components/State/MyStateComponent";
import { useState, useEffect, useReducer } from "react";
import FetchComponent from "./Components/useEffect/FetchComponent";
import EffectsComponent from "./Components/useEffect/EffectsComponent";
import RefComponent from "./Components/useEffect/RefComponent";
import FetchExampleComponent from "./Components/useEffect/FetchExampleComponent";
import Homepage from "./Components/Homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Nav from "./Components/Nav/Nav";
import MySecondComponent from "./Components/Props/MySecondComponent";
import ErrorPage from "./Components/404/ErrorPage";
import CharacterComponent from "./Components/useEffect/CharacterComponent";
import CounterReadOnly from "./Components/context/CounterReadOnly";
import Child from "./Components/prop/Child";
import NumberFactNoCallback from "./Components/useCallback/NumberFactNoCallback";
import NumberFactUseCallback from "./Components/useCallback/NumberFactUseCallback";
import Parent from "./Components/memo/Parent";
import NewMemeForm from "./Components/useReducer/NewMemeForm";
import MemeList from "./Components/useReducer/MemeList";
import {
  DispatchContext,
  MemeContext,
} from "./Components/useReducer/memeContext";
import rootReducer from "./Components/useReducer/rootReducer";

function App() {
  const userName = "John";
  const [count, setCount] = useState(10);
  let user;

  const [state, dispatch] = useReducer(rootReducer, { memes: [] });

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
    <>
      <Nav />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/fetch" element={<FetchComponent />} />
        <Route path="character">
          <Route index element={<FetchExampleComponent />} />
          <Route path=":name" element={<CharacterComponent />} />
        </Route>

        <Route path="/effects" element={<EffectsComponent />} />
        <Route path="/ref" element={<RefComponent />} />
        <Route path="/events" element={<EventComponent />} />
        <Route path="/state" element={<MyStateComponent user={user} />} />
        <Route
          path="/wrapper"
          element={
            <MyWrapperComponent
              Component={MyFirstComponent}
              ComponentProps={user}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <NumberFactNoCallback /> */}
      {/* <NumberFactUseCallback /> */}
      <Parent />
      {/* <NumberFactUseCallback /> */}

      {/* <div>
        <DispatchContext.Provider value={dispatch}>
          <MemeContext.Provider value={state.memes}>
            <NewMemeForm />
            <MemeList />
          </MemeContext.Provider>
        </DispatchContext.Provider>
      </div> */}

      {/* <CounterReadOnly /> */}
    </>
  );
}

export default App;
