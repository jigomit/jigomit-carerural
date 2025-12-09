<script setup lang="ts">

import { ref } from 'vue';


const activeCategory = ref('all');

const categories = [
    { id: 'all', label: 'All Stories' },
    { id: 'patients', label: 'Patients' },
    { id: 'doctors', label: 'Volunteer Doctors' },
    { id: 'workers', label: 'Health Workers' },
    { id: 'community', label: 'Community Leaders' },
];

const testimonials = [
    {
        id: 1,
        name: 'Lakshmi Devi',
        role: 'Patient',
        location: 'Rampur Village',
        category: 'patients',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
        quote: 'Before CareRural came to our village, the nearest hospital was 50 kilometers away. Now, my entire family receives regular checkups right here. The volunteer doctors saved my husband during his heart emergency. We are forever grateful.',
        rating: 5,
        date: 'October 2024',
    },
    {
        id: 2,
        name: 'Dr. Rajesh Kumar',
        role: 'Volunteer Doctor',
        location: 'AIIMS Delhi',
        category: 'doctors',
        avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=150&q=80',
        quote: 'Volunteering with CareRural has been the most fulfilling experience of my medical career. Seeing the gratitude in patients eyes when they receive care they never thought possible is truly priceless. I encourage all my colleagues to join.',
        rating: 5,
        date: 'September 2024',
    },
    {
        id: 3,
        name: 'Sunita Sharma',
        role: 'Community Health Worker',
        location: 'Green Valley',
        category: 'workers',
        avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80',
        quote: 'The training I received from CareRural transformed me from a village housewife to a certified health worker. Now I help my community every day, and the low-cost medicines have been a blessing for everyone.',
        rating: 5,
        date: 'November 2024',
    },
    {
        id: 4,
        name: 'Mohan Singh',
        role: 'Village Sarpanch',
        location: 'Bharatpur District',
        category: 'community',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        quote: 'Our village has seen a dramatic improvement in health outcomes since CareRural started their monthly camps. Child mortality has reduced, and more mothers are choosing safe deliveries. This is the change we needed.',
        rating: 5,
        date: 'August 2024',
    },
    {
        id: 5,
        name: 'Priya Patel',
        role: 'Patient - Mother',
        location: 'Mountain View Village',
        category: 'patients',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
        quote: 'I delivered my baby safely at the CareRural birthing center. The care I received was exceptional - something I never thought would be possible in our remote village. My daughter is healthy and thriving.',
        rating: 5,
        date: 'July 2024',
    },
    {
        id: 6,
        name: 'Dr. Sarah Mitchell',
        role: 'Volunteer Physician',
        location: 'Johns Hopkins',
        category: 'doctors',
        avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80',
        quote: 'CareRural has created an incredible system that allows medical professionals to make a real difference in underserved communities. The organization is well-run, transparent, and truly impactful.',
        rating: 5,
        date: 'June 2024',
    },
    {
        id: 7,
        name: 'Ramesh Gupta',
        role: 'Diabetes Patient',
        location: 'Sunrise Village',
        category: 'patients',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
        quote: 'For years I struggled to manage my diabetes without proper medical guidance. CareRural chronic disease program has been life-changing. Regular monitoring and affordable medicines have improved my quality of life immensely.',
        rating: 5,
        date: 'May 2024',
    },
    {
        id: 8,
        name: 'Kavita Reddy',
        role: 'Community Health Worker',
        location: 'Pine Forest Region',
        category: 'workers',
        avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=150&q=80',
        quote: 'Being trained by CareRural gave me purpose and a way to serve my community. I have helped with over 200 prenatal checkups and 50 safe deliveries. Every life saved makes it worthwhile.',
        rating: 5,
        date: 'April 2024',
    },
];

const filteredTestimonials = ref(testimonials);

function filterByCategory(category: string): void {
    activeCategory.value = category;
    if (category === 'all') {
        filteredTestimonials.value = testimonials;
    } else {
        filteredTestimonials.value = testimonials.filter(t => t.category === category);
    }
}
</script>

