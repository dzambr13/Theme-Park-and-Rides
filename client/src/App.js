import './styles/App.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
