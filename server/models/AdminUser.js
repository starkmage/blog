const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const schema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    //查询的时候不会返回
    select: false,
    set(val) {
      return bcrypt.hashSync(val, 10)
    }
  }
})
const model = mongoose.model('AdminUser', schema)
module.exports = model