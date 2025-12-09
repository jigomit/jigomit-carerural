<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();


const counters = ref([0, 0, 0, 0, 0]);

const stats = [
    { target: 25000, label: 'Units Collected', suffix: '+' },
    { target: 75000, label: 'Lives Saved', suffix: '+' },
    { target: 500, label: 'Blood Camps', suffix: '+' },
    { target: 15000, label: 'Regular Donors', suffix: '+' },
    { target: 100, label: 'Collection Centers', suffix: '%' },
];

const bloodTypes = [
    { type: 'A+', availability: 'Adequate', percentage: 35, urgent: false },
    { type: 'A-', availability: 'Low', percentage: 15, urgent: true },
    { type: 'B+', availability: 'Adequate', percentage: 40, urgent: false },
    { type: 'B-', availability: 'Critical', percentage: 8, urgent: true },
    { type: 'AB+', availability: 'Adequate', percentage: 45, urgent: false },
    { type: 'AB-', availability: 'Critical', percentage: 5, urgent: true },
    { type: 'O+', availability: 'Low', percentage: 20, urgent: true },
    { type: 'O-', availability: 'Critical', percentage: 3, urgent: true },
];

const donationProcess = [
    {
        step: 1,
        title: 'Registration',
        description: 'Fill out a simple registration form with your personal details and medical history.',
        duration: '5-10 mins',
        icon: 'register',
    },
    {
        step: 2,
        title: 'Health Screening',
        description: 'Quick health check including blood pressure, hemoglobin levels, and temperature.',
        duration: '10-15 mins',
        icon: 'health',
    },
    {
        step: 3,
        title: 'Blood Donation',
        description: 'The actual donation process where approximately 450ml of blood is collected.',
        duration: '8-12 mins',
        icon: 'donate',
    },
    {
        step: 4,
        title: 'Rest & Refreshments',
        description: 'Relax and enjoy complimentary refreshments while your body recovers.',
        duration: '15-20 mins',
        icon: 'rest',
    },
];

const eligibilityCriteria = [
    { criteria: 'Age between 18-65 years', icon: 'age' },
    { criteria: 'Weight at least 50 kg (110 lbs)', icon: 'weight' },
    { criteria: 'Hemoglobin level above 12.5 g/dL', icon: 'hemoglobin' },
    { criteria: 'No major illness or surgery in past 6 months', icon: 'health' },
    { criteria: 'Not pregnant or breastfeeding', icon: 'pregnancy' },
    { criteria: 'No tattoos or piercings in past 6 months', icon: 'tattoo' },
    { criteria: 'No blood donation in past 3 months', icon: 'calendar' },
    { criteria: 'Not on antibiotics or certain medications', icon: 'medicine' },
];

const upcomingCamps = [
    { location: 'City Community Center', date: 'Dec 12, 2024', time: '9 AM - 4 PM', slots: '120 slots available' },
    { location: 'University Campus', date: 'Dec 15, 2024', time: '10 AM - 5 PM', slots: '80 slots available' },
    { location: 'Corporate Park Building A', date: 'Dec 18, 2024', time: '9 AM - 3 PM', slots: '100 slots available' },
    { location: 'Rural Health Center - Sundarpur', date: 'Dec 22, 2024', time: '8 AM - 2 PM', slots: '60 slots available' },
    { location: 'Town Hall', date: 'Dec 28, 2024', time: '9 AM - 4 PM', slots: '150 slots available' },
];

const benefits = [
    {
        title: 'Free Health Checkup',
        description: 'Get a complimentary mini health screening including blood pressure, hemoglobin, and blood type identification.',
        icon: 'health',
    },
    {
        title: 'Save Lives',
        description: 'One donation can save up to 3 lives. Your blood can help accident victims, surgery patients, and those with blood disorders.',
        icon: 'heart',
    },
    {
        title: 'Health Benefits',
        description: 'Regular blood donation helps reduce iron overload, promotes new blood cell production, and may lower heart disease risk.',
        icon: 'benefit',
    },
    {
        title: 'Free Blood When Needed',
        description: 'Regular donors and their immediate family members receive priority access to blood when needed.',
        icon: 'priority',
    },
];

