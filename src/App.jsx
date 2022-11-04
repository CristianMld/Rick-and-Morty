import ResidentInfo from './Components/ResidentInfo';
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [ location, setLocation ] = useState({});
  const [ typeId, setTypeId] = useState('type a location id between 1 and 126');

  useEffect(() => {
    const randonId = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randonId}/`)
      .then(res => setLocation(res.data))
  }, [])

  // console.log(location);

  const searchType = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${typeId}/`)
      .then(res => setLocation(res.data))
  }

  return (
    <div className="App">
      <div className="main-photo"></div>
      <h1 className='main-title'>Rick and Morty Wiki</h1>
      <input onClick={() => setTypeId('')} type="text" value={typeId} onChange={e => setTypeId(e.target.value)}/>
      <button onClick={searchType}><i className="fa-solid fa-magnifying-glass"></i></button>
      <h1 className='location-name'>{location.name}</h1>
      <div className="location-info">
        <h2>Type: {location.type}</h2>
        <h2>Dimension: {location.dimension}</h2>
        <h2>Population: {location.residents?.length}</h2>
      </div>
      <ul>
        {location.residents?.map(location => (
          <ResidentInfo key={location} url={location}/>
        ))}
      </ul>
      <div className="footer">
      <h3><i class="fa-solid fa-envelope"></i> hkrcrm@gmail.com</h3>
        <h3>Made with 🤍 in Academlo</h3>
      </div>
    </div>
  )
}

export default App
