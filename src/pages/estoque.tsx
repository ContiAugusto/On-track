import { useState } from 'react'
import { getAllProdutos } from '../requests/produtos'

function Estoque() {
  const [produtos, setProdutos] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleFetchProdutos = async () => {
    setLoading(true)
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
        {Object.keys(produtos) && <pre>{JSON.stringify(produtos)}</pre>}
      </div>
    </>
  )
}

export default Estoque
