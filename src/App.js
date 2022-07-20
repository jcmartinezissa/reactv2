import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [isLoanding, SetIsLoanding] = useState(false);
  const [characters, setCharacter] = useState([]);

  const getCharacters = async () => {
    SetIsLoanding(true);
    const { data } = await axios('https://rickandmortyapi.com/api/character');
    setCharacter(data.results);
    SetIsLoanding(false);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (

    <div className="App">
        {isLoanding && <p>Cargando...</p>}
        { characters?.map(character => <p key={character.id}>{character.name}</p>) }
    </div>
  );
};
export default App;
