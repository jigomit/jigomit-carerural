<script setup lang="ts">

import { ref, onMounted } from 'vue';


const counters = ref([0, 0, 0, 0]);

const stats = [
    { target: 45, label: 'Rural Pharmacies', suffix: '' },
    { target: 500, label: 'Medicine Types', suffix: '+' },
    { target: 80, label: 'Cost Savings', suffix: '%' },
    { target: 150000, label: 'Prescriptions Filled', suffix: '+' },
];

const medicineCategories = [
    {
        name: 'Cardiovascular Medicines',
        icon: 'heart',
        medicines: ['Aspirin', 'Atenolol', 'Amlodipine', 'Enalapril', 'Losartan', 'Simvastatin'],
        savings: '70-85%',
        color: 'from-[#EF4444] to-[#DC2626]',
    },
    {
        name: 'Diabetes Medications',
        icon: 'diabetes',
        medicines: ['Metformin', 'Glibenclamide', 'Insulin', 'Gliclazide', 'Sitagliptin'],
        savings: '60-80%',
        color: 'from-[#0EA5E9] to-[#0284C7]',
    },
    {
        name: 'Antibiotics & Anti-infectives',
        icon: 'antibiotic',
        medicines: ['Amoxicillin', 'Azithromycin', 'Ciprofloxacin', 'Metronidazole', 'Doxycycline'],
        savings: '65-75%',
        color: 'from-[#10B981] to-[#059669]',
    },
    {
        name: 'Pain & Fever Relief',
        icon: 'pain',
        medicines: ['Paracetamol', 'Ibuprofen', 'Diclofenac', 'Tramadol', 'Naproxen'],
        savings: '70-85%',
        color: 'from-[#F59E0B] to-[#D97706]',
    },
    {
        name: 'Respiratory Medicines',
        icon: 'respiratory',
        medicines: ['Salbutamol', 'Budesonide', 'Montelukast', 'Cetirizine', 'Bromhexine'],
        savings: '60-75%',
        color: 'from-[#8B5CF6] to-[#7C3AED]',
    },
    {
        name: 'Gastrointestinal Drugs',
        icon: 'gastro',
        medicines: ['Omeprazole', 'Ranitidine', 'Ondansetron', 'Loperamide', 'Domperidone'],
        savings: '65-80%',
        color: 'from-[#EC4899] to-[#DB2777]',
    },
];

const howItWorks = [
    {
        step: 1,
        title: 'Doctor Consultation',
        description: 'Visit our medical camp or telemedicine service for a consultation and get a prescription from our qualified doctors.',
        icon: 'doctor',
    },
    {
        step: 2,
        title: 'Prescription Verification',
        description: 'Our pharmacists verify your prescription and check for drug interactions, allergies, and appropriate dosing.',
        icon: 'verify',
    },
    {
        step: 3,
        title: 'Medicine Dispensing',
        description: 'Receive quality generic medicines from our network pharmacy at up to 80% lower cost than market prices.',
        icon: 'dispense',
    },
    {
        step: 4,
        title: 'Counseling & Follow-up',
        description: 'Get proper instructions on medication usage, storage, and potential side effects with follow-up support.',
        icon: 'followup',
    },
];

const partnerships = [
    { name: 'Generic Pharma Co', type: 'Manufacturer', contribution: 'Generic medicines at cost' },
    { name: 'MedSupply Global', type: 'Distributor', contribution: 'Free logistics support' },
    { name: 'WHO Prequalified Labs', type: 'Quality Assurance', contribution: 'Quality testing' },
    { name: 'State Health Ministry', type: 'Government', contribution: 'Regulatory support' },
];

const pharmacyLocations = [
    { region: 'Eastern Region', count: 12, villages: 85 },
    { region: 'Western Region', count: 10, villages: 72 },
    { region: 'Northern Region', count: 8, villages: 65 },
    { region: 'Southern Region', count: 9, villages: 78 },
    { region: 'Central Region', count: 6, villages: 50 },
];

