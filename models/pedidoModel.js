const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pedidoSchema = new Schema({
  cliente: String,
  producto: String,
  cantidad: Number,
  total: Number
})

const Pedido = mongoose.model('Pedido', pedidoSchema)
module.exports = Pedido
