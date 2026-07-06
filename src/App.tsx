import './App.css'
import FetchApi from './requests/fetch'

function App() {
  return (
    <>
      <div className="card">
        <FetchApi
          headers={{
            'Content-Type': 'application/json',
            accept: 'application/json',
            authorization: import.meta.env.VITE_AUTHORIZATION,
          }}
        />
      </div>
    </>
  )
}

export default App
