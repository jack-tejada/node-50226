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
  
  create(data) {
    const user = new User(data)
    return user.save()
  }
  async update(id, data) {
    return await User.findByIdAndUpdate(id, data)
  }
  async delete(id) {
    return await User.deleteOne({_id:id}) 
  }
}

module.exports = UserService