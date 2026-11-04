const CategoriaService = require('../services/categoriaService')
const categoriaService = new CategoriaService()

exports.getAllCategorias = async (req, res) => {

  const categorias = await categoriaService.getAll()
  res.status(200).json(categorias)
}
exports.getCategoria = async (req, res) => {
  const id = req.params.id
  const categoria = await categoriaService.filterById(id)
  if (!categoria) {
    return res.status(404).json({ "message": "Categoria no encontrada" })
  }
  res.status(200).json(categoria)
}

exports.createCategoria = async (req, res) => {
  try {
    let data = req.body
    await categoriaService.create(data)
    res.status(201).send('Categoria Registrada')
  } catch (error) {
    res.status(500).json({ "error": error.message })
  }
}

exports.updateCategoria = async (req, res) => {
  let data = req.body
  const id = req.params.id
  const categoria = await categoriaService.filterById(id)
  if (!categoria) {
    return res.status(400).json({ "message": "Categoria no encontrada" })
  }
  await categoriaService.update(id, data)
  res.status(201).send('Se modifico el regist correctamente')
}

exports.deleteCategoria = async (req, res) => {
  const id = req.params.id
  const categoria = await categoriaService.filterById(id)
  if (!categoria) {
    return res.status(400).json({ "message": "Categoria no encontrada" })
  }
  await categoriaService.delete(id)
  res.status(200).send('se elimino la categoria correctamente')
}
