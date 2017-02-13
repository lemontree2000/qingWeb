import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import MyComponents from 'components/my'
import News from 'components/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/my',
      name: 'My',
      component: MyComponents
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ],
  linkActiveClass: 'active'
})

