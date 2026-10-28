exports.getAllUsers = (req, res) => {
  console.log(req.query.enabled)
  res.status(200).send("Accediendo a todos los usuarios")
}
exports.getUser = (req, res) => {
  res.status(201).send("Accediendo al usuario con Id: " + req.params.id)
}

exports.createUser = (req, res) => {
  let data = req.body
  const { nombre, apellido, email, telefono } = data
  res.send(nombre, apellido, email, telefono)
}
exports.updateUser = (req, res) => {
  let data = req.body
  const { nombre, apellido, email, telefono } = data
  res.send(req.params.id)
  res.send(nombre,apellido, email,telefono)
}
exports.deleteUser = (req, res) => {
  res.send(req.params.id)
  res.send("id eliminado")
}