import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

export default new Router({
  mode: "hash",
  routes: [{
      path: '/',
      component: App,
      redirect: '/index' //重定向
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['../web/index/index.vue'], resolve),
      meta: {
        title: '主页',
        content: '32453'
      },

    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: resolve => require(['../web/index/aboutus.vue'], resolve),
      meta: {
        title: '主页',
        content: '32453'
      },
    },
    {
      path: '/article',
      name: 'article',
      component: resolve => require(['../web/index/article.vue'], resolve),
      meta: {
        title: '文章',
        content: '32453'
      },
    },
    {
      path: '/case',
      name: 'case',
      component: resolve => require(['../web/index/case.vue'], resolve),
      meta: {
        title: '案例',
        content: '32453'
      },
    },
  ]
})
