const PedidoService = require('../services/pedidoService')
const pedidoService = new PedidoService()

exports.getAllPedidos = async (req, res) => {

  const pedidos = await pedidoService.getAll()
  res.status(200).json(pedidos)
}
exports.getPedido = async (req, res) => {
  const id = req.params.id
  const pedido = await pedidoService.filterById(id)
  if (!pedido) {
    return res.status(404).json({ "message": "Pedido no encontrado" })
  }
  res.status(200).json(pedido)
}

exports.createPedido = async (req, res) => {
  try {
    let data = req.body
    await pedidoService.create(data)
    res.status(201).send('Pedido Registrado')
  } catch (error) {
    res.status(500).json({ "error": error.message })
  }
}

exports.updatePedido = async (req, res) => {
  let data = req.body
  const id = req.params.id
  const pedido = await pedidoService.filterById(id)
  if (!pedido) {
    return res.status(400).json({ "message": "Pedido no encontrado" })
  }
  await pedidoService.update(id, data)
  res.status(201).send('se modifico el registro correctamente')
}

exports.deletePedido = async (req, res) => {
  const id = req.params.id
  const pedido = await pedidoService.filterById(id)
  if (!pedido) {
    return res.status(400).json({ "message": "Pedido no encontrado" })
  }
  await pedidoService.delete(id)
  res.status(200).send('se elimino el pedido correctamente')
}
