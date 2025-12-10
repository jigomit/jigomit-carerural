<script setup lang="ts">

import { ref, onMounted } from 'vue';


const isVisible = ref(false);

onMounted(() => {
    isVisible.value = true;
});

const timeline = [
    {
        year: '2008',
        title: 'Foundation Established',
        description: 'CareRural was founded by Dr. Michael Chen and a team of healthcare professionals determined to bridge the healthcare gap.',
    },
    {
        year: '2010',
        title: 'First Mobile Clinic',
        description: 'Launched our first mobile medical unit, serving 25 villages in the initial year.',
    },
    {
        year: '2013',
        title: 'Medicine Program Launch',
        description: 'Partnered with pharmaceutical companies to provide medicines at up to 80% lower costs.',
    },
    {
        year: '2016',
        title: 'Telemedicine Initiative',
        description: 'Introduced telemedicine services connecting rural patients with specialists nationwide.',
    },
    {
        year: '2019',
        title: '50,000 Patients Milestone',
        description: 'Celebrated treating our 50,000th patient with expanded services in 150 villages.',
    },
    {
        year: '2022',
        title: 'Training Academy',
        description: 'Established the CareRural Training Academy to certify community health workers.',
    },
    {
        year: '2024',
        title: 'Expanding Horizons',
        description: 'Now serving 350+ villages with 75,000+ patients treated and growing every day.',
    },
];

const values = [
    {
        icon: 'heart',
        title: 'Compassion',
        description: 'We treat every patient with dignity, empathy, and respect regardless of their background.',
        color: 'from-[#EC4899] to-[#DB2777]',
    },
    {
        icon: 'shield',
        title: 'Integrity',
        description: 'We maintain the highest ethical standards in all our operations and interactions.',
        color: 'from-[#0EA5E9] to-[#0284C7]',
    },
    {
        icon: 'users',
        title: 'Community',
        description: 'We believe in working alongside communities, not just for them.',
        color: 'from-[#10B981] to-[#059669]',
    },
    {
        icon: 'star',
        title: 'Excellence',
        description: 'We strive for the highest quality healthcare regardless of location.',
        color: 'from-[#8B5CF6] to-[#7C3AED]',
    },
    {
        icon: 'lightbulb',
        title: 'Innovation',
        description: 'We embrace new technologies and approaches to improve healthcare delivery.',
        color: 'from-[#F59E0B] to-[#D97706]',
    },
    {
        icon: 'globe',
        title: 'Sustainability',
        description: 'We build lasting healthcare solutions that communities can maintain.',
        color: 'from-[#06B6D4] to-[#0891B2]',
    },
];

const team = [
    {
        name: 'Dr. Michael Chen',
        role: 'Founder & CEO',
        bio: 'Former Chief of Medicine at Johns Hopkins, Dr. Chen has dedicated 20+ years to rural healthcare advocacy.',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80',
        social: { linkedin: '#', twitter: '#' },
    },
    {
        name: 'Dr. Sarah Williams',
        role: 'Medical Director',
        bio: 'Board-certified in Family Medicine with expertise in community health and preventive care.',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80',
        social: { linkedin: '#', twitter: '#' },
    },
    {
        name: 'James Rodriguez',
        role: 'Operations Director',
        bio: '15 years experience in non-profit operations and healthcare logistics management.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
        social: { linkedin: '#', twitter: '#' },
    },
    {
        name: 'Dr. Priya Sharma',
        role: 'Program Director',
        bio: 'Public health expert specializing in rural healthcare systems and community outreach.',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80',
        social: { linkedin: '#', twitter: '#' },
    },
    {
        name: 'Robert Kim',
        role: 'Technology Director',
        bio: 'Leading our telemedicine and digital health initiatives with 12 years in health tech.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
        social: { linkedin: '#', twitter: '#' },
    },
    {
        name: 'Maria Santos',
        role: 'Community Relations',
        bio: 'Building bridges between CareRural and the communities we serve for over a decade.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
        social: { linkedin: '#', twitter: '#' },
    },
];

