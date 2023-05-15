import routes from '@/router/vue-routes';
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
    scrollBehavior() {
        return {top: 0}
    },
});

router.beforeEach((to, from, next) => {
    // document.title = `${to.meta.title} - ${process.env.MIX_APP_NAME}`
    document.title = `${to.meta.title} - DayLight Pharmacy`;

    next();
})

export default router;
