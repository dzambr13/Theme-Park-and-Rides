import './styles/App.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Parks from './components/Parks'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ParkDetails from './components/ParkDetails'
import Form from './components/Form'
import Thanks from './components/Thanks'

const BASE_URL = 'http://localhost:3001/api'

const App = () => {
  const [parks, setParks] = useState([])
  useEffect(() => {
    const getParks = async () => {
      const park = await axios.get(`${BASE_URL}/rides`)
      setParks(park.data.rides)
    }
    getParks()
  }, [])

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parks" element={<Parks parks={parks} />} />
          <Route path="/parks/:id" element={<ParkDetails />} />
          <Route path="/form" element={<Form />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
