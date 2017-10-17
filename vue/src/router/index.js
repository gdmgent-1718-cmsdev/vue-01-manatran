import Vue from 'vue'
import Router from 'vue-router'
import ReadArticle from '@/components/ReadArticle'
import CreateArticle from '@/components/CreateArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ReadArticle',
      component: ReadArticle
    },
    {
      path: '/create',
      name: 'CreateArticle',
      component: CreateArticle
    }
  ]
})
