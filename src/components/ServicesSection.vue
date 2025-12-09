<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(false);
const activeService = ref(0);

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isVisible.value = true;
                }
            });
        },
        { threshold: 0.1 },
    );

    const section = document.getElementById('services');
    if (section) {
        observer.observe(section);
    }
});

const services = [
    {
        id: 1,
        icon: 'truck',
        title: 'Mobile Medical Camps',
        shortDesc: 'Bringing healthcare directly to remote villages',
        fullDesc: 'Our mobile medical units travel to underserved villages, providing comprehensive healthcare services including general check-ups, vaccinations, maternal care, and basic surgeries.',
        features: ['General Health Checkups', 'Vaccination Drives', 'Maternal & Child Care', 'Basic Laboratory Tests', 'Health Education'],
        image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80',
        gradient: 'from-[#0EA5E9] to-[#0284C7]',
        lightGradient: 'from-[#0EA5E9]/10 to-[#0284C7]/10',
    },
    {
        id: 2,
        icon: 'medicine',
        title: 'Low-Cost Medicine Program',
        shortDesc: 'Making essential medicines affordable for all',
        fullDesc: 'Through partnerships with pharmaceutical companies, we provide essential medications at up to 80% lower than market prices, ensuring rural communities have access to quality healthcare.',
        features: ['Generic Medicines', 'Chronic Disease Management', 'Emergency Medications', 'Prescription Support', 'Medicine Delivery'],
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80',
        gradient: 'from-[#10B981] to-[#059669]',
        lightGradient: 'from-[#10B981]/10 to-[#059669]/10',
    },
    {
        id: 3,
        icon: 'doctor',
        title: 'Doctor Volunteer Network',
        shortDesc: 'Connecting skilled doctors with rural communities',
        fullDesc: 'Our network of 150+ volunteer doctors from leading hospitals dedicates their time to serve rural patients through consultations, treatments, and mentorship programs.',
        features: ['Specialist Consultations', 'Telemedicine Services', 'Training Programs', 'Emergency Response', 'Follow-up Care'],
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
        gradient: 'from-[#8B5CF6] to-[#7C3AED]',
        lightGradient: 'from-[#8B5CF6]/10 to-[#7C3AED]/10',
    },
];

function setActiveService(index: number): void {
    activeService.value = index;
}
</script>

