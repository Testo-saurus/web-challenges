import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemonData, setPokemonData] = useState({});
  const [page, setPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0"
  );

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(page);
        const data = await response.json();
        setPokemonData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]);

  useEffect(() => {}, []);

  function handleNextPage() {
    setPage(pokemonData.next);
  }

  function handlePrevPage() {
    setPage(pokemonData.previous);
  }
  if (!pokemonData.results) {
    return <h1>Loading ...</h1>;
  }

  return (
    <main>
      {pokemonData.previous && (
        <button type="button" onClick={handlePrevPage}>
          Previous Page
        </button>
      )}{" "}
      {/* wird nur geredert wenn pokemonData.previous truthy ist, da null falsy ist wird der button beim ersten render nicht angezeigt, da pokemonData.previous dort === null */}
      {pokemonData.next && (
        <button type="button" onClick={handleNextPage}>
          Next Page
        </button>
      )}
      <ul>
        {pokemonData.results.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
