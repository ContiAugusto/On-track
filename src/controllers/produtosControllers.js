import express from 'express'
import axios from 'axios'

exports.getAllProdutos = async (req, res) => {
  const config = {
    method: 'get',
    url: 'https://www.bling.com.br/Api/v3/produtos?pagina=1&limite=1&criterio=1&tipo=T',
    headers: {
      Accept: 'application/json',
      Authorization: process.env.VITE_AUTHORIZATION,
      Cookie: process.env.VITE_COOKIE,
    },
  }
  try {
    axios.request(config).then((response) => {
      return response.data
    })
  } catch (error) {
    res.json(error)
  }
}
