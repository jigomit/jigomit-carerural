<script setup lang="ts">

import { ref, onMounted } from 'vue';


const counters = ref([0, 0, 0, 0, 0]);

const stats = [
    { target: 15, label: 'Mobile Medical Units', suffix: '' },
    { target: 850, label: 'Camps Conducted', suffix: '+' },
    { target: 350, label: 'Villages Covered', suffix: '+' },
    { target: 75000, label: 'Patients Served', suffix: '+' },
    { target: 98, label: 'Satisfaction Rate', suffix: '%' },
];

const services = [
    {
        icon: 'checkup',
        title: 'General Health Checkups',
        description: 'Comprehensive physical examinations including vital signs, general health assessment, and early disease detection.',
        details: ['Blood pressure monitoring', 'Blood sugar testing', 'BMI calculation', 'Vision & hearing tests', 'Basic blood tests'],
    },
    {
        icon: 'vaccine',
        title: 'Vaccination & Immunization',
        description: 'Complete immunization services for children and adults following national immunization schedules.',
        details: ['Childhood vaccines', 'Tetanus shots', 'Hepatitis B', 'Flu vaccines', 'COVID-19 vaccines'],
    },
    {
        icon: 'maternal',
        title: 'Maternal & Child Care',
        description: 'Prenatal care, postnatal support, and pediatric services for mothers and children.',
        details: ['Prenatal checkups', 'Ultrasound scans', 'Growth monitoring', 'Nutrition counseling', 'Family planning'],
    },
    {
        icon: 'dental',
        title: 'Dental Care',
        description: 'Oral health services including examinations, cleanings, extractions, and dental education.',
        details: ['Dental checkups', 'Tooth extractions', 'Scaling & cleaning', 'Fluoride treatment', 'Oral hygiene education'],
    },
    {
        icon: 'eye',
        title: 'Eye Care Services',
        description: 'Vision screening, eye examinations, and distribution of prescription glasses.',
        details: ['Vision testing', 'Cataract screening', 'Glaucoma check', 'Free spectacles', 'Eye drop distribution'],
    },
    {
        icon: 'lab',
        title: 'Laboratory Services',
        description: 'On-site diagnostic tests with rapid results for immediate treatment decisions.',
        details: ['Blood glucose', 'Hemoglobin levels', 'Urine analysis', 'Pregnancy tests', 'Malaria testing'],
    },
];

const mobileUnits = [
    {
        name: 'Primary Care Unit',
        image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80',
        equipment: ['Examination beds', 'Vital signs monitors', 'Basic diagnostic tools', 'Emergency supplies'],
        capacity: '80-100 patients/day',
    },
    {
        name: 'Diagnostic Unit',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
        equipment: ['Portable X-ray', 'Ultrasound machine', 'ECG machine', 'Lab equipment'],
        capacity: '50-60 tests/day',
    },
    {
        name: 'Dental Unit',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
        equipment: ['Dental chair', 'Extraction tools', 'Sterilization unit', 'X-ray machine'],
        capacity: '40-50 patients/day',
    },
];

const upcomingCamps = [
    { village: 'Sundarpur', district: 'Eastern', date: 'Dec 10-12, 2024', services: 'General Health + Dental', status: 'Confirmed' },
    { village: 'Greenfield', district: 'Northern', date: 'Dec 15-17, 2024', services: 'Maternal & Child Health', status: 'Confirmed' },
    { village: 'Riverside', district: 'Western', date: 'Dec 20-22, 2024', services: 'Eye Care Camp', status: 'Confirmed' },
    { village: 'Mountain View', district: 'Eastern', date: 'Dec 28-30, 2024', services: 'General + Lab Services', status: 'Registration Open' },
    { village: 'Valley Town', district: 'Southern', date: 'Jan 5-7, 2025', services: 'Vaccination Drive', status: 'Registration Open' },
    { village: 'Pine Forest', district: 'Northern', date: 'Jan 12-14, 2025', services: 'Multi-specialty Camp', status: 'Planning' },
];

