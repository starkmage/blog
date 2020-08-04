module.exports = options => {
  return async (req, res, next) => {
    const inflection = require('inflection')
    //用inflection.classify把传入的参数转为单数形式，作为模型的名称
    const modelName = inflection.classify(req.params.resource)
    req.Model = require(`../models/${modelName}`)

    next()
  }
}