import useFecthCharacters from './hooks/useFecthCharacters';
import './App.css';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  // Usar el hook personalizado para obtener los datos
  const { data: pokemonData, loading: pokemonLoading, error: pokemonError } = useFecthCharacters(urlPokemon);
  const { data: rickData, loading: rickLoading, error: rickError } = useFecthCharacters(urlRick);

  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
      
      <div className="card">
        {/* Renderizar personaje de Pokémon */}
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
