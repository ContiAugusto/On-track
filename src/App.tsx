import {
  Route,
  BrowserRouter as Router,
  Routes,
  //useNavigate,
} from 'react-router-dom'
import { AuthBling /*Redirect*/ } from './components/functions/auth'
import Estoque from './pages/estoque'
import Callback from './requests/callback'
import Home from './pages'
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
            {/*<Route path="/redirect" element={<Redirect />} />*/}
            <Route path="/callback" element={<Callback />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
