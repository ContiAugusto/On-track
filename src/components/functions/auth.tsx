import authBling from '../requests/bling'
import { useState } from 'react'

export function Login() {
  const [loading, setLoading] = useState(false)

  const getAuth = async () => {
    setLoading(true)
    await authBling()
    try {
      
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
