const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: { type: String },
  icon: { type: String, default: 'https://cdn.jsdelivr.net/gh/starkmage/ImgHosting/starkmage-picgo/3bd1ecd8242e280b23c89874df29bc1.jpg' },
  mdbody: { type: String },
  htbody: { type: String },
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }]
}, {
  //自动生成创建时间和更新时间
  timestamps: true
})

const model = mongoose.model('Article', schema)

module.exports = model