const qualityStandards = [
    { title: 'WHO Prequalified', description: 'All medicines meet World Health Organization quality standards' },
    { title: 'FDA Approved', description: 'Generic equivalents approved by Food and Drug Administration' },
    { title: 'Batch Testing', description: 'Every batch tested for purity, potency, and safety' },
    { title: 'Cold Chain', description: 'Temperature-sensitive medicines maintained in proper cold chain' },
    { title: 'Expiry Management', description: 'Strict first-in-first-out and expiry date monitoring' },
    { title: 'Pharmacist Oversight', description: 'Licensed pharmacists supervise all dispensing operations' },
];

const testimonials = [
    {
        name: 'Ramesh Kumar',
        condition: 'Diabetes Patient',
        quote: 'I used to spend $150 monthly on diabetes medicines. Now I pay only $30 for the same medications. CareRural has been a blessing for my family.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        savings: '$120/month',
    },
    {
        name: 'Sunita Devi',
        condition: 'Hypertension Patient',
        quote: 'The pharmacist explained how to take my blood pressure medicines properly. The quality is excellent and the price is unbelievable.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
        savings: '$85/month',
    },
];

const faqs = [
    {
        question: 'Are generic medicines as effective as branded ones?',
        answer: 'Yes, generic medicines contain the same active ingredients, dosage, and strength as branded medicines. They undergo rigorous testing to ensure bioequivalence and meet the same quality standards set by regulatory authorities.',
    },
    {
        question: 'How do you maintain such low prices?',
        answer: 'We work directly with WHO-prequalified generic manufacturers, eliminating middlemen. Our non-profit status means no profit margins, and bulk purchasing allows for significant discounts which we pass on to patients.',
    },
    {
        question: 'Can I get my regular prescription filled at your pharmacy?',
        answer: 'Yes, we can fill most prescriptions from any licensed doctor. Our pharmacists will verify the prescription and provide equivalent generic alternatives when available.',
    },
    {
        question: 'Do you provide medicines for chronic conditions?',
        answer: 'Absolutely. We specialize in chronic disease management for conditions like diabetes, hypertension, heart disease, and respiratory conditions. We offer monthly refill programs with discounts.',
    },
    {
        question: 'What if the medicine I need is not available?',
        answer: 'Our pharmacists can help find alternatives or special order medicines. We continuously expand our formulary based on community needs and can coordinate with nearby facilities for urgent requirements.',
    },
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
        <section class="relative overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] pt-32 pb-24">
            <!-- Animated Background -->
            <div class="absolute inset-0">
                <div class="blob absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#10B981]/10 dark:bg-[#10B981]/20 blur-3xl"></div>
                <div class="blob absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#0EA5E9]/10 dark:bg-[#0EA5E9]/20 blur-3xl" style="animation-delay: 2s;"></div>
                <div class="blob absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EC4899]/5 dark:bg-[#EC4899]/10 blur-3xl" style="animation-delay: 4s;"></div>
            </div>

            <!-- Grid pattern overlay -->
            <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwIDEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-20 dark:opacity-40"></div>

            <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid items-center gap-12 lg:grid-cols-2">
                    <div>
                        <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#10B981]/10 dark:bg-white/10 px-4 py-2 backdrop-blur-sm border border-[#10B981]/20 dark:border-transparent">
                            <span class="relative flex h-2 w-2">
                                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75"></span>
                                <span class="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]"></span>
                            </span>
                            <span class="text-sm font-medium text-[#0F172A] dark:text-white/90">Affordable Healthcare</span>
                        </div>
                        <h1 class="mb-6 text-4xl font-bold leading-tight text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl">
                            Quality Medicines at <span class="gradient-text">80% Lower Cost</span>
                        </h1>
                        <p class="mb-8 text-lg text-[#475569] dark:text-white/70 sm:text-xl">
                            Our Low-Cost Medicine Program ensures that no patient has to choose between food and medicine. Through partnerships with generic manufacturers and WHO-prequalified suppliers, we provide essential medications at dramatically reduced prices.
                        </p>
                        <div class="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                            <router-link to="/contact" class="btn-primary text-center">
                                Find a Pharmacy Near You
                            </router-link>
                            <a href="#medicine-list" class="btn-secondary text-center">
                                View Medicine List
                            </a>
                        </div>
                    </div>

                    <div class="relative">
                        <div class="relative overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white/50 dark:ring-transparent">
                            <img
                                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80"
                                alt="Pharmacy and medicines"
                                class="h-full w-full object-cover"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-transparent dark:from-[#0F172A]/60 via-transparent to-transparent"></div>
                        </div>
                        <!-- Savings badge -->
                        <div class="absolute -bottom-6 -left-6 animate-float rounded-2xl p-4 shadow-xl bg-white/70 dark:bg-[#1E293B]/70 backdrop-blur-xl border border-white/30 dark:border-transparent">
                            <div class="flex items-center gap-3">
                                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669]">
                                    <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-2xl font-bold text-[#0F172A] dark:text-white">Up to 80%</p>
                                    <p class="text-sm text-[#64748B] dark:text-[#94A3B8]">Average Savings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section id="stats-section" class="relative -mt-16 z-10">
            <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div class="card-glass rounded-3xl p-8 shadow-2xl bg-white dark:bg-transparent border border-[#E2E8F0] dark:border-transparent">
                    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div v-for="(stat, index) in stats" :key="stat.label" class="text-center">
                            <p class="text-4xl font-bold text-[#0F172A] dark:text-white lg:text-5xl">
                                {{ formatNumber(counters[index]) }}<span class="text-[#10B981]">{{ stat.suffix }}</span>
                            </p>
                            <p class="mt-2 text-[#64748B] dark:text-[#94A3B8]">{{ stat.label }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Low-Cost Medicines Matter -->
        <section class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid items-center gap-16 lg:grid-cols-2">
                    <div>
                        <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#EF4444]/10 px-4 py-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-[#EF4444]"></div>
                            <span class="text-sm font-semibold text-[#EF4444]">The Problem</span>
                        </div>
                        <h2 class="mb-6 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                            Why Affordable Medicines Matter
                        </h2>
                        <div class="space-y-6 text-[#475569] dark:text-[#94A3B8]">
                            <p>
                                In rural communities, the cost of medicines can be catastrophic. Many families are forced to choose between buying food and purchasing life-saving medications, leading to untreated conditions and preventable deaths.
                            </p>
                            <div class="rounded-xl bg-[#FEF2F2] dark:bg-[#7F1D1D]/30 p-6">
                                <h4 class="mb-3 font-bold text-[#EF4444]">The Reality:</h4>
                                <ul class="space-y-2">
                                    <li class="flex items-start gap-2">
                                        <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#EF4444]"></span>
                                        <span class="text-[#475569] dark:text-[#94A3B8]">68% of rural households cannot afford regular medications</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#EF4444]"></span>
                                        <span class="text-[#475569] dark:text-[#94A3B8]">Medicine costs account for 70% of out-of-pocket health expenses</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#EF4444]"></span>
                                        <span class="text-[#475569] dark:text-[#94A3B8]">25% of patients stop treatment due to cost</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#EF4444]"></span>
                                        <span class="text-[#475569] dark:text-[#94A3B8]">Rural pharmacies are often 30-50km away</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#10B981]/10 px-4 py-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-[#10B981]"></div>
                            <span class="text-sm font-semibold text-[#10B981]">Our Solution</span>
                        </div>
                        <h2 class="mb-6 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                            How We Make It Possible
                        </h2>
                        <div class="space-y-4">
                            <div class="flex items-start gap-4 rounded-xl bg-[#F0FDF4] dark:bg-[#064E3B]/30 p-4">
                                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#10B981]">
                                    <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-bold text-[#0F172A] dark:text-white">Direct Manufacturer Partnerships</h4>
                                    <p class="text-sm text-[#475569] dark:text-[#94A3B8]">We source directly from WHO-prequalified generic manufacturers, eliminating middlemen and markup costs.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4 rounded-xl bg-[#F0FDF4] dark:bg-[#064E3B]/30 p-4">
                                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#10B981]">
                                    <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-bold text-[#0F172A] dark:text-white">Bulk Purchasing Power</h4>
                                    <p class="text-sm text-[#475569] dark:text-[#94A3B8]">Collective buying for 45 pharmacies gives us negotiating power for the best prices.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4 rounded-xl bg-[#F0FDF4] dark:bg-[#064E3B]/30 p-4">
                                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#10B981]">
                                    <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-bold text-[#0F172A] dark:text-white">Non-Profit Model</h4>
                                    <p class="text-sm text-[#475569] dark:text-[#94A3B8]">As a non-profit, we operate at cost with no profit margins added to medicine prices.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4 rounded-xl bg-[#F0FDF4] dark:bg-[#064E3B]/30 p-4">
                                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#10B981]">
                                    <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-bold text-[#0F172A] dark:text-white">Donor Subsidies</h4>
                                    <p class="text-sm text-[#475569] dark:text-[#94A3B8]">Generous donors help subsidize costs for the most vulnerable patients.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Medicine Categories -->
        <section id="medicine-list" class="bg-[#F8FAFC] dark:bg-[#1E293B] py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#0EA5E9]/10 px-4 py-2">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]"></div>
                        <span class="text-sm font-semibold text-[#0EA5E9]">Our Formulary</span>
                    </div>
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                        500+ Essential Medicines Available
                    </h2>
                    <p class="text-lg text-[#475569] dark:text-[#94A3B8]">
                        Our formulary covers all essential medicine categories recommended by WHO, ensuring comprehensive coverage for common and chronic conditions.
                    </p>
                </div>

                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div
                        v-for="category in medicineCategories"
                        :key="category.name"
                        class="card-modern overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl"
                    >
                        <div :class="['h-2 bg-gradient-to-r', category.color]"></div>
                        <div class="p-6">
                            <div class="mb-4 flex items-center justify-between">
                                <h3 class="text-lg font-bold text-[#0F172A] dark:text-white">{{ category.name }}</h3>
                                <span class="rounded-full bg-[#10B981]/10 px-3 py-1 text-sm font-semibold text-[#10B981]">
                                    Save {{ category.savings }}
                                </span>
                            </div>
                            <div class="mb-4 flex flex-wrap gap-2">
                                <span
                                    v-for="medicine in category.medicines"
                                    :key="medicine"
                                    class="rounded-full bg-[#F1F5F9] dark:bg-[#334155] px-3 py-1 text-sm text-[#475569] dark:text-[#94A3B8]"
                                >
                                    {{ medicine }}
                                </span>
                            </div>
                            <p class="text-sm text-[#64748B] dark:text-[#94A3B8]">+ more medicines in this category</p>
                        </div>
                    </div>
                </div>

                <div class="mt-12 text-center">
                    <router-link to="/contact" class="btn-primary">
                        Request Complete Medicine List
                    </router-link>
                </div>
            </div>
        </section>

        <!-- How It Works -->
        <section class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#8B5CF6]/10 px-4 py-2">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]"></div>
                        <span class="text-sm font-semibold text-[#8B5CF6]">Process</span>
                    </div>
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                        How to Access Low-Cost Medicines
                    </h2>
                </div>

                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div v-for="step in howItWorks" :key="step.step" class="relative text-center">
                        <div class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] text-3xl font-bold text-white shadow-lg">
                            {{ step.step }}
                        </div>
                        <h3 class="mb-3 text-xl font-bold text-[#0F172A] dark:text-white">{{ step.title }}</h3>
                        <p class="text-[#475569] dark:text-[#94A3B8]">{{ step.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Quality Standards -->
        <section class="bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#F59E0B]/10 dark:bg-white/10 px-4 py-2 backdrop-blur-sm border border-[#F59E0B]/20 dark:border-transparent">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#F59E0B]"></div>
                        <span class="text-sm font-semibold text-[#F59E0B]">Quality Assurance</span>
                    </div>
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                        Uncompromising Quality Standards
                    </h2>
                    <p class="text-lg text-[#475569] dark:text-white/70">
                        Low cost never means low quality. Every medicine in our program meets the highest international standards.
                    </p>
                </div>

                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div
                        v-for="standard in qualityStandards"
                        :key="standard.title"
                        class="card-modern p-6"
                    >
                        <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F59E0B]/20">
                            <svg class="h-6 w-6 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 class="mb-2 text-lg font-bold text-[#0F172A] dark:text-white">{{ standard.title }}</h3>
                        <p class="text-[#475569] dark:text-[#94A3B8]">{{ standard.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Pharmacy Locations -->
        <section class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid items-center gap-16 lg:grid-cols-2">
                    <div>
                        <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#0EA5E9]/10 px-4 py-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]"></div>
                            <span class="text-sm font-semibold text-[#0EA5E9]">Locations</span>
                        </div>
                        <h2 class="mb-6 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                            45 Pharmacies Across 5 Regions
                        </h2>
                        <p class="mb-8 text-lg text-[#475569] dark:text-[#94A3B8]">
                            Our network of rural pharmacies ensures that quality medicines are never more than a short distance away from any community we serve.
                        </p>

                        <div class="space-y-4">
                            <div
                                v-for="location in pharmacyLocations"
                                :key="location.region"
                                class="flex items-center justify-between rounded-xl bg-[#F8FAFC] dark:bg-[#334155] p-4"
                            >
                                <div class="flex items-center gap-4">
                                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0EA5E9]/10">
                                        <svg class="h-6 w-6 text-[#0EA5E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-[#0F172A] dark:text-white">{{ location.region }}</h4>
                                        <p class="text-sm text-[#64748B] dark:text-[#94A3B8]">{{ location.villages }} villages covered</p>
                                    </div>
                                </div>
                                <span class="rounded-full bg-[#0EA5E9] px-4 py-1 text-sm font-bold text-white">
                                    {{ location.count }} pharmacies
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="card-modern h-[500px] overflow-hidden rounded-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.901200110099!2d-0.1277583843942965!3d51.5073509796358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1701234567890!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style="border:0;"
                            allowfullscreen
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            class="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials -->
        <section class="bg-[#F8FAFC] dark:bg-[#1E293B] py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white">Patient Stories</h2>
                    <p class="text-lg text-[#475569] dark:text-[#94A3B8]">Hear from patients who have benefited from our low-cost medicine program.</p>
                </div>

                <div class="grid gap-8 md:grid-cols-2">
                    <div
                        v-for="testimonial in testimonials"
                        :key="testimonial.name"
                        class="card-modern p-8"
                    >
                        <div class="mb-6 flex items-center gap-4">
                            <img :src="testimonial.image" :alt="testimonial.name" class="h-16 w-16 rounded-full object-cover" />
                            <div>
                                <h4 class="font-bold text-[#0F172A] dark:text-white">{{ testimonial.name }}</h4>
                                <p class="text-sm text-[#64748B] dark:text-[#94A3B8]">{{ testimonial.condition }}</p>
                            </div>
                            <div class="ml-auto rounded-lg bg-[#10B981]/10 px-4 py-2">
                                <p class="text-xs text-[#64748B] dark:text-[#94A3B8]">Saves</p>
                                <p class="font-bold text-[#10B981]">{{ testimonial.savings }}</p>
                            </div>
                        </div>
                        <p class="text-[#475569] dark:text-[#94A3B8]">"{{ testimonial.quote }}"</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQs -->
        <section class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center">
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white">Frequently Asked Questions</h2>
                </div>

                <div class="space-y-4">
                    <div
                        v-for="faq in faqs"
                        :key="faq.question"
                        class="card-modern p-6"
                    >
                        <h3 class="mb-3 font-bold text-[#0F172A] dark:text-white">{{ faq.question }}</h3>
                        <p class="text-[#475569] dark:text-[#94A3B8]">{{ faq.answer }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="bg-gradient-to-r from-[#10B981] to-[#059669] py-24">
            <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <h2 class="mb-6 text-3xl font-bold text-white sm:text-4xl">
                    Need Affordable Medicines?
                </h2>
                <p class="mb-8 text-lg text-white/80">
                    Visit your nearest CareRural pharmacy or contact us to learn how we can help you access quality medicines at affordable prices.
                </p>
                <div class="flex flex-col justify-center gap-4 sm:flex-row">
                    <router-link to="/contact" class="rounded-full bg-white px-8 py-3 font-semibold text-[#10B981] transition-all hover:-translate-y-1 hover:shadow-xl">
                        Find a Pharmacy
                    </router-link>
                    <router-link to="/donate" class="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-white/10">
                        Support This Program
                    </router-link>
                </div>
            </div>
        </section>
    
</template>
