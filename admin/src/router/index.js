import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home')
const CategoryEdit = () => import('../views/CategoryEdit')
const CategoryList = () => import('../views/CategoryList')
const ArticleEdit = () => import('../views/ArticleEdit')
const ArticleList = () => import('../views/ArticleList')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/categories/edit', 
        component: CategoryEdit
      },
      {
        path: '/categories/edit/:id',
        component: CategoryEdit,
        //添加这个，组件内就能获取路由的参数，也就是我们需要的id
        props: true
      },
      {
        path: '/categories/list',
        component: CategoryList
      },
      {
        path: '/articles/edit',
        component: ArticleEdit
      },
      {
        path: '/articles/edit/:id',
        component: ArticleEdit,
        props: true
      },
      {
        path: '/articles/list',
        component: ArticleList
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router