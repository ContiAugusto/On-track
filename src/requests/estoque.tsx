import axios from 'axios'

export async function getEstoque() {
  try {
    const axi = await axios.get(`${import.meta.env.VITE_URL}estoque`)

    return axi.data
  } catch (err) {
    return err
  }
}

export async function getEstoqueById(id: number) {
  //Tratar o id aqui por segurança

  try {
    const axi = await axios.get(`${import.meta.env.VITE_URL}estoque:${id}`)

    return axi.data
  } catch (err) {
    return err
  }
}

export async function postEstoque(data: object) {
  try {
    //Tratar a data aqui por segurança

    const axi = await axios.post(`${import.meta.env.VITE_URL}estoque`, {
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

    const axi = await axios.delete(`${import.meta.env.VITE_URL}estoque:${id}`)

    return axi.data
  } catch (err) {
    return err
  }
}
