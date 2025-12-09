<script setup lang="ts">

import { ref, onMounted } from 'vue';


const counters = ref([0, 0, 0, 0, 0, 0]);

const impactStats = [
    { target: 75000, label: 'Patients Treated', suffix: '+', icon: 'users' },
    { target: 350, label: 'Villages Reached', suffix: '+', icon: 'location' },
    { target: 200, label: 'Medical Professionals', suffix: '+', icon: 'doctor' },
    { target: 850, label: 'Medical Camps', suffix: '+', icon: 'camp' },
    { target: 45, label: 'Rural Pharmacies', suffix: '', icon: 'medicine' },
    { target: 98, label: 'Patient Satisfaction', suffix: '%', icon: 'heart' },
];

const impactStories = [
    {
        title: 'Saving Baby Priya',
        location: 'Sundarpur Village',
        image: '/Gemini_Generated_Image_pmmvljpmmvljpmmv.png',
        story: 'When baby Priya was born prematurely in a remote village, her chances of survival were slim. Our mobile medical unit arrived just in time, providing emergency neonatal care. Today, Priya is a healthy 3-year-old.',
        impact: 'Emergency response saved 1 life',
    },
    {
        title: 'Diabetes Detection Drive',
        location: 'Greenfield District',
        image: '/Gemini_Generated_Image_yd81fayd81fayd81.png',
        story: 'During a routine health camp, we discovered that 30% of adults over 40 had undiagnosed diabetes. We established a diabetes management program that now monitors 500+ patients.',
        impact: '500+ patients now managed',
    },
    {
        title: 'Zero Maternal Deaths',
        location: 'Mountain Valley Region',
        image: '/Gemini_Generated_Image_witfrlwitfrlwitf.png',
        story: 'For the first time in history, Mountain Valley Region recorded zero maternal deaths in 2023, thanks to our prenatal care program and trained birth attendants.',
        impact: '100% safe deliveries achieved',
    },
];

const yearlyData = [
    { year: '2019', patients: 35000, camps: 450, villages: 150 },
    { year: '2020', patients: 42000, camps: 520, villages: 200 },
    { year: '2021', patients: 55000, camps: 650, villages: 250 },
    { year: '2022', patients: 65000, camps: 750, villages: 300 },
    { year: '2023', patients: 75000, camps: 850, villages: 350 },
];

const financials = {
    totalRaised: '$12.5M',
    programSpend: '85%',
    adminCosts: '10%',
    fundraising: '5%',
};

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
                    impactStats.forEach((stat, index) => {
                        setTimeout(() => animateCounter(index, stat.target), index * 100);
                    });
                }
            });
        },
        { threshold: 0.3 },
    );

    const section = document.getElementById('impact-stats');
    if (section) {
        observer.observe(section);
    }
});
</script>

