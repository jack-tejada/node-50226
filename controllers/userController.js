
const UserService = require('../services/userService')
const mongoose = require('mongoose')
const userService = new UserService()

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAll()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ "error": error.message })
  }
}
exports.getUser = async (req, res) => {
  try {
    const id = req.params.id
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ "message": "Id invalido" })
    }
    const user = await userService.filterById(id)
    if (!user) {
      return res.status(404).json({ "message": "Usuario no encontrado" })
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ "error": error.message })
  }
}

exports.createUser = async (req, res) => {
  try {
    let data = req.body
    await userService.create(data)
    res.status(201).send('Usuario Registrado')
  } catch (error) {
    res.status(500).json({ "error": error.message })
  }
}
exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ "message": "Id invalido" })
    }
    const user = await userService.updateById(id, req.body)
    if (!user) {
      return res.status(404).json({ "message": "Usuario no encontrado" })
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ "error": error.message })
  }
}
exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ "message": "Id invalido" })
    }
    const user = await userService.deleteById(id)
    if (!user) {
      return res.status(404).json({ "message": "Usuario no encontrado" })
    }
    res.status(200).json({ "message": "Usuario eliminado", "user": user })
  } catch (error) {
    res.status(500).json({ "error": error.message })
  }
}