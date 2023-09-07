import React, { useState, useEffect } from 'react';

function FetchRandom() {
  const [randomPokemon, setRandomPokemon] = useState(null);
  const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setRandomPokemon(data.results[randomIndex]);

      } catch (error) {
        console.error('Error fetching the Pokemon data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {randomPokemon ? <p id="randPokemon">{randomPokemon.name}</p> : <p>Loading...</p>}
    </div>
  );
}

export default FetchRandom;
