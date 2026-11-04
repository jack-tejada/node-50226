const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categoriaSchema = new Schema({
  nombre: String,
  descripcion: String
})

const Categoria = mongoose.model('Categoria', categoriaSchema)
module.exports = Categoria
