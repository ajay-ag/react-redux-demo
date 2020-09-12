// import modular routes
import { lazy } from 'react'

export default [
    {
        path: '/',
        exact: true,
        component: lazy(() => import('../page/Tab')),
    },
    {
        path: '/textfield',
        exact: true,
        component: lazy(() => import('../page/Textfield')),
    },
    {
        path: '/select-box',
        exact: true,
        component: lazy(() => import('../page/SelectBox')),
    },
    {
        path: '/check-box',
        exact: true,
        component: lazy(() => import('../page/CheckboxPage')),
    },
    {
        path: '/blog',
        exact: true,
        component: lazy(() => import('../page/Blog')),
    },
    {
        path: '/hook-page',
        exact: true,
        component: lazy(() => import('../page/HookPage')),
    },
    {
        path: '/product',
        exact: true,
        component: lazy(() => import('../page/Product')),
    },
]