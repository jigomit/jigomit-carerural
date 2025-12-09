<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(false);
const counters = ref([0, 0, 0, 0]);

const stats = [
    { target: 50000, label: 'Patients Treated', suffix: '+', icon: 'users', color: 'from-[#0EA5E9] to-[#0284C7]' },
    { target: 200, label: 'Villages Reached', suffix: '+', icon: 'location', color: 'from-[#10B981] to-[#059669]' },
    { target: 150, label: 'Volunteer Doctors', suffix: '+', icon: 'doctor', color: 'from-[#8B5CF6] to-[#7C3AED]' },
    { target: 500, label: 'Medical Camps', suffix: '+', icon: 'camp', color: 'from-[#F59E0B] to-[#D97706]' },
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

    const section = document.getElementById('impact');
    if (section) {
        observer.observe(section);
    }
});

function formatNumber(num: number): string {
    if (num >= 1000) {
        return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + 'K';
    }
    return num.toString();
}
</script>

<template>
    <section id="impact" class="relative overflow-hidden py-24 lg:py-32">
        <!-- Background Image -->
        <div class="absolute inset-0">
            <img
                src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1920&q=80"
                alt="Medical camp background"
                class="h-full w-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-br from-[#0F172A]/95 via-[#1E293B]/90 to-[#0F172A]/95"></div>
        </div>

        <!-- Animated particles -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-[#0EA5E9] animate-float opacity-50"></div>
            <div class="absolute top-1/3 right-1/4 h-3 w-3 rounded-full bg-[#10B981] animate-float-reverse opacity-50" style="animation-delay: 1s;"></div>
            <div class="absolute bottom-1/4 left-1/3 h-2 w-2 rounded-full bg-[#8B5CF6] animate-float opacity-50" style="animation-delay: 2s;"></div>
            <div class="absolute bottom-1/3 right-1/3 h-4 w-4 rounded-full bg-[#F59E0B] animate-float-reverse opacity-50" style="animation-delay: 3s;"></div>
        </div>

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="mx-auto mb-16 max-w-3xl text-center" :class="[isVisible ? 'animate-fade-in' : 'opacity-0']">
                <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                    <div class="h-1.5 w-1.5 rounded-full bg-[#10B981]"></div>
                    <span class="text-sm font-semibold text-[#10B981]">Our Impact</span>
                </div>
                <h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                    Making a <span class="text-[#0EA5E9]">Real Difference</span>
                </h2>
                <div class="mx-auto mb-6 h-1 w-20 rounded bg-gradient-to-r from-[#0EA5E9] via-[#8B5CF6] to-[#EC4899]"></div>
                <p class="text-lg text-white/70">
                    Every number represents a life touched, a community served, and hope restored.
                </p>
            </div>

            <!-- Stats Grid -->
            <div class="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div
                    v-for="(stat, index) in stats"
                    :key="stat.label"
                    class="group"
                    :class="[isVisible ? 'animate-fade-in' : 'opacity-0']"
                    :style="{ animationDelay: `${index * 150}ms` }"
                >
                    <div class="card-glass relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-500 hover:bg-white/20">
                        <!-- Gradient border -->
                        <div :class="['absolute inset-x-0 top-0 h-1 bg-gradient-to-r', stat.color]"></div>

                        <!-- Icon -->
                        <div :class="['mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg transition-transform duration-300 group-hover:scale-110', stat.color]">
                            <!-- Users Icon -->
                            <svg v-if="stat.icon === 'users'" class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <!-- Location Icon -->
                            <svg v-else-if="stat.icon === 'location'" class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <!-- Doctor Icon -->
                            <svg v-else-if="stat.icon === 'doctor'" class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <!-- Camp Icon -->
                            <svg v-else class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </div>

                        <!-- Counter -->
                        <p class="stat-number mb-2 text-5xl font-bold text-white lg:text-6xl">
                            {{ formatNumber(counters[index]) }}<span class="text-3xl">{{ stat.suffix }}</span>
                        </p>
                        <p class="font-medium text-white/70">{{ stat.label }}</p>
                    </div>
                </div>
            </div>

            <!-- Video Section -->
            <div :class="[isVisible ? 'animate-fade-in delay-600' : 'opacity-0']">
                <div class="relative overflow-hidden rounded-3xl">
                    <img
                        src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1920&q=80"
                        alt="Healthcare workers in action"
                        class="aspect-video w-full object-cover"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-[#0F172A]/40"></div>

                    <!-- Play Button -->
                    <div class="absolute inset-0 flex flex-col items-center justify-center">
                        <button class="group mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-2xl transition-transform hover:scale-110">
                            <div class="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6]">
                                <svg class="ml-1 h-10 w-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </button>
                        <h3 class="mb-2 text-2xl font-bold text-white sm:text-3xl">Watch Our Impact Story</h3>
                        <p class="text-white/70">See how we're transforming rural healthcare</p>
                    </div>

                    <!-- Video duration badge -->
                    <div class="absolute right-6 bottom-6 rounded-full bg-black/50 px-4 py-2 backdrop-blur-sm">
                        <span class="text-sm font-medium text-white">3:45</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
