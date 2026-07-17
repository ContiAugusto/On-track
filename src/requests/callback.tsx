import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function Callback() {
  const location = useLocation()
  useEffect(() => {
    try {
      const params = new URLSearchParams(location.search)
      const code = params.get('code')

      if (code) {
        axios
          .post(`${import.meta.env.VITE_API_URL}token`, {
            grant_type: 'authorization_code',
            code: code,
          })
          .then((res) => {
            console.log(res)
            //  window.close()
          })
      }
    } catch (err) {
      console.error(err)
    }
  }, [location])

  return (
    <>
      <p>Processando login...</p>
    </>
  )
}

export default Callback
