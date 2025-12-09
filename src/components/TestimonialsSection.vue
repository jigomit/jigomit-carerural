<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const currentSlide = ref(0);
let slideInterval: ReturnType<typeof setInterval> | null = null;

const testimonials = [
    {
        id: 1,
        name: 'Lakshmi Devi',
        role: 'Patient, Rampur Village',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
        quote: 'Before CareRural came to our village, the nearest hospital was 50 kilometers away. Now, my entire family receives regular checkups right here. The volunteer doctors saved my husband during his heart emergency.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Dr. Rajesh Kumar',
        role: 'Volunteer Doctor, AIIMS',
        avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=150&q=80',
        quote: 'Volunteering with CareRural has been the most fulfilling experience of my medical career. Seeing the gratitude in patients\' eyes when they receive care they never thought possible is truly priceless.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Sunita Sharma',
        role: 'Community Health Worker',
        avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80',
        quote: 'The training I received from CareRural transformed me from a village housewife to a certified health worker. Now I help my community every day, and the low-cost medicines have been a blessing.',
        rating: 5,
    },
    {
        id: 4,
        name: 'Mohan Singh',
        role: 'Village Sarpanch, Bharatpur',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        quote: 'Our village has seen a dramatic improvement in health outcomes since CareRural started their monthly camps. Child mortality has reduced, and more mothers are choosing safe deliveries.',
        rating: 5,
    },
];

function nextSlide(): void {
    currentSlide.value = (currentSlide.value + 1) % testimonials.length;
}

function prevSlide(): void {
    currentSlide.value = (currentSlide.value - 1 + testimonials.length) % testimonials.length;
}

function goToSlide(index: number): void {
    currentSlide.value = index;
}

function startAutoSlide(): void {
    slideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide(): void {
    if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
    }
}

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isVisible.value = true;
                    startAutoSlide();
                } else {
                    stopAutoSlide();
                }
            });
        },
        { threshold: 0.2 },
    );

    const section = document.getElementById('testimonials');
    if (section) {
        observer.observe(section);
    }
});

onUnmounted(() => {
    stopAutoSlide();
});
</script>

<template>
    <section id="testimonials" class="relative overflow-hidden bg-white py-24 lg:py-32">
        <!-- Background decoration -->
        <div class="absolute top-0 left-0 h-full w-full">
            <div class="absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-[#0EA5E9]/5 to-[#8B5CF6]/5 blur-3xl"></div>
            <div class="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gradient-to-br from-[#10B981]/5 to-[#0EA5E9]/5 blur-3xl"></div>
        </div>

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="mx-auto mb-16 max-w-3xl text-center" :class="[isVisible ? 'animate-fade-in' : 'opacity-0']">
                <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#EC4899]/10 px-4 py-2">
                    <div class="h-1.5 w-1.5 rounded-full bg-[#EC4899]"></div>
                    <span class="text-sm font-semibold text-[#EC4899]">Success Stories</span>
                </div>
                <h2 class="mb-4 text-3xl font-bold text-[#0F172A] sm:text-4xl lg:text-5xl">
                    Voices of <span class="gradient-text">Transformation</span>
                </h2>
                <div class="section-divider mx-auto mb-6"></div>
                <p class="text-lg text-[#475569]">
                    Real stories from real people whose lives have been transformed by our healthcare initiatives.
                </p>
            </div>

            <!-- Main Testimonial Carousel -->
            <div
                class="relative mb-16"
                :class="[isVisible ? 'animate-fade-in delay-200' : 'opacity-0']"
                @mouseenter="stopAutoSlide"
                @mouseleave="startAutoSlide"
            >
                <div class="card-modern overflow-hidden p-8 shadow-xl md:p-12">
                    <div class="grid items-center gap-8 lg:grid-cols-5">
                        <!-- Avatar & Info -->
                        <div class="text-center lg:col-span-2 lg:text-left">
                            <!-- Avatar with gradient ring -->
                            <div class="relative mx-auto mb-6 h-32 w-32 lg:mx-0">
                                <div class="absolute inset-0 rounded-full bg-gradient-to-br from-[#0EA5E9] via-[#8B5CF6] to-[#EC4899] p-1">
                                    <div class="h-full w-full rounded-full bg-white p-1">
                                        <img
                                            :src="testimonials[currentSlide].avatar"
                                            :alt="testimonials[currentSlide].name"
                                            class="h-full w-full rounded-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            <h4 class="mb-1 text-xl font-bold text-[#0F172A]">
                                {{ testimonials[currentSlide].name }}
                            </h4>
                            <p class="mb-4 text-[#475569]">{{ testimonials[currentSlide].role }}</p>

                            <!-- Rating Stars -->
                            <div class="flex justify-center gap-1 lg:justify-start">
                                <svg v-for="i in 5" :key="i" class="h-5 w-5 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                        </div>

                        <!-- Quote -->
                        <div class="lg:col-span-3">
                            <svg class="mb-6 h-12 w-12 text-[#0EA5E9]/20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p class="text-xl leading-relaxed text-[#0F172A] md:text-2xl">
                                "{{ testimonials[currentSlide].quote }}"
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Navigation Buttons -->
                <button
                    class="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl transition-all hover:scale-110 hover:bg-gradient-to-br hover:from-[#0EA5E9] hover:to-[#8B5CF6] hover:text-white"
                    @click="prevSlide"
                    aria-label="Previous testimonial"
                >
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    class="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl transition-all hover:scale-110 hover:bg-gradient-to-br hover:from-[#0EA5E9] hover:to-[#8B5CF6] hover:text-white"
                    @click="nextSlide"
                    aria-label="Next testimonial"
                >
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <!-- Dots Indicator -->
                <div class="mt-8 flex justify-center gap-3">
                    <button
                        v-for="(testimonial, index) in testimonials"
                        :key="testimonial.id"
                        class="h-3 rounded-full transition-all duration-300"
                        :class="currentSlide === index ? 'w-10 bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6]' : 'w-3 bg-[#E2E8F0] hover:bg-[#CBD5E1]'"
                        @click="goToSlide(index)"
                        :aria-label="`Go to testimonial ${index + 1}`"
                    ></button>
                </div>
            </div>

            <!-- Testimonial Cards Grid -->
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div
                    v-for="(testimonial, index) in testimonials"
                    :key="testimonial.id"
                    class="card-modern group cursor-pointer p-6 transition-all hover:shadow-xl"
                    :class="[isVisible ? 'animate-fade-in' : 'opacity-0', currentSlide === index ? 'ring-2 ring-[#0EA5E9] ring-offset-2' : '']"
                    :style="{ animationDelay: `${300 + index * 100}ms` }"
                    @click="goToSlide(index)"
                >
                    <div class="mb-4 flex items-center gap-4">
                        <div class="relative h-14 w-14 overflow-hidden rounded-full">
                            <img :src="testimonial.avatar" :alt="testimonial.name" class="h-full w-full object-cover transition-transform group-hover:scale-110" />
                        </div>
                        <div>
                            <h5 class="font-bold text-[#0F172A]">{{ testimonial.name }}</h5>
                            <p class="text-xs text-[#475569]">{{ testimonial.role }}</p>
                        </div>
                    </div>
                    <p class="line-clamp-3 text-sm text-[#475569]">"{{ testimonial.quote }}"</p>

                    <!-- Rating -->
                    <div class="mt-4 flex gap-1">
                        <svg v-for="i in 5" :key="i" class="h-4 w-4 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
