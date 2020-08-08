import Vue from 'vue'
import VueRouter from 'vue-router'

const Main = () => import('../views/Main')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/',
        name: 'Home',
        meta: {
          title: 'Lawson-首页'
        }
      },
      {
        path: '/archives',
        name: 'Archive',
        meta: {
          title: 'Lawson-归档'
        }
      },
      {
        path: '/tags',
        name: 'Tag',
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
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router