import { useState } from 'react'
import { postMontagens } from '../requests/montagens'

//Modelo teste frontEnd

function Montagem() {
  const [produtos, setProdutos] = useState({})
  const [loading, setLoading] = useState(false)

  const handleFetchProdutos = async () => {
    setLoading(true)
    try {
      const data = await postMontagens({
        teste: 'teste',
      })
      setProdutos(data)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div>
        <button onClick={handleFetchProdutos} disabled={loading}>
          {loading ? 'Carregando...' : 'Criar montagem'}
        </button>
        {Object.keys(produtos) && <pre>{JSON.stringify(produtos)}</pre>}
      </div>
    </>
  )
}

export default Montagem