const campProcess = [
    {
        step: 1,
        title: 'Community Assessment',
        description: 'Our team visits the village to assess healthcare needs, population, and logistics requirements.',
        duration: '2-3 weeks before',
    },
    {
        step: 2,
        title: 'Awareness Campaign',
        description: 'Local health workers and volunteers spread awareness about the upcoming camp through door-to-door visits and announcements.',
        duration: '1-2 weeks before',
    },
    {
        step: 3,
        title: 'Pre-Registration',
        description: 'Villagers register in advance, helping us prepare appropriate resources and specialists.',
        duration: '1 week before',
    },
    {
        step: 4,
        title: 'Camp Setup',
        description: 'Mobile units arrive, equipment is set up, and the facility is prepared for patient care.',
        duration: 'Day before',
    },
    {
        step: 5,
        title: 'Health Camp',
        description: 'Full-day medical services with consultations, diagnostics, treatments, and medicine distribution.',
        duration: '1-3 days',
    },
    {
        step: 6,
        title: 'Follow-up Care',
        description: 'Patients requiring further care are connected to hospitals or scheduled for follow-up visits.',
        duration: 'Ongoing',
    },
];

const impactStories = [
    {
        title: 'Early Detection Saves Lives',
        village: 'Sundarpur Village',
        image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=600&q=80',
        story: 'During a routine camp, our doctors detected early-stage cervical cancer in 3 women who had no symptoms. All three received timely treatment and are now cancer-free.',
        impact: '3 lives saved through early detection',
    },
    {
        title: 'Village-Wide Diabetes Screening',
        village: 'Greenfield District',
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80',
        story: 'A comprehensive screening camp revealed that 28% of adults over 40 had undiagnosed diabetes. We established a follow-up program managing 450+ patients.',
        impact: '450+ diabetes patients now managed',
    },
    {
        title: 'Restoring Sight',
        village: 'Mountain Region',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
        story: 'Our eye camp identified 89 patients with cataracts. All were referred for free surgery, and 100% regained their sight.',
        impact: '89 people regained their vision',
    },
];

