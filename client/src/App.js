import './styles/App.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Parks from './components/Parks'

const App = () => {
  const [parks, setParks] = useState(parksArray)

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="parks" element={<Parks parks={parks} />} />
          {''}
        </Routes>
      </main>
    </div>
  )
}

const BASE_URL = 'http://localhost:3001/api'
// When using the BASE_URL
axios.get(`${BASE_URL}/someroute`)

export default App
