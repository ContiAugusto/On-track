import axios from 'axios'

// Referência da API Bling: https://developer.bling.com.br/referencia

export async function getPedidosDeVenda(params: object | null = null) {
  let formatedParams = '?'
  if (params != null) {
    const entries = Object.entries(params)
    for (let i = 0; i < entries.length; i++) {
      const [key, value] = entries[i]
      if (i != entries.length - 1) {
        formatedParams += `${key}=${value}&`
      } else {
        formatedParams += `${key}=${value}`
      }
    }
  }
  try {
    // idComponente
    // dataInclusãoFinal
    // dataInclusãoInicial
    // dataAlteracaoFinal
    // dataAlteracaoInicial
    // idCategoria
    // idLoja
    // codigo
    // nome
    // idProd1
    // idProd2

    const axi = await axios.get(
      `${import.meta.env.VITE_URL}pedidos/vendas${formatedParams}`,
    )

    return axi.data
  } catch (err) {
    return err
  }
}

export async function getPedidoDeVenda(id: number) {
  try {
    const axi = await axios.get(
      `${import.meta.env.VITE_URL}pedidos/vendas/:${id}`,
    )

    return axi.data
  } catch (err) {
    return err
  }
}

export async function postPedidoDeVenda(data: object) {
  try {
    const axi = await axios.post(`${import.meta.env.VITE_URL}pedidos/vendas`, {
      body: data,
    })

    return axi.data
  } catch (err) {
    return err
  }
}

export async function postEstoqueVenda(idVenda: number, idDeposito: number) {
  try {
    const axi = await axios.post(
      `${import.meta.env.VITE_URL}pedidos/vendas?id_venda=${idVenda}&id_deposito=${idDeposito}`,
    )

    return axi.data
  } catch (err) {
    return err
  }
}
