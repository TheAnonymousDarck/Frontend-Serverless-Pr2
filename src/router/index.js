import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EncriptarView from '../views/EncriptarView.vue'
import DesencriptarView from '../views/DesencriptarView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/encriptar',
      name: 'encriptar',
      component: EncriptarView
    },
    {
      path: '/desencriptar',
      name: 'desencriptar',
      component: DesencriptarView
    },
    
  ]
})

export default router
