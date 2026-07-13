function AuthBling() {
  const handleAuth = () => {
    const clientId = import.meta.env.VITE_CLIENT_ID
    const redirectUri = 'http://localhost:5173/callback'
    const scope = 'produto'

    const authUrl = `https://www.bling.com.br/Api/v3/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&state=${import.meta.env.VITE_STATE}`

    window.open(authUrl, 'BlingAuth', 'width=600,height=700')
  }

  return <button onClick={handleAuth}>Conectar ao Bling</button>
}

export default AuthBling
