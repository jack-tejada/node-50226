const Pedido = require('../models/pedidoModel')

class PedidoService {
  constructor() {}
  async getAll() {
    const pedidos = await Pedido.find({})
    return pedidos
  }
  async filterById(id) {
    const pedido = await Pedido.findOne({_id:id})
    return pedido
  }

  create(data) {
    const pedido = new Pedido(data)
    return pedido.save()
  }
  async update(id, data) {
    return await Pedido.findByIdAndUpdate(id, data)
  }
  async delete(id) {
    return await Pedido.deleteOne({_id:id})
  }
}

module.exports = PedidoService
