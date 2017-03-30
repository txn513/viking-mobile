import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/test'
import vikingHome from '@/components/viking-home'
import vikingOne from '@/components/viking-one'
import vikingTwo from '@/components/viking-two'
import vikingThree from '@/components/viking-three'
import vikingFour from '@/components/viking-four'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vikingOne',
      component: vikingOne
    },
    {
      path: '/vikingTwo',
      name: 'vikingTwo',
      component: vikingTwo
    },
    {
      path: '/vikingThree',
      name: 'vikingThree',
      component: vikingThree
    },
    {
      path: '/vikingFour',
      name: 'vikingFour',
      component: vikingFour
    },
    
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
