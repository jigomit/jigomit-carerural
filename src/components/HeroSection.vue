<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isLoaded = ref(false);

onMounted(() => {
    setTimeout(() => {
        isLoaded.value = true;
    }, 100);
});
</script>

<template>
    <section id="home" class="relative min-h-screen overflow-hidden bg-[#F8FAFC]">
        <!-- Animated Background -->
        <div class="absolute inset-0 gradient-mesh"></div>

        <!-- Animated Blobs -->
        <div class="absolute top-20 -right-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#0EA5E9]/20 to-[#8B5CF6]/20 blur-3xl animate-blob"></div>
        <div class="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#10B981]/20 to-[#0EA5E9]/20 blur-3xl animate-blob" style="animation-delay: 2s;"></div>
        <div class="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#EC4899]/10 to-[#F59E0B]/10 blur-3xl animate-blob" style="animation-delay: 4s;"></div>

        <!-- Floating Elements -->
        <div class="absolute top-32 left-[10%] animate-float opacity-60">
            <div class="h-3 w-3 rounded-full bg-[#0EA5E9]"></div>
        </div>
        <div class="absolute top-48 right-[15%] animate-float-reverse opacity-60" style="animation-delay: 1s;">
            <div class="h-4 w-4 rounded-full bg-[#10B981]"></div>
        </div>
        <div class="absolute bottom-32 left-[20%] animate-float opacity-60" style="animation-delay: 2s;">
            <div class="h-2 w-2 rounded-full bg-[#8B5CF6]"></div>
        </div>
        <div class="absolute top-64 right-[25%] animate-float-reverse opacity-60" style="animation-delay: 3s;">
            <div class="h-5 w-5 rounded-full bg-[#F59E0B]"></div>
        </div>

        <div class="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center px-4 pt-28 pb-16 sm:px-6 lg:flex-row lg:pt-32 lg:px-8">
            <!-- Text Content -->
            <div class="flex-1 text-center lg:text-left" :class="[isLoaded ? 'animate-fade-in-left' : 'opacity-0']">
                <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#10B981]/10 to-[#0EA5E9]/10 px-5 py-2.5 backdrop-blur-sm">
                    <span class="relative flex h-2 w-2">
                        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75"></span>
                        <span class="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]"></span>
                    </span>
                    <span class="text-sm font-semibold text-[#10B981]">Serving 200+ Rural Villages</span>
                </div>

                <h1 class="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl xl:text-7xl">
                    Quality Healthcare
                    <span class="block gradient-text">For Every Village</span>
                </h1>

                <p class="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-[#475569] lg:mx-0 lg:text-xl">
                    We bring world-class medical care to underserved rural communities through mobile clinics, affordable medicines, and dedicated volunteer doctors.
                </p>

                <div class="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                    <a href="#get-involved" class="btn-primary group inline-flex items-center justify-center gap-2">
                        <span>Join Our Mission</span>
                        <svg class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a href="#about" class="btn-outline group inline-flex items-center justify-center gap-2">
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Watch Our Story</span>
                    </a>
                </div>

                <!-- Quick Stats -->
                <div class="mt-14 grid grid-cols-3 gap-8">
                    <div :class="[isLoaded ? 'animate-fade-in delay-200' : 'opacity-0']">
                        <p class="stat-number text-4xl font-bold gradient-text lg:text-5xl">50K+</p>
                        <p class="mt-1 text-sm font-medium text-[#475569]">Patients Served</p>
                    </div>
                    <div :class="[isLoaded ? 'animate-fade-in delay-400' : 'opacity-0']">
                        <p class="stat-number text-4xl font-bold gradient-text-alt lg:text-5xl">200+</p>
                        <p class="mt-1 text-sm font-medium text-[#475569]">Villages Reached</p>
                    </div>
                    <div :class="[isLoaded ? 'animate-fade-in delay-600' : 'opacity-0']">
                        <p class="stat-number text-4xl font-bold text-[#F59E0B] lg:text-5xl">150+</p>
                        <p class="mt-1 text-sm font-medium text-[#475569]">Volunteer Doctors</p>
                    </div>
                </div>
            </div>

            <!-- Hero Image -->
            <div class="mt-12 flex-1 lg:mt-0 lg:pl-12" :class="[isLoaded ? 'animate-fade-in-right' : 'opacity-0']">
                <div class="relative">
                    <!-- Main image -->
                    <div class="relative overflow-hidden rounded-3xl shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                            alt="Medical professionals helping rural patients"
                            class="img-cover aspect-[4/3] w-full max-w-lg"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent"></div>
                    </div>

                    <!-- Floating card 1 -->
                    <div class="card-glass absolute -bottom-6 -left-6 animate-float rounded-2xl p-4 shadow-xl">
                        <div class="flex items-center gap-3">
                            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669]">
                                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <p class="font-bold text-[#0F172A]">Free Checkups</p>
                                <p class="text-sm text-[#475569]">Every Sunday</p>
                            </div>
                        </div>
                    </div>

                    <!-- Floating card 2 -->
                    <div class="card-glass absolute -top-4 -right-4 animate-float rounded-2xl p-4 shadow-xl" style="animation-delay: 1s;">
                        <div class="flex items-center gap-3">
                            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706]">
                                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div>
                                <p class="font-bold text-[#0F172A]">Expert Doctors</p>
                                <p class="text-sm text-[#475569]">150+ Volunteers</p>
                            </div>
                        </div>
                    </div>

                    <!-- Decorative circle -->
                    <div class="absolute -bottom-10 -right-10 -z-10 h-40 w-40 rounded-full bg-gradient-to-br from-[#0EA5E9]/30 to-[#8B5CF6]/30 blur-2xl"></div>
                </div>
            </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
            <a href="#about" class="flex flex-col items-center gap-2 text-[#475569] transition-colors hover:text-[#0EA5E9]">
                <span class="text-xs font-medium tracking-wider uppercase">Scroll</span>
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </a>
        </div>

        <!-- Wave divider -->
        <div class="absolute bottom-0 left-0 right-0">
            <svg class="w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M0 50L60 45.8C120 41.7 240 33.3 360 35.4C480 37.5 600 50 720 54.2C840 58.3 960 54.2 1080 50C1200 45.8 1320 41.7 1380 39.6L1440 37.5V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="white"/>
            </svg>
        </div>
    </section>
</template>
