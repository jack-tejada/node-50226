const express = require('express')
const app = express()
const userRouter = require('./routers/userRouters')
const path = require('path')
const connection=require('./database/connection')


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

app.use(express.json())

app.get('/', (req, res) => {
    console.log("servidor creado con express")
    res.send("Servidor creado con Express")
})
app.use('/users', userRouter)

app.listen(3000, () => {
    console.log("aplicacion con express ejecutandose en el puerto 3000")
})