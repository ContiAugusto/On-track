import axios from 'axios'

export async function getProdFornecedores(
  idFor: number,
  idProd: number | null,
) {
  try {
    //Tratar o id aqui por segurança

    const axi = await axios.delete(
      `${import.meta.env.VITE_API_URL}produtos/fornecedores?idFornecedor=${idFor}${idProd && `&idProduto=${idProd}`}`,
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

export async function getProdFornecedor(idFor: number) {
  try {
    //Tratar o id aqui por segurança

    const axi = await axios.delete(
      `${import.meta.env.VITE_API_URL}produtos/fornecedores/:${idFor}`,
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
