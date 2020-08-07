import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home')
const CategoryEdit = () => import('../views/CategoryEdit')
const CategoryList = () => import('../views/CategoryList')
const ArticleEdit = () => import('../views/ArticleEdit')
const ArticleList = () => import('../views/ArticleList')
const AdminUserEdit = () => import('../views/AdminUserEdit')
const AdminUserList = () => import('../views/AdminUserList')
const Login = () => import('../views/Login')

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
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
      },
      {
        path: '/adminusers/edit',
        component: AdminUserEdit
      },
      {
        path: '/adminusers/edit/:id',
        component: AdminUserEdit,
        props: true
      },
      {
        path: '/adminusers/list',
        component: AdminUserList
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router