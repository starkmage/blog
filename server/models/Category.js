const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: {type: String}
})

const model = mongoose.model('Category', schema)
module.exports = model