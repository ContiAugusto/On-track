import axios from 'axios'

async function authBling () {
    const client = await axios.get(
        `${import.meta.env.VITE_URL}callback/token`,
    )
    const clientId = client.data.auth
    const redirectUri = `${import.meta.env.VITE_URL}callback`
    const scope = 'produto'

    //state = nonce
    const authUrl = `https://www.bling.com.br/Api/v3/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&state=${client.data.state}`

    window.open(authUrl, 'BlingAuth', 'width=600,height=700')
}

export default authBling