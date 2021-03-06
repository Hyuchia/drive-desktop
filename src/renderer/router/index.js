import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login-page',
      component: require('@/components/LoginPage').default
    },
    {
      path: '/config',
      name: 'config-page',
      component: require('@/components/ConfigPage').default
    },
    {
      path: '/xcloud',
      name: 'xcloud-page',
      component: require('@/components/XCloudPage').default
    },
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
