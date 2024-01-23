import { createRouter, createWebHistory } from 'vue-router'

import AppmainHome from './pages/AppmainHome.vue'
import AppmainAbout from './pages/AppmainAbout.vue'
import AppmainPrice from './pages/AppmainPrice.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: AppmainHome
    },
    {
      path: '/about',
      name: 'about',

      component: AppmainAbout
    },
    {
      path: '/prices',
      name: 'prices',
      component: AppmainPrice
    },
    {
      path: '/courses',
      name: 'courses',
      component: NotFound
    },
    {
      path: '/locations',
      name: 'locations',
      component: NotFound
    },
    {
      path: '/blog',
      name: 'blog',
      component: NotFound
    },
    {
      path: '/book',
      name: 'book',
      component: NotFound
    },
    // Nel caso la pagina non venga trovata
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Torna all'inizio quando si preme su un button per cambiare pagina
    return { top: 0 }
  }
})
export { router }
