import useFecthCharacters from './hooks/useFecthCharacters';
import PokemonCharacter from './components/PokemonCharacter';
import RickandMortyCharacter from './components/RickandMortyCharacter';
import './App.css';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  // Usar el hook personalizado para obtener los datos
  const { data: pokemonData, loading: pokemonLoading, error: pokemonError } = useFecthCharacters(urlPokemon);
  const { data: rickData, loading: rickLoading, error: rickError } = useFecthCharacters(urlRick);

  return (
    <div className="App">
      
      <div className="card">
        {/* Pokémon Character.Renderizar personaje de Pokémon */}
        <h2>Personaje Pokemon</h2>
        {pokemonLoading && <p>Cargando...</p>}
        {pokemonError && <p>Error: {pokemonError}</p>}
        {pokemonData && (
          <>
            <p>{pokemonData.name}</p>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          </>
        )}

        {/* Renderizar personaje de Rick and Morty */}
        <h2>Personaje Rick and Morty</h2>
        {rickLoading && <p>Cargando...</p>}
        {rickError && <p>Error: {rickError}</p>}
        {rickData && (
          <>
            <p>{rickData.name}</p>
            <img src={rickData.image} alt={rickData.name} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