<template>
    
    
        <!-- Hero -->
        <section class="relative overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] pt-32 pb-24">
            <div class="absolute inset-0">
                <div class="blob absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#EC4899]/10 dark:bg-[#EC4899]/20 blur-3xl"></div>
                <div class="blob absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#F59E0B]/10 dark:bg-[#F59E0B]/20 blur-3xl"></div>
            </div>

            <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#EC4899]/10 dark:bg-white/10 px-4 py-2 backdrop-blur-sm border border-[#EC4899]/20 dark:border-transparent">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#EC4899]"></div>
                        <span class="text-sm font-semibold text-[#EC4899]">Testimonials</span>
                    </div>
                    <h1 class="mb-6 text-4xl font-bold text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl">
                        Voices of <span class="gradient-text">Transformation</span>
                    </h1>
                    <p class="text-lg text-[#475569] dark:text-white/70">
                        Real stories from patients, doctors, health workers, and community leaders whose lives have been touched by our healthcare initiatives.
                    </p>
                </div>
            </div>
        </section>

        <!-- Category Filter -->
        <section class="border-b border-[#E2E8F0] dark:border-[#334155] bg-white dark:bg-[#0F172A] py-6">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex flex-wrap justify-center gap-3">
                    <button
                        v-for="category in categories"
                        :key="category.id"
                        :class="[
                            'rounded-full px-6 py-2 text-sm font-medium transition-all',
                            activeCategory === category.id
                                ? 'bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] text-white'
                                : 'bg-[#F1F5F9] dark:bg-[#1E293B] text-[#475569] dark:text-[#CBD5E1] hover:bg-[#E2E8F0] dark:hover:bg-[#334155]',
                        ]"
                        @click="filterByCategory(category.id)"
                    >
                        {{ category.label }}
                    </button>
                </div>
            </div>
        </section>

        <!-- Testimonials Grid -->
        <section class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div
                        v-for="testimonial in filteredTestimonials"
                        :key="testimonial.id"
                        class="card-modern p-6 transition-all hover:-translate-y-2 hover:shadow-xl"
                    >
                        <!-- Quote icon -->
                        <svg class="mb-4 h-8 w-8 text-[#0EA5E9]/20 dark:text-[#0EA5E9]/30" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>

                        <p class="mb-6 text-[#475569] dark:text-[#CBD5E1]">"{{ testimonial.quote }}"</p>

                        <!-- Rating -->
                        <div class="mb-4 flex gap-1">
                            <svg v-for="i in 5" :key="i" class="h-5 w-5 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>

                        <div class="flex items-center gap-4 border-t border-[#E2E8F0] dark:border-[#334155] pt-4">
                            <img :src="testimonial.avatar" :alt="testimonial.name" class="h-12 w-12 rounded-full object-cover" loading="lazy" />
                            <div class="flex-1">
                                <p class="font-bold text-[#0F172A] dark:text-white">{{ testimonial.name }}</p>
                                <p class="text-sm text-[#64748B] dark:text-[#94A3B8]">{{ testimonial.role }}</p>
                                <p class="text-xs text-[#94A3B8] dark:text-[#64748B]">{{ testimonial.location }}</p>
                            </div>
                            <span class="text-xs text-[#94A3B8] dark:text-[#64748B]">{{ testimonial.date }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Video Testimonials -->
        <section class="bg-[#F8FAFC] dark:bg-[#1E293B] py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
                        Video Stories
                    </h2>
                    <p class="text-lg text-[#475569] dark:text-[#94A3B8]">
                        Watch the impact of our work through the eyes of those we serve.
                    </p>
                </div>

                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div class="card-modern group overflow-hidden">
                        <div class="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
                                alt="Video thumbnail"
                                class="h-full w-full object-cover"
                            />
                            <div class="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors group-hover:bg-black/50">
                                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl">
                                    <svg class="ml-1 h-6 w-6 text-[#0EA5E9]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="p-4">
                            <h3 class="font-bold text-[#0F172A] dark:text-white">A Village Transformed</h3>
                            <p class="text-sm text-[#64748B] dark:text-[#94A3B8]">3:45 min</p>
                        </div>
                    </div>

                    <div class="card-modern group overflow-hidden">
                        <div class="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80"
                                alt="Video thumbnail"
                                class="h-full w-full object-cover"
                            />
                            <div class="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors group-hover:bg-black/50">
                                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl">
                                    <svg class="ml-1 h-6 w-6 text-[#0EA5E9]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="p-4">
                            <h3 class="font-bold text-[#0F172A] dark:text-white">Mothers Journey to Safe Delivery</h3>
                            <p class="text-sm text-[#64748B] dark:text-[#94A3B8]">5:20 min</p>
                        </div>
                    </div>

                    <div class="card-modern group overflow-hidden">
                        <div class="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
                                alt="Video thumbnail"
                                class="h-full w-full object-cover"
                            />
                            <div class="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors group-hover:bg-black/50">
                                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl">
                                    <svg class="ml-1 h-6 w-6 text-[#0EA5E9]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="p-4">
                            <h3 class="font-bold text-[#0F172A] dark:text-white">Why I Volunteer</h3>
                            <p class="text-sm text-[#64748B] dark:text-[#94A3B8]">4:15 min</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] py-24">
            <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <h2 class="mb-6 text-3xl font-bold text-white sm:text-4xl">
                    Share Your Story
                </h2>
                <p class="mb-8 text-lg text-white/80">
                    Has CareRural impacted your life? We would love to hear from you.
                </p>
                <router-link to="/contact" class="inline-block rounded-full bg-white px-8 py-3 font-semibold text-[#EC4899] transition-all hover:-translate-y-1 hover:shadow-xl">
                    Contact Us
                </router-link>
            </div>
        </section>
    
</template>
