const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productoSchema = new Schema({
  nombre: String,
  precio: Number,
  stock: Number,
  categoria: String
})

const Producto = mongoose.model('Producto', productoSchema)
module.exports = Producto
