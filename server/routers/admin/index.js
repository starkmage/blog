module.exports = app => {
  const express = require('express')

  const resourceMiddleware = require('../../middleware/resource')

  const router = express.Router()

  app.use('/admin/api/rest/:resource', resourceMiddleware(), router)

  //获取资源
  router.get('/', async (req, res) => {
    const data = await req.Model.find()
    res.send(data)
  })

  //创建资源
  router.post('/', async (req, res) => {
    //使用create保存，不需要先实例化，并可以保存多个
    const data = await req.Model.create(req.body)
    res.send({
      status: 0,
      message: '保存成功'
    })
  })
}

