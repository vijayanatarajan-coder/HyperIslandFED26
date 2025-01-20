import "./App.css";
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
      <MyStateComponent />
      {/* <PropsComponent person={person} /> */}
    </div>
  );
}

export default App;
