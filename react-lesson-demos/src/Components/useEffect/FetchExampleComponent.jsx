import React, { useEffect, useState } from "react";
import CharacterComponent from "./CharacterComponent";

function FetchExampleComponent() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [chosenCharacter, setChosenCharacter] = useState(null);

  useEffect(() => {
    // const fetchAllPages = async (url) => {
    //   try {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     setCharacters((prevCharacters) => [...prevCharacters, ...data.results]);
    //     console.log(data.results);
    //     if (data.next) {
    //       fetchAllPages(data.next);
    //     }
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };
    // fetchAllPages("https://swapi.dev/api/people/");

    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  function resetChosenCharacter() {
    setChosenCharacter(null);
  }

  return (
    <div>
      {!chosenCharacter ? (
        <>
          <h1>Star Wars Characters</h1>
          <ul>
            {characters.map((character) => (
              <li
                onClick={() => setChosenCharacter(character)}
                key={character.name}
              >
                {character.name}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <CharacterComponent
          resetChosenCharacter={resetChosenCharacter}
          character={chosenCharacter}
        />
      )}
    </div>
  );
}

export default FetchExampleComponent;
