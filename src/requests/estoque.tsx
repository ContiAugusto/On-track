import axios from 'axios'

// Referência da API Bling: https://developer.bling.com.br/referencia

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

// Atualmente, o aplicativo ainda não permite que o backend de alterar, criar ou deletar dados
// de estoque, mas a estrutura de código já está preparada para isso.  Abaixo estão as funções
// que podem ser utilizadas futuramente para lidar com o estoque.

/*
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

export async function putEstoque(id: number, data: object) {
  try {
    //Tratar o id e a data aqui por segurança

    const axi = await axios.put(`${import.meta.env.VITE_URL}estoque:${id}`, {
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
*/
