const express = require('express')
const dotenv = require('dotenv')
//const conectarBanco = require('./config/db') --> posteriormente
const produtosRoutes = require('./routes/produtosRoutes')

dotenv.config()
const app = express()

app.use(express.json())

app.use('/api/produtos', produtosRoutes)

//conectarBanco()
const PORT = process.env.PORT || 3000
app.listen(PORT, () =>
  console.log(`Sucessfully running on port ${PORT} \n Welcome, user.`),
)
