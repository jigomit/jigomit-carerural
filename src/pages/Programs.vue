<script setup lang="ts">



const programs = [
    {
        title: 'Community Health Worker Training',
        description: 'A comprehensive 6-month program training local community members to become certified health workers, creating sustainable healthcare capacity in their villages.',
        image: '/Gemini_Generated_Image_ses3ehses3ehses3.png',
        stats: { trained: '500+', villages: '150', impact: '25K patients served' },
        color: 'from-[#0EA5E9] to-[#0284C7]',
    },
    {
        title: 'Maternal Health Initiative',
        description: 'Focused on reducing maternal mortality through prenatal care, safe delivery services, and postnatal support for mothers in rural areas.',
        image: '/Gemini_Generated_Image_hheg0xhheg0xhheg.png',
        stats: { deliveries: '10K+', mortality: '60% reduced', coverage: '200 villages' },
        color: 'from-[#EC4899] to-[#DB2777]',
    },
    {
        title: 'Childhood Immunization Drive',
        description: 'Ensuring every child receives essential vaccinations against preventable diseases, protecting future generations from illness.',
        image: '/Gemini_Generated_Image_xnhu6nxnhu6nxnhu.png',
        stats: { vaccinated: '50K+', coverage: '95%', diseases: '12 prevented' },
        color: 'from-[#10B981] to-[#059669]',
    },
    {
        title: 'Chronic Disease Management',
        description: 'Long-term care programs for diabetes, hypertension, and other chronic conditions with regular monitoring and medication support.',
        image: '/Gemini_Generated_Image_kruwr7kruwr7kruw.png',
        stats: { patients: '8K+', conditions: '15 managed', compliance: '85%' },
        color: 'from-[#8B5CF6] to-[#7C3AED]',
    },
    {
        title: 'Mental Health Awareness',
        description: 'Breaking stigma and providing mental health support through counseling, community education, and telemedicine psychiatry services.',
        image: '/Gemini_Generated_Image_ldhui0ldhui0ldhu.png',
        stats: { sessions: '5K+', counselors: '50 trained', reach: '100K people' },
        color: 'from-[#F59E0B] to-[#D97706]',
    },
    {
        title: 'Clean Water & Sanitation',
        description: 'Partnering with communities to establish clean water sources and sanitation facilities, preventing water-borne diseases.',
        image: '/Gemini_Generated_Image_hct4eyhct4eyhct4.png',
        stats: { wells: '200+', toilets: '5K built', beneficiaries: '100K' },
        color: 'from-[#06B6D4] to-[#0891B2]',
    },
];

const upcomingCamps = [
    { location: 'Riverside Village', date: 'Dec 15, 2024', services: 'General Health Camp' },
    { location: 'Mountain View', date: 'Dec 18, 2024', services: 'Maternal & Child Health' },
    { location: 'Green Valley', date: 'Dec 22, 2024', services: 'Vaccination Drive' },
    { location: 'Sunset Hills', date: 'Dec 28, 2024', services: 'Eye Care Camp' },
    { location: 'Pine Forest', date: 'Jan 5, 2025', services: 'Dental Health Camp' },
];
</script>

