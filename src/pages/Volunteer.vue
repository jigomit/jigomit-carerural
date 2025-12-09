<script setup lang="ts">

import { ref } from 'vue';

const selectedRole = ref('');

const formData = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    availability: {
        weekdays: false,
        weekends: false,
        remote: false,
    },
});

const errors = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    availability: '',
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);

const volunteerRoles = [
    {
        id: 'doctor',
        title: 'Volunteer Doctor',
        description: 'Join our network of medical professionals providing care in rural areas.',
        requirements: ['Medical degree and active license', 'Minimum 2 years clinical experience', 'Ability to commit 1-2 weekends/month'],
        commitment: '1-2 weekends per month',
        icon: 'doctor',
        color: 'from-[#0EA5E9] to-[#0284C7]',
    },
    {
        id: 'nurse',
        title: 'Volunteer Nurse',
        description: 'Support medical camps with nursing care and patient assistance.',
        requirements: ['Nursing degree and active license', 'Clinical experience preferred', 'Compassionate patient care skills'],
        commitment: '1-2 weekends per month',
        icon: 'nurse',
        color: 'from-[#EC4899] to-[#DB2777]',
    },
    {
        id: 'pharmacist',
        title: 'Volunteer Pharmacist',
        description: 'Help manage our low-cost medicine program and patient counseling.',
        requirements: ['Pharmacy degree and license', 'Experience in medication management', 'Patient counseling skills'],
        commitment: 'Flexible schedule',
        icon: 'medicine',
        color: 'from-[#10B981] to-[#059669]',
    },
    {
        id: 'healthworker',
        title: 'Community Health Worker',
        description: 'Train as a health worker and serve your own community.',
        requirements: ['High school education', 'Member of rural community', 'Commitment to complete 6-month training'],
        commitment: 'Part-time after training',
        icon: 'community',
        color: 'from-[#F59E0B] to-[#D97706]',
    },
    {
        id: 'logistics',
        title: 'Logistics Volunteer',
        description: 'Help organize medical camps, manage supplies, and coordinate transportation.',
        requirements: ['Organizational skills', 'Valid driving license preferred', 'Physical fitness for fieldwork'],
        commitment: 'Event-based',
        icon: 'logistics',
        color: 'from-[#8B5CF6] to-[#7C3AED]',
    },
    {
        id: 'admin',
        title: 'Administrative Volunteer',
        description: 'Support our office with data entry, communications, and donor relations.',
        requirements: ['Computer proficiency', 'Good communication skills', 'Attention to detail'],
        commitment: 'Flexible remote/office',
        icon: 'admin',
        color: 'from-[#06B6D4] to-[#0891B2]',
    },
];

const benefits = [
    'Make a real difference in underserved communities',
    'Work alongside experienced healthcare professionals',
    'Receive training and professional development',
    'Get volunteer hours certification',
    'Network with like-minded individuals',
    'Travel to beautiful rural areas',
    'Tax-deductible expenses for eligible volunteers',
    'Letters of recommendation',
];

const testimonials = [
    {
        name: 'Dr. Sarah Mitchell',
        role: 'Volunteer Physician',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80',
        quote: 'Volunteering with CareRural has been the highlight of my medical career. The impact we make is truly profound.',
    },
    {
        name: 'James Wilson',
        role: 'Logistics Volunteer',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
        quote: 'Even without medical training, I found a meaningful way to contribute. The team made me feel valued from day one.',
    },
];

function validateFirstName(): boolean {
    if (!formData.value.firstName.trim()) {
        errors.value.firstName = 'First name is required';
        return false;
    }
    if (formData.value.firstName.trim().length < 2) {
        errors.value.firstName = 'First name must be at least 2 characters';
        return false;
    }
    errors.value.firstName = '';
    return true;
}

function validateLastName(): boolean {
    if (!formData.value.lastName.trim()) {
        errors.value.lastName = 'Last name is required';
        return false;
    }
    if (formData.value.lastName.trim().length < 2) {
        errors.value.lastName = 'Last name must be at least 2 characters';
        return false;
    }
    errors.value.lastName = '';
    return true;
}

