import { createRouter, createWebHistory } from 'vue-router';

import AppmainHome from './pages/AppmainHome.vue';
import AppmainAbout from './pages/AppmainAbout.vue';
import AppmainPrice from './pages/AppmainPrice.vue';
import NotFound from './pages/NotFound.vue';


const router = createRouter({
<<<<<<< HEAD
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
    ]
=======
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
>>>>>>> de2de86e0c9a2c3530acc2a5f903098d1027f851
});
export { router };