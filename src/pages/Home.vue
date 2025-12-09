<script setup lang="ts">

import { ref, onMounted } from 'vue';


const isVisible = ref(false);
const counters = ref([0, 0, 0, 0]);

const stats = [
    { target: 75000, label: 'Patients Treated', suffix: '+' },
    { target: 350, label: 'Villages Reached', suffix: '+' },
    { target: 200, label: 'Medical Professionals', suffix: '+' },
    { target: 850, label: 'Medical Camps', suffix: '+' },
];

const features = [
    {
        icon: 'truck',
        title: 'Mobile Medical Units',
        description: 'State-of-the-art mobile clinics bringing comprehensive healthcare directly to remote villages.',
        color: 'from-[#0EA5E9] to-[#0284C7]',
    },
    {
        icon: 'medicine',
        title: 'Affordable Medicines',
        description: 'Generic and essential medicines at up to 80% lower cost through our pharmacy network.',
        color: 'from-[#10B981] to-[#059669]',
    },
    {
        icon: 'doctor',
        title: 'Expert Medical Team',
        description: 'Network of 200+ volunteer doctors from premier hospitals across the country.',
        color: 'from-[#8B5CF6] to-[#7C3AED]',
    },
    {
        icon: 'education',
        title: 'Health Education',
        description: 'Community health programs teaching preventive care and healthy lifestyle practices.',
        color: 'from-[#F59E0B] to-[#D97706]',
    },
];

const partners = [
    { name: 'WHO', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80' },
    { name: 'UNICEF', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80' },
    { name: 'Red Cross', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80' },
    { name: 'Gates Foundation', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80' },
    { name: 'USAID', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80' },
];

const testimonials = [
    {
        name: 'Dr. Sarah Mitchell',
        role: 'Volunteer Physician, Johns Hopkins',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80',
        quote: 'CareRural has created an incredible system that allows medical professionals to make a real difference in underserved communities.',
    },
    {
        name: 'Maria Santos',
        role: 'Patient, Mountain Village',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
        quote: 'Thanks to CareRural, my family now has access to healthcare we never thought possible. They saved my daughters life.',
    },
];

const news = [
    {
        title: 'New Mobile Clinic Launches in Eastern Region',
        date: 'November 28, 2024',
        image: 'https://egov.eletsonline.com/wp-content/uploads/2020/03/Tamil-Nadu-to-launch-47-mobile-clinics-for-construction-workers.jpg',
        excerpt: 'Our newest mobile medical unit begins serving 50 villages in the Eastern mountain region.',
    },
    {
        title: '10,000 Children Vaccinated This Quarter',
        date: 'November 15, 2024',
        image: 'https://media.cnn.com/api/v1/images/stellar/prod/ap24011678954578.jpg?c=16x9&q=w_800,c_fill',
        excerpt: 'Our vaccination program reaches milestone, protecting thousands of children from preventable diseases.',
    },
    {
        title: 'Partnership with Global Health Initiative',
        date: 'November 1, 2024',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vvDfLZq_qOCvmlurrJ7s2X9ze0zzzxU8JXDKUOmRKh_WVh5JIUP_fzPKyA49HocC75Q&usqp=CAU',
        excerpt: 'New partnership will expand our telemedicine services to 100 additional communities.',
    },
];

function animateCounter(index: number, target: number): void {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            counters.value[index] = target;
            clearInterval(timer);
        } else {
            counters.value[index] = Math.floor(current);
        }
    }, duration / steps);
}

function formatNumber(num: number): string {
    if (num >= 1000) {
        return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + 'K';
    }
    return num.toString();
}

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !isVisible.value) {
                    isVisible.value = true;
                    stats.forEach((stat, index) => {
                        setTimeout(() => animateCounter(index, stat.target), index * 200);
                    });
                }
            });
        },
        { threshold: 0.3 },
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }
});
</script>

