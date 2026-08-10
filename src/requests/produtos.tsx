import axios from 'axios'

// Referência da API Bling: https://developer.bling.com.br/referencia

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
      `${import.meta.env.VITE_URL}produtos${formatedParams}`,
    )

    return axi.data
  } catch (err) {
    return err
  }
}

export async function getProduto(id: number) {
  try {
    const axi = await axios.get(`${import.meta.env.VITE_URL}produtos/:${id}`)

    return axi.data
  } catch (err) {
    return err
  }
}

export async function postProduto(data: object) {
  try {
    const axi = await axios.post(`${import.meta.env.VITE_URL}produtos`, {
      body: data,
    })

    return axi.data
  } catch (err) {
    return err
  }
}

export async function putProduto(id: number, data: object) {
  try {
    const axi = await axios.put(`${import.meta.env.VITE_URL}produtos/:${id}`, {
      body: data,
    })

    return axi.data
  } catch (err) {
    return err
  }
}
