import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Callback from './routes/callback'
import Home from './pages'

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/app/callback" element={<Callback />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