<template>
    
    
        <!-- Hero Section -->
        <section class="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A]">
            <!-- Animated Background -->
            <div class="absolute inset-0 overflow-hidden">
                <div class="blob absolute -top-20 -left-20 sm:-top-40 sm:-left-40 h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] rounded-full bg-[#0EA5E9]/10 dark:bg-[#0EA5E9]/20 blur-3xl"></div>
                <div class="blob absolute -bottom-20 -right-20 sm:-bottom-40 sm:-right-40 h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] rounded-full bg-[#8B5CF6]/10 dark:bg-[#8B5CF6]/20 blur-3xl" style="animation-delay: 2s;"></div>
                <div class="blob absolute top-1/2 left-1/2 h-[200px] w-[200px] sm:h-[400px] sm:w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EC4899]/5 dark:bg-[#EC4899]/10 blur-3xl" style="animation-delay: 4s;"></div>
            </div>

            <!-- Grid pattern overlay -->
            <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwIDEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-20 dark:opacity-40"></div>

            <div class="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 lg:py-40">
                <div class="grid items-center gap-12 lg:grid-cols-2">
                    <!-- Content -->
                    <div class="animate-fade-in text-center lg:text-left">
                        <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#10B981]/10 dark:bg-white/10 px-4 py-2 backdrop-blur-sm border border-[#10B981]/20 dark:border-transparent">
                            <span class="relative flex h-2 w-2">
                                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75"></span>
                                <span class="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]"></span>
                            </span>
                            <span class="text-sm font-medium text-[#0F172A] dark:text-white/90">Serving 350+ rural communities</span>
                        </div>

                        <h1 class="mb-6 text-4xl font-bold leading-tight text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl">
                            Bringing <span class="gradient-text">Quality Healthcare</span> to Every Village
                        </h1>

                        <p class="mb-8 text-lg text-[#475569] dark:text-white/70 sm:text-xl">
                            We are on a mission to eliminate healthcare disparities in rural areas. Through mobile clinics, affordable medicines, and dedicated medical professionals, we ensure no one is left behind.
                        </p>

                        <div class="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                            <router-link to="/donate" class="btn-primary text-center">
                                Donate Now
                                <svg class="ml-2 inline h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </router-link>
                            <router-link to="/about" class="btn-secondary">
                                Learn Our Story
                            </router-link>
                        </div>

                        <!-- Trust indicators -->
                        <div class="mt-12 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                            <div class="flex items-center gap-2">
                                <svg class="h-5 w-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <span class="text-sm text-[#475569] dark:text-white/70">501(c)(3) Certified</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <svg class="h-5 w-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <span class="text-sm text-[#475569] dark:text-white/70">Charity Navigator 4-Star</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <svg class="h-5 w-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <span class="text-sm text-[#475569] dark:text-white/70">15+ Years of Service</span>
                            </div>
                        </div>
                    </div>

                    <!-- Hero Image -->
                    <div class="relative animate-fade-in" style="animation-delay: 300ms;">
                        <div class="relative">
                            <!-- Main image -->
                            <div class="relative overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white/50 dark:ring-transparent" style="aspect-ratio: 4/3; contain: layout;">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                                    alt="Healthcare workers helping rural community"
                                    class="h-full w-full object-cover"
                                    fetchpriority="high"
                                    loading="eager"
                                    width="800"
                                    height="600"
                                    decoding="sync"
                                    style="aspect-ratio: 4/3;"
                                />
                                <div class="absolute inset-0 bg-gradient-to-t from-transparent dark:from-[#0F172A]/60 via-transparent to-transparent"></div>
                            </div>

                            <!-- Floating stats card -->
                            <div class="absolute bottom-2 left-2 sm:-bottom-6 sm:-left-6 rounded-2xl p-3 sm:p-4 shadow-xl bg-white/70 dark:bg-[#1E293B]/70 backdrop-blur-xl border border-white/30 dark:border-transparent" style="will-change: transform; transform: translateZ(0); contain: layout style paint;">
                                <div class="flex items-center gap-2 sm:gap-3">
                                    <div class="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669]">
                                        <svg class="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="text-xl sm:text-2xl font-bold text-[#0F172A] dark:text-white">98%</p>
                                        <p class="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8]">Treatment Success</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Floating badge -->
                            <div class="absolute top-2 right-2 sm:-top-4 sm:-right-4 rounded-2xl p-3 sm:p-4 shadow-xl bg-white/70 dark:bg-[#1E293B]/70 backdrop-blur-xl border border-white/30 dark:border-transparent" style="animation-delay: 1s; will-change: transform; transform: translateZ(0); contain: layout style paint;">
                                <div class="flex items-center gap-2 sm:gap-3">
                                    <div class="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7]">
                                        <svg class="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="text-xl sm:text-2xl font-bold text-[#0F172A] dark:text-white">75K+</p>
                                        <p class="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8]">Lives Changed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Scroll indicator -->
            <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <svg class="h-6 w-6 text-[#64748B] dark:text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>

        <!-- Stats Section -->
        <section id="stats-section" class="relative -mt-16 z-10 pt-20 pb-16 bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A]">
            <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div class="card-modern rounded-3xl p-8 shadow-2xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155]">
                    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div v-for="(stat, index) in stats" :key="stat.label" class="text-center">
                            <p class="text-4xl font-bold text-[#0F172A] dark:text-white lg:text-5xl">
                                {{ formatNumber(counters[index]) }}<span class="text-[#0EA5E9]">{{ stat.suffix }}</span>
                            </p>
                            <p class="mt-2 text-[#64748B] dark:text-[#94A3B8]">{{ stat.label }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="py-24 lg:py-32 bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#0EA5E9]/10 px-4 py-2">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]"></div>
                        <span class="text-sm font-semibold text-[#0EA5E9]">What We Do</span>
                    </div>
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl lg:text-5xl">
                        Comprehensive <span class="gradient-text">Healthcare Solutions</span>
                    </h2>
                    <p class="text-lg text-[#475569] dark:text-[#94A3B8]">
                        We provide end-to-end healthcare services designed specifically for rural communities, focusing on accessibility, affordability, and quality care.
                    </p>
                </div>

                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div
                        v-for="(feature, index) in features"
                        :key="feature.title"
                        class="card-modern group p-6 transition-all hover:-translate-y-2 hover:shadow-xl bg-white dark:bg-[#1E293B]"
                        :style="{ animationDelay: `${index * 100}ms` }"
                    >
                        <div :class="['mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg transition-transform group-hover:scale-110', feature.color]">
                            <svg v-if="feature.icon === 'truck'" class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                            </svg>
                            <svg v-else-if="feature.icon === 'medicine'" class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                            <svg v-else-if="feature.icon === 'doctor'" class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <svg v-else class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h3 class="mb-3 text-xl font-bold text-[#0F172A] dark:text-white">{{ feature.title }}</h3>
                        <p class="text-sm leading-relaxed text-[#475569] dark:text-[#94A3B8]">{{ feature.description }}</p>
                    </div>
                </div>

                <div class="mt-12 text-center">
                    <router-link to="/services" class="inline-flex items-center gap-2 font-semibold text-[#0EA5E9] transition-colors hover:text-[#0284C7]">
                        View All Services
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </router-link>
                </div>
            </div>
        </section>

        <!-- Mission Section -->
        <section class="relative overflow-hidden bg-[#F8FAFC] dark:bg-[#1E293B] py-24 lg:py-32">
            <div class="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 h-[250px] w-[250px] sm:h-[500px] sm:w-[500px] rounded-full bg-gradient-to-br from-[#0EA5E9]/10 to-[#8B5CF6]/10 blur-3xl"></div>

            <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid items-center gap-16 lg:grid-cols-2">
                    <div>
                        <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#10B981]/10 px-4 py-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-[#10B981]"></div>
                            <span class="text-sm font-semibold text-[#10B981]">Our Mission</span>
                        </div>
                        <h2 class="mb-6 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                            Healthcare is a Right, Not a Privilege
                        </h2>
                        <p class="mb-6 text-lg text-[#475569] dark:text-[#94A3B8]">
                            Founded in 2008, CareRural has been at the forefront of the rural healthcare revolution. We believe that geographic location should never determine the quality of healthcare one receives.
                        </p>
                        <p class="mb-8 text-[#475569] dark:text-[#94A3B8]">
                            Our integrated approach combines mobile medical units, telemedicine, affordable medications, and community health education to create sustainable healthcare ecosystems in underserved areas.
                        </p>

                        <div class="grid gap-4 sm:grid-cols-2">
                            <div class="flex items-start gap-3">
                                <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#10B981]/10">
                                    <svg class="h-5 w-5 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-[#0F172A] dark:text-white">Accessible</h3>
                                    <p class="text-sm text-[#475569] dark:text-[#94A3B8]">Healthcare at your doorstep</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#10B981]/10">
                                    <svg class="h-5 w-5 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-[#0F172A] dark:text-white">Affordable</h3>
                                    <p class="text-sm text-[#475569] dark:text-[#94A3B8]">Up to 80% lower costs</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#10B981]/10">
                                    <svg class="h-5 w-5 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-[#0F172A] dark:text-white">Quality Care</h3>
                                    <p class="text-sm text-[#475569] dark:text-[#94A3B8]">Expert medical professionals</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#10B981]/10">
                                    <svg class="h-5 w-5 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-[#0F172A] dark:text-white">Sustainable</h3>
                                    <p class="text-sm text-[#475569] dark:text-[#94A3B8]">Long-term community impact</p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8">
                            <router-link to="/about" class="btn-primary">
                                Learn More About Us
                            </router-link>
                        </div>
                    </div>

                    <div class="relative">
                        <div class="grid gap-4 sm:grid-cols-2">
                            <div class="space-y-4">
                                <img
                                    src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Medical camp"
                                    class="h-48 w-full rounded-2xl object-cover object-center shadow-lg"
                                    loading="lazy"
                                    width="1170"
                                    height="192"
                                    style="aspect-ratio: 1170/192;"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80"
                                    alt="Doctor consultation"
                                    class="h-64 w-full rounded-2xl object-cover shadow-lg"
                                    loading="lazy"
                                    width="400"
                                    height="256"
                                    style="aspect-ratio: 400/256;"
                                />
                            </div>
                            <div class="space-y-4 pt-8">
                                <img
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80"
                                    alt="Healthcare worker"
                                    class="h-64 w-full rounded-2xl object-cover shadow-lg"
                                    loading="lazy"
                                    width="400"
                                    height="256"
                                    style="aspect-ratio: 400/256;"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80"
                                    alt="Community health"
                                    class="h-48 w-full rounded-2xl object-cover shadow-lg"
                                    loading="lazy"
                                    width="400"
                                    height="192"
                                    style="aspect-ratio: 400/192;"
                                />
                            </div>
                        </div>

                        <!-- Experience badge -->
                        <div class="absolute bottom-2 sm:-bottom-6 left-1/2 -translate-x-1/2 rounded-2xl bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] p-4 sm:p-6 text-center shadow-xl max-w-[90%] sm:max-w-none">
                            <p class="text-2xl sm:text-4xl font-bold text-white">15+</p>
                            <p class="text-xs sm:text-sm text-white/80">Years of Excellence</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Preview -->
        <section class="py-24 lg:py-32 bg-[#F8FAFC] dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#EC4899]/10 px-4 py-2">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#EC4899]"></div>
                        <span class="text-sm font-semibold text-[#EC4899]">Testimonials</span>
                    </div>
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl lg:text-5xl">
                        Stories of <span class="gradient-text">Hope & Healing</span>
                    </h2>
                    <p class="text-lg text-[#475569] dark:text-[#94A3B8]">
                        Hear from the patients, doctors, and communities whose lives have been transformed by our healthcare initiatives.
                    </p>
                </div>

                <div class="grid gap-8 md:grid-cols-2">
                    <div
                        v-for="testimonial in testimonials"
                        :key="testimonial.name"
                        class="card-modern p-8"
                    >
                        <div class="mb-6 flex gap-1">
                            <svg v-for="i in 5" :key="i" class="h-5 w-5 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <p class="mb-6 text-lg text-[#475569] dark:text-[#CBD5E1]">"{{ testimonial.quote }}"</p>
                        <div class="flex items-center gap-4">
                            <img :src="testimonial.image" :alt="testimonial.name" class="h-14 w-14 rounded-full object-cover" loading="lazy" />
                            <div>
                                <p class="font-bold text-[#0F172A] dark:text-white">{{ testimonial.name }}</p>
                                <p class="text-sm text-[#64748B] dark:text-[#94A3B8]">{{ testimonial.role }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-12 text-center">
                    <router-link to="/testimonials" class="inline-flex items-center gap-2 font-semibold text-[#0EA5E9] transition-colors hover:text-[#0284C7]">
                        Read More Stories
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </router-link>
                </div>
            </div>
        </section>

        <!-- Latest News -->
        <section class="bg-[#F8FAFC] dark:bg-[#1E293B] py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <div>
                        <div class="mb-4 inline-flex items-center gap-2 rounded-full bg-[#8B5CF6]/10 px-4 py-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]"></div>
                            <span class="text-sm font-semibold text-[#8B5CF6]">Latest News</span>
                        </div>
                        <h2 class="text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                            Updates & Stories
                        </h2>
                    </div>
                    <router-link to="/news" class="inline-flex items-center gap-2 font-semibold text-[#0EA5E9] transition-colors hover:text-[#0284C7]">
                        View All News
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </router-link>
                </div>

                <div class="grid gap-8 md:grid-cols-3">
                    <article
                        v-for="article in news"
                        :key="article.title"
                        class="card-modern group overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl"
                    >
                        <div class="relative h-48 overflow-hidden" style="aspect-ratio: 16/9;">
                            <img :src="article.image" :alt="article.title" class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110" loading="lazy" width="400" height="225" style="aspect-ratio: 16/9;" />
                        </div>
                        <div class="p-6">
                            <p class="mb-2 text-sm text-[#64748B] dark:text-[#94A3B8]">{{ article.date }}</p>
                            <h3 class="mb-3 text-lg font-bold text-[#0F172A] dark:text-white transition-colors group-hover:text-[#0EA5E9]">
                                {{ article.title }}
                            </h3>
                            <p class="text-[#475569] dark:text-[#94A3B8]">{{ article.excerpt }}</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] bg-gradient-to-br from-[#E0F2FE] via-[#F0F9FF] to-[#F0FDF4] py-24 lg:py-32">
            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute top-0 left-1/4 h-48 w-48 sm:h-96 sm:w-96 rounded-full bg-[#0EA5E9]/20 dark:bg-[#0EA5E9]/20 bg-[#0EA5E9]/10 blur-3xl"></div>
                <div class="absolute bottom-0 right-1/4 h-48 w-48 sm:h-96 sm:w-96 rounded-full bg-[#8B5CF6]/20 dark:bg-[#8B5CF6]/20 bg-[#8B5CF6]/10 blur-3xl"></div>
            </div>

            <div class="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <h2 class="mb-6 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl lg:text-5xl">
                    Ready to Make a <span class="gradient-text">Difference?</span>
                </h2>
                <p class="mb-8 text-lg text-[#475569] dark:text-white/70">
                    Join thousands of supporters who are helping us bring quality healthcare to rural communities. Every contribution counts.
                </p>
                <div class="flex flex-col justify-center gap-4 sm:flex-row">
                    <router-link to="/donate" class="btn-primary text-center">
                        Donate Now
                    </router-link>
                    <router-link to="/volunteer" class="btn-secondary">
                        Become a Volunteer
                    </router-link>
                </div>
            </div>
        </section>

        <!-- Partners Section -->
        <section class="py-16 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p class="mb-8 text-center text-sm font-medium uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8]">Trusted by Leading Organizations</p>
                <div class="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale">
                    <div v-for="partner in partners" :key="partner.name" class="h-12 w-auto transition-all hover:opacity-100 hover:grayscale-0">
                        <div class="flex h-full items-center justify-center rounded-lg bg-[#F1F5F9] dark:bg-[#1E293B] px-6 py-3">
                            <span class="text-lg font-bold text-[#475569] dark:text-[#CBD5E1]">{{ partner.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
</template>
