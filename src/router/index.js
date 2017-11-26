import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Request from '@/components/Request'
import PlaylistManager from '@/components/PlaylistManager'
import Playlist from '@/components/Playlist'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/request',
      name: 'Request',
      component: Request
    },
    {
      path: '/dj',
      name: 'PlaylistManager',
      component: PlaylistManager
    },
    {
      path: '/playlist',
      name: 'Playlist',
      component: Playlist
    }
  ]
})
