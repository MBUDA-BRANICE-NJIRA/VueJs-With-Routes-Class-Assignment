import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
//  Home

  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // About
  {
    path: '/about',
    name: 'about',
        component: () => import('../views/AboutView.vue')
  },
  // Services
   {
    path: '/Services',
    name: 'Services',
        component: () => import('../views/ServicesView.vue')
  },
  // Testimonials
    {
    path: '/Testimonial',
    name: 'Testimonial',
        component: () => import('../views/TestimonialsView.vue')
  },
  // Offers
     {
    path: '/Offers',
    name: 'Offers',
        component: () => import('../views/OffersView.vue')
  },
   
  // Contact Us
   {
    path: '/Contact',
    name: 'contact',
        component: () => import('../views/ContactUsVuew.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
