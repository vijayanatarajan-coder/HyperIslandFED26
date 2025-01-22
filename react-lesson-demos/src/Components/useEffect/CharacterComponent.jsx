import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

function CharacterComponent() {
  const location = useLocation();
  const navigate = useNavigate();
  const character = location.state?.character;
  useEffect(() => {
    console.log(location.state?.character);
  });

  useEffect(() => {
    if (!character) {
      navigate(-1);
    }
  }, [character, navigate]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <h1>{character.name}</h1>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <p>Hair Color: {character.hair_color}</p>
      <p>Skin Color: {character.skin_color}</p>
      <p>Eye Color: {character.eye_color}</p>
      <p>Birth Year: {character.birth_year}</p>
      <p>Gender: {character.gender}</p>
    </div>
  );
}

export default CharacterComponent;
