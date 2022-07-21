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

export default App
