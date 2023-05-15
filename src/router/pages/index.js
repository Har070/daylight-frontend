const pagesRoutes = [
    {
        name: 'home',
        path: '/',
        component: () => import('@/components/pages/home'),
        meta: {
            title: `Home`,
            middleware: "guest",
        }
    },
    {
        name: 'about',
        path: '/about',
        component: () => import('@/components/pages/about'),
        meta: {
            title: `About us`,
            middleware: "guest",
        }
    },
    {
        name: 'services',
        path: '/services',
        component: () => import('@/components/pages/service'),
        meta: {
            title: `Services`,
            middleware: "guest",
        }
    },
    {
        name: '404',
        path: "/:catchAll(.*)",
        component: () => import('@/components/pages/error/404'),
        meta: {
            middleware: "guest",
            title: '404 - Not Found',
        }
    },
    // {
    //     name: 'blog',
    //     path: '/blog',
    //     component: () => import('@/components/pages/blog'),
    //     meta: {
    //         title: `Blog`,
    //         middleware: "guest",
    //     }
    // },
    // {
    //     name: 'contact',
    //     path: '/contact',
    //     component: () => import('@/components/pages/contact'),
    //     meta: {
    //         title: `Contact us`,
    //         middleware: "guest",
    //     }
    // },
]

export default pagesRoutes;
