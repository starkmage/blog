module.exports = app => {
  const express = require('express')
  const bcrypt = require('bcrypt')
  const jwt = require('jsonwebtoken')

  const resourceMiddleware = require('../../middleware/resource')
  const authMiddleware = require('../../middleware/auth')

  const AdminUser = require('../../models/AdminUser')
  const router = express.Router()


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

  app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)


  //登录验证
  app.post('/admin/api/login', async(req, res) => {
    const { username, password } = req.body
    if (!username) {
      res.status(422).send({
        message: '用户名不能为空'
       })
       return
    }
    if (!password) {
      res.status(422).send({
        message: '密码不能为空'
       })
       return
    }
    //1.验证用户是否存在
    const user = await AdminUser.findOne({username}).select('+password')
    if (!user) {
      res.status(422).send({
        message: '用户名或密码错误'
       })
       return
    }
    //2.验证密码是否正确
    const isValid = bcrypt.compareSync(password, user.password)
    if (!isValid) {
      res.status(422).send({
        message: '用户名或密码错误'
       })
       return
    }
    //3.生成token发送给客户端
    //第一个参数，token要包含的数据，第二个参数，验证token时的密钥
    const token = jwt.sign({id: user._id}, app.get('secret'))
    res.send({
      status: 0,
      username: user.username,
      token: token
    })
  })
}

