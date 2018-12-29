import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/quiz',
      component: () => import('@/views/quiz/index'),
      children: [
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
          path: 'create',
          name: 'create-quiz',
          component: () => import('@/views/quiz/create')
        },
        {
          path: 'edit',
          name: 'edit-quiz',
          component: () => import('@/views/quiz/edit')
        },
        {
          path: 'show',
          name: 'show-quiz',
          component: () => import('@/views/quiz/show')
        },
        {
          path: ':quizId',
          name: 'info-quiz',
          props: true,
          component: () => import('@/views/quiz/info')
        }
      ]
    }
  ]
})
