import React, { useEffect } from "react";

function CharacterComponent({ character, resetChosenCharacter }) {
  useEffect(() => {
    console.log(character);
  }, [character]);

  return (
    <div>
      <button onClick={resetChosenCharacter}>Go back</button>
      <h1>{character.name}</h1>
    </div>
  );
}

export default CharacterComponent;
