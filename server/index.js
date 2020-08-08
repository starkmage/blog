const express = require('express')
const cors = require('cors')

const app = express()

//生成token时的密钥
app.set('secret', '221jfdsklfj1')

//允许跨域
app.use(cors())
app.use(express.json())

//文章缩略图上传目录
// app.use('/uploads', express.static(__dirname + '/uploads'))

require('./db/db')(app)
//挂载admin的路由
require('./routers/admin/index')(app)
//挂载web的路由
require('./routers/web/index')(app)


app.listen('8000', () => {
  console.log('Server is running...')
})