<script setup lang="ts">

import { ref } from 'vue';


const activeService = ref(0);

const services = [
    {
        id: 1,
        icon: 'truck',
        title: 'Mobile Medical Camps',
        shortDesc: 'State-of-the-art mobile clinics bringing comprehensive healthcare to remote villages',
        fullDesc: 'Our fleet of 15 fully-equipped mobile medical units travel to underserved villages on a regular schedule, providing comprehensive healthcare services including general check-ups, vaccinations, maternal care, minor surgeries, and diagnostic services.',
        image: '/Gemini_Generated_Image_rz9p6xrz9p6xrz9p.png',
        gradient: 'from-[#0EA5E9] to-[#0284C7]',
        features: [
            'General health screenings and checkups',
            'Vaccination and immunization drives',
            'Maternal and child healthcare',
            'Basic laboratory and diagnostic tests',
            'Minor surgical procedures',
            'Dental care services',
            'Eye examinations and glasses',
            'Health education sessions',
        ],
        stats: [
            { value: '15', label: 'Mobile Units' },
            { value: '350+', label: 'Villages Served' },
            { value: '50K+', label: 'Patients Annually' },
        ],
    },
    {
        id: 2,
        icon: 'medicine',
        title: 'Low-Cost Medicine Program',
        shortDesc: 'Essential medications at up to 80% lower than market prices',
        fullDesc: 'Through strategic partnerships with pharmaceutical manufacturers and generic medicine suppliers, we operate a network of 45 rural pharmacies providing quality medications at dramatically reduced costs, ensuring no patient has to choose between food and medicine.',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80',
        gradient: 'from-[#10B981] to-[#059669]',
        features: [
            'Generic and essential medicines',
            'Chronic disease management medications',
            'Emergency and acute care drugs',
            'Prescription fulfillment support',
            'Medicine delivery to doorstep',
            'Drug interaction counseling',
            'Proper storage and handling',
            'Expiry date management',
        ],
        stats: [
            { value: '45', label: 'Rural Pharmacies' },
            { value: '80%', label: 'Cost Savings' },
            { value: '500+', label: 'Medicine Types' },
        ],
    },
    {
        id: 3,
        icon: 'doctor',
        title: 'Doctor Volunteer Network',
        shortDesc: 'Over 200 medical professionals dedicating their expertise',
        fullDesc: 'Our network of volunteer doctors from prestigious medical institutions across the country dedicates their time and expertise to serve rural patients. They participate in medical camps, provide telemedicine consultations, and mentor local healthcare workers.',
        image: '/Gemini_Generated_Image_fejox6fejox6fejo.png',
        gradient: 'from-[#8B5CF6] to-[#7C3AED]',
        features: [
            'Specialist consultations',
            'Complex case management',
            'Telemedicine services',
            'Surgical missions',
            'Training and mentorship',
            'Research and documentation',
            'Emergency response team',
            'Second opinion services',
        ],
        stats: [
            { value: '200+', label: 'Volunteer Doctors' },
            { value: '25', label: 'Specialties' },
            { value: '10K+', label: 'Consultations/Year' },
        ],
    },
    {
        id: 4,
        icon: 'telemedicine',
        title: 'Telemedicine Services',
        shortDesc: 'Virtual healthcare consultations bridging the distance',
        fullDesc: 'Our telemedicine platform connects rural patients with specialists across the country through video consultations. With 50+ telemedicine kiosks in village health centers, patients can receive expert medical advice without traveling long distances.',
        image: '/Gemini_Generated_Image_ey45iaey45iaey45.png',
        gradient: 'from-[#EC4899] to-[#DB2777]',
        features: [
            'Video consultations with specialists',
            'Remote diagnostic support',
            'Digital health records',
            'Prescription delivery',
            'Follow-up care coordination',
            'Mental health counseling',
            'Chronic disease monitoring',
            '24/7 emergency helpline',
        ],
        stats: [
            { value: '50+', label: 'Telemedicine Kiosks' },
            { value: '24/7', label: 'Availability' },
            { value: '15K+', label: 'Virtual Visits/Year' },
        ],
    },
    {
        id: 5,
        icon: 'emergency',
        title: 'Emergency Response',
        shortDesc: 'Rapid medical assistance when every second counts',
        fullDesc: 'Our emergency response team is equipped to handle medical emergencies in rural areas. With strategically placed ambulances and trained first responders, we ensure critical patients receive timely care and safe transport to appropriate facilities.',
        image: '/Gemini_Generated_Image_9rqv1q9rqv1q9rqv.png',
        gradient: 'from-[#EF4444] to-[#DC2626]',
        features: [
            'Ambulance services',
            'First responder teams',
            'Emergency stabilization',
            'Patient transport',
            'Trauma care',
            'Emergency hotline',
            'Disaster response',
            'Hospital coordination',
        ],
        stats: [
            { value: '20', label: 'Ambulances' },
            { value: '<30min', label: 'Response Time' },
            { value: '5K+', label: 'Lives Saved' },
        ],
    },
    {
        id: 6,
        icon: 'maternal',
        title: 'Maternal & Child Health',
        shortDesc: 'Comprehensive care for mothers and children',
        fullDesc: 'Our maternal and child health program provides prenatal care, safe delivery services, postnatal support, and pediatric care. We have helped reduce maternal and infant mortality rates significantly in the communities we serve.',
        image: '/Gemini_Generated_Image_ekwo63ekwo63ekwo.png',
        gradient: 'from-[#F59E0B] to-[#D97706]',
        features: [
            'Prenatal care and monitoring',
            'Safe delivery services',
            'Postnatal care',
            'Pediatric healthcare',
            'Immunization programs',
            'Nutrition counseling',
            'Growth monitoring',
            'Family planning services',
        ],
        stats: [
            { value: '10K+', label: 'Safe Deliveries' },
            { value: '60%', label: 'Mortality Reduction' },
            { value: '25K+', label: 'Children Vaccinated' },
        ],
    },
];

