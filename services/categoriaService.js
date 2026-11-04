const Categoria = require('../models/categoriaModel')

class CategoriaService {
  constructor() {}
  async getAll() {
    const categorias = await Categoria.find({})
    return categorias
  }
  async filterById(id) {
    const categoria = await Categoria.findOne({_id:id})
    return categoria
  }

  create(data) {
    const categoria = new Categoria(data)
    return categoria.save()
  }
  async update(id, data) {
    return await Categoria.findByIdAndUpdate(id, data)
  }
  async delete(id) {
    return await Categoria.deleteOne({_id:id})
  }
}

module.exports = CategoriaService
