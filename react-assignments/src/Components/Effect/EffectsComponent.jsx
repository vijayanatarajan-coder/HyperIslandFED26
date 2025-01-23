import React, { useState, useEffect } from "react";

const GotCharacters = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetch("https://thronesapi.com/api/v2/Characters")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main>
      <div>
        <h1>Game of Thrones Characters</h1>
        <ul>
          {data &&
            data.map((character) => (
              <li key={character.id}>{character.fullName}</li>
            ))}
        </ul>
      </div>
    </main>
  );
};

export default GotCharacters;
