module.exports = app => {
  const express = require('express')

  const resourceMiddleware = require('../../middleware/resource')

  const router = express.Router()

  app.use('/admin/api/rest/:resource', resourceMiddleware(), router)

  //获取资源
  router.get('/', async (req, res) => {
    /* const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const data = await req.Model.find().setOptions(queryOptions).limit(100) */
    const data = await req.Model.find()
    res.send(data)
  })

  //获取资源详情
  router.get('/:id', async (req, res) => {
    const data = await req.Model.findById(req.params.id)
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

  //删除资源
  router.delete('/:id', async (req, res) => {
    const data = await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      status: 0,
      message: '删除成功'
    })
  })
  
  //更新资源
  router.put('/:id', async (req, res) => {
    const data = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send({
      status: 0,
      message: '保存成功'
    })
  })
}