<template>
    
    
        <!-- Hero -->
        <section class="relative overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] pt-32 pb-24">
            <div class="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1920&q=80"
                    alt="Medical camp"
                    class="h-full w-full object-cover opacity-20 dark:opacity-20 opacity-10"
                />
            </div>

            <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#10B981]/10 dark:bg-white/10 px-4 py-2 backdrop-blur-sm border border-[#10B981]/20 dark:border-transparent">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#10B981]"></div>
                        <span class="text-sm font-semibold text-[#10B981]">Our Impact</span>
                    </div>
                    <h1 class="mb-6 text-4xl font-bold text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl">
                        Making a <span class="gradient-text">Real Difference</span>
                    </h1>
                    <p class="text-lg text-[#475569] dark:text-white/70">
                        Every number represents a life touched, a community served, and hope restored. See the measurable impact of your support.
                    </p>
                </div>
            </div>
        </section>

        <!-- Impact Stats -->
        <section id="impact-stats" class="relative -mt-16 z-10 pb-24 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="card-glass rounded-3xl p-8 shadow-2xl">
                    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                        <div v-for="(stat, index) in impactStats" :key="stat.label" class="text-center">
                            <p class="text-4xl font-bold text-[#0F172A] dark:text-white">
                                {{ formatNumber(counters[index]) }}<span class="text-[#0EA5E9]">{{ stat.suffix }}</span>
                            </p>
                            <p class="mt-2 text-[#64748B] dark:text-[#94A3B8]">{{ stat.label }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Impact Stories -->
        <section class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#EC4899]/10 px-4 py-2">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#EC4899]"></div>
                        <span class="text-sm font-semibold text-[#EC4899]">Success Stories</span>
                    </div>
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                        Stories of Transformation
                    </h2>
                    <p class="text-lg text-[#475569] dark:text-[#94A3B8]">
                        Real stories from real communities showing the tangible impact of our work.
                    </p>
                </div>

                <div class="grid gap-8 lg:grid-cols-3">
                    <div
                        v-for="story in impactStories"
                        :key="story.title"
                        class="card-modern group overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl"
                    >
                        <div class="relative h-48 overflow-hidden">
                            <img
                                :src="story.image"
                                :alt="story.title"
                                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent"></div>
                            <span class="absolute bottom-4 left-4 rounded-full bg-white/20 px-3 py-1 text-sm text-white backdrop-blur-sm">
                                {{ story.location }}
                            </span>
                        </div>
                        <div class="p-6">
                            <h3 class="mb-3 text-xl font-bold text-[#0F172A] dark:text-white">{{ story.title }}</h3>
                            <p class="mb-4 text-[#475569] dark:text-[#94A3B8]">{{ story.story }}</p>
                            <div class="rounded-lg bg-[#10B981]/10 px-4 py-2">
                                <span class="font-semibold text-[#10B981]">{{ story.impact }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Year over Year Growth -->
        <section class="bg-[#F8FAFC] dark:bg-[#1E293B] py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#0EA5E9]/10 px-4 py-2">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]"></div>
                        <span class="text-sm font-semibold text-[#0EA5E9]">Growth</span>
                    </div>
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                        Year Over Year Impact
                    </h2>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="border-b-2 border-[#E2E8F0] dark:border-[#334155]">
                                <th class="px-6 py-4 text-left text-sm font-semibold text-[#0F172A] dark:text-white">Year</th>
                                <th class="px-6 py-4 text-center text-sm font-semibold text-[#0F172A] dark:text-white">Patients Treated</th>
                                <th class="px-6 py-4 text-center text-sm font-semibold text-[#0F172A] dark:text-white">Medical Camps</th>
                                <th class="px-6 py-4 text-center text-sm font-semibold text-[#0F172A] dark:text-white">Villages Reached</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-[#E2E8F0] dark:divide-[#334155]">
                            <tr v-for="data in yearlyData" :key="data.year" class="hover:bg-white dark:hover:bg-[#334155]">
                                <td class="px-6 py-4 font-bold text-[#0F172A] dark:text-white">{{ data.year }}</td>
                                <td class="px-6 py-4 text-center text-[#475569] dark:text-[#94A3B8]">{{ data.patients.toLocaleString() }}</td>
                                <td class="px-6 py-4 text-center text-[#475569] dark:text-[#94A3B8]">{{ data.camps }}</td>
                                <td class="px-6 py-4 text-center text-[#475569] dark:text-[#94A3B8]">{{ data.villages }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- Financial Transparency -->
        <section class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid items-center gap-16 lg:grid-cols-2">
                    <div>
                        <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#8B5CF6]/10 px-4 py-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]"></div>
                            <span class="text-sm font-semibold text-[#8B5CF6]">Transparency</span>
                        </div>
                        <h2 class="mb-6 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                            Where Your Money Goes
                        </h2>
                        <p class="mb-8 text-lg text-[#475569] dark:text-[#94A3B8]">
                            We are committed to financial transparency. 85 cents of every dollar goes directly to programs that help rural communities.
                        </p>

                        <div class="space-y-6">
                            <div>
                                <div class="mb-2 flex justify-between">
                                    <span class="font-medium text-[#0F172A] dark:text-white">Program Services</span>
                                    <span class="font-bold text-[#10B981]">85%</span>
                                </div>
                                <div class="h-3 overflow-hidden rounded-full bg-[#E2E8F0] dark:bg-[#334155]">
                                    <div class="h-full w-[85%] rounded-full bg-gradient-to-r from-[#10B981] to-[#059669]"></div>
                                </div>
                            </div>
                            <div>
                                <div class="mb-2 flex justify-between">
                                    <span class="font-medium text-[#0F172A] dark:text-white">Administrative</span>
                                    <span class="font-bold text-[#0EA5E9]">10%</span>
                                </div>
                                <div class="h-3 overflow-hidden rounded-full bg-[#E2E8F0] dark:bg-[#334155]">
                                    <div class="h-full w-[10%] rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#0284C7]"></div>
                                </div>
                            </div>
                            <div>
                                <div class="mb-2 flex justify-between">
                                    <span class="font-medium text-[#0F172A] dark:text-white">Fundraising</span>
                                    <span class="font-bold text-[#8B5CF6]">5%</span>
                                </div>
                                <div class="h-3 overflow-hidden rounded-full bg-[#E2E8F0] dark:bg-[#334155]">
                                    <div class="h-full w-[5%] rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED]"></div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8">
                            <a href="#" class="inline-flex items-center gap-2 font-semibold text-[#0EA5E9] transition-colors hover:text-[#0284C7]">
                                Download Annual Report
                                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div class="card-modern p-8 text-center">
                        <p class="text-6xl font-bold text-[#0F172A] dark:text-white">{{ financials.totalRaised }}</p>
                        <p class="mt-2 text-xl text-[#64748B] dark:text-[#94A3B8]">Total Funds Raised Since 2008</p>

                        <div class="mt-8 grid grid-cols-2 gap-6">
                            <div class="rounded-2xl bg-[#10B981]/10 p-4">
                                <p class="text-3xl font-bold text-[#10B981]">4-Star</p>
                                <p class="text-sm text-[#64748B] dark:text-[#94A3B8]">Charity Navigator</p>
                            </div>
                            <div class="rounded-2xl bg-[#0EA5E9]/10 p-4">
                                <p class="text-3xl font-bold text-[#0EA5E9]">A+</p>
                                <p class="text-sm text-[#64748B] dark:text-[#94A3B8]">BBB Rating</p>
                            </div>
                            <div class="rounded-2xl bg-[#8B5CF6]/10 p-4">
                                <p class="text-3xl font-bold text-[#8B5CF6]">Gold</p>
                                <p class="text-sm text-[#64748B] dark:text-[#94A3B8]">GuideStar Seal</p>
                            </div>
                            <div class="rounded-2xl bg-[#F59E0B]/10 p-4">
                                <p class="text-3xl font-bold text-[#F59E0B]">100%</p>
                                <p class="text-sm text-[#64748B] dark:text-[#94A3B8]">Accountability</p>
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
                    Help Us Reach More Communities
                </h2>
                <p class="mb-8 text-lg text-white/80">
                    Your support directly translates to lives saved and communities transformed.
                </p>
                <router-link to="/donate" class="inline-block rounded-full bg-white px-8 py-3 font-semibold text-[#0EA5E9] transition-all hover:-translate-y-1 hover:shadow-xl">
                    Donate Today
                </router-link>
            </div>
        </section>
    
</template>
