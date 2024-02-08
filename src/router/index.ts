import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path:'/maps:id',
          name:'maps',
          component: () => import('./../components/map/Map.vue'),
          props: true
        }
      ]
    },
   
  ]
})

export default router
