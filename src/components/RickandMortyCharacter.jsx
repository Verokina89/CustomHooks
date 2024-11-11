const RickandMortyCharacter = ({ name, image }) => (
    <>
      <h2>Personaje Rick and Morty</h2>
      <p>{name}</p>
      <img src={image} alt={name} />
    </>
  );
  
  export default RickandMortyCharacter;
  