const board = [
    { name: 'Dr. Elizabeth Warren', role: 'Board Chair', affiliation: 'Harvard Medical School' },
    { name: 'John Smith', role: 'Treasurer', affiliation: 'Goldman Sachs (Retired)' },
    { name: 'Dr. David Lee', role: 'Secretary', affiliation: 'Stanford Healthcare' },
    { name: 'Patricia Johnson', role: 'Member', affiliation: 'Gates Foundation' },
    { name: 'Dr. Raj Patel', role: 'Member', affiliation: 'WHO Advisor' },
    { name: 'Susan Thompson', role: 'Member', affiliation: 'USAID' },
];

const awards = [
    { year: '2023', title: 'Global Health Impact Award', org: 'World Health Organization' },
    { year: '2022', title: 'Non-Profit Excellence Award', org: 'Charity Navigator' },
    { year: '2021', title: 'Innovation in Healthcare', org: 'Healthcare Foundation' },
    { year: '2020', title: 'Community Service Award', org: 'National Health Council' },
];
</script>

<template>
    
    
        <!-- Hero Section -->
        <section class="relative overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] pt-24 sm:pt-28 md:pt-32 pb-24">
            <div class="absolute inset-0">
                <div class="blob absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0EA5E9]/10 dark:bg-[#0EA5E9]/20 blur-3xl"></div>
                <div class="blob absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#8B5CF6]/10 dark:bg-[#8B5CF6]/20 blur-3xl"></div>
            </div>

            <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#0EA5E9]/10 dark:bg-white/10 px-4 py-2 backdrop-blur-sm border border-[#0EA5E9]/20 dark:border-transparent">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]"></div>
                        <span class="text-sm font-semibold text-[#0EA5E9]">About CareRural</span>
                    </div>
                    <h1 class="mb-6 text-4xl font-bold text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl">
                        Our Story of <span class="gradient-text">Hope & Healing</span>
                    </h1>
                    <p class="text-lg text-[#475569] dark:text-white/70">
                        For over 15 years, we have been committed to a single mission: bringing quality healthcare to every village, no matter how remote.
                    </p>
                </div>
            </div>
        </section>

        <!-- Mission & Vision -->
        <section class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid gap-16 lg:grid-cols-2">
                    <!-- Mission -->
                    <div class="card-modern p-8 lg:p-12">
                        <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7]">
                            <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h2 class="mb-4 text-2xl font-bold text-[#0F172A] dark:text-white">Our Mission</h2>
                        <p class="text-lg text-[#475569] dark:text-[#94A3B8]">
                            To eliminate healthcare disparities in rural communities by providing accessible, affordable, and quality medical services through innovative delivery models, community partnerships, and sustainable healthcare ecosystems.
                        </p>
                    </div>

                    <!-- Vision -->
                    <div class="card-modern p-8 lg:p-12">
                        <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED]">
                            <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <h2 class="mb-4 text-2xl font-bold text-[#0F172A] dark:text-white">Our Vision</h2>
                        <p class="text-lg text-[#475569] dark:text-[#94A3B8]">
                            A world where every person, regardless of geographic location or economic status, has access to comprehensive healthcare that enables them to live healthy, productive lives and contribute to thriving communities.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Our Story Section -->
        <section class="bg-[#F8FAFC] dark:bg-[#1E293B] py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid items-center gap-16 lg:grid-cols-2">
                    <div>
                        <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#10B981]/10 px-4 py-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-[#10B981]"></div>
                            <span class="text-sm font-semibold text-[#10B981]">Our Story</span>
                        </div>
                        <h2 class="mb-6 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                            From One Doctor's Dream to a Movement
                        </h2>
                        <div class="space-y-4 text-[#475569] dark:text-[#94A3B8]">
                            <p>
                                In 2008, Dr. Michael Chen witnessed something that changed his life forever. During a medical mission trip to a remote mountain village, he met a young mother who had walked 30 miles carrying her sick child, only to find no medical help available.
                            </p>
                            <p>
                                That moment sparked a revolution. Dr. Chen, along with a small team of dedicated healthcare professionals, founded CareRural with a simple but powerful idea: if people cannot come to healthcare, healthcare must come to them.
                            </p>
                            <p>
                                What started with one retrofitted van and a handful of volunteers has grown into a comprehensive healthcare network serving over 350 villages. Our mobile medical units, telemedicine services, affordable medicine program, and community health worker training have touched the lives of more than 75,000 patients.
                            </p>
                            <p>
                                Today, CareRural stands as a beacon of hope for rural communities worldwide, proving that quality healthcare is not a privilege reserved for urban centers but a fundamental right for all.
                            </p>
                        </div>
                    </div>

                    <div class="relative">
                        <img
                            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=847&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="CareRural medical camp"
                            class="rounded-3xl shadow-2xl object-cover object-center"
                        />
                        <div class="absolute bottom-2 sm:bottom-4 md:-bottom-8 left-2 sm:left-4 md:-left-8 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] p-3 sm:p-4 md:p-6 shadow-xl">
                            <p class="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">15+</p>
                            <p class="text-[10px] sm:text-xs md:text-sm text-white/80 leading-tight">Years of Service</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Timeline -->
        <section class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#F59E0B]/10 px-4 py-2">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#F59E0B]"></div>
                        <span class="text-sm font-semibold text-[#F59E0B]">Our Journey</span>
                    </div>
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl lg:text-5xl">
                        Milestones Along the Way
                    </h2>
                    <p class="text-lg text-[#475569] dark:text-[#94A3B8]">
                        From our humble beginnings to becoming a leading rural healthcare organization.
                    </p>
                </div>

                <div class="relative">
                    <!-- Timeline line -->
                    <div class="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#0EA5E9] via-[#8B5CF6] to-[#EC4899] hidden lg:block"></div>

                    <div class="space-y-12 lg:space-y-0">
                        <div
                            v-for="(item, index) in timeline"
                            :key="item.year"
                            :class="['relative lg:grid lg:grid-cols-2 lg:gap-8', index % 2 === 0 ? '' : 'lg:flex-row-reverse']"
                        >
                            <div :class="['card-modern p-6', index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2']">
                                <span class="inline-block rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] px-4 py-1 text-sm font-bold text-white">
                                    {{ item.year }}
                                </span>
                                <h3 class="mt-4 text-xl font-bold text-[#0F172A] dark:text-white">{{ item.title }}</h3>
                                <p class="mt-2 text-[#475569] dark:text-[#94A3B8]">{{ item.description }}</p>
                            </div>

                            <!-- Timeline dot -->
                            <div class="absolute left-1/2 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] shadow-lg lg:block"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Values -->
        <section class="bg-[#F8FAFC] dark:bg-[#1E293B] py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#8B5CF6]/10 px-4 py-2">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]"></div>
                        <span class="text-sm font-semibold text-[#8B5CF6]">Our Values</span>
                    </div>
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl lg:text-5xl">
                        Principles That Guide Us
                    </h2>
                    <p class="text-lg text-[#475569] dark:text-[#94A3B8]">
                        Our core values shape every decision we make and every life we touch.
                    </p>
                </div>

                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div
                        v-for="value in values"
                        :key="value.title"
                        class="card-modern group p-6 transition-all hover:-translate-y-2 hover:shadow-xl"
                    >
                        <div :class="['mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br transition-transform group-hover:scale-110', value.color]">
                            <svg v-if="value.icon === 'heart'" class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <svg v-else-if="value.icon === 'shield'" class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <svg v-else-if="value.icon === 'users'" class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <svg v-else-if="value.icon === 'star'" class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                            <svg v-else-if="value.icon === 'lightbulb'" class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            <svg v-else class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 class="mb-3 text-xl font-bold text-[#0F172A] dark:text-white">{{ value.title }}</h3>
                        <p class="text-[#475569] dark:text-[#94A3B8]">{{ value.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Leadership Team -->
        <section class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#0EA5E9]/10 px-4 py-2">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]"></div>
                        <span class="text-sm font-semibold text-[#0EA5E9]">Leadership</span>
                    </div>
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl lg:text-5xl">
                        Meet Our Team
                    </h2>
                    <p class="text-lg text-[#475569] dark:text-[#94A3B8]">
                        Dedicated professionals committed to transforming rural healthcare.
                    </p>
                </div>

                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div
                        v-for="member in team"
                        :key="member.name"
                        class="card-modern group overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl"
                    >
                        <div class="relative h-64 overflow-hidden">
                            <img
                                :src="member.image"
                                :alt="member.name"
                                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                            <div class="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 transition-opacity group-hover:opacity-100">
                                <a :to="member.social.linkedin" class="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-[#0EA5E9]">
                                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a :to="member.social.twitter" class="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-[#0EA5E9]">
                                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-[#0F172A] dark:text-white">{{ member.name }}</h3>
                            <p class="mb-3 text-sm font-medium text-[#0EA5E9]">{{ member.role }}</p>
                            <p class="text-[#475569] dark:text-[#94A3B8]">{{ member.bio }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Board of Directors -->
        <section class="bg-[#F8FAFC] dark:bg-[#1E293B] py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white">Board of Directors</h2>
                    <p class="text-lg text-[#475569] dark:text-[#94A3B8]">
                        Distinguished leaders providing strategic guidance and governance.
                    </p>
                </div>

                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div
                        v-for="member in board"
                        :key="member.name"
                        class="card-modern p-6 text-center"
                    >
                        <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0EA5E9]/10 to-[#8B5CF6]/10">
                            <span class="text-2xl font-bold text-[#0EA5E9]">{{ member.name.split(' ').map(n => n[0]).join('') }}</span>
                        </div>
                        <h3 class="text-lg font-bold text-[#0F172A] dark:text-white">{{ member.name }}</h3>
                        <p class="text-sm font-medium text-[#0EA5E9]">{{ member.role }}</p>
                        <p class="mt-2 text-sm text-[#64748B] dark:text-[#94A3B8]">{{ member.affiliation }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Awards & Recognition -->
        <section class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#F59E0B]/10 px-4 py-2">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#F59E0B]"></div>
                        <span class="text-sm font-semibold text-[#F59E0B]">Recognition</span>
                    </div>
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                        Awards & Achievements
                    </h2>
                </div>

                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div
                        v-for="award in awards"
                        :key="award.title"
                        class="card-modern p-6 text-center"
                    >
                        <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F59E0B]/10">
                            <svg class="h-7 w-7 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <span class="text-sm font-bold text-[#0EA5E9]">{{ award.year }}</span>
                        <h3 class="mt-2 font-bold text-[#0F172A] dark:text-white">{{ award.title }}</h3>
                        <p class="mt-1 text-sm text-[#64748B] dark:text-[#94A3B8]">{{ award.org }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] py-24">
            <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <h2 class="mb-6 text-3xl font-bold text-white sm:text-4xl">
                    Join Us in Making a Difference
                </h2>
                <p class="mb-8 text-lg text-white/80">
                    Whether as a volunteer, donor, or partner, your contribution helps us reach more communities in need.
                </p>
                <div class="flex flex-col justify-center gap-4 sm:flex-row">
                    <router-link to="/volunteer" class="rounded-full bg-white px-8 py-3 font-semibold text-[#0EA5E9] transition-all hover:-translate-y-1 hover:shadow-xl">
                        Become a Volunteer
                    </router-link>
                    <router-link to="/contact" class="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-white/10">
                        Contact Us
                    </router-link>
                </div>
            </div>
        </section>
    
</template>
