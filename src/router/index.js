import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import PokeApi from '@/components/PokeAPi'
import Cours from '@/components/Cours'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/pokeapi',
      name: 'PokeAPi',
      component: PokeApi
    },
    {
      path: '/cours',
      name: 'Cours',
      component: Cours
    }
  ]
})