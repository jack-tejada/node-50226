const express = require('express')
const app = express()
const userRouter = require('./routers/userRouters')
const productoRouter = require('./routers/productoRouters')
const categoriaRouter = require('./routers/categoriaRouters')
const clienteRouter = require('./routers/clienteRouters')
const pedidoRouter = require('./routers/pedidoRouters')
const path = require('path')
const connection = require('./database/connection')
const authRouter=require('./routers/authRouter')
const dashboardRouter=require('./routers/dashboardRouter')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const data = {
        "title": 'Bienvenido a la pagina de inicio',
        "message": 'Esta es una aplicación de ejemplo con Express y EJS',
        "showMessage": true,
        "items": [1,2,3,4,5]
    }
    res.render('index', data)
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/panel', (req, res) => {
    res.render('dashboard')
})

app.use(express.json())

app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/productos', productoRouter)
app.use('/categorias', categoriaRouter)
app.use('/clientes', clienteRouter)
app.use('/pedidos', pedidoRouter)
app.use('/dashboard',dashboardRouter)

app.listen(3000, () => {
    console.log("aplicacion con express ejecutandose en el puerto 3000")
})
