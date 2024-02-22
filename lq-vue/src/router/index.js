import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '@/components/home/AppIndex'
import Center from '../components/Center'
import NotFound from '../components/NotFound'
import UserList from '../components/user/List'
import UserProfile from '../components/user/Profile'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'AppIndex',
      component: AppIndex
    },
    {
      path: '/center/:name',
      name: 'Center',
      props: true,
      component: Center,
      children: [
        {path: '/user/profile/:id', name: 'UserProfile',component: UserProfile,props:true},
        {path: '/user/list', component: UserList}
      ]
    },
    {
      path: '/goHome',
      redirect: '/center'
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
