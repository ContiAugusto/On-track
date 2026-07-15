import axios from 'axios'

export async function getPedidosDeVenda() {
  /*
  idComponente: number,
  dataInclusãoFinal: Date,
  dataInclusãoInicial: Date,
  dataAlteracaoFinal: Date,
  dataAlteracaoInicial: Date,
  idCategoria: number,
  idLoja: number,
  codigo: number,
  nome: string,
  idProd1: number,
  idProd2: number,*/
  try {
    //${idComponente && `idComponente=${idComponente}&`}${dataInclusãoFinal && `dataInclusãoFinal=${dataInclusãoFinal}&`}${dataInclusãoInicial && `dataInclusãoInicial=${dataInclusãoInicial}&`}${dataAlteracaoFinal && `dataAlteracaoFinal=${dataAlteracaoFinal}&`}${dataAlteracaoInicial && `dataAlteracaoInicial=${dataAlteracaoInicial}&`}${idCategoria && `idCategoria=${idCategoria}&`}${idLoja && `idLoja=${idLoja}&`}${codigo && `codigo=${codigo}&`}${nome && `nome=${nome}&`}${idProd1 && `idProd1=${idProd1}&`}${idProd2 && `idProd2=${idProd2}&`}
    const axi = await axios.get(
      `${import.meta.env.VITE_API_URL}pedidoDeVenda`,
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

export async function getPedidoDeVenda(id: number) {
  //Tratar o id aqui por segurança

  try {
    const axi = await axios.get(
      `${import.meta.env.VITE_API_URL}pedidoDeVenda/:${id}`,
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

export async function postPedidoDeVenda(data: object) {
  try {
    //Tratar a data aqui por segurança

    const axi = await axios.post(
      `${import.meta.env.VITE_API_URL}pedidoDeVenda`,
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

export async function putPedidoDeVenda(id: number, data: object) {
  try {
    //Tratar a data aqui por segurança

    const axi = await axios.put(
      `${import.meta.env.VITE_API_URL}pedidoDeVenda/:${id}`,
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

export async function deletePedidoDeVenda(id: number) {
  try {
    //Tratar o id aqui por segurança

    const axi = await axios.delete(
      `${import.meta.env.VITE_API_URL}pedidoDeVenda/:${id}`,
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