<template>
    
    
        <!-- Hero -->
        <section class="relative overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] pt-32 pb-24">
            <div class="absolute inset-0">
                <div class="blob absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#10B981]/10 dark:bg-[#10B981]/20 blur-3xl"></div>
                <div class="blob absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#F59E0B]/10 dark:bg-[#F59E0B]/20 blur-3xl"></div>
            </div>

            <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#10B981]/10 dark:bg-white/10 px-4 py-2 backdrop-blur-sm border border-[#10B981]/20 dark:border-transparent">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#10B981]"></div>
                        <span class="text-sm font-semibold text-[#10B981]">Our Programs</span>
                    </div>
                    <h1 class="mb-6 text-4xl font-bold text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl">
                        Transformative <span class="gradient-text">Health Programs</span>
                    </h1>
                    <p class="text-lg text-[#475569] dark:text-white/70">
                        Targeted initiatives designed to address specific health challenges in rural communities and create lasting impact.
                    </p>
                </div>
            </div>
        </section>

        <!-- Programs Grid -->
        <section class="py-24 lg:py-32 bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div
                        v-for="program in programs"
                        :key="program.title"
                        class="card-modern group overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl bg-white dark:bg-[#1E293B]"
                    >
                        <div class="relative h-48 overflow-hidden">
                            <img
                                :src="program.image"
                                :alt="program.title"
                                class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent"></div>
                        </div>
                        <div class="p-6 bg-white dark:bg-[#1E293B]">
                            <h3 class="mb-3 text-xl font-bold text-[#0F172A] dark:text-white">{{ program.title }}</h3>
                            <p class="mb-6 text-sm leading-relaxed text-[#475569] dark:text-[#94A3B8]">{{ program.description }}</p>

                            <div class="grid grid-cols-3 gap-4 border-t border-[#E2E8F0] dark:border-[#334155] pt-4">
                                <div v-for="(value, key) in program.stats" :key="key" class="text-center">
                                    <p class="text-lg font-bold text-[#0F172A] dark:text-[#0EA5E9]">{{ value }}</p>
                                    <p class="text-xs font-medium text-[#64748B] dark:text-[#94A3B8] capitalize mt-1">{{ key }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Upcoming Camps -->
        <section class="bg-[#F8FAFC] dark:bg-[#1E293B] py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mb-12 text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#F59E0B]/10 px-4 py-2">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#F59E0B]"></div>
                        <span class="text-sm font-semibold text-[#F59E0B]">Schedule</span>
                    </div>
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">Upcoming Medical Camps</h2>
                    <p class="text-lg text-[#475569] dark:text-[#94A3B8]">Find a camp near you or request one for your community.</p>
                </div>

                <div class="mx-auto max-w-4xl">
                    <div class="card-modern overflow-hidden">
                        <table class="w-full">
                            <thead class="bg-[#F1F5F9] dark:bg-[#334155]">
                                <tr>
                                    <th class="px-6 py-4 text-left text-sm font-semibold text-[#0F172A] dark:text-white">Location</th>
                                    <th class="px-6 py-4 text-left text-sm font-semibold text-[#0F172A] dark:text-white">Date</th>
                                    <th class="px-6 py-4 text-left text-sm font-semibold text-[#0F172A] dark:text-white">Services</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-[#E2E8F0] dark:divide-[#334155]">
                                <tr v-for="camp in upcomingCamps" :key="camp.location" class="hover:bg-[#F8FAFC] dark:hover:bg-[#334155]">
                                    <td class="px-6 py-4">
                                        <div class="flex items-center gap-3">
                                            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0EA5E9]/10">
                                                <svg class="h-5 w-5 text-[#0EA5E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                </svg>
                                            </div>
                                            <span class="font-medium text-[#0F172A] dark:text-white">{{ camp.location }}</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-[#475569] dark:text-[#94A3B8]">{{ camp.date }}</td>
                                    <td class="px-6 py-4">
                                        <span class="rounded-full bg-[#10B981]/10 px-3 py-1 text-sm font-medium text-[#10B981]">
                                            {{ camp.services }}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mt-8 text-center">
                        <router-link to="/contact" class="btn-primary">
                            Request a Camp for Your Village
                        </router-link>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="bg-gradient-to-r from-[#10B981] to-[#059669] py-24">
            <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <h2 class="mb-6 text-3xl font-bold text-white sm:text-4xl">Support Our Programs</h2>
                <p class="mb-8 text-lg text-white/80">
                    Your contribution helps us expand these life-saving programs to more communities.
                </p>
                <div class="flex flex-col justify-center gap-4 sm:flex-row">
                    <router-link to="/donate" class="rounded-full bg-white px-8 py-3 font-semibold text-[#10B981] transition-all hover:-translate-y-1 hover:shadow-xl">
                        Donate Now
                    </router-link>
                    <router-link to="/volunteer" class="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-white/10">
                        Volunteer With Us
                    </router-link>
                </div>
            </div>
        </section>
    
</template>
