import { useState } from 'react'
import getAllProdutos from '../requests/fetch'

function Estoque() {
  const [produtos, setProdutos] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleFetchProdutos = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await getAllProdutos().catch((err) => {
        setError(err)
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
          {loading ? 'Carregando...' : 'Aqui'}
        </button>
        {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
        {produtos && <pre>{JSON.stringify(produtos, null, 2)}</pre>}
      </div>
    </>
  )
}

export default Estoque
