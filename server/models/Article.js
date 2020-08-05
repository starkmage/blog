const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: { type: String },
  summary: { type: String },
  isTop: { type: Boolean },
  body: { type: String },
  categories: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}]
}, {
  //自动生成创建时间和更新时间
  timestamps: true
})

module.exports = mongoose.model('Article', schema)