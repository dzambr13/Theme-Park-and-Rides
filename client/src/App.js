import './styles/App.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
