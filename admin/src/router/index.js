import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home')
const CategoryEdit = () => import('../views/CategoryEdit')

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
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router