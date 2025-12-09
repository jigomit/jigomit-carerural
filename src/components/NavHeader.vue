<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Impact', href: '#impact' },
    { name: 'Stories', href: '#testimonials' },
    { name: 'Get Involved', href: '#get-involved' },
];

function handleScroll(): void {
    isScrolled.value = window.scrollY > 50;
}

function toggleMobileMenu(): void {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMobileMenu(): void {
    isMobileMenuOpen.value = false;
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <header
        :class="[
            'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
            isScrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-5',
        ]"
    >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <a href="#home" class="group flex items-center gap-3">
                    <div class="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                        <div class="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-xl font-bold text-[#0F172A]">CareRural</span>
                        <span class="text-[10px] font-medium tracking-wider text-[#94A3B8]">HEALTHCARE FOR ALL</span>
                    </div>
                </a>

                <!-- Desktop Navigation -->
                <nav class="hidden items-center gap-1 md:flex">
                    <a
                        v-for="link in navLinks"
                        :key="link.name"
                        :to="link.href"
                        class="relative px-4 py-2 text-sm font-medium text-[#475569] transition-colors duration-200 hover:text-[#0EA5E9]"
                    >
                        {{ link.name }}
                        <span class="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] transition-transform duration-300 hover:scale-x-100"></span>
                    </a>
                    <a href="#donate" class="btn-primary ml-4 inline-flex items-center gap-2 text-sm">
                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>Donate</span>
                    </a>
                </nav>

                <!-- Mobile Menu Button -->
                <button
                    class="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#F1F5F9] transition-colors hover:bg-[#E2E8F0] md:hidden"
                    @click="toggleMobileMenu"
                    aria-label="Toggle menu"
                >
                    <div class="relative h-5 w-5">
                        <span
                            :class="[
                                'absolute left-0 h-0.5 w-5 rounded-full bg-[#0F172A] transition-all duration-300',
                                isMobileMenuOpen ? 'top-2.5 rotate-45' : 'top-1',
                            ]"
                        ></span>
                        <span
                            :class="[
                                'absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-[#0F172A] transition-all duration-300',
                                isMobileMenuOpen ? 'opacity-0' : 'opacity-100',
                            ]"
                        ></span>
                        <span
                            :class="[
                                'absolute left-0 h-0.5 w-5 rounded-full bg-[#0F172A] transition-all duration-300',
                                isMobileMenuOpen ? 'top-2.5 -rotate-45' : 'top-4',
                            ]"
                        ></span>
                    </div>
                </button>
            </div>

            <!-- Mobile Navigation -->
            <transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 -translate-y-4 scale-95"
                enter-to-class="opacity-100 translate-y-0 scale-100"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 translate-y-0 scale-100"
                leave-to-class="opacity-0 -translate-y-4 scale-95"
            >
                <nav v-if="isMobileMenuOpen" class="glass mt-4 flex flex-col gap-2 rounded-2xl p-4 shadow-xl md:hidden">
                    <a
                        v-for="link in navLinks"
                        :key="link.name"
                        :to="link.href"
                        class="rounded-xl px-4 py-3 font-medium text-[#475569] transition-all duration-200 hover:bg-[#0EA5E9]/10 hover:text-[#0EA5E9]"
                        @click="closeMobileMenu"
                    >
                        {{ link.name }}
                    </a>
                    <a
                        href="#donate"
                        class="btn-primary mt-2 text-center"
                        @click="closeMobileMenu"
                    >
                        Donate Now
                    </a>
                </nav>
            </transition>
        </div>
    </header>
</template>
