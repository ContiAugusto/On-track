import './App.css'
import FetchApi from './requests/fetch'

function App() {
  return (
    <>
      <div className="card">
        <FetchApi
          headers={{
            Accept: 'application/json',
            Authorization: import.meta.env.VITE_AUTHORIZATION,
          }}
        />
      </div>
    </>
  )
}

export default App
