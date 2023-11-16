import challenges from "./challenges";
const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('@/views/home.vue'),
    },
    ...challenges
]

export default routes;
