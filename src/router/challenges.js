export default [
    {
        name: '001 100 Days CSS',
        path: '001',
        component: () => import('@/views/100/001.vue'),
        meta: {desc: 'An easy start into the challenge with a custom build number with gradient.'}
    },
    {
        name: '002 Menu Icon',
        path: '002',
        component: () => import('@/views/100/002.vue'),
        meta: {desc: 'Used on almost every website by now, simple but impressively animated it becomes a real eye-catcher.'}
    }
]