import React, { useEffect, useState } from "react";
import "./EffectsComponent.css";
import MyStateComponent from "../MyStateComponent/MyStateComponent";
// TODO: Create a Component, that does an API call to get characters from Game of Thrones and display them in a list. https://thronesapi.com/api/v2/Characters
// - use the Fetch API to get the data
// - use the useEffect hook to fetch the data when the component mounts
// - use the useState hook to store the data
// - display the data in a list
function EffectsComponent() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showMystate, setShowMystate] = useState(false);

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <button onClick={() => setShowMystate(!showMystate)}>Toggle View</button>
      <h1>Effects Component</h1>
      {showMystate ? (
        <MyStateComponent />
      ) : (
        <ul className="characterList">
          {data.map((character) => (
            <li key={character.id} className="character">
              {character.fullName} - {character.title}
              <img src={character.imageUrl} alt={character.fullName} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EffectsComponent;
