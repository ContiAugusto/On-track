import { useState } from 'react'
import { getProduto } from '../requests/produtos'

//Modelo teste frontEnd

function Estoque() {
  const [produtos, setProdutos] = useState({})
  const [loading, setLoading] = useState(false)

  const handleFetchProdutos = async () => {
    setLoading(true)
    try {
      const data = await getProduto(16684755958) // Exemplo: buscar produto com ID 1
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
