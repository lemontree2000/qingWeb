import Vue from 'vue'
import Router from 'vue-router'
// import Hello from 'components/Hello'
import MyComponents from 'components/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyComponents',
      component: MyComponents
    }

  ]
})
