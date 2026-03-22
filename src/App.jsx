import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* More routes will be added: /game, /load-game, etc. */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
