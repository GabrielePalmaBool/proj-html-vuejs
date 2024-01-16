import { createRouter, createWebHistory } from 'vue-router';

import AppmainHome from './pages/AppmainHome.vue';
import AppmainAbout from './pages/AppmainAbout.vue';
import AppmainPrice from './pages/AppmainPrice.vue';

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
]
});
export { router };