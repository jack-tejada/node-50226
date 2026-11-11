const express = require('express')
const app = express()
// const userRouter = require('./routers/userRouters')
const path = require('path')
const connection = require('./database/connection')
// const authRouter = require('./routers/authRouter')
// const dashboardRouter = require('./routers/dashboardRouter')
const socket = require('socket.io')

const server = require('http').createServer(app)
const io = socket(server)
require('./socket')(io)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

// app.get('/', (req, res) => {
//     console.log('servidor creado con express.js')
// })

app.use(express.json())

// app.use('/users', userRouter)
// app.use('/auth', authRouter)
// app.use('/dashboard', dashboardRouter)

server.listen(3000, () => {
    console.log("Aplicacion con express ejecutandose en el puerto 3000")
})