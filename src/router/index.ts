import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/Home.vue'),
        meta: { title: 'Home - CareRural | Healthcare For All' },
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/pages/About.vue'),
        meta: { title: 'About Us - CareRural | Our Mission & Story' },
    },
    {
        path: '/services',
        name: 'services',
        component: () => import('@/pages/Services.vue'),
        meta: { title: 'Our Services - CareRural | Comprehensive Healthcare Solutions' },
    },
    {
        path: '/programs',
        name: 'programs',
        component: () => import('@/pages/Programs.vue'),
        meta: { title: 'Programs - CareRural | Transformative Health Programs' },
    },
    {
        path: '/impact',
        name: 'impact',
        component: () => import('@/pages/Impact.vue'),
        meta: { title: 'Our Impact - CareRural | Making a Difference' },
    },
    {
        path: '/news',
        name: 'news',
        component: () => import('@/pages/News.vue'),
        meta: { title: 'News & Updates - CareRural | Latest Stories' },
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/pages/Contact.vue'),
        meta: { title: 'Contact Us - CareRural | Get in Touch' },
    },
    {
        path: '/testimonials',
        name: 'testimonials',
        component: () => import('@/pages/Testimonials.vue'),
        meta: { title: 'Testimonials - CareRural | Patient Stories' },
    },
    {
        path: '/donate',
        name: 'donate',
        component: () => import('@/pages/Donate.vue'),
        meta: { title: 'Donate - CareRural | Support Our Mission' },
    },
    {
        path: '/volunteer',
        name: 'volunteer',
        component: () => import('@/pages/Volunteer.vue'),
        meta: { title: 'Volunteer - CareRural | Join Our Team' },
    },
    {
        path: '/mobile-medical-camps',
        name: 'mobile-medical-camps',
        component: () => import('@/pages/MobileMedicalCamps.vue'),
        meta: { title: 'Mobile Medical Camps - CareRural | Bringing Care to You' },
    },
    {
        path: '/low-cost-medicine',
        name: 'low-cost-medicine',
        component: () => import('@/pages/LowCostMedicine.vue'),
        meta: { title: 'Low-Cost Medicine - CareRural | Affordable Medications' },
    },
    {
        path: '/blood-donation',
        name: 'blood-donation',
        component: () => import('@/pages/BloodDonation.vue'),
        meta: { title: 'Blood Donation - CareRural | Save Lives' },
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('@/pages/Blog.vue'),
        meta: { title: 'Blog - CareRural | Health & Wellness Articles' },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { el: to.hash, behavior: 'smooth' };
        }
        return { top: 0, behavior: 'smooth' };
    },
});

// Update document title on route change
router.beforeEach((to, from, next) => {
    const title = to.meta?.title as string;
    if (title) {
        document.title = title;
    } else {
        document.title = 'CareRural - Healthcare For All';
    }
    next();
});

export default router;
