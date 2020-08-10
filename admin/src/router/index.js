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
    name: 'login',
    component: Login,
    meta: {
      isPublic: true
    }
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
  },
  //对其它路径，重定位到首页
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})

export default router