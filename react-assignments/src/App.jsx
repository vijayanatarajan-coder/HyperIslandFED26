import "./App.css";
//import Person from "./Components/Person";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";

function App() {
  /*const person = {
    name: "John",
    info: {
      age: 25,
      city: "New York",
      job: "Developer",
      hobbies: ["reading", "coding", "gaming"],
    },
  };*/

  return (
    <div>
      {/* TODO create a child component in proper jsx, the component takes the person object as props and render the data */}
      {/*<Person props={person} />*/}
      <MyStateComponent />
    </div>
  );
}

export default App;
