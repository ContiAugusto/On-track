import {
  Route,
  BrowserRouter as Router,
  Routes,
  //useNavigate,
} from 'react-router-dom'
import './App.css'
import AuthBling from './components/functions/auth'
import Estoque from './pages/estoque'
import Callback from './requests/callback'
/*//import { useEffect } from 'react'


const Home = () => (
  <>
    <h6></h6>
  </>
)

function AppRoutes() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/callback', element: Callback() },
  ])
  return routes
}


function CallbackPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')

    if (token) {
      localStorage.setItem('authToken', token)

      navigate('/')
    } else {
      navigate('/login')
    }
  }, [navigate])

  return <div>Processando callback...</div>
}
*/
function App() {
  return (
    <>
      <div>
        <Estoque />
        <AuthBling />
        <Router>
          <Routes>
            <Route path="/callback" element={<Callback />} />
            <Route path="/" element={<div>Bem-vindo ao Dashboard!</div>} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
