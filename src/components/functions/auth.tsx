import axios from 'axios'
import { useState } from 'react'

export function AuthBling() {
  ///Depois add segurança
  const [loading, setLoading] = useState(false)

  const getAuth = async () => {
    //Depois add segurança
    setLoading(true)
    try {
      const secret = await axios.get(
        `${import.meta.env.VITE_API_URL}callback/token/${import.meta.env.VITE_AUTH_SECRET}`,
      )
      const clientId = secret.data.auth
      const redirectUri = 'http://localhost:3000/callback'
      const scope = 'produto'

      const authUrl = `https://www.bling.com.br/Api/v3/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&state=${secret.data.state}`

      window.open(authUrl, 'BlingAuth', 'width=600,height=700')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div>
        <button onClick={getAuth} disabled={loading}>
          {loading ? 'Carregando...' : 'Conectar ao Blingão'}
        </button>
      </div>
    </>
  )
}

/*export function Redirect() {
  return (
    <>
      <div>oi</div>
    </>
  )
}


  O que eu farei aqui:
  Request para o backend e pegarei no back end e não aqui, não tendo uma divisão perigosa
 
 
 

{"message":"Request failed with status code 500","name":"AxiosError","fileName":"http://localhost:5173/node_modules/.vite/deps/axios.js?v=1a2bb121","lineNumber":1144,"columnNumber":3,"stack":"AxiosError$1@http://localhost:5173/node_modules/.vite/deps/axios.js?v=1a2bb121:1144:3\nsettle@http://localhost:5173/node_modules/.vite/deps/axios.js?v=1a2bb121:1838:14\nonloadend@http://localhost:5173/node_modules/.vite/deps/axios.js?v=1a2bb121:2231:10\n","config":{"transitional":{"silentJSONParsing":true,"forcedJSONParsing":true,"clarifyTimeoutError":false,"legacyInterceptorReqResOrdering":true,"advertiseZstdAcceptEncoding":false,"validateStatusUndefinedResolves":true},"adapter":["xhr","http","fetch"],"transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1,"env":{},"headers":{"Accept":"application/json, text/plain, ","Authorization":"Bearer cfcab01cb22c9c87aa630284119de41322191ac7"},"withCredentials":true,"method":"get","url":"http://localhost:3000/produtos?","allowAbsoluteUrls":true},"code":"ERR_BAD_RESPONSE","status":500}
 
  */
