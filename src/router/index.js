import Vue from 'vue'
import Router from 'vue-router'
import Authenticate from './auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/quiz',
      component: () => import('@/views/quiz/index'),
      children: [
        {
          path: '',
          name: 'quiz-home',
          component: () => import('@/views/quiz/home')
        },
        {
          path: 'start',
          name: 'quiz-start',
          component: () => import('@/views/quiz/start')
        },
        {
          path: 'make',
          name: 'quiz-make',
          component: () => import('@/views/quiz/make')
        },
        {
          path: 'result',
          name: 'quiz-result',
          component: () => import('@/views/quiz/result')
        },
        {
          path: 'manage',
          name: 'quiz-manage',
          component: () => import('@/views/quiz/manage'),
          beforeEnter: Authenticate
        },
        {
          path: 'create',
          name: 'create-quiz',
          component: () => import('@/views/quiz/create'),
          beforeEnter: Authenticate
        },
        {
          path: 'edit',
          name: 'edit-quiz',
          component: () => import('@/views/quiz/edit'),
          beforeEnter: Authenticate
        },
        {
          path: 'show',
          name: 'show-quiz',
          component: () => import('@/views/quiz/show'),
          beforeEnter: Authenticate
        },
        {
          path: ':quizId',
          name: 'info-quiz',
          props: true,
          component: () => import('@/views/quiz/info'),
          beforeEnter: Authenticate
        }
      ]
    },
    {
      path: '/signin',
      name: 'sign-in',
      component: () => import('@/views/user/signin')
    },
    {
      path: '/signup',
      name: 'sign-up',
      component: () => import('@/views/user/signup')
    }
  ]
})
