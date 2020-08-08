import Vue from 'vue'
import VueRouter from 'vue-router'

const Main = () => import('../views/Main')
const Home = () => import('../views/Home')
const Archive = () => import('../views/Archive')
const Tag = () => import('../views/Tag')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
          title: 'Lawson-首页'
        }
      },
      {
        path: '/archives',
        name: 'Archive',
        component: Archive,
        meta: {
          title: 'Lawson-归档'
        }
      },
      {
        path: '/tags',
        name: 'Tag',
        component: Tag,
        meta: {
          title: 'Lawson-标签'
        }
      },
      {
        path: '/message',
        name: 'Message',
        meta: {
          title: 'Lawson-留言'
        }
      },
      {
        path: '/about',
        name: "About",
        meta: {
          title: 'Lawson-关于'
        }
      },
      {
        path: '/article/list/:id',
        name: 'Article',
        meta: {
          title: 'Lawson-文章详情'
        }
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
  routes,
  mode: 'history',
  //切换页面时回到顶部
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router