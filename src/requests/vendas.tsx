import axios from 'axios'

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
    //${idComponente && `idComponente=${idComponente}&`}${dataInclusãoFinal && `dataInclusãoFinal=${dataInclusãoFinal}&`}${dataInclusãoInicial && `dataInclusãoInicial=${dataInclusãoInicial}&`}${dataAlteracaoFinal && `dataAlteracaoFinal=${dataAlteracaoFinal}&`}${dataAlteracaoInicial && `dataAlteracaoInicial=${dataAlteracaoInicial}&`}${idCategoria && `idCategoria=${idCategoria}&`}${idLoja && `idLoja=${idLoja}&`}${codigo && `codigo=${codigo}&`}${nome && `nome=${nome}&`}${idProd1 && `idProd1=${idProd1}&`}${idProd2 && `idProd2=${idProd2}&`}
    const axi = await axios.get(
      `http://localhost:3000/api/pedidos/vendas${formatedParams}`,
    )

    return axi.data
  } catch (err) {
    return err
  }
}

export async function getPedidoDeVenda(id: number) {
  try {
    const axi = await axios.get(
      `http://localhost:3000/api/pedidos/vendas/:${id}`,
    )

    return axi.data
  } catch (err) {
    return err
  }
}

export async function postPedidoDeVenda(data: object) {
  try {
    const axi = await axios.post(`http://localhost:3000/api/pedidos/vendas`, {
      body: data,
    })

    return axi.data
  } catch (err) {
    return err
  }
}

export async function putPedidoDeVenda(id: number, data: object) {
  try {
    const axi = await axios.put(
      `http://localhost:3000/api/pedidos/vendas/:${id}`,
      {
        body: data,
      },
    )

    return axi.data
  } catch (err) {
    return err
  }
}

export async function deletePedidoDeVenda(id: number) {
  try {
    const axi = await axios.delete(
      `http://localhost:3000/api/pedidos/vendas/:${id}`,
    )

    return axi.data
  } catch (err) {
    return err
  }
}
