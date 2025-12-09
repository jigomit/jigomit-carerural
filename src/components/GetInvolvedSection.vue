<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(false);
const selectedAmount = ref(100);

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isVisible.value = true;
                }
            });
        },
        { threshold: 0.2 },
    );

    const section = document.getElementById('get-involved');
    if (section) {
        observer.observe(section);
    }
});

const involvementOptions = [
    {
        id: 1,
        icon: 'doctor',
        title: 'Volunteer as Doctor',
        description: 'Join our network of 150+ medical professionals.',
        cta: 'Apply Now',
        gradient: 'from-[#0EA5E9] to-[#0284C7]',
        lightBg: 'bg-[#0EA5E9]/10',
    },
    {
        id: 2,
        icon: 'donate',
        title: 'Make a Donation',
        description: 'Your contribution directly funds medical camps.',
        cta: 'Donate Now',
        gradient: 'from-[#10B981] to-[#059669]',
        lightBg: 'bg-[#10B981]/10',
    },
    {
        id: 3,
        icon: 'partner',
        title: 'Corporate Partnership',
        description: 'Partner with us for impactful CSR initiatives.',
        cta: 'Partner With Us',
        gradient: 'from-[#8B5CF6] to-[#7C3AED]',
        lightBg: 'bg-[#8B5CF6]/10',
    },
    {
        id: 4,
        icon: 'volunteer',
        title: 'General Volunteer',
        description: 'Help with logistics and community outreach.',
        cta: 'Join Us',
        gradient: 'from-[#F59E0B] to-[#D97706]',
        lightBg: 'bg-[#F59E0B]/10',
    },
];

const donationAmounts = [25, 50, 100, 250, 500];
</script>

