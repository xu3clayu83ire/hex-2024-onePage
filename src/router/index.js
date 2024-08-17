import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonalWeb2024 from '@/views/PersonalWeb2024.vue'
import Resumes2024 from '@/views/Resumes2024.vue'
import Kata2024 from '@/views/Kata2024.vue'

const router = createRouter({
    //history: createWebHistory(''),
    history: createWebHashHistory(),
    routes: [
      {
        path: '/',
        name: 'index',
        component: HomeView
      },
      {
        path: '/PersonalWeb2024',
        name: 'PersonalWeb2024',
        component: PersonalWeb2024
      },
      {
        path: '/Resumes2024',
        name: 'Resumes2024',
        component: Resumes2024
      },
      {
        path: '/Kata2024',
        name: 'Kata2024',
        component: Kata2024
      },
    ]
  })
  
  export default router