const Cliente = require('../models/clienteModel')

class ClienteService {
  constructor() {}
  async getAll() {
    const clientes = await Cliente.find({})
    return clientes
  }
  async filterById(id) {
    const cliente = await Cliente.findOne({_id:id})
    return cliente
  }

  create(data) {
    const cliente = new Cliente(data)
    return cliente.save()
  }
  async update(id, data) {
    return await Cliente.findByIdAndUpdate(id, data)
  }
  async delete(id) {
    return await Cliente.deleteOne({_id:id})
  }
}

module.exports = ClienteService
