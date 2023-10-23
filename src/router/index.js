import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/teacher',
    name: 'teacher',
    component: () => import('../views/Teacher.vue'),
    children:[
      {
        path:'courses',
        name:'courses',
        component:()=>import('../components/Teacher-courses.vue')
      },
      {
        path:'homework',
        name:'homework',
        component:()=>import('../components/Teaher-homework.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
