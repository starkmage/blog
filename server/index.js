const express = require('express')
const cors = require('cors')

const app = express()

//允许跨域
app.use(cors())
app.use(express.json())

require('./db/db')(app)
//挂载admin的路由
require('./routers/admin/index')(app)


app.listen('8000', () => {
  console.log('Server is running...')
})