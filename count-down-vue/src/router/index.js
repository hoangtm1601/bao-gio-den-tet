import Vue from 'vue'
import Router from 'vue-router'
import TestRouter from '../components/TestRouter'
import CountDown from '../components/CountDown'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'count-down',
      component: CountDown,
    },
    {
      path: '/test',
      name: 'test',
      component: TestRouter,
    },
  ],
})
