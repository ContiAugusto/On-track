import axios from 'axios'

// Referência da API Bling: https://developer.bling.com.br/referencia

export async function getPedidosDeCompra(params: object | null = null) {
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
    const axi = await axios.get(
      `${import.meta.env.VITE_URL}pedidos/compras${formatedParams}`,
    )

    return axi.data
  } catch (err) {
    return err
  }
}

export async function getPedidoDeCompra(id: number) {
  //Tratar o id aqui por segurança

  try {
    const axi = await axios.get(
      `${import.meta.env.VITE_URL}pedidos/compras/:${id}`,
    )

    return axi.data
  } catch (err) {
    return err
  }
}

export async function postPedidoDeCompra(data: object) {
  try {
    //Tratar a data aqui por segurança

    const axi = await axios.post(`${import.meta.env.VITE_URL}pedidos/compras`, {
      body: data,
    })

    return axi.data
  } catch (err) {
    return err
  }
}

export async function putPedidoDeCompra(id: number, data: object) {
  try {
    //Tratar a data aqui por segurança

    const axi = await axios.put(
      `${import.meta.env.VITE_URL}pedidos/compras/:${id}`,
      {
        body: data,
      },
    )

    return axi.data
  } catch (err) {
    return err
  }
}

export async function patchSituacaoPedidoDeCompra(
  id: number,
  idSituacao: number,
) {
  try {
    const axi = await axios.patch(
      `${import.meta.env.VITE_URL}pedidos/compras?id=${id}&idSituacao=${idSituacao}`,
    )
    return axi.data
  } catch (err) {
    return err
  }
}
