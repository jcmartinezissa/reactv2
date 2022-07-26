import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Cardjc } from './components/Cardjc';
import 'antd/dist/antd.css';

const App = () => {
  const [isLoanding, SetIsLoanding] = useState(false);
  const [characters, setCharacter] = useState([]);
  const [idPersonaje, setIdPersonaje] = useState(0);

  const getCharacters = async () => {
    SetIsLoanding(true);
    const { data } = await axios('https://rickandmortyapi.com/api/character');
    setCharacter(data.results);
    SetIsLoanding(false);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  console.log(idPersonaje);
  console.log(characters);

  return (
    <div className="App">
      {isLoanding && <p>Cargando...</p>}
      {characters?.map((character) => (
        <Cardjc
        character={character}
        key={character.id}
        setIdPersonaje={setIdPersonaje} />
      ))}
      ;
    </div>
  );
};
export default App;
