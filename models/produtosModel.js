const mongoose = require('mongoose')

const produtoSchema = new mongoose.Schema(
  {
    //schema??
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('produto', produtoSchema)
