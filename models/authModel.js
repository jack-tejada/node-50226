const mongoose = require('mongoose')

const UserAuthSchema = new mongoose.Schema({
  email: String,
  password:String
})

const UserAuth = mongoose.model('UserAuth', UserAuthSchema)
module.exports=UserAuth