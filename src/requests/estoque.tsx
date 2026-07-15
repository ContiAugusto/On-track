import axios from 'axios'

export async function getEstoque() {
  try {
    const axi = await axios.get(`${import.meta.env.VITE_API_URL}estoque`, {
      headers: {
        Authorization: import.meta.env.VITE_AUTHORIZATION,
      },
      withCredentials: true,
    })

    return axi.data
  } catch (err) {
    return err
  }
}

export async function getEstoqueById(id: number) {
  //Tratar o id aqui por segurança

  try {
    const axi = await axios.get(
      `${import.meta.env.VITE_API_URL}estoque:${id}`,
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

export async function postEstoque(data: object) {
  try {
    //Tratar a data aqui por segurança

    const axi = await axios.post(`${import.meta.env.VITE_API_URL}estoque`, {
      headers: {
        Authorization: import.meta.env.VITE_AUTHORIZATION,
      },
      body: data,
      withCredentials: true,
    })

    return axi.data
  } catch (err) {
    return err
  }
}

export async function deleteEstoque(id: number) {
  try {
    //Tratar o id aqui por segurança

    const axi = await axios.delete(
      `${import.meta.env.VITE_API_URL}estoque:${id}`,
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
