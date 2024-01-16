import { createRouter, createWebHistory } from 'vue-router';

import AppmainHome from './pages/AppmainHome.vue';
import AppmainAbout from './pages/AppmainAbout.vue';
import AppmainPrice from './pages/AppmainPrice.vue';
import NotFound from './pages/NotFound.vue';


const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/',
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
// Nel caso la pagina non venga trovata
{
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
},
]
});
export { router };