<template>
    <section id="get-involved" class="relative overflow-hidden bg-[#F8FAFC] py-24 lg:py-32">
        <!-- Background elements -->
        <div class="absolute inset-0 gradient-mesh"></div>
        <div class="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#0EA5E9]/10 to-[#8B5CF6]/10 blur-3xl"></div>
        <div class="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#10B981]/10 to-[#0EA5E9]/10 blur-3xl"></div>

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="mx-auto mb-16 max-w-3xl text-center" :class="[isVisible ? 'animate-fade-in' : 'opacity-0']">
                <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#F59E0B]/10 px-4 py-2">
                    <div class="h-1.5 w-1.5 rounded-full bg-[#F59E0B]"></div>
                    <span class="text-sm font-semibold text-[#F59E0B]">Get Involved</span>
                </div>
                <h2 class="mb-4 text-3xl font-bold text-[#0F172A] sm:text-4xl lg:text-5xl">
                    Be Part of the <span class="gradient-text">Change</span>
                </h2>
                <div class="section-divider mx-auto mb-6"></div>
                <p class="text-lg text-[#475569]">
                    Whether you're a medical professional, philanthropist, or passionate individual, there's a place for you in our mission.
                </p>
            </div>

            <!-- Involvement Options Grid -->
            <div class="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div
                    v-for="(option, index) in involvementOptions"
                    :key="option.id"
                    class="card-modern group overflow-hidden p-6"
                    :class="[isVisible ? 'animate-fade-in' : 'opacity-0']"
                    :style="{ animationDelay: `${index * 100}ms` }"
                >
                    <!-- Icon -->
                    <div :class="['mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br transition-transform duration-300 group-hover:scale-110', option.gradient]">
                        <!-- Doctor Icon -->
                        <svg v-if="option.icon === 'doctor'" class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <!-- Donate Icon -->
                        <svg v-else-if="option.icon === 'donate'" class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <!-- Partner Icon -->
                        <svg v-else-if="option.icon === 'partner'" class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <!-- Volunteer Icon -->
                        <svg v-else class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>

                    <h3 class="mb-2 text-lg font-bold text-[#0F172A]">{{ option.title }}</h3>
                    <p class="mb-6 text-sm text-[#475569]">{{ option.description }}</p>

                    <a :to="option.id === 2 ? '#donate' : '#'" :class="['inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-1 bg-gradient-to-r', option.gradient]">
                        <span>{{ option.cta }}</span>
                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Donation Section -->
            <div id="donate" class="card-modern overflow-hidden shadow-2xl" :class="[isVisible ? 'animate-fade-in delay-500' : 'opacity-0']">
                <div class="grid lg:grid-cols-2">
                    <!-- Content Side -->
                    <div class="relative overflow-hidden bg-gradient-to-br from-[#0EA5E9] via-[#8B5CF6] to-[#EC4899] p-8 lg:p-12">
                        <!-- Background pattern -->
                        <div class="absolute inset-0 opacity-10">
                            <svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <defs>
                                    <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
                                        <circle cx="2" cy="2" r="1" fill="white" />
                                    </pattern>
                                </defs>
                                <rect width="100" height="100" fill="url(#dots)" />
                            </svg>
                        </div>

                        <div class="relative">
                            <h3 class="mb-4 text-3xl font-bold text-white lg:text-4xl">Your Donation<br/>Saves Lives</h3>
                            <p class="mb-8 text-lg text-white/80">
                                Every contribution makes a difference. Help us reach more villages and treat more patients.
                            </p>

                            <!-- Impact of donations -->
                            <div class="space-y-4">
                                <div class="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                                    <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 font-bold text-white">
                                        $25
                                    </div>
                                    <p class="text-white/90">Provides medicines for 5 patients</p>
                                </div>
                                <div class="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                                    <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 font-bold text-white">
                                        $100
                                    </div>
                                    <p class="text-white/90">Funds health checkup camp for 20 people</p>
                                </div>
                                <div class="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                                    <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 font-bold text-white">
                                        $500
                                    </div>
                                    <p class="text-white/90">Sponsors a mobile medical unit visit</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Form Side -->
                    <div class="p-8 lg:p-12">
                        <h4 class="mb-2 text-2xl font-bold text-[#0F172A]">Make a Donation</h4>
                        <p class="mb-8 text-[#475569]">Choose an amount or enter a custom value</p>

                        <!-- Amount Selection -->
                        <div class="mb-6 grid grid-cols-3 gap-3 sm:grid-cols-5">
                            <button
                                v-for="amount in donationAmounts"
                                :key="amount"
                                :class="[
                                    'rounded-xl py-3 font-semibold transition-all hover:-translate-y-1',
                                    selectedAmount === amount
                                        ? 'bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] text-white shadow-lg'
                                        : 'bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]',
                                ]"
                                @click="selectedAmount = amount"
                            >
                                ${{ amount }}
                            </button>
                        </div>

                        <form class="space-y-4">
                            <div>
                                <label for="name" class="mb-2 block text-sm font-medium text-[#0F172A]">Full Name</label>
                                <input type="text" id="name" class="input-modern" placeholder="John Doe" />
                            </div>
                            <div>
                                <label for="email" class="mb-2 block text-sm font-medium text-[#0F172A]">Email Address</label>
                                <input type="email" id="email" class="input-modern" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label for="amount" class="mb-2 block text-sm font-medium text-[#0F172A]">Amount ($)</label>
                                <input type="number" id="amount" class="input-modern" :value="selectedAmount" @input="selectedAmount = Number(($event.target as HTMLInputElement).value)" />
                            </div>
                            <button type="submit" class="btn-secondary w-full">
                                Donate ${{ selectedAmount }} Now
                            </button>
                            <p class="text-center text-xs text-[#94A3B8]">
                                Your donation is tax-deductible. You'll receive a receipt via email.
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Newsletter Signup -->
            <div class="mt-20 rounded-3xl bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] dark:from-[#0F172A] dark:to-[#1E293B] p-8 text-center shadow-2xl md:p-12 border border-[#0EA5E9]/30 dark:border-white/20 transition-all hover:shadow-3xl" :class="[isVisible ? 'animate-fade-in delay-600' : 'opacity-0']">
                <h3 class="mb-4 text-2xl font-bold text-white sm:text-3xl">Stay Updated</h3>
                <p class="mx-auto mb-8 max-w-xl text-white/90 dark:text-white/70">
                    Subscribe to our newsletter for updates on our programs and impact stories.
                </p>
                <form class="mx-auto flex max-w-lg flex-col gap-4 sm:flex-row">
                    <input type="email" class="input-modern flex-1 bg-white/20 dark:bg-white/10 border-white/30 dark:border-white/20 text-white placeholder:text-white/70 dark:placeholder:text-white/50" placeholder="Enter your email" />
                    <button type="submit" class="btn-primary whitespace-nowrap">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>
