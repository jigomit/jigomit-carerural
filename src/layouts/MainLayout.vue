<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import { useTheme } from '@/composables/useTheme';

const { isDark, toggleTheme } = useTheme();

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Programs', href: '/programs' },
    { name: 'Impact', href: '/impact' },
    { name: 'Blog', href: '/blog' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
];

function handleScroll(): void {
    isScrolled.value = window.scrollY > 50;
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

function toggleMobileMenu(): void {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

const currentYear = new Date().getFullYear();

const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Programs', href: '/programs' },
    { name: 'Impact', href: '/impact' },
    { name: 'Blog', href: '/blog' },
];

const services = [
    { name: 'Mobile Medical Camps', href: '/mobile-medical-camps' },
    { name: 'Low-Cost Medicines', href: '/low-cost-medicine' },
    { name: 'Blood Donation', href: '/blood-donation' },
    { name: 'Doctor Network', href: '/services' },
    { name: 'Health Education', href: '/programs' },
];

const contact = {
    address: '456 Rural Health Avenue, Healthcare District, State 54321',
    phone: '+1 (800) 555-CARE',
    email: 'info@carerural.org',
};

const socialLinks = [
    { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com' },
    { name: 'Twitter', icon: 'twitter', href: 'https://www.twitter.com' },
    { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com' },
    { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com' },
    { name: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com' },
];
</script>

<template>
    <div :class="['min-h-screen flex flex-col transition-colors duration-300', isDark ? 'dark bg-[#0F172A]' : 'bg-white']">
        <!-- Navigation -->
        <header
            :class="[
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
                isScrolled 
                    ? (isDark ? 'glass shadow-lg py-2' : 'bg-white/95 backdrop-blur-xl shadow-lg py-2')
                    : (isDark ? 'bg-transparent py-4' : 'bg-transparent py-4'),
            ]"
        >
            <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between">
                    <!-- Logo -->
                    <router-link to="/" class="group flex items-center gap-3">
                        <div class="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#10B981] shadow-lg transition-transform group-hover:scale-110">
                            <!-- Medical Cross with Heart -->
                            <svg class="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <!-- Medical Cross -->
                                <path d="M19 8h-3V5a1 1 0 00-1-1h-6a1 1 0 00-1 1v3H5a1 1 0 00-1 1v6a1 1 0 001 1h3v3a1 1 0 001 1h6a1 1 0 001-1v-3h3a1 1 0 001-1V9a1 1 0 00-1-1z" />
                            </svg>
                            <!-- Pulse indicator -->
                            <span class="absolute -top-1 -right-1 flex h-3 w-3">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
                            </span>
                        </div>
                        <div>
                            <span :class="['text-xl font-bold transition-colors', isScrolled ? (isDark ? 'text-white' : 'text-[#0F172A]') : (isDark ? 'text-white' : 'text-[#0F172A]')]">
                                Care<span class="text-[#10B981]">Rural</span>
                            </span>
                            <span :class="['block text-[10px] font-medium tracking-wider', isDark ? 'text-[#94A3B8]' : (isScrolled ? 'text-[#64748B]' : 'text-[#64748B]')]">HEALTHCARE FOR ALL</span>
                        </div>
                    </router-link>

                    <!-- Desktop Navigation -->
                    <div class="hidden lg:flex lg:items-center lg:gap-1">
                        <router-link
                            v-for="link in navLinks"
                            :key="link.name"
                            :to="link.href"
                            :class="[
                                'rounded-lg px-4 py-2 text-sm font-medium transition-all',
                                isScrolled
                                    ? (isDark ? 'text-[#CBD5E1] hover:text-white hover:bg-white/10' : 'text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9]')
                                    : (isDark ? 'text-white/90 hover:text-white hover:bg-white/10' : 'text-[#475569] hover:text-[#0F172A] hover:bg-white/50'),
                            ]"
                        >
                            {{ link.name }}
                        </router-link>
                    </div>

                    <!-- CTA Buttons & Theme Toggle -->
                    <div class="hidden lg:flex lg:items-center lg:gap-4">
                        <!-- Theme Toggle -->
                        <button
                            @click="toggleTheme"
                            :class="[
                                'relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 border',
                                isScrolled
                                    ? (isDark ? 'bg-[#334155] hover:bg-[#475569] border-[#475569]' : 'bg-[#F1F5F9] hover:bg-[#E2E8F0] border-[#E2E8F0]')
                                    : (isDark ? 'bg-white/10 hover:bg-white/20 border-white/20' : 'bg-white/80 hover:bg-white border-[#E2E8F0] shadow-sm')
                            ]"
                            aria-label="Toggle theme"
                        >
                            <!-- Sun Icon -->
                            <svg
                                v-if="isDark"
                                class="h-5 w-5 text-[#FBBF24] transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <!-- Moon Icon -->
                            <svg
                                v-else
                                :class="['h-5 w-5 transition-transform duration-300', isScrolled ? 'text-[#475569]' : (isDark ? 'text-white' : 'text-[#475569]')]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        </button>

                        <router-link to="/volunteer" class="text-sm font-semibold transition-colors" :class="isScrolled ? (isDark ? 'text-[#38BDF8]' : 'text-[#0EA5E9]') : (isDark ? 'text-white' : 'text-[#475569]')">
                            Volunteer
                        </router-link>
                        <router-link to="/donate" class="btn-primary">
                            Donate Now
                        </router-link>
                    </div>

                    <!-- Mobile Menu Button -->
                    <div class="lg:hidden flex items-center gap-2">
                        <!-- Mobile Theme Toggle -->
                        <button
                            @click="toggleTheme"
                            :class="[
                                'flex h-9 w-9 items-center justify-center rounded-full transition-all border',
                                isScrolled
                                    ? (isDark ? 'bg-[#334155] border-[#475569]' : 'bg-[#F1F5F9] border-[#E2E8F0]')
                                    : (isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-[#E2E8F0] shadow-sm')
                            ]"
                            aria-label="Toggle theme"
                        >
                            <svg v-if="isDark" class="h-4 w-4 text-[#FBBF24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <svg v-else :class="['h-4 w-4', isScrolled ? 'text-[#475569]' : (isDark ? 'text-white' : 'text-[#475569]')]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        </button>

                        <button 
                            class="relative z-50 p-2" 
                            @click="toggleMobileMenu" 
                            aria-label="Toggle menu"
                        >
                            <div class="relative h-6 w-6">
                                <!-- Hamburger/Close Icon Lines -->
                                <span
                                    :class="[
                                        'absolute left-0 h-0.5 w-6 transition-all duration-300',
                                        isMobileMenuOpen 
                                            ? 'top-3 rotate-45 bg-[#0F172A] dark:bg-white' 
                                            : (isScrolled ? (isDark ? 'top-1 bg-white' : 'top-1 bg-[#0F172A]') : (isDark ? 'top-1 bg-white' : 'top-1 bg-[#0F172A]')),
                                    ]"
                                ></span>
                                <span
                                    :class="[
                                        'absolute left-0 top-3 h-0.5 w-6 transition-all duration-300',
                                        isMobileMenuOpen 
                                            ? 'opacity-0' 
                                            : (isScrolled ? (isDark ? 'opacity-100 bg-white' : 'opacity-100 bg-[#0F172A]') : (isDark ? 'opacity-100 bg-white' : 'opacity-100 bg-[#0F172A]')),
                                    ]"
                                ></span>
                                <span
                                    :class="[
                                        'absolute left-0 h-0.5 w-6 transition-all duration-300',
                                        isMobileMenuOpen 
                                            ? 'top-3 -rotate-45 bg-[#0F172A] dark:bg-white' 
                                            : (isScrolled ? (isDark ? 'top-5 bg-white' : 'top-5 bg-[#0F172A]') : (isDark ? 'top-5 bg-white' : 'top-5 bg-[#0F172A]')),
                                    ]"
                                ></span>
                            </div>
                        </button>
                    </div>
                </div>

                <!-- Mobile Menu -->
                <div
                    :class="[
                        'lg:hidden overflow-hidden transition-all duration-300',
                        isMobileMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0',
                    ]"
                >
                    <div :class="['rounded-2xl backdrop-blur-xl p-4 shadow-xl', isDark ? 'bg-[#1E293B]/95' : 'bg-white/95']">
                        <router-link
                            v-for="link in navLinks"
                            :key="link.name"
                            :to="link.href"
                            :class="[
                                'block rounded-lg px-4 py-3 transition-colors',
                                isDark ? 'text-[#CBD5E1] hover:bg-[#334155] hover:text-white' : 'text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A]'
                            ]"
                            @click="isMobileMenuOpen = false"
                        >
                            {{ link.name }}
                        </router-link>
                        <div :class="['mt-4 flex gap-3 border-t pt-4', isDark ? 'border-[#334155]' : 'border-[#E2E8F0]']">
                            <router-link to="/volunteer" class="flex-1 rounded-xl border-2 border-[#0EA5E9] py-3 text-center font-semibold text-[#0EA5E9]">
                                Volunteer
                            </router-link>
                            <router-link to="/donate" class="btn-primary flex-1 text-center">
                                Donate
                            </router-link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <!-- Main Content -->
        <main class="flex-1">
            <slot />
        </main>

        <!-- Footer -->
        <footer class="relative overflow-hidden bg-[#0F172A] dark:bg-[#0F172A] bg-[#F8FAFC]" style="min-height: 600px;">
            <!-- Background decoration -->
            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute top-0 left-1/4 h-48 w-48 sm:h-96 sm:w-96 rounded-full bg-[#0EA5E9]/5 dark:bg-[#0EA5E9]/5 bg-[#0EA5E9]/10 blur-3xl"></div>
                <div class="absolute bottom-0 right-1/4 h-48 w-48 sm:h-96 sm:w-96 rounded-full bg-[#8B5CF6]/5 dark:bg-[#8B5CF6]/5 bg-[#8B5CF6]/10 blur-3xl"></div>
            </div>

            <!-- Main Footer -->
            <div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div class="grid gap-12 lg:grid-cols-4">
                    <!-- Brand Column -->
                    <div class="lg:col-span-1">
                        <router-link to="/" class="group mb-6 flex items-center gap-3" style="min-height: 48px;">
                            <div class="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#10B981] shadow-lg transition-transform group-hover:scale-110">
                                <svg class="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 8h-3V5a1 1 0 00-1-1h-6a1 1 0 00-1 1v3H5a1 1 0 00-1 1v6a1 1 0 001 1h3v3a1 1 0 001 1h6a1 1 0 001-1v-3h3a1 1 0 001-1V9a1 1 0 00-1-1z" />
                                </svg>
                                <span class="absolute -top-1 -right-1 flex h-3 w-3">
                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
                                </span>
                            </div>
                            <div class="min-w-0">
                                <span class="text-xl font-bold text-[#0F172A] dark:text-white">Rural<span class="text-[#10B981]">Care</span></span>
                                <span class="block text-[10px] font-medium tracking-wider text-[#64748B]">HEALTHCARE FOR ALL</span>
                            </div>
                        </router-link>
                        <p class="mb-8 text-[#475569] dark:text-[#94A3B8]">
                            Bridging the healthcare gap in rural communities through accessible, affordable, and quality medical services since 2008.
                        </p>

                        <!-- Social Links -->
                        <div class="flex gap-3">
                            <a
                                v-for="social in socialLinks"
                                :key="social.name"
                                :href="social.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E2E8F0] dark:bg-white/5 text-[#475569] dark:text-[#94A3B8] transition-all hover:bg-gradient-to-br hover:from-[#0EA5E9] hover:to-[#8B5CF6] hover:text-white"
                                :aria-label="social.name"
                            >
                                <svg v-if="social.icon === 'facebook'" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                                </svg>
                                <svg v-else-if="social.icon === 'twitter'" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                                </svg>
                                <svg v-else-if="social.icon === 'instagram'" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                <svg v-else-if="social.icon === 'linkedin'" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                <svg v-else class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div class="hidden lg:block">
                        <h3 class="mb-6 text-lg font-bold text-[#0F172A] dark:text-white">Quick Links</h3>
                        <ul class="space-y-4">
                            <li v-for="link in quickLinks" :key="link.name">
                                <router-link :to="link.href" class="group flex items-center gap-2 text-[#475569] dark:text-[#94A3B8] transition-colors hover:text-[#0F172A] dark:hover:text-white">
                                    <span class="h-1.5 w-1.5 rounded-full bg-[#0EA5E9] opacity-0 transition-opacity group-hover:opacity-100"></span>
                                    {{ link.name }}
                                </router-link>
                            </li>
                        </ul>
                    </div>

                    <!-- Our Services -->
                    <div>
                        <h3 class="mb-6 text-lg font-bold text-[#0F172A] dark:text-white">Our Services</h3>
                        <ul class="space-y-4">
                            <li v-for="service in services" :key="service.name">
                                <router-link :to="service.href" class="group flex items-center gap-2 text-[#475569] dark:text-[#94A3B8] transition-colors hover:text-[#0F172A] dark:hover:text-white">
                                    <span class="h-1.5 w-1.5 rounded-full bg-[#10B981] opacity-0 transition-opacity group-hover:opacity-100"></span>
                                    {{ service.name }}
                                </router-link>
                            </li>
                        </ul>
                    </div>

                    <!-- Contact Info -->
                    <div>
                        <h3 class="mb-6 text-lg font-bold text-[#0F172A] dark:text-white">Contact Us</h3>
                        <ul class="space-y-4">
                            <li class="flex gap-4">
                                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0EA5E9]/10">
                                    <svg class="h-5 w-5 text-[#0EA5E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span class="text-[#475569] dark:text-[#94A3B8]">{{ contact.address }}</span>
                            </li>
                            <li class="flex gap-4">
                                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#10B981]/10">
                                    <svg class="h-5 w-5 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <a :href="`tel:${contact.phone}`" class="text-[#475569] dark:text-[#94A3B8] transition-colors hover:text-[#0F172A] dark:hover:text-white">{{ contact.phone }}</a>
                            </li>
                            <li class="flex gap-4">
                                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#8B5CF6]/10">
                                    <svg class="h-5 w-5 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <a :href="`mailto:${contact.email}`" class="text-[#475569] dark:text-[#94A3B8] transition-colors hover:text-[#0F172A] dark:hover:text-white">{{ contact.email }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="relative border-t border-white/10 dark:border-white/10 border-[#E2E8F0]">
                <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <p class="text-sm text-[#64748B]">
                            &copy; {{ currentYear }} CareRural Foundation. All rights reserved. | 501(c)(3) Non-Profit Organization
                        </p>
                        <div class="flex gap-6">
                            <a href="#" class="text-sm text-[#64748B] transition-colors hover:text-[#0F172A] dark:hover:text-white">Privacy Policy</a>
                            <a href="#" class="text-sm text-[#64748B] transition-colors hover:text-[#0F172A] dark:hover:text-white">Terms of Service</a>
                            <a href="#" class="text-sm text-[#64748B] transition-colors hover:text-[#0F172A] dark:hover:text-white">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
