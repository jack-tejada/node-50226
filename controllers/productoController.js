const ProductoService = require('../services/productoService')
const productoService = new ProductoService()

exports.getAllProductos = async (req, res) => {

  const productos = await productoService.getAll()
  res.status(200).json(productos)
}
exports.getProducto = async (req, res) => {
  const id = req.params.id
  const producto = await productoService.filterById(id)
  if (!producto) {
    return res.status(404).json({ "message": "Producto no encontrado" })
  }
  res.status(200).json(producto)
}

exports.createProducto = async (req, res) => {
  try {
    let data = req.body
    await productoService.create(data)
    res.status(201).send('Producto Registrado')
  } catch (error) {
    res.status(500).json({ "error": error.message })
  }
}

exports.updateProducto = async (req, res) => {
  let data = req.body
  const id = req.params.id
  const producto = await productoService.filterById(id)
  if (!producto) {
    return res.status(400).json({ "message": "Producto no encontrado" })
  }
  await productoService.update(id, data)
  res.status(201).send('se modifico el registro correctamente')
}

exports.deleteProducto = async (req, res) => {
  const id = req.params.id
  const producto = await productoService.filterById(id)
  if (!producto) {
    return res.status(400).json({ "message": "Producto no encontrado" })
  }
  await productoService.delete(id)
  res.status(200).send('se elimino el producto correctamente')
}
