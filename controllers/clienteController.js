const ClienteService = require('../services/clienteService')
const clienteService = new ClienteService()

exports.getAllClientes = async (req, res) => {

  const clientes = await clienteService.getAll()
  res.status(200).json(clientes)
}
exports.getCliente = async (req, res) => {
  const id = req.params.id
  const cliente = await clienteService.filterById(id)
  if (!cliente) {
    return res.status(404).json({ "message": "Cliente no encontrado" })
  }
  res.status(200).json(cliente)
}

exports.createCliente = async (req, res) => {
  try {
    let data = req.body
    await clienteService.create(data)
    res.status(201).send('Cliente Registrado')
  } catch (error) {
    res.status(500).json({ "error": error.message })
  }
}

exports.updateCliente = async (req, res) => {
  let data = req.body
  const id = req.params.id
  const cliente = await clienteService.filterById(id)
  if (!cliente) {
    return res.status(400).json({ "message": "Cliente no encontrado" })
  }
  await clienteService.update(id, data)
  res.status(201).send('se modifico el registro correctamente')
}

exports.deleteCliente = async (req, res) => {
  const id = req.params.id
  const cliente = await clienteService.filterById(id)
  if (!cliente) {
    return res.status(400).json({ "message": "Cliente no encontrado" })
  }
  await clienteService.delete(id)
  res.status(200).send('se elimino el cliente correctamente')
}
