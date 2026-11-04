const Producto = require('../models/productoModel')

class ProductoService {
  constructor() {}
  async getAll() {
    const productos = await Producto.find({})
    return productos
  }
  async filterById(id) {
    const producto = await Producto.findOne({_id:id})
    return producto
  }

  create(data) {
    const producto = new Producto(data)
    return producto.save()
  }
  async update(id, data) {
    return await Producto.findByIdAndUpdate(id, data)
  }
  async delete(id) {
    return await Producto.deleteOne({_id:id})
  }
}

module.exports = ProductoService
