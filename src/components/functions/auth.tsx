import axios from 'axios'
import { useState } from 'react'

export function Login() {
  ///Depois add segurança
  const [loading, setLoading] = useState(false)

  const getAuth = async () => {
    //Depois add segurança
    setLoading(true)
    try {
      const client = await axios.get(
        `http://localhost:3000/api/callback/token/35$%UkYmKBRj6j5X$XEZN@Tgm`,
      )
      const clientId = client.data.auth
      const redirectUri = `http://localhost:3000/api/callback`
      const scope = 'produto'

      //state = nonce
      const authUrl = `https://www.bling.com.br/Api/v3/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&state=${client.data.state}`

      window.open(authUrl, 'BlingAuth', 'width=600,height=700')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div>
        <button onClick={getAuth} disabled={loading}>
          {loading ? 'Carregando...' : 'Conectar ao Bling'}
        </button>
      </div>
    </>
  )
}
