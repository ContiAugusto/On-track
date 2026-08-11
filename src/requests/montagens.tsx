import axios from 'axios'

// Referência da API Bling: https://developer.bling.com.br/referencia

export async function getMontagens() {
  try {
    const axi = await axios.get(`${import.meta.env.VITE_URL}db/montagens`)

    return axi.data
  } catch (err) {
    return err
  }
}

export async function getMontagensById(id: number) {
  //Tratar o id aqui por segurança

  try {
    const axi = await axios.get(`${import.meta.env.VITE_URL}db/montagens:${id}`)

    return axi.data
  } catch (err) {
    return err
  }
}

export async function postMontagens(data: object) {
  try {
    //Tratar a data aqui por segurança

    const axi = await axios.post(`${import.meta.env.VITE_URL}db/montagens`, {
      body: data,
    })

    return axi.data
  } catch (err) {
    return err
  }
}

export async function putMontagens(id: number, data: object) {
  try {
    //Tratar o id e a data aqui por segurança

    const axi = await axios.put(
      `${import.meta.env.VITE_URL}db/montagens:${id}`,
      {
        body: data,
      },
    )

    return axi.data
  } catch (err) {
    return err
  }
}

export async function deleteMontagens(id: number) {
  try {
    //Tratar o id aqui por segurança

    const axi = await axios.delete(
      `${import.meta.env.VITE_URL}db/montagens:${id}`,
    )

    return axi.data
  } catch (err) {
    return err
  }
}
