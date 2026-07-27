import axios from 'axios'

export async function getProdFornecedores(
  idFor: number,
  idProd: number | null,
) {
  try {
    const axi = await axios.delete(
      `http://localhost:3000/api/produtos/fornecedores?${idFor && `idFornecedor=${idFor}`}${idProd && `&idProduto=${idProd}`}`,
    )

    return axi.data
  } catch (err) {
    return err
  }
}

export async function getProdFornecedor(idFor: number) {
  try {
    const axi = await axios.delete(
      `http://localhost:3000/api/produtos/fornecedores/:${idFor}`,
    )

    return axi.data
  } catch (err) {
    return err
  }
}
