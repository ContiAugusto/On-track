import axios from 'axios'

export async function getAllProdutos() {
  const axi = await axios.get(`${import.meta.env.VITE_API_URL}produtos`, {
    headers: {
      Authorization: import.meta.env.VITE_AUTHORIZATION,
    },
    withCredentials: true,
  })

  return axi.data
}
/*
export async function getProduto() {
  const axi = await axios.get(`${import.meta.env.VITE_API_URL}produtos`, {
    headers: {
      Authorization: import.meta.env.VITE_AUTHORIZATION,
    },
    withCredentials: true,
  })

  return axi.data
}
*/
