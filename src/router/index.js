import Vue from 'vue'
import Router from 'vue-router'
import Request from '@/components/Request'
import PlaylistManager from '@/components/PlaylistManager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Request',
      component: Request
    },
    {
      path: '/dj',
      name: 'PlaylistManager',
      component: PlaylistManager
    }
  ]
})