function setActiveService(index: number): void {
    activeService.value = index;
}
</script>

<template>
    
    
        <!-- Hero Section -->
        <section class="relative overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] pt-24 sm:pt-28 md:pt-32 pb-24">
            <div class="absolute inset-0">
                <div class="blob absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#8B5CF6]/10 dark:bg-[#8B5CF6]/20 blur-3xl"></div>
                <div class="blob absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#0EA5E9]/10 dark:bg-[#0EA5E9]/20 blur-3xl"></div>
            </div>

            <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#8B5CF6]/10 dark:bg-white/10 px-4 py-2 backdrop-blur-sm border border-[#8B5CF6]/20 dark:border-transparent">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]"></div>
                        <span class="text-sm font-semibold text-[#8B5CF6]">Our Services</span>
                    </div>
                    <h1 class="mb-6 text-4xl font-bold text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl">
                        Comprehensive <span class="gradient-text">Healthcare Solutions</span>
                    </h1>
                    <p class="text-lg text-[#475569] dark:text-white/70">
                        We provide a full spectrum of healthcare services designed to meet the unique needs of rural communities, ensuring quality care is accessible to all.
                    </p>
                </div>
            </div>
        </section>

        <!-- Services Grid -->
        <section class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div
                        v-for="(service, index) in services"
                        :key="service.id"
                        class="card-modern group cursor-pointer overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl"
                        :class="activeService === index ? 'ring-2 ring-[#0EA5E9]' : ''"
                        @click="setActiveService(index)"
                    >
                        <div class="relative h-48 overflow-hidden">
                            <img
                                :src="service.image"
                                :alt="service.title"
                                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent"></div>
                            <div :class="['absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br', service.gradient]">
                                <svg v-if="service.icon === 'truck'" class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                </svg>
                                <svg v-else-if="service.icon === 'medicine'" class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                                <svg v-else-if="service.icon === 'doctor'" class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <svg v-else-if="service.icon === 'telemedicine'" class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                <svg v-else-if="service.icon === 'emergency'" class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <svg v-else class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="mb-2 text-xl font-bold text-[#0F172A] dark:text-white">{{ service.title }}</h3>
                            <p class="text-[#475569] dark:text-[#94A3B8]">{{ service.shortDesc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Service Detail -->
        <section class="bg-[#F8FAFC] dark:bg-[#1E293B] py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="card-modern overflow-hidden shadow-2xl">
                    <div class="grid lg:grid-cols-2">
                        <!-- Image -->
                        <div class="relative h-64 lg:h-auto">
                            <img
                                :src="services[activeService].image"
                                :alt="services[activeService].title"
                                class="h-full w-full object-cover"
                            />
                            <div class="absolute inset-0 bg-gradient-to-r from-[#0F172A]/60 to-transparent"></div>
                        </div>

                        <!-- Content -->
                        <div class="p-8 lg:p-12">
                            <div :class="['mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2', `bg-gradient-to-r ${services[activeService].gradient} bg-opacity-10`]">
                                <span class="text-sm font-semibold text-white">Featured Service</span>
                            </div>

                            <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white">{{ services[activeService].title }}</h2>
                            <p class="mb-8 text-lg text-[#475569] dark:text-[#94A3B8]">{{ services[activeService].fullDesc }}</p>

                            <!-- Stats -->
                            <div class="mb-8 grid grid-cols-3 gap-4">
                                <div
                                    v-for="stat in services[activeService].stats"
                                    :key="stat.label"
                                    class="text-center"
                                >
                                    <p class="text-2xl font-bold text-[#0EA5E9]">{{ stat.value }}</p>
                                    <p class="text-sm text-[#64748B] dark:text-[#94A3B8]">{{ stat.label }}</p>
                                </div>
                            </div>

                            <!-- Features -->
                            <h4 class="mb-4 font-bold text-[#0F172A] dark:text-white">Key Features:</h4>
                            <ul class="mb-8 grid gap-3 sm:grid-cols-2">
                                <li
                                    v-for="feature in services[activeService].features"
                                    :key="feature"
                                    class="flex items-center gap-3"
                                >
                                    <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#10B981]/10">
                                        <svg class="h-4 w-4 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span class="text-sm text-[#475569] dark:text-[#94A3B8]">{{ feature }}</span>
                                </li>
                            </ul>

                            <div class="flex flex-col gap-4 sm:flex-row">
                                <router-link to="/contact" class="btn-primary text-center">
                                    Request Service
                                </router-link>
                                <router-link to="/donate" class="btn-secondary text-center">
                                    Support This Program
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- How It Works -->
        <section class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#10B981]/10 px-4 py-2">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#10B981]"></div>
                        <span class="text-sm font-semibold text-[#10B981]">Process</span>
                    </div>
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                        How Our Services Work
                    </h2>
                    <p class="text-lg text-[#475569] dark:text-[#94A3B8]">
                        A simple, patient-centered approach to healthcare delivery.
                    </p>
                </div>

                <div class="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div class="relative text-center">
                        <div class="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] text-2xl font-bold text-white shadow-lg">
                            1
                        </div>
                        <h3 class="mb-2 text-xl font-bold text-[#0F172A] dark:text-white">Community Outreach</h3>
                        <p class="text-[#475569] dark:text-[#94A3B8]">We identify underserved communities and assess their healthcare needs.</p>
                    </div>

                    <div class="relative text-center">
                        <div class="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] text-2xl font-bold text-white shadow-lg">
                            2
                        </div>
                        <h3 class="mb-2 text-xl font-bold text-[#0F172A] dark:text-white">Schedule Camps</h3>
                        <p class="text-[#475569] dark:text-[#94A3B8]">Regular medical camps are scheduled and announced to the community.</p>
                    </div>

                    <div class="relative text-center">
                        <div class="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] text-2xl font-bold text-white shadow-lg">
                            3
                        </div>
                        <h3 class="mb-2 text-xl font-bold text-[#0F172A] dark:text-white">Provide Care</h3>
                        <p class="text-[#475569] dark:text-[#94A3B8]">Our medical team provides comprehensive healthcare services on-site.</p>
                    </div>

                    <div class="relative text-center">
                        <div class="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#F59E0B] to-[#D97706] text-2xl font-bold text-white shadow-lg">
                            4
                        </div>
                        <h3 class="mb-2 text-xl font-bold text-[#0F172A] dark:text-white">Follow-up Care</h3>
                        <p class="text-[#475569] dark:text-[#94A3B8]">Continuous monitoring and follow-up through telemedicine and return visits.</p>
                        <!-- No connector line after circle 4 -->
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] py-24">
            <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <h2 class="mb-6 text-3xl font-bold text-white sm:text-4xl">
                    Need Healthcare Services?
                </h2>
                <p class="mb-8 text-lg text-white/80">
                    Contact us to learn how we can bring quality healthcare to your community.
                </p>
                <div class="flex flex-col justify-center gap-4 sm:flex-row">
                    <router-link to="/contact" class="rounded-full bg-white px-8 py-3 font-semibold text-[#0EA5E9] transition-all hover:-translate-y-1 hover:shadow-xl">
                        Contact Us
                    </router-link>
                    <a href="tel:+18005552273" class="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-white/10">
                        Call: 1-800-555-CARE
                    </a>
                </div>
            </div>
        </section>
    
</template>
