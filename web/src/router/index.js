import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from '../plugins/nprogress'

const Main = () => import('../views/Main')
const Home = () => import('../views/Home')
const Archive = () => import('../views/Archive')
const Tag = () => import('../views/Tag')
const Article = () => import('../views/Article')
const About = () => import('../views/About')

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
      /* {
        path: '/message',
        name: 'Message',
        meta: {
          title: 'Lawson-留言'
        }
      }, */
      {
        path: '/about',
        name: "About",
        component: About,
        meta: {
          title: 'Lawson-关于'
        }
      },
      {
        path: '/article/list/:id',
        name: 'Article',
        props: true,
        component: Article,
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
  //每次切换页面时，加载进度条
  NProgress.start()
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach(() => {
  //即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})

export default router