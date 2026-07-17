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
    //${idComponente && `idComponente=${idComponente}&`}${dataInclusãoFinal && `dataInclusãoFinal=${dataInclusãoFinal}&`}${dataInclusãoInicial && `dataInclusãoInicial=${dataInclusãoInicial}&`}${dataAlteracaoFinal && `dataAlteracaoFinal=${dataAlteracaoFinal}&`}${dataAlteracaoInicial && `dataAlteracaoInicial=${dataAlteracaoInicial}&`}${idCategoria && `idCategoria=${idCategoria}&`}${idLoja && `idLoja=${idLoja}&`}${codigo && `codigo=${codigo}&`}${nome && `nome=${nome}&`}${idProd1 && `idProd1=${idProd1}&`}${idProd2 && `idProd2=${idProd2}&`}
    const axi = await axios.get(
      `${import.meta.env.VITE_API_URL}pedidoDeCompra${formatedParams}`,
      {
        headers: {
          Authorization: import.meta.env.VITE_AUTHORIZATION,
        },
        withCredentials: true,
      },
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
      `${import.meta.env.VITE_API_URL}pedidoDeCompra/:${id}`,
      {
        headers: {
          Authorization: import.meta.env.VITE_AUTHORIZATION,
        },
        withCredentials: true,
      },
    )

    return axi.data
  } catch (err) {
    return err
  }
}

export async function postPedidoDeCompra(data: object) {
  try {
    //Tratar a data aqui por segurança

    const axi = await axios.post(
      `${import.meta.env.VITE_API_URL}pedidoDeCompra`,
      {
        headers: {
          Authorization: import.meta.env.VITE_AUTHORIZATION,
        },
        body: data,
        withCredentials: true,
      },
    )

    return axi.data
  } catch (err) {
    return err
  }
}

export async function putPedidoDeCompra(id: number, data: object) {
  try {
    //Tratar a data aqui por segurança

    const axi = await axios.put(
      `${import.meta.env.VITE_API_URL}pedidoDeCompra/:${id}`,
      {
        headers: {
          Authorization: import.meta.env.VITE_AUTHORIZATION,
        },
        body: data,
        withCredentials: true,
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
      `${import.meta.env.VITE_API_URL}pedidoDeCompra/:${id}`,
      {
        headers: {
          Authorization: import.meta.env.VITE_AUTHORIZATION,
        },
        withCredentials: true,
      },
    )

    return axi.data
  } catch (err) {
    return err
  }
}
