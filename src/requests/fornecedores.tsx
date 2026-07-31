import axios from 'axios'

export async function getProdFornecedores(
  idFor: number,
  idProd: number | null,
) {
  try {
    const axi = await axios.delete(
      `${import.meta.env.VITE_URL}produtos/fornecedores?${idFor && `idFornecedor=${idFor}`}${idProd && `&idProduto=${idProd}`}`,
    )

    return axi.data
  } catch (err) {
    return err
  }
}

export async function getProdFornecedor(idFor: number) {
  try {
    const axi = await axios.delete(
      `${import.meta.env.VITE_URL}produtos/fornecedores/:${idFor}`,
    )

    return axi.data
  } catch (err) {
    return err
  }
}
