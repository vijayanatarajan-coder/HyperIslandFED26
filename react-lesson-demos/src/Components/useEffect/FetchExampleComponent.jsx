import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

function FetchExampleComponent() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
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

  function handleCharacterClick(character) {
    navigate(`/character/${character.name}`, { state: { character } });
  }

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.name}>
            <Link
              to={`/character/${character.name}`}
              onClick={() => handleCharacterClick(character)}
            >
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchExampleComponent;
