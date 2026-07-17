import { useState } from 'react'
import { getProdutos } from '../requests/produtos'

function Estoque() {
  const [produtos, setProdutos] = useState('')
  const [loading, setLoading] = useState(false)

  const handleFetchProdutos = async () => {
    setLoading(true)
    try {
      const data = await getProdutos()
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
        {Object.keys(produtos) && <pre>{JSON.stringify(produtos)}</pre>}
      </div>
    </>
  )
}

export default Estoque
