import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function Callback() {
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const code = params.get('code')
    if (code) {
      axios
        .post(`${import.meta.env.VITE_API_URL}bling/token`, { code })
        .then((res) => console.log(res))
        .catch((err) => console.error(err.error))
    }
  }, [location])

  return <p>Processando login...</p>
}

export default Callback
