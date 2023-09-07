import React, { useState, useEffect } from 'react';

function FetchRequest() {
  const [pokemonData, setPokemonData] = useState([]);
  const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPokemonData(data.results);
      } catch (error) {
        console.error('Error fetching the Pokemon data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Pokemon List:</h2>
      <ol>
        {pokemonData.map(pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default FetchRequest;