const bloodUsage = [
    { category: 'Accident & Trauma', percentage: 35, description: 'Emergency transfusions for accident victims' },
    { category: 'Surgeries', percentage: 25, description: 'Planned and emergency surgical procedures' },
    { category: 'Cancer Treatment', percentage: 20, description: 'Chemotherapy patients often need transfusions' },
    { category: 'Blood Disorders', percentage: 12, description: 'Thalassemia, sickle cell, and other conditions' },
    { category: 'Childbirth', percentage: 8, description: 'Complications during delivery' },
];

const testimonials = [
    {
        name: 'Rahul Sharma',
        type: 'Regular Donor - 25 donations',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        quote: 'I started donating blood after my father received transfusions during his surgery. Now I donate every 3 months. It takes just an hour to potentially save 3 lives.',
    },
    {
        name: 'Priya Patel',
        type: 'Blood Recipient',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
        quote: 'I needed 6 units of blood after a complicated delivery. Thanks to donors, I am alive today to raise my daughter. Blood donors are truly life-savers.',
    },
];

const faqs = [
    {
        question: 'How often can I donate blood?',
        answer: 'You can donate whole blood every 3 months (12 weeks). Platelet donation can be done more frequently, every 2-4 weeks.',
    },
    {
        question: 'Does blood donation hurt?',
        answer: 'You may feel a slight pinch when the needle is inserted, but the actual donation is painless. Most donors describe the experience as comfortable.',
    },
    {
        question: 'How long does the process take?',
        answer: 'The entire process takes about 45-60 minutes, but the actual blood collection only takes 8-12 minutes.',
    },
    {
        question: 'What should I do before donating?',
        answer: 'Eat a healthy meal, drink plenty of water, get a good nights sleep, and avoid alcohol for 24 hours before donation.',
    },
    {
        question: 'What happens to my donated blood?',
        answer: 'Your blood is tested, processed into components (red cells, plasma, platelets), and distributed to hospitals where it can help up to 3 different patients.',
    },
    {
        question: 'Can I donate if I have a tattoo?',
        answer: 'Yes, but you must wait 6 months after getting a tattoo from a licensed facility, or 12 months if the facility was not licensed.',
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
                if (entry.isIntersecting) {
                    stats.forEach((stat, index) => {
                        setTimeout(() => animateCounter(index, stat.target), index * 150);
                    });
                }
            });
        },
        { threshold: 0.3 },
    );

    const section = document.getElementById('stats-section');
    if (section) {
        observer.observe(section);
    }
});
</script>

