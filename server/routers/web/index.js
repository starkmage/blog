module.exports = app => {
  const express = require('express')
  const router = express()
  const mongoose = require('mongoose')
  const Article = require('../../models/Article')
  const Category = require('../../models/Category')


  //文章列表
  router.get('/articles/list', async (req, res) => {
    const data = await Article.find().sort({
      'createdAt': -1
    })
    res.send(data)
  })

  //获取最近更新
  router.get('/articles/recent', async (req, res) => {
    const data = await Article.find().sort({
      'createdAt': -1
    }).limit(4)
    res.send(data)
  })

  //获取指定页码的文章
  router.get('/articles/:pageNum', async (req, res) => {
    const currentPage = Number(req.params.pageNum)
    //跳过前面的页码部分文章，每页有6篇文章，联合查询文章分类
    const list = await Article.find().sort({
      'createdAt': -1
    }).skip((currentPage - 1) * 6).limit(6).populate('categories')
    //查询总的文章数目
    const count = (await Article.find()).length
    const totalPage = Math.ceil(count / 6)
    res.send({
      list,
      // totalArticles: count,
      totalPage,
      currentPage
    })
  })

  //获取按照年月归类的文章
  router.get('/archive', async (req, res) => {
    const data = await Article.aggregate([
      {
        $sort: {
          createdAt: -1
        }
      },
      //$lookup联表查询
      //article里存了category的id，要从catrgory查详细信息
      {
        $lookup: {
          from: 'categories',
          localField: 'categories',
          foreignField: '_id',
          as: 'newList'
        }
      },
      {
        $group: {
          _id: {
            $month: '$createdAt'
          },
          count: {
            $sum: 1
          },
          list: {
            $push: {
              _id: '$_id',
              title: '$title',
              categories: '$newList',
              createdAt: '$createdAt'
            }
          }
        }
      }
    ]).sort({
      '_id': -1
    })
    res.send(data)
  })

  //按标签对文章分类
  router.get('/tags', async (req, res) => {
    const data = await Category.aggregate([
      {
        //联表查询
        //去article里查
        $lookup: {
          from: 'articles',
          localField: '_id',
          foreignField: 'categories',
          as: 'tagsList'
        }
      }//把数据拆分成单条
    ]).unwind('$tagsList').sort({
      'tagsList.createdAt' : -1
    }).group({
      _id: '$title',
      count: {
        $sum: 1
      },
      list: {
        $push: {
          article: '$tagsList',
        }
      }
    }).sort({
      'count': -1
    })
    res.send(data)
  })

  //文章详情
  router.get('/article/:id', async (req, res) => {
    const data = await Article.findById(req.params.id).populate('categories')
    res.send(data)
  })


  app.use("/web/api", router)
}