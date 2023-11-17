export default [
    {
        name: '001 Transition',
        path: '001',
        component: () => import('@/views/demos/001.vue'),
        meta: {desc: 'css transition demos'}
    },
    {
        name: '002 Rainbow animation',
        path: '002',
        component: () => import('@/views/demos/002.vue'),
        meta: {desc: 'css rainbow animation demos'}
    },
    {
        name: '003 Typing animation',
        path: '003',
        component: () => import('@/views/demos/003.vue'),
        meta: {desc: 'css typing animation demo'}
    }
]