<template>
    
    
        <!-- Hero Section -->
        <section class="relative overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] pt-32 pb-24">
            <!-- Animated Background -->
            <div class="absolute inset-0">
                <div class="blob absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#EF4444]/10 dark:bg-[#EF4444]/20 blur-3xl"></div>
                <div class="blob absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#EC4899]/10 dark:bg-[#EC4899]/20 blur-3xl" style="animation-delay: 2s;"></div>
                <div class="blob absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EF4444]/5 dark:bg-[#EF4444]/10 blur-3xl" style="animation-delay: 4s;"></div>
            </div>

            <!-- Grid pattern overlay -->
            <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwIDEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-20 dark:opacity-40"></div>

            <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid items-center gap-12 lg:grid-cols-2">
                    <div>
                        <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#EF4444]/10 dark:bg-white/10 px-4 py-2 backdrop-blur-sm border border-[#EF4444]/20 dark:border-transparent">
                            <span class="relative flex h-2 w-2">
                                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#EF4444] opacity-75"></span>
                                <span class="relative inline-flex h-2 w-2 rounded-full bg-[#EF4444]"></span>
                            </span>
                            <span class="text-sm font-medium text-[#0F172A] dark:text-white/90">Give the Gift of Life</span>
                        </div>
                        <h1 class="mb-6 text-4xl font-bold leading-tight text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl">
                            Blood Donation: <span class="text-[#EF4444]">Every Drop Counts</span>
                        </h1>
                        <p class="mb-8 text-lg text-[#475569] dark:text-white/70 sm:text-xl">
                            One blood donation can save up to 3 lives. Join our community of 15,000+ regular donors and help ensure that safe blood is always available for those who need it most.
                        </p>
                        <div class="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                            <a href="#register" class="btn-primary bg-[#EF4444] hover:bg-[#DC2626] text-center">
                                Register to Donate
                            </a>
                            <a href="#upcoming-camps" class="btn-secondary text-center">
                                Find a Blood Camp
                            </a>
                        </div>

                        <!-- Urgent need alert -->
                        <div class="mt-8 rounded-xl border border-[#EF4444]/30 dark:border-[#EF4444]/30 bg-[#EF4444]/10 dark:bg-[#EF4444]/10 p-4 backdrop-blur-sm">
                            <div class="flex items-center gap-3">
                                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EF4444]">
                                    <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="font-semibold text-[#0F172A] dark:text-white">Urgent Need: O- and B- Blood Types</p>
                                    <p class="text-sm text-[#475569] dark:text-white/70">Critical shortage - Your donation is needed today!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="relative">
                        <div class="relative overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white/50 dark:ring-transparent">
                            <img
                                src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80"
                                alt="Blood donation"
                                class="h-full w-full object-cover"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-transparent dark:from-[#0F172A]/60 via-transparent to-transparent"></div>
                        </div>
                        <!-- Impact badge -->
                        <div class="absolute -bottom-6 -left-6 animate-float rounded-2xl p-4 shadow-xl bg-white/70 dark:bg-[#1E293B]/70 backdrop-blur-xl border border-white/30 dark:border-transparent">
                            <div class="flex items-center gap-3">
                                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#EF4444] to-[#DC2626]">
                                    <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-2xl font-bold text-[#0F172A] dark:text-white">1 = 3</p>
                                    <p class="text-sm text-[#64748B] dark:text-[#94A3B8]">Donation = Lives Saved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section id="stats-section" class="relative -mt-16 z-10">
            <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div class="card-glass rounded-3xl p-8 shadow-2xl bg-white dark:bg-transparent border border-[#E2E8F0] dark:border-transparent">
                    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                        <div v-for="(stat, index) in stats" :key="stat.label" class="text-center">
                            <p class="text-4xl font-bold text-[#0F172A] dark:text-white lg:text-5xl">
                                {{ formatNumber(counters[index]) }}<span class="text-[#EF4444]">{{ stat.suffix }}</span>
                            </p>
                            <p class="mt-2 text-[#64748B] dark:text-[#94A3B8]">{{ stat.label }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Blood Type Availability -->
        <section class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#EF4444]/10 px-4 py-2">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#EF4444]"></div>
                        <span class="text-sm font-semibold text-[#EF4444]">Blood Inventory</span>
                    </div>
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                        Current Blood Type Availability
                    </h2>
                    <p class="text-lg text-[#475569] dark:text-[#94A3B8]">
                        Real-time status of blood availability across our network. Types marked as critical need immediate donations.
                    </p>
                </div>

                <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div
                        v-for="blood in bloodTypes"
                        :key="blood.type"
                        :class="[
                            'card-modern p-6 transition-all hover:-translate-y-2 hover:shadow-xl',
                            blood.urgent ? 'ring-2 ring-[#EF4444]' : '',
                        ]"
                    >
                        <div class="mb-4 flex items-center justify-between">
                            <span class="text-4xl font-bold text-[#0F172A] dark:text-white">{{ blood.type }}</span>
                            <span
                                :class="[
                                    'rounded-full px-3 py-1 text-sm font-semibold',
                                    blood.availability === 'Adequate' ? 'bg-[#10B981]/10 text-[#10B981]' :
                                    blood.availability === 'Low' ? 'bg-[#F59E0B]/10 text-[#F59E0B]' :
                                    'bg-[#EF4444]/10 text-[#EF4444]'
                                ]"
                            >
                                {{ blood.availability }}
                            </span>
                        </div>
                        <div class="mb-2 h-3 overflow-hidden rounded-full bg-[#E2E8F0]">
                            <div
                                :class="[
                                    'h-full rounded-full transition-all',
                                    blood.availability === 'Adequate' ? 'bg-[#10B981]' :
                                    blood.availability === 'Low' ? 'bg-[#F59E0B]' : 'bg-[#EF4444]'
                                ]"
                                :style="{ width: `${blood.percentage}%` }"
                            ></div>
                        </div>
                        <p class="text-sm text-[#64748B] dark:text-[#94A3B8]">{{ blood.percentage }}% of target inventory</p>
                        <button
                            v-if="blood.urgent"
                            class="mt-4 w-full rounded-lg bg-[#EF4444] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#DC2626]"
                            @click="router.push(`/donate?donationType=blood-donation&bloodType=${blood.type}`)"
                        >
                            Donate {{ blood.type }} Now
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Donation Process -->
        <section class="bg-[#F8FAFC] dark:bg-[#1E293B] py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#8B5CF6]/10 px-4 py-2">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]"></div>
                        <span class="text-sm font-semibold text-[#8B5CF6]">Simple Process</span>
                    </div>
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                        How Blood Donation Works
                    </h2>
                    <p class="text-lg text-[#475569] dark:text-[#94A3B8]">
                        The entire process takes less than an hour and is completely safe and painless.
                    </p>
                </div>

                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div
                        v-for="process in donationProcess"
                        :key="process.step"
                        class="card-modern p-6 text-center"
                    >
                        <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#EF4444] to-[#EC4899] text-2xl font-bold text-white shadow-lg">
                            {{ process.step }}
                        </div>
                        <h3 class="mb-2 text-xl font-bold text-[#0F172A] dark:text-white">{{ process.title }}</h3>
                        <p class="mb-4 text-[#475569] dark:text-[#94A3B8]">{{ process.description }}</p>
                        <span class="rounded-full bg-[#F1F5F9] dark:bg-[#334155] px-4 py-1 text-sm font-medium text-[#64748B] dark:text-[#94A3B8]">
                            {{ process.duration }}
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Eligibility & Benefits -->
        <section class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid gap-16 lg:grid-cols-2">
                    <!-- Eligibility -->
                    <div>
                        <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#0EA5E9]/10 px-4 py-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]"></div>
                            <span class="text-sm font-semibold text-[#0EA5E9]">Eligibility</span>
                        </div>
                        <h2 class="mb-6 text-3xl font-bold text-[#0F172A] dark:text-white">Who Can Donate?</h2>
                        <p class="mb-8 text-[#475569] dark:text-[#94A3B8]">
                            Most healthy adults can donate blood. Check if you meet the following criteria:
                        </p>

                        <div class="space-y-3">
                            <div
                                v-for="item in eligibilityCriteria"
                                :key="item.criteria"
                                class="flex items-center gap-4 rounded-xl bg-[#F8FAFC] dark:bg-[#334155] p-4"
                            >
                                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#10B981]/10">
                                    <svg class="h-5 w-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <span class="text-[#475569] dark:text-[#94A3B8]">{{ item.criteria }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Benefits -->
                    <div>
                        <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#10B981]/10 px-4 py-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-[#10B981]"></div>
                            <span class="text-sm font-semibold text-[#10B981]">Benefits</span>
                        </div>
                        <h2 class="mb-6 text-3xl font-bold text-[#0F172A] dark:text-white">Benefits of Donating</h2>
                        <p class="mb-8 text-[#475569] dark:text-[#94A3B8]">
                            Blood donation benefits both recipients and donors. Here's why you should donate:
                        </p>

                        <div class="space-y-4">
                            <div
                                v-for="benefit in benefits"
                                :key="benefit.title"
                                class="card-modern p-5"
                            >
                                <h4 class="mb-2 font-bold text-[#0F172A] dark:text-white">{{ benefit.title }}</h4>
                                <p class="text-sm text-[#475569] dark:text-[#94A3B8]">{{ benefit.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Where Blood Goes -->
        <section class="bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#F59E0B]/10 dark:bg-white/10 px-4 py-2 backdrop-blur-sm border border-[#F59E0B]/20 dark:border-transparent">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#F59E0B]"></div>
                        <span class="text-sm font-semibold text-[#F59E0B]">Impact</span>
                    </div>
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                        Where Your Blood Goes
                    </h2>
                    <p class="text-lg text-[#475569] dark:text-white/70">
                        Your donation helps patients across various medical needs.
                    </p>
                </div>

                <div class="mx-auto max-w-4xl">
                    <div class="space-y-6">
                        <div
                            v-for="usage in bloodUsage"
                            :key="usage.category"
                            class="card-modern p-6"
                        >
                            <div class="mb-3 flex items-center justify-between">
                                <h3 class="text-lg font-bold text-[#0F172A] dark:text-white">{{ usage.category }}</h3>
                                <span class="text-2xl font-bold text-[#EF4444]">{{ usage.percentage }}%</span>
                            </div>
                            <div class="mb-3 h-3 overflow-hidden rounded-full bg-[#E2E8F0] dark:bg-white/20">
                                <div
                                    class="h-full rounded-full bg-gradient-to-r from-[#EF4444] to-[#EC4899]"
                                    :style="{ width: `${usage.percentage}%` }"
                                ></div>
                            </div>
                            <p class="text-sm text-[#475569] dark:text-[#94A3B8]">{{ usage.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Upcoming Camps -->
        <section id="upcoming-camps" class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#EF4444]/10 px-4 py-2">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#EF4444]"></div>
                        <span class="text-sm font-semibold text-[#EF4444]">Schedule</span>
                    </div>
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                        Upcoming Blood Donation Camps
                    </h2>
                    <p class="text-lg text-[#475569] dark:text-[#94A3B8]">
                        Find a blood donation camp near you and register to donate.
                    </p>
                </div>

                <div class="mx-auto max-w-4xl">
                    <div class="card-modern overflow-hidden">
                        <div class="overflow-x-auto">
                            <table class="w-full">
                                <thead class="bg-[#F1F5F9] dark:bg-[#334155]">
                                    <tr>
                                        <th class="px-6 py-4 text-left text-sm font-semibold text-[#0F172A] dark:text-white">Location</th>
                                        <th class="px-6 py-4 text-left text-sm font-semibold text-[#0F172A] dark:text-white">Date</th>
                                        <th class="px-6 py-4 text-left text-sm font-semibold text-[#0F172A] dark:text-white">Time</th>
                                        <th class="px-6 py-4 text-left text-sm font-semibold text-[#0F172A] dark:text-white">Availability</th>
                                        <th class="px-6 py-4 text-right text-sm font-semibold text-[#0F172A] dark:text-white">Action</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-[#E2E8F0] dark:divide-[#334155]">
                                    <tr v-for="camp in upcomingCamps" :key="camp.location" class="hover:bg-[#F8FAFC] dark:hover:bg-[#334155]">
                                        <td class="px-6 py-4">
                                            <div class="flex items-center gap-3">
                                                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EF4444]/10">
                                                    <svg class="h-5 w-5 text-[#EF4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    </svg>
                                                </div>
                                                <span class="font-medium text-[#0F172A] dark:text-white">{{ camp.location }}</span>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 text-[#475569] dark:text-[#94A3B8]">{{ camp.date }}</td>
                                        <td class="px-6 py-4 text-[#475569] dark:text-[#94A3B8]">{{ camp.time }}</td>
                                        <td class="px-6 py-4">
                                            <span class="rounded-full bg-[#10B981]/10 px-3 py-1 text-sm font-medium text-[#10B981]">
                                                {{ camp.slots }}
                                            </span>
                                        </td>
                                        <td class="px-6 py-4 text-right">
                                            <button class="rounded-lg bg-[#EF4444] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#DC2626]">
                                                Register
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="mt-8 text-center">
                        <router-link to="/contact" class="inline-flex items-center gap-2 font-semibold text-[#EF4444] transition-colors hover:text-[#DC2626]">
                            Organize a Blood Camp in Your Area
                            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials -->
        <section class="bg-[#F8FAFC] dark:bg-[#1E293B] py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white">Stories from Donors & Recipients</h2>
                </div>

                <div class="grid gap-8 md:grid-cols-2">
                    <div
                        v-for="testimonial in testimonials"
                        :key="testimonial.name"
                        class="card-modern p-8"
                    >
                        <p class="mb-6 text-lg text-[#475569] dark:text-[#94A3B8]">"{{ testimonial.quote }}"</p>
                        <div class="flex items-center gap-4">
                            <img :src="testimonial.image" :alt="testimonial.name" class="h-14 w-14 rounded-full object-cover" />
                            <div>
                                <h4 class="font-bold text-[#0F172A] dark:text-white">{{ testimonial.name }}</h4>
                                <p class="text-sm text-[#EF4444]">{{ testimonial.type }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQs -->
        <section class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center">
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white">Frequently Asked Questions</h2>
                </div>

                <div class="space-y-4">
                    <div
                        v-for="faq in faqs"
                        :key="faq.question"
                        class="card-modern p-6"
                    >
                        <h3 class="mb-3 font-bold text-[#0F172A] dark:text-white">{{ faq.question }}</h3>
                        <p class="text-[#475569] dark:text-[#94A3B8]">{{ faq.answer }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Registration Form -->
        <section id="register" class="bg-gradient-to-r from-[#EF4444] to-[#EC4899] py-24 lg:py-32">
            <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div class="card-modern p-8 lg:p-12">
                    <div class="mb-8 text-center">
                        <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white">Register as a Blood Donor</h2>
                        <p class="text-[#475569] dark:text-[#94A3B8]">Join our community of life-savers. Fill out the form below to register.</p>
                    </div>

                    <form class="space-y-6">
                        <div class="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">Full Name</label>
                                <input type="text" class="input-modern" placeholder="John Doe" />
                            </div>
                            <div>
                                <label class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">Blood Type (if known)</label>
                                <select class="input-modern">
                                    <option value="">Select blood type</option>
                                    <option value="a+">A+</option>
                                    <option value="a-">A-</option>
                                    <option value="b+">B+</option>
                                    <option value="b-">B-</option>
                                    <option value="ab+">AB+</option>
                                    <option value="ab-">AB-</option>
                                    <option value="o+">O+</option>
                                    <option value="o-">O-</option>
                                    <option value="unknown">Don't Know</option>
                                </select>
                            </div>
                        </div>

                        <div class="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">Email</label>
                                <input type="email" class="input-modern" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">Phone</label>
                                <input type="tel" class="input-modern" placeholder="+1 (555) 123-4567" />
                            </div>
                        </div>

                        <div class="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">Date of Birth</label>
                                <input type="date" class="input-modern" />
                            </div>
                            <div>
                                <label class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">Preferred Location</label>
                                <select class="input-modern">
                                    <option value="">Select location</option>
                                    <option value="city-center">City Community Center</option>
                                    <option value="university">University Campus</option>
                                    <option value="corporate">Corporate Park</option>
                                    <option value="rural">Rural Health Center</option>
                                </select>
                            </div>
                        </div>

                        <div class="flex items-start gap-3">
                            <input type="checkbox" class="mt-1 h-4 w-4 rounded border-[#CBD5E1] text-[#EF4444]" />
                            <label class="text-sm text-[#475569] dark:text-[#94A3B8]">
                                I confirm that I am between 18-65 years old, weigh at least 50 kg, and have not donated blood in the past 3 months.
                            </label>
                        </div>

                        <button type="submit" class="w-full rounded-xl bg-[#EF4444] px-8 py-4 text-lg font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#DC2626] hover:shadow-xl">
                            Register Now - Save Lives
                        </button>
                    </form>
                </div>
            </div>
        </section>
    
</template>
