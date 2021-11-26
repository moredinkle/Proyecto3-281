import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

/*import Principal from '../components/Principal.vue'
import Galeria from '../components/Galeria.vue'
import Mecanicas from '../components/Mecanicas.vue'
import Videos from '../components/Videos.vue'
import RealidadAumentada from '../components/RealidadAumentada.vue'
import Jugar from '../components/Jugar.vue'*/

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
