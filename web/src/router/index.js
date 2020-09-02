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
          title: '首页'
        }
      },
      {
        path: '/archives',
        name: 'Archive',
        component: Archive,
        meta: {
          title: '归档'
        }
      },
      {
        path: '/tags',
        name: 'Tag',
        component: Tag,
        meta: {
          title: '标签'
        }
      },
      {
        path: '/about',
        name: "About",
        component: About,
        meta: {
          title: '关于好电脑'
        }
      },
      {
        path: '/article/:id',
        name: 'Article',
        props: true,
        component: Article,
        meta: {
          title: '文章详情'
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
  // 切换页面时回到顶部
  scrollBehavior(to, from, savedPosition) {
    //第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用
    return savedPosition ? savedPosition : {x: 0, y: 0}
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