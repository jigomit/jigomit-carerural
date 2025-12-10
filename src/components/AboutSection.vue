<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

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

    const section = document.getElementById('about');
    if (section) {
        observer.observe(section);
    }
});

const features = [
    {
        icon: 'heart',
        title: 'Compassionate Care',
        description: 'Treating every patient with dignity, regardless of ability to pay.',
        color: 'from-[#EC4899] to-[#F43F5E]',
    },
    {
        icon: 'users',
        title: 'Community First',
        description: 'Programs designed with local communities for culturally appropriate care.',
        color: 'from-[#8B5CF6] to-[#7C3AED]',
    },
    {
        icon: 'shield',
        title: 'Quality Standards',
        description: 'Maintaining highest medical standards with qualified professionals.',
        color: 'from-[#0EA5E9] to-[#0284C7]',
    },
    {
        icon: 'globe',
        title: 'Lasting Impact',
        description: 'Building local capacity for sustainable healthcare improvements.',
        color: 'from-[#10B981] to-[#059669]',
    },
];
</script>

<template>
    <section id="about" class="relative overflow-hidden bg-white py-24 lg:py-32">
        <!-- Background decoration -->
        <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#0EA5E9]/5 to-[#8B5CF6]/5 blur-3xl"></div>

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid items-center gap-16 lg:grid-cols-2">
                <!-- Image Side -->
                <div :class="['relative', isVisible ? 'animate-fade-in-left' : 'opacity-0']">
                    <div class="relative">
                        <!-- Main image -->
                        <div class="img-shine relative overflow-hidden rounded-3xl shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80"
                                alt="Healthcare team serving rural community"
                                class="img-cover aspect-square w-full"
                            />
                        </div>

                        <!-- Secondary image -->
                        <div class="absolute -bottom-8 -right-8 w-48 overflow-hidden rounded-2xl border-4 border-white shadow-xl lg:w-64">
                            <img
                                src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=400&q=80"
                                alt="Doctor examining patient"
                                class="img-cover aspect-square"
                            />
                        </div>

                        <!-- Experience badge -->
                        <div class="absolute left-2 sm:left-4 md:-left-4 bottom-2 sm:bottom-4 md:-bottom-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] p-3 sm:p-4 md:p-6 text-white shadow-xl lg:-left-8">
                            <p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">15+</p>
                            <p class="text-[10px] sm:text-xs md:text-sm font-medium text-white/80 leading-tight">Years of Service</p>
                        </div>

                        <!-- Decorative elements -->
                        <div class="absolute -top-6 -right-6 -z-10 h-full w-full rounded-3xl border-2 border-dashed border-[#0EA5E9]/30"></div>
                    </div>
                </div>

                <!-- Content Side -->
                <div :class="[isVisible ? 'animate-fade-in-right' : 'opacity-0']">
                    <div class="inline-flex items-center gap-2 rounded-full bg-[#0EA5E9]/10 px-4 py-2 mb-6">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]"></div>
                        <span class="text-sm font-semibold text-[#0EA5E9]">About CareRural</span>
                    </div>

                    <h2 class="mb-6 text-3xl font-bold text-[#0F172A] sm:text-4xl lg:text-5xl">
                        Bridging the
                        <span class="gradient-text">Healthcare Gap</span>
                    </h2>

                    <div class="section-divider mb-8"></div>

                    <p class="mb-6 text-lg leading-relaxed text-[#475569]">
                        CareRural Foundation was born from a simple belief: geographical isolation should never be a barrier to quality healthcare. Every person deserves access to medical care, regardless of where they live.
                    </p>

                    <p class="mb-10 text-lg leading-relaxed text-[#475569]">
                        Through our innovative programs, we've transformed healthcare access in over <strong class="text-[#0F172A]">200 villages</strong>, serving more than <strong class="text-[#0F172A]">50,000 patients</strong> annually with compassion and excellence.
                    </p>

                    <!-- Features Grid -->
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div
                            v-for="(feature, index) in features"
                            :key="feature.title"
                            class="group flex gap-4"
                            :class="[isVisible ? 'animate-fade-in' : 'opacity-0']"
                            :style="{ animationDelay: `${(index + 2) * 150}ms` }"
                        >
                            <div :class="['flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br transition-transform group-hover:scale-110', feature.color]">
                                <!-- Heart Icon -->
                                <svg v-if="feature.icon === 'heart'" class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <!-- Users Icon -->
                                <svg v-else-if="feature.icon === 'users'" class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                <!-- Shield Icon -->
                                <svg v-else-if="feature.icon === 'shield'" class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <!-- Globe Icon -->
                                <svg v-else class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-bold text-[#0F172A]">{{ feature.title }}</h3>
                                <p class="text-sm text-[#475569]">{{ feature.description }}</p>
                            </div>
                        </div>
                    </div>

                    <a href="#services" class="btn-primary mt-10 inline-flex items-center gap-2 group">
                        <span>Explore Our Services</span>
                        <svg class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