function validateEmail(): boolean {
    if (!formData.value.email.trim()) {
        errors.value.email = 'Email address is required';
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.value.email)) {
        errors.value.email = 'Please enter a valid email address';
        return false;
    }
    errors.value.email = '';
    return true;
}

function validatePhone(): boolean {
    if (!formData.value.phone.trim()) {
        errors.value.phone = 'Phone number is required';
        return false;
    }
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(formData.value.phone) || formData.value.phone.replace(/\D/g, '').length < 10) {
        errors.value.phone = 'Please enter a valid phone number';
        return false;
    }
    errors.value.phone = '';
    return true;
}

function validateRole(): boolean {
    if (!selectedRole.value) {
        errors.value.role = 'Please select a preferred role';
        return false;
    }
    errors.value.role = '';
    return true;
}

function validateExperience(): boolean {
    if (!formData.value.experience.trim()) {
        errors.value.experience = 'Please tell us about your relevant experience';
        return false;
    }
    if (formData.value.experience.trim().length < 20) {
        errors.value.experience = 'Please provide at least 20 characters about your experience';
        return false;
    }
    errors.value.experience = '';
    return true;
}

function validateAvailability(): boolean {
    const hasAvailability = 
        formData.value.availability.weekdays || 
        formData.value.availability.weekends || 
        formData.value.availability.remote;
    
    if (!hasAvailability) {
        errors.value.availability = 'Please select at least one availability option';
        return false;
    }
    errors.value.availability = '';
    return true;
}

function validateForm(): boolean {
    const isValid = 
        validateFirstName() &&
        validateLastName() &&
        validateEmail() &&
        validatePhone() &&
        validateRole() &&
        validateExperience() &&
        validateAvailability();
    return isValid;
}

function handleSubmit(event: Event): void {
    event.preventDefault();
    
    if (!validateForm()) {
        return;
    }

    isSubmitting.value = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        isSubmitting.value = false;
        submitSuccess.value = true;
        
        // Reset form after success
        formData.value = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            experience: '',
            availability: {
                weekdays: false,
                weekends: false,
                remote: false,
            },
        };
        selectedRole.value = '';
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            submitSuccess.value = false;
        }, 5000);
    }, 1000);
}
</script>

