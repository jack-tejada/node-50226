const express = require('express')
const app = express()
const userRouter = require('./routers/userRouters')

app.get('/', (req, res) => {
  console.log("Servidor creado con express.js")
})
app.use(express.json())

app.use('/users', userRouter)

app.listen(3000, () => {
  console.log("Aplicacion con express ejecutandose en el puerto 3000")
})