<template>
    <section id="services" class="relative overflow-hidden bg-[#F8FAFC] py-24 lg:py-32">
        <!-- Background elements -->
        <div class="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-white to-transparent"></div>
        <div class="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#8B5CF6]/10 to-[#EC4899]/10 blur-3xl"></div>

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="mx-auto mb-16 max-w-3xl text-center" :class="[isVisible ? 'animate-fade-in' : 'opacity-0']">
                <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#8B5CF6]/10 px-4 py-2">
                    <div class="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]"></div>
                    <span class="text-sm font-semibold text-[#8B5CF6]">Our Services</span>
                </div>
                <h2 class="mb-4 text-3xl font-bold text-[#0F172A] sm:text-4xl lg:text-5xl">
                    Comprehensive <span class="gradient-text">Healthcare Solutions</span>
                </h2>
                <div class="section-divider mx-auto mb-6"></div>
                <p class="text-lg text-[#475569]">
                    We provide end-to-end healthcare solutions designed specifically for rural communities, focusing on accessibility, affordability, and quality.
                </p>
            </div>

            <!-- Service Cards -->
            <div class="mb-16 grid gap-8 md:grid-cols-3">
                <div
                    v-for="(service, index) in services"
                    :key="service.id"
                    class="card-modern group cursor-pointer overflow-hidden p-1"
                    :class="[
                        isVisible ? 'animate-fade-in' : 'opacity-0',
                        activeService === index ? 'ring-2 ring-offset-4' : '',
                    ]"
                    :style="{
                        animationDelay: `${index * 150}ms`,
                        '--tw-ring-color': activeService === index ? (index === 0 ? '#0EA5E9' : index === 1 ? '#10B981' : '#8B5CF6') : 'transparent',
                    }"
                    @click="setActiveService(index)"
                >
                    <div class="relative overflow-hidden rounded-[1.25rem] p-6">
                        <!-- Background gradient on hover -->
                        <div :class="['absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br', service.lightGradient]"></div>

                        <!-- Content -->
                        <div class="relative">
                            <!-- Icon -->
                            <div :class="['mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg transition-transform duration-300 group-hover:scale-110', service.gradient]">
                                <!-- Truck Icon -->
                                <svg v-if="service.icon === 'truck'" class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                </svg>
                                <!-- Medicine Icon -->
                                <svg v-else-if="service.icon === 'medicine'" class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                                <!-- Doctor Icon -->
                                <svg v-else class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <h3 class="mb-3 text-xl font-bold text-[#0F172A]">{{ service.title }}</h3>
                            <p class="mb-4 text-[#475569]">{{ service.shortDesc }}</p>

                            <!-- Learn More -->
                            <div class="flex items-center gap-2 font-semibold transition-colors" :class="index === 0 ? 'text-[#0EA5E9]' : index === 1 ? 'text-[#10B981]' : 'text-[#8B5CF6]'">
                                <span class="text-sm">Learn More</span>
                                <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Expanded Service Detail -->
            <div class="card-modern overflow-hidden shadow-2xl" :class="[isVisible ? 'animate-fade-in-scale delay-500' : 'opacity-0']">
                <div class="grid lg:grid-cols-2">
                    <!-- Image Side -->
                    <div class="relative overflow-hidden">
                        <img
                            :src="services[activeService].image"
                            :alt="services[activeService].title"
                            class="img-cover h-full min-h-[300px] w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div :class="['absolute inset-0 bg-gradient-to-t to-transparent opacity-60', `from-${activeService === 0 ? '[#0EA5E9]' : activeService === 1 ? '[#10B981]' : '[#8B5CF6]'}`]"></div>

                        <!-- Play button overlay -->
                        <div class="absolute inset-0 flex items-center justify-center">
                            <button class="group/play flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-2xl backdrop-blur-sm transition-transform hover:scale-110">
                                <svg class="ml-1 h-8 w-8 text-[#0F172A]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Content Side -->
                    <div class="p-8 lg:p-12">
                        <div :class="['mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2', services[activeService].lightGradient]">
                            <div :class="['h-1.5 w-1.5 rounded-full', activeService === 0 ? 'bg-[#0EA5E9]' : activeService === 1 ? 'bg-[#10B981]' : 'bg-[#8B5CF6]']"></div>
                            <span :class="['text-sm font-semibold', activeService === 0 ? 'text-[#0EA5E9]' : activeService === 1 ? 'text-[#10B981]' : 'text-[#8B5CF6]']">Featured Program</span>
                        </div>

                        <h3 class="mb-4 text-2xl font-bold text-[#0F172A] lg:text-3xl">{{ services[activeService].title }}</h3>
                        <p class="mb-8 text-lg text-[#475569]">{{ services[activeService].fullDesc }}</p>

                        <h4 class="mb-4 font-bold text-[#0F172A]">Key Features:</h4>
                        <ul class="mb-8 grid gap-3 sm:grid-cols-2">
                            <li v-for="feature in services[activeService].features" :key="feature" class="flex items-center gap-3">
                                <span :class="['flex h-6 w-6 shrink-0 items-center justify-center rounded-full', services[activeService].lightGradient]">
                                    <svg :class="['h-4 w-4', activeService === 0 ? 'text-[#0EA5E9]' : activeService === 1 ? 'text-[#10B981]' : 'text-[#8B5CF6]']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span class="text-[#475569]">{{ feature }}</span>
                            </li>
                        </ul>

                        <a href="#get-involved" :class="['inline-flex items-center gap-2 rounded-full px-8 py-3 font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-xl bg-gradient-to-r', services[activeService].gradient]">
                            <span>Get Involved</span>
                            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