const teamComposition = [
    { role: 'General Physicians', count: '2-3', description: 'Primary care doctors for general consultations' },
    { role: 'Specialists', count: '1-2', description: 'Based on camp focus (gynecologist, pediatrician, etc.)' },
    { role: 'Nurses', count: '4-6', description: 'Patient care, vital signs, and medication assistance' },
    { role: 'Lab Technicians', count: '2', description: 'Sample collection and on-site testing' },
    { role: 'Pharmacist', count: '1', description: 'Medicine dispensing and patient counseling' },
    { role: 'Community Health Workers', count: '5-10', description: 'Registration, crowd management, follow-up' },
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
        <section class="relative overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] pt-24 sm:pt-28 md:pt-32 pb-24">
            <div class="absolute inset-0">
                <div class="blob absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0EA5E9]/10 dark:bg-[#0EA5E9]/20 blur-3xl"></div>
                <div class="blob absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#8B5CF6]/10 dark:bg-[#8B5CF6]/20 blur-3xl"></div>
            </div>

            <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid items-center gap-12 lg:grid-cols-2">
                    <div>
                        <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#0EA5E9]/10 dark:bg-[#0EA5E9]/20 px-4 py-2 backdrop-blur-sm border border-[#0EA5E9]/20 dark:border-transparent">
                            <div class="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]"></div>
                            <span class="text-sm font-semibold text-[#0EA5E9]">Healthcare at Your Doorstep</span>
                        </div>
                        <h1 class="mb-6 text-4xl font-bold text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl">
                            Mobile Medical Camps: <span class="gradient-text">Bringing Care to You</span>
                        </h1>
                        <p class="mb-8 text-lg text-[#475569] dark:text-white/70">
                            When communities cannot come to healthcare, we bring healthcare to them. Our fleet of 15 fully-equipped mobile medical units travels to the remotest villages, providing comprehensive healthcare services to those who need it most.
                        </p>
                        <div class="flex flex-col gap-4 sm:flex-row">
                            <a href="#upcoming-camps" class="btn-primary text-center">
                                View Upcoming Camps
                            </a>
                            <router-link to="/contact" class="btn-secondary text-center">
                                Request a Camp for Your Village
                            </router-link>
                        </div>
                    </div>

                    <div class="relative">
                        <img
                            src="/Gemini_Generated_Image_30hbnw30hbnw30hb.png"
                            alt="Mobile medical camp"
                            class="h-full w-full rounded-3xl object-cover object-center shadow-2xl"
                        />
                        <!-- Badge -->
                        <div class="absolute -bottom-6 -left-6 animate-float rounded-2xl p-6 shadow-xl bg-white/70 dark:bg-[#1E293B]/70 backdrop-blur-xl border border-white/30 dark:border-transparent">
                            <div class="flex items-center gap-4">
                                <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7]">
                                    <svg class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-3xl font-bold text-[#0F172A] dark:text-white">15</p>
                                    <p class="text-sm text-[#64748B] dark:text-[#94A3B8]">Mobile Units Active</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section id="stats-section" class="relative -mt-8 z-10 pb-16">
            <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div class="card-glass rounded-3xl p-8 shadow-2xl">
                    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                        <div v-for="(stat, index) in stats" :key="stat.label" class="text-center">
                            <p class="text-3xl font-bold text-[#0F172A] dark:text-white lg:text-4xl">
                                {{ formatNumber(counters[index]) }}<span class="text-[#0EA5E9]">{{ stat.suffix }}</span>
                            </p>
                            <p class="mt-2 text-sm text-[#64748B] dark:text-[#94A3B8]">{{ stat.label }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Offered -->
        <section class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#8B5CF6]/10 px-4 py-2">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]"></div>
                        <span class="text-sm font-semibold text-[#8B5CF6]">Services</span>
                    </div>
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                        Comprehensive Healthcare Services
                    </h2>
                    <p class="text-lg text-[#475569] dark:text-[#94A3B8]">
                        Each mobile medical camp offers a wide range of healthcare services, bringing hospital-quality care directly to rural communities.
                    </p>
                </div>

                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div
                        v-for="service in services"
                        :key="service.title"
                        class="card-modern group p-6 transition-all hover:-translate-y-2 hover:shadow-xl"
                    >
                        <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6]">
                            <svg class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 class="mb-3 text-xl font-bold text-[#0F172A] dark:text-white">{{ service.title }}</h3>
                        <p class="mb-4 text-[#475569] dark:text-[#94A3B8]">{{ service.description }}</p>
                        <ul class="space-y-2">
                            <li v-for="detail in service.details" :key="detail" class="flex items-center gap-2 text-sm text-[#64748B] dark:text-[#94A3B8]">
                                <span class="h-1.5 w-1.5 rounded-full bg-[#10B981]"></span>
                                {{ detail }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mobile Units -->
        <section class="bg-[#F8FAFC] dark:bg-[#1E293B] py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#F59E0B]/10 px-4 py-2">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#F59E0B]"></div>
                        <span class="text-sm font-semibold text-[#F59E0B]">Our Fleet</span>
                    </div>
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                        State-of-the-Art Mobile Units
                    </h2>
                    <p class="text-lg text-[#475569] dark:text-[#94A3B8]">
                        Our mobile medical units are fully equipped with modern medical equipment, allowing us to provide hospital-quality care anywhere.
                    </p>
                </div>

                <div class="grid gap-8 lg:grid-cols-3">
                    <div
                        v-for="unit in mobileUnits"
                        :key="unit.name"
                        class="card-modern overflow-hidden"
                    >
                        <div class="relative h-48 overflow-hidden">
                            <img :src="unit.image" :alt="unit.name" class="h-full w-full object-cover" />
                        </div>
                        <div class="p-6">
                            <h3 class="mb-4 text-xl font-bold text-[#0F172A] dark:text-white">{{ unit.name }}</h3>
                            <div class="mb-4">
                                <h4 class="mb-2 text-sm font-semibold text-[#64748B] dark:text-[#94A3B8]">Equipment:</h4>
                                <div class="flex flex-wrap gap-2">
                                    <span
                                        v-for="equip in unit.equipment"
                                        :key="equip"
                                        class="rounded-full bg-[#F1F5F9] dark:bg-[#334155] px-3 py-1 text-sm text-[#475569] dark:text-[#94A3B8]"
                                    >
                                        {{ equip }}
                                    </span>
                                </div>
                            </div>
                            <div class="rounded-lg bg-[#0EA5E9]/10 p-3">
                                <span class="text-sm font-medium text-[#0EA5E9]">Capacity: {{ unit.capacity }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Camp Process -->
        <section class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#10B981]/10 px-4 py-2">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#10B981]"></div>
                        <span class="text-sm font-semibold text-[#10B981]">Process</span>
                    </div>
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                        How We Organize a Medical Camp
                    </h2>
                    <p class="text-lg text-[#475569] dark:text-[#94A3B8]">
                        Every camp is carefully planned and executed to ensure maximum impact for the community.
                    </p>
                </div>

                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div
                        v-for="process in campProcess"
                        :key="process.step"
                        class="relative"
                    >
                        <div class="card-modern p-6">
                            <div class="mb-4 flex items-center gap-4">
                                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] text-xl font-bold text-white">
                                    {{ process.step }}
                                </div>
                                <span class="rounded-full bg-[#F1F5F9] dark:bg-[#334155] px-3 py-1 text-sm text-[#64748B] dark:text-[#94A3B8]">
                                    {{ process.duration }}
                                </span>
                            </div>
                            <h3 class="mb-2 text-lg font-bold text-[#0F172A] dark:text-white">{{ process.title }}</h3>
                            <p class="text-[#475569] dark:text-[#94A3B8]">{{ process.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Upcoming Camps -->
        <section id="upcoming-camps" class="bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#F59E0B]/10 dark:bg-white/10 px-4 py-2 backdrop-blur-sm border border-[#F59E0B]/20 dark:border-transparent">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#F59E0B]"></div>
                        <span class="text-sm font-semibold text-[#F59E0B]">Schedule</span>
                    </div>
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                        Upcoming Medical Camps
                    </h2>
                    <p class="text-lg text-[#475569] dark:text-white/70">
                        Find a camp near your village or register your community for an upcoming camp.
                    </p>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full card-modern">
                        <thead>
                            <tr class="border-b border-[#E2E8F0] dark:border-white/20 bg-[#F1F5F9] dark:bg-[#334155]">
                                <th class="px-6 py-4 text-left text-sm font-semibold text-[#0F172A] dark:text-white">Village</th>
                                <th class="px-6 py-4 text-left text-sm font-semibold text-[#0F172A] dark:text-white">District</th>
                                <th class="px-6 py-4 text-left text-sm font-semibold text-[#0F172A] dark:text-white">Date</th>
                                <th class="px-6 py-4 text-left text-sm font-semibold text-[#0F172A] dark:text-white">Services</th>
                                <th class="px-6 py-4 text-left text-sm font-semibold text-[#0F172A] dark:text-white">Status</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-[#E2E8F0] dark:divide-white/10">
                            <tr v-for="camp in upcomingCamps" :key="camp.village" class="hover:bg-[#F8FAFC] dark:hover:bg-white/5">
                                <td class="px-6 py-4 font-medium text-[#0F172A] dark:text-white">{{ camp.village }}</td>
                                <td class="px-6 py-4 text-[#475569] dark:text-white/70">{{ camp.district }}</td>
                                <td class="px-6 py-4 text-[#475569] dark:text-white/70">{{ camp.date }}</td>
                                <td class="px-6 py-4 text-[#475569] dark:text-white/70">{{ camp.services }}</td>
                                <td class="px-6 py-4">
                                    <span
                                        :class="[
                                            'rounded-full px-3 py-1 text-sm font-medium',
                                            camp.status === 'Confirmed' ? 'bg-[#10B981]/20 text-[#10B981]' :
                                            camp.status === 'Registration Open' ? 'bg-[#F59E0B]/20 text-[#F59E0B]' :
                                            'bg-[#64748B]/20 text-[#64748B] dark:text-[#94A3B8]'
                                        ]"
                                    >
                                        {{ camp.status }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="mt-12 text-center">
                    <router-link to="/contact" class="rounded-full bg-white px-8 py-3 font-semibold text-[#0F172A] transition-all hover:-translate-y-1 hover:shadow-xl">
                        Request a Camp for Your Village
                    </router-link>
                </div>
            </div>
        </section>

        <!-- Team Composition -->
        <section class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid items-center gap-16 lg:grid-cols-2">
                    <div>
                        <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#EC4899]/10 px-4 py-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-[#EC4899]"></div>
                            <span class="text-sm font-semibold text-[#EC4899]">Our Team</span>
                        </div>
                        <h2 class="mb-6 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                            Expert Medical Team at Every Camp
                        </h2>
                        <p class="mb-8 text-lg text-[#475569] dark:text-[#94A3B8]">
                            Each camp is staffed by qualified medical professionals, ensuring high-quality care for every patient.
                        </p>

                        <div class="space-y-4">
                            <div
                                v-for="team in teamComposition"
                                :key="team.role"
                                class="flex items-center gap-4 rounded-xl bg-[#F8FAFC] dark:bg-[#334155] p-4"
                            >
                                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EC4899]/10 font-bold text-[#EC4899]">
                                    {{ team.count }}
                                </div>
                                <div>
                                    <h4 class="font-bold text-[#0F172A] dark:text-white">{{ team.role }}</h4>
                                    <p class="text-sm text-[#64748B] dark:text-[#94A3B8]">{{ team.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
                            alt="Medical team"
                            class="rounded-3xl shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Impact Stories -->
        <section class="bg-[#F8FAFC] dark:bg-[#1E293B] py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#8B5CF6]/10 px-4 py-2">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]"></div>
                        <span class="text-sm font-semibold text-[#8B5CF6]">Impact</span>
                    </div>
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                        Stories from the Field
                    </h2>
                </div>

                <div class="grid gap-8 lg:grid-cols-3">
                    <div
                        v-for="story in impactStories"
                        :key="story.title"
                        class="card-modern overflow-hidden"
                    >
                        <div class="relative h-48 overflow-hidden">
                            <img :src="story.image" :alt="story.title" class="h-full w-full object-cover" />
                            <span class="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1 text-sm text-white backdrop-blur-sm">
                                {{ story.village }}
                            </span>
                        </div>
                        <div class="p-6">
                            <h3 class="mb-3 text-xl font-bold text-[#0F172A] dark:text-white">{{ story.title }}</h3>
                            <p class="mb-4 text-[#475569] dark:text-[#94A3B8]">{{ story.story }}</p>
                            <div class="rounded-lg bg-[#10B981]/10 p-3">
                                <span class="font-semibold text-[#10B981]">{{ story.impact }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] py-24">
            <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <h2 class="mb-6 text-3xl font-bold text-white sm:text-4xl">
                    Bring Healthcare to Your Village
                </h2>
                <p class="mb-8 text-lg text-white/80">
                    Request a mobile medical camp for your community or support our mission to reach more villages.
                </p>
                <div class="flex flex-col justify-center gap-4 sm:flex-row">
                    <router-link to="/contact" class="rounded-full bg-white px-8 py-3 font-semibold text-[#0EA5E9] transition-all hover:-translate-y-1 hover:shadow-xl">
                        Request a Camp
                    </router-link>
                    <router-link to="/donate" class="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-white/10">
                        Sponsor a Camp ($5,000)
                    </router-link>
                </div>
            </div>
        </section>
    
</template>
