import axios from 'axios'

export async function getProdutos(params: object | null = null) {
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
      `${import.meta.env.VITE_API_URL}produtos${formatedParams}`,
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

export async function getProduto(id: number) {
  //Tratar o id aqui por segurança
  try {
    const axi = await axios.get(
      `${import.meta.env.VITE_API_URL}produtos/:${id}`,
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

export async function postProduto(data: object) {
  try {
    //Tratar a data aqui por segurança

    const axi = await axios.post(`${import.meta.env.VITE_API_URL}produtos`, {
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

export async function putProduto(id: number, data: object) {
  try {
    //Tratar a data aqui por segurança

    const axi = await axios.put(
      `${import.meta.env.VITE_API_URL}produtos/:${id}`,
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

export async function deleteProduto(id: number) {
  try {
    //Tratar o id aqui por segurança

    const axi = await axios.delete(
      `${import.meta.env.VITE_API_URL}produtos/:${id}`,
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
