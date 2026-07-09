import axios from 'axios'

const getAllProdutos = async () => {
  try {
    const response = await axios.get('api/produtos')
    return response.data
  } catch (error) {
    return error
  }
}

export default getAllProdutos