<template>
    
    
        <!-- Hero -->
        <section class="relative overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] pt-32 pb-24">
            <div class="absolute inset-0">
                <div class="blob absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#8B5CF6]/10 dark:bg-[#8B5CF6]/20 blur-3xl"></div>
                <div class="blob absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#EC4899]/10 dark:bg-[#EC4899]/20 blur-3xl"></div>
            </div>

            <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#8B5CF6]/10 dark:bg-white/10 px-4 py-2 backdrop-blur-sm border border-[#8B5CF6]/20 dark:border-transparent">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]"></div>
                        <span class="text-sm font-semibold text-[#8B5CF6]">Join Our Team</span>
                    </div>
                    <h1 class="mb-6 text-4xl font-bold text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl">
                        Become a <span class="gradient-text">Volunteer</span>
                    </h1>
                    <p class="text-lg text-[#475569] dark:text-white/70">
                        Share your skills, time, and compassion to help bring quality healthcare to rural communities. Every volunteer makes a difference.
                    </p>
                </div>
            </div>
        </section>

        <!-- Volunteer Roles -->
        <section class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white">Volunteer Opportunities</h2>
                    <p class="text-lg text-[#475569] dark:text-[#94A3B8]">
                        Find the perfect role that matches your skills and availability.
                    </p>
                </div>

                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div
                        v-for="role in volunteerRoles"
                        :key="role.id"
                        class="card-modern p-6 transition-all hover:-translate-y-2 hover:shadow-xl"
                    >
                        <div :class="['mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br', role.color]">
                            <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <h3 class="mb-2 text-lg font-bold text-[#0F172A] dark:text-white">{{ role.title }}</h3>
                        <p class="mb-4 text-[#475569] dark:text-[#94A3B8]">{{ role.description }}</p>
                        <div class="mb-4 rounded-lg bg-[#F8FAFC] dark:bg-[#334155] p-3">
                            <span class="text-sm font-medium text-[#64748B] dark:text-[#94A3B8]">Commitment: </span>
                            <span class="text-sm font-semibold text-[#0F172A] dark:text-white">{{ role.commitment }}</span>
                        </div>

                        <div>
                            <h4 class="mb-2 text-sm font-semibold text-[#0F172A] dark:text-white">Requirements:</h4>
                            <ul class="space-y-1">
                                <li v-for="req in role.requirements" :key="req" class="flex items-center gap-2 text-sm text-[#475569] dark:text-[#94A3B8]">
                                    <svg class="h-4 w-4 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                    {{ req }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Application Form -->
        <section id="apply" class="bg-[#F8FAFC] dark:bg-[#1E293B] py-24 lg:py-32">
            <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div class="card-modern p-8 lg:p-12">
                    <h2 class="mb-2 text-2xl font-bold text-[#0F172A] dark:text-white">Apply to Volunteer</h2>
                    <p class="mb-8 text-[#475569] dark:text-[#94A3B8]">Fill out the form below and our volunteer coordinator will contact you.</p>

                    <form @submit="handleSubmit" class="space-y-6">
                        <!-- Success Message -->
                        <div v-if="submitSuccess" class="rounded-lg bg-[#10B981]/10 border border-[#10B981]/20 p-4">
                            <div class="flex items-center gap-3">
                                <svg class="h-5 w-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <p class="text-sm font-medium text-[#10B981]">Application submitted successfully! Our volunteer coordinator will contact you soon.</p>
                            </div>
                        </div>

                        <div class="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">First Name</label>
                                <input 
                                    v-model="formData.firstName" 
                                    type="text" 
                                    :class="['input-modern', errors.firstName ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]' : '']"
                                    placeholder="John"
                                    @blur="validateFirstName"
                                />
                                <p v-if="errors.firstName" class="mt-1 text-sm text-[#EF4444]">{{ errors.firstName }}</p>
                            </div>
                            <div>
                                <label class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">Last Name</label>
                                <input 
                                    v-model="formData.lastName" 
                                    type="text" 
                                    :class="['input-modern', errors.lastName ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]' : '']"
                                    placeholder="Doe"
                                    @blur="validateLastName"
                                />
                                <p v-if="errors.lastName" class="mt-1 text-sm text-[#EF4444]">{{ errors.lastName }}</p>
                            </div>
                        </div>

                        <div class="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">Email</label>
                                <input 
                                    v-model="formData.email" 
                                    type="email" 
                                    :class="['input-modern', errors.email ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]' : '']"
                                    placeholder="john@example.com"
                                    @blur="validateEmail"
                                />
                                <p v-if="errors.email" class="mt-1 text-sm text-[#EF4444]">{{ errors.email }}</p>
                            </div>
                            <div>
                                <label class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">Phone</label>
                                <input 
                                    v-model="formData.phone" 
                                    type="tel" 
                                    :class="['input-modern', errors.phone ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]' : '']"
                                    placeholder="+1 (555) 123-4567"
                                    @blur="validatePhone"
                                />
                                <p v-if="errors.phone" class="mt-1 text-sm text-[#EF4444]">{{ errors.phone }}</p>
                            </div>
                        </div>

                        <div>
                            <label class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">Preferred Role</label>
                            <select 
                                v-model="selectedRole" 
                                :class="['input-modern', errors.role ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]' : '']"
                                @change="validateRole"
                            >
                                <option value="">Select a role</option>
                                <option v-for="role in volunteerRoles" :key="role.id" :value="role.id">
                                    {{ role.title }}
                                </option>
                            </select>
                            <p v-if="errors.role" class="mt-1 text-sm text-[#EF4444]">{{ errors.role }}</p>
                        </div>

                        <div>
                            <label class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">Relevant Experience</label>
                            <textarea 
                                v-model="formData.experience" 
                                :class="['input-modern resize-none', errors.experience ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]' : '']"
                                rows="4" 
                                placeholder="Tell us about your relevant experience and why you want to volunteer..."
                                @blur="validateExperience"
                            ></textarea>
                            <p v-if="errors.experience" class="mt-1 text-sm text-[#EF4444]">{{ errors.experience }}</p>
                        </div>

                        <div>
                            <label class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">Availability</label>
                            <div class="grid gap-3 sm:grid-cols-3">
                                <label class="flex items-center gap-2">
                                    <input 
                                        v-model="formData.availability.weekdays" 
                                        type="checkbox" 
                                        class="h-4 w-4 rounded border-[#CBD5E1] text-[#0EA5E9]"
                                        @change="validateAvailability"
                                    />
                                    <span class="text-sm text-[#475569] dark:text-[#94A3B8]">Weekdays</span>
                                </label>
                                <label class="flex items-center gap-2">
                                    <input 
                                        v-model="formData.availability.weekends" 
                                        type="checkbox" 
                                        class="h-4 w-4 rounded border-[#CBD5E1] text-[#0EA5E9]"
                                        @change="validateAvailability"
                                    />
                                    <span class="text-sm text-[#475569] dark:text-[#94A3B8]">Weekends</span>
                                </label>
                                <label class="flex items-center gap-2">
                                    <input 
                                        v-model="formData.availability.remote" 
                                        type="checkbox" 
                                        class="h-4 w-4 rounded border-[#CBD5E1] text-[#0EA5E9]"
                                        @change="validateAvailability"
                                    />
                                    <span class="text-sm text-[#475569] dark:text-[#94A3B8]">Remote only</span>
                                </label>
                            </div>
                            <p v-if="errors.availability" class="mt-1 text-sm text-[#EF4444]">{{ errors.availability }}</p>
                        </div>

                        <button 
                            type="submit" 
                            :disabled="isSubmitting"
                            :class="['btn-primary w-full', isSubmitting ? 'opacity-50 cursor-not-allowed' : '']"
                        >
                            <span v-if="!isSubmitting">Submit Application</span>
                            <span v-else class="flex items-center justify-center gap-2">
                                <svg class="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>

        <!-- Benefits -->
        <section class="py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid items-center gap-16 lg:grid-cols-2">
                    <div>
                        <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#10B981]/10 px-4 py-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-[#10B981]"></div>
                            <span class="text-sm font-semibold text-[#10B981]">Benefits</span>
                        </div>
                        <h2 class="mb-6 text-3xl font-bold text-[#0F172A]">Why Volunteer With Us?</h2>
                        <p class="mb-8 text-lg text-[#475569]">
                            Volunteering with CareRural is more than just giving time - it is an investment in communities, in yourself, and in a healthier future for all.
                        </p>

                        <div class="grid gap-4 sm:grid-cols-2">
                            <div
                                v-for="benefit in benefits"
                                :key="benefit"
                                class="flex items-center gap-3"
                            >
                                <div class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#10B981]/10">
                                    <svg class="h-4 w-4 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <span class="text-[#475569]">{{ benefit }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-6">
                        <div
                            v-for="testimonial in testimonials"
                            :key="testimonial.name"
                            class="card-modern p-6"
                        >
                            <div class="mb-4 flex gap-1">
                                <svg v-for="i in 5" :key="i" class="h-5 w-5 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <p class="mb-4 text-[#475569]">"{{ testimonial.quote }}"</p>
                            <div class="flex items-center gap-3">
                                <img :src="testimonial.image" :alt="testimonial.name" class="h-12 w-12 rounded-full object-cover" loading="lazy" />
                                <div>
                                    <p class="font-bold text-[#0F172A]">{{ testimonial.name }}</p>
                                    <p class="text-sm text-[#64748B]">{{ testimonial.role }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] py-24">
            <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <h2 class="mb-6 text-3xl font-bold text-white sm:text-4xl">
                    Ready to Make a Difference?
                </h2>
                <p class="mb-8 text-lg text-white/80">
                    Join our community of 500+ volunteers who are changing lives every day.
                </p>
                <a href="#apply" class="inline-block rounded-full bg-white px-8 py-3 font-semibold text-[#8B5CF6] transition-all hover:-translate-y-1 hover:shadow-xl">
                    Apply Now
                </a>
            </div>
        </section>
    
</template>
