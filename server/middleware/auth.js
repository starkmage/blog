module.exports = options => {
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../models/AdminUser')

  return async (req, res, next) => {
    const token = String(req.headers.authorization || '').split(" ").pop()
    if (!token) {
      res.status(401).send({
        message: '请您先登录'
      })
    }
    try {
      const {id} = jwt.verify(token, req.app.get('secret'))
      if (!id) {
        res.status(401).send({
          message:'请您先登录'
        })
      }
      const user = await AdminUser.findById(id)
      if (!user) {
        res.status(401).send({
          message:'请您先登录'
        })
      }
    } catch(err) {
      res.status(401).send({
        message:'Server error'
      })
    }
    next()
  }
}