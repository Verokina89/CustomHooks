const PokemonCharacter = ({ name, image }) => (
    <>
      <h2>Personaje Pokemon</h2>
      <p>{name}</p>
      <img src={image} alt={name} />
    </>
);
  
  export default PokemonCharacter;  