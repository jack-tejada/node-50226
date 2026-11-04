const User = require('../models/userModel')

class UserService {
  constructor() {}
  async getAll() {
    const users = await User.find({})
    return users
  }
  async filterById(id) {
    const user = await User.findOne({_id:id})
    return user
  }
  async updateById(id, data) {
    const user = await User.findByIdAndUpdate(id, data, { new: true })
    return user
  }
  async deleteById(id) {
    const user = await User.findByIdAndDelete(id)
    return user
  }
  create(data) {
    const user = new User(data)
    return user.save()
  }
}

module.exports = UserService