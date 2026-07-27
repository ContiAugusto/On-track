import axios from 'axios'

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
      `http://localhost:3000/api/pedidos/compras${formatedParams}`,
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
      `http://localhost:3000/api/pedidos/compras/:${id}`,
    )

    return axi.data
  } catch (err) {
    return err
  }
}

export async function postPedidoDeCompra(data: object) {
  try {
    //Tratar a data aqui por segurança

    const axi = await axios.post(`http://localhost:3000/api/pedidos/compras`, {
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
      `http://localhost:3000/api/pedidos/compras/:${id}`,
      {
        body: data,
      },
    )

    return axi.data
  } catch (err) {
    return err
  }
}

export async function deletePedidoDeCompra(id: number) {
  try {
    //Tratar o id aqui por segurança

    const axi = await axios.delete(
      `http://localhost:3000/api/pedidos/compras/:${id}`,
    )

    return axi.data
  } catch (err) {
    return err
  }
}
