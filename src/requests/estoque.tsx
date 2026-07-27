import axios from 'axios'

export async function getEstoque() {
  try {
    const axi = await axios.get(`http://localhost:3000/api/estoque`)

    return axi.data
  } catch (err) {
    return err
  }
}

export async function getEstoqueById(id: number) {
  //Tratar o id aqui por segurança

  try {
    const axi = await axios.get(`http://localhost:3000/api/estoque:${id}`)

    return axi.data
  } catch (err) {
    return err
  }
}

export async function postEstoque(data: object) {
  try {
    //Tratar a data aqui por segurança

    const axi = await axios.post(`http://localhost:3000/api/estoque`, {
      body: data,
    })

    return axi.data
  } catch (err) {
    return err
  }
}

export async function deleteEstoque(id: number) {
  try {
    //Tratar o id aqui por segurança

    const axi = await axios.delete(`http://localhost:3000/api/estoque:${id}`)

    return axi.data
  } catch (err) {
    return err
  }
}
