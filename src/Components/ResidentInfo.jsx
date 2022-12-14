import axios from "axios";
import { useEffect, useState } from "react";

const ResidentInfo = ({ url }) => {

  const [ character, setCharacter ] = useState({})
  
  useEffect(() => {
    axios.get(url)
      .then(res => setCharacter(res.data))
  }, [])

  // console.log(character);

  return (
    <div className="card">
      <li key={url}>
        <h2>"{character.name}"</h2>
        <img src={character.image} alt="" />
        <div className="character-info">
          <h3>Status: {' '}
            {character.status === 'Alive' ? <i className="fa-solid fa-circle" style={{color: 'green'}}></i> : 
            character.status === 'Dead' ? <i className="fa-solid fa-circle" style={{color: 'red'}}></i> :
            <i className="fa-solid fa-circle" style={{color: 'grey'}}></i>}
            {' '} {character.status}
          </h3>
          <h3>Origin: {character.origin?.name}</h3>
          <h3>Episodes where appear: {character.episode?.length}</h3>
        </div>
      </li>
    </div>
  );
};

export default ResidentInfo;