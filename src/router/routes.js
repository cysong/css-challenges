import challenges from './challenges';
import demos from './demos';
const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('@/views/home.vue'),
    },
    {
        name: 'challenges',
        path: '/challenge/',
        children: challenges
    },
    {
        name: 'demos',
        path: '/demo/',
        children: demos
    }
]

export default routes;
