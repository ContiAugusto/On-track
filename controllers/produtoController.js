const Produto = require('../models/ProdutoModel')

exports.getAllProdutos = async (req, res) => {
  try {
    const Produtos = await Produto.find()
    res.json(Produtos)
  } catch (err) {
    res
      .status(500)
      .json({ mensagem: 'Erro ao buscar Produtos', erro: err.message })
  }
}

exports.getProdutoById = async (req, res) => {
  try {
    const Produto = await Produto.findById(req.params.id)
    if (!Produto)
      return res.status(404).json({ mensagem: 'Personagem não encontrado' })
    res.json(Produto)
  } catch (err) {
    res
      .status(500)
      .json({ mensagem: 'Erro ao buscar personagem', erro: err.message })
  }
}

exports.createProduto = async (req, res) => {
  try {
    const novoProduto = new Produto(req.body)
    await novoProduto.save()
    res.status(201).json(novoProduto)
  } catch (err) {
    res
      .status(400)
      .json({ mensagem: 'Erro ao criar Personagem', erro: err.message })
  }
}

exports.updateProduto = async (req, res) => {
  try {
    const ProdutoAtualizado = await Produto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    )
    if (!ProdutoAtualizado)
      return res.status(404).json({ mensagem: 'Personagem não encontrado' })
    res.json(ProdutoAtualizado)
  } catch (err) {
    res
      .status(400)
      .json({ mensagem: 'Erro ao atualizar Personagem', erro: err.message })
  }
}

exports.deleteProduto = async (req, res) => {
  try {
    const ProdutoRemovido = await Produto.findByIdAndDelete(req.params.id)
    if (!ProdutoRemovido)
      return res.status(404).json({ mensagem: 'Personagem não encontrado' })
    res.status(204).end()
  } catch (err) {
    res
      .status(500)
      .json({ mensagem: 'Erro ao excluir Personagem', erro: err.message })
  }
}
