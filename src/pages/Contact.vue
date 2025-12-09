<script setup lang="ts">

import { ref, nextTick } from 'vue';

const formData = ref({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
});

const errors = ref({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);

function validateName(): boolean {
    if (!formData.value.name.trim()) {
        errors.value.name = 'Full name is required';
        return false;
    }
    if (formData.value.name.trim().length < 2) {
        errors.value.name = 'Name must be at least 2 characters';
        return false;
    }
    errors.value.name = '';
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

function validateSubject(): boolean {
    if (!formData.value.subject) {
        errors.value.subject = 'Please select a subject';
        return false;
    }
    errors.value.subject = '';
    return true;
}

function validateMessage(): boolean {
    if (!formData.value.message.trim()) {
        errors.value.message = 'Message is required';
        return false;
    }
    if (formData.value.message.trim().length < 10) {
        errors.value.message = 'Message must be at least 10 characters';
        return false;
    }
    errors.value.message = '';
    return true;
}

function validateForm(): boolean {
    // Run all validations to show all errors
    const nameValid = validateName();
    const emailValid = validateEmail();
    const phoneValid = validatePhone();
    const subjectValid = validateSubject();
    const messageValid = validateMessage();
    
    const isValid = nameValid && emailValid && phoneValid && subjectValid && messageValid;
    
    // Scroll to first error if validation fails
    if (!isValid) {
        // Use nextTick to ensure DOM is updated with error classes
        nextTick(() => {
            // Find first field with error by checking error messages
            const errorFields = ['name', 'email', 'phone', 'subject', 'message'];
            for (const field of errorFields) {
                if (errors.value[field as keyof typeof errors.value]) {
                    const fieldElement = document.getElementById(field);
                    if (fieldElement) {
                        fieldElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        fieldElement.focus();
                        break;
                    }
                }
            }
        });
    }
    
    return isValid;
}

function handleSubmit(event: Event): void {
    event.preventDefault();
    
    // Clear previous success message
    submitSuccess.value = false;
    
    // Validate all fields and show errors
    if (!validateForm()) {
        return;
    }

    isSubmitting.value = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        isSubmitting.value = false;
        submitSuccess.value = true;
        
        // Clear all errors on successful submission
        errors.value = {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        };
        
        // Reset form after success
        formData.value = {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        };
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            submitSuccess.value = false;
        }, 5000);
    }, 1000);
}

const contactInfo = [
    {
        icon: 'location',
        title: 'Main Office',
        details: ['456 Rural Health Avenue', 'Healthcare District, State 54321', 'United States'],
        color: 'from-[#0EA5E9] to-[#0284C7]',
    },
    {
        icon: 'phone',
        title: 'Phone',
        details: ['Main: +1 (800) 555-CARE', 'Emergency: +1 (800) 555-9111', 'Mon-Fri: 8AM - 6PM EST'],
        color: 'from-[#10B981] to-[#059669]',
    },
    {
        icon: 'email',
        title: 'Email',
        details: ['General: info@carerural.org', 'Donations: donate@carerural.org', 'Volunteer: volunteer@carerural.org'],
        color: 'from-[#8B5CF6] to-[#7C3AED]',
    },
];

const regionalOffices = [
    { name: 'Eastern Region Office', address: 'Mountain View, State 12345', phone: '+1 (555) 111-2222' },
    { name: 'Western Region Office', address: 'Valley Town, State 23456', phone: '+1 (555) 333-4444' },
    { name: 'Northern Region Office', address: 'Hillside, State 34567', phone: '+1 (555) 555-6666' },
    { name: 'Southern Region Office', address: 'Riverside, State 45678', phone: '+1 (555) 777-8888' },
];

const faqs = [
    {
        question: 'How can I request a medical camp for my village?',
        answer: 'You can request a medical camp by filling out the contact form or calling our main office. Our team will assess the need and schedule a visit.',
    },
    {
        question: 'How do I become a volunteer doctor?',
        answer: 'Visit our Volunteer page and fill out the application form. We welcome medical professionals of all specialties.',
    },
    {
        question: 'Is my donation tax-deductible?',
        answer: 'Yes, CareRural is a registered 501(c)(3) non-profit organization. All donations are tax-deductible to the extent allowed by law.',
    },
    {
        question: 'How can I track the impact of my donation?',
        answer: 'Donors receive quarterly impact reports and can access their donor dashboard to see how their contributions are making a difference.',
    },
];
</script>

<template>
    
    
        <!-- Hero -->
        <section class="relative overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] pt-32 pb-24">
            <div class="absolute inset-0">
                <div class="blob absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0EA5E9]/10 dark:bg-[#0EA5E9]/20 blur-3xl"></div>
                <div class="blob absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#10B981]/10 dark:bg-[#10B981]/20 blur-3xl"></div>
            </div>

            <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#0EA5E9]/10 dark:bg-white/10 px-4 py-2 backdrop-blur-sm border border-[#0EA5E9]/20 dark:border-transparent">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]"></div>
                        <span class="text-sm font-semibold text-[#0EA5E9]">Get In Touch</span>
                    </div>
                    <h1 class="mb-6 text-4xl font-bold text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl">
                        We Would Love to <span class="gradient-text">Hear From You</span>
                    </h1>
                    <p class="text-lg text-[#475569] dark:text-white/70">
                        Have questions about our services, want to volunteer, or need to request healthcare for your community? Reach out to us.
                    </p>
                </div>
            </div>
        </section>

        <!-- Contact Info Cards -->
        <section class="relative -mt-16 z-10 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
                <div class="grid gap-6 md:grid-cols-3">
                    <div
                        v-for="info in contactInfo"
                        :key="info.title"
                        class="card-modern p-6"
                    >
                        <div :class="['mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br', info.color]">
                            <svg v-if="info.icon === 'location'" class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <svg v-else-if="info.icon === 'phone'" class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <svg v-else class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 class="mb-3 text-lg font-bold text-[#0F172A] dark:text-white">{{ info.title }}</h3>
                        <div class="space-y-1">
                            <p v-for="detail in info.details" :key="detail" class="text-[#475569] dark:text-[#94A3B8]">{{ detail }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Form & Map -->
        <section class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid gap-12 lg:grid-cols-2">
                    <!-- Form -->
                    <div class="card-modern p-8 lg:p-12">
                        <h2 class="mb-2 text-2xl font-bold text-[#0F172A] dark:text-white">Send Us a Message</h2>
                        <p class="mb-8 text-[#475569] dark:text-[#94A3B8]">Fill out the form below and we will get back to you within 24 hours.</p>

                        <form @submit="handleSubmit" class="space-y-6">
                            <!-- Success Message -->
                            <div v-if="submitSuccess" class="rounded-lg bg-[#10B981]/10 border border-[#10B981]/20 p-4">
                                <div class="flex items-center gap-3">
                                    <svg class="h-5 w-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                    <p class="text-sm font-medium text-[#10B981]">Message sent successfully! We'll get back to you within 24 hours.</p>
                                </div>
                            </div>

                            <div class="space-y-6">
                                <div>
                                    <label for="name" class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">Full Name</label>
                                    <input 
                                        v-model="formData.name" 
                                        type="text" 
                                        id="name" 
                                        :class="['input-modern', errors.name ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]' : '']"
                                        placeholder="John Doe"
                                    />
                                    <p v-if="errors.name" class="mt-1 text-sm text-[#EF4444]">{{ errors.name }}</p>
                                </div>
                                <div>
                                    <label for="email" class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">Email Address</label>
                                    <input 
                                        v-model="formData.email" 
                                        type="email" 
                                        id="email" 
                                        :class="['input-modern', errors.email ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]' : '']"
                                        placeholder="john@example.com"
                                    />
                                    <p v-if="errors.email" class="mt-1 text-sm text-[#EF4444]">{{ errors.email }}</p>
                                </div>
                                <div>
                                    <label for="phone" class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">Phone Number</label>
                                    <input 
                                        v-model="formData.phone" 
                                        type="tel" 
                                        id="phone" 
                                        :class="['input-modern', errors.phone ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]' : '']"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                    <p v-if="errors.phone" class="mt-1 text-sm text-[#EF4444]">{{ errors.phone }}</p>
                                </div>
                                <div>
                                    <label for="subject" class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">Subject</label>
                                    <select 
                                        v-model="formData.subject" 
                                        id="subject" 
                                        :class="['input-modern', errors.subject ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]' : '']"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="volunteer">Volunteering</option>
                                        <option value="donation">Donations</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="medical-camp">Request Medical Camp</option>
                                        <option value="media">Media/Press</option>
                                    </select>
                                    <p v-if="errors.subject" class="mt-1 text-sm text-[#EF4444]">{{ errors.subject }}</p>
                                </div>
                            </div>

                            <div>
                                <label for="message" class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">Message</label>
                                <textarea 
                                    v-model="formData.message" 
                                    id="message" 
                                    rows="5" 
                                    :class="['input-modern resize-none', errors.message ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]' : '']"
                                    placeholder="Tell us how we can help..."
                                ></textarea>
                                <p v-if="errors.message" class="mt-1 text-sm text-[#EF4444]">{{ errors.message }}</p>
                            </div>

                            <button 
                                type="submit" 
                                :disabled="isSubmitting"
                                :class="['btn-primary w-full', isSubmitting ? 'opacity-50 cursor-not-allowed' : '']"
                            >
                                <span v-if="!isSubmitting">Send Message</span>
                                <span v-else class="flex items-center justify-center gap-2">
                                    <svg class="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </span>
                            </button>
                        </form>
                    </div>

                    <!-- Google Map -->
                    <div class="space-y-8">
                        <div class="card-modern h-[400px] overflow-hidden rounded-2xl">
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

                        <!-- Regional Offices -->
                        <div class="card-modern p-6">
                            <h3 class="mb-4 text-lg font-bold text-[#0F172A] dark:text-white">Regional Offices</h3>
                            <div class="space-y-4">
                                <div
                                    v-for="office in regionalOffices"
                                    :key="office.name"
                                    class="flex items-start gap-4 rounded-lg bg-[#F8FAFC] dark:bg-[#334155] p-4"
                                >
                                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0EA5E9]/10">
                                        <svg class="h-5 w-5 text-[#0EA5E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="font-semibold text-[#0F172A] dark:text-white">{{ office.name }}</h3>
                                        <p class="text-sm text-[#475569] dark:text-[#94A3B8]">{{ office.address }}</p>
                                        <p class="text-sm text-[#0EA5E9]">{{ office.phone }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQs -->
        <section class="bg-[#F8FAFC] dark:bg-[#1E293B] py-24 lg:py-32">
            <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center">
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white">Frequently Asked Questions</h2>
                    <p class="text-lg text-[#475569] dark:text-[#94A3B8]">Find answers to common questions about our services.</p>
                </div>

                <div class="space-y-4">
                    <div
                        v-for="faq in faqs"
                        :key="faq.question"
                        class="card-modern p-6"
                    >
                        <h3 class="mb-2 font-bold text-[#0F172A] dark:text-white">{{ faq.question }}</h3>
                        <p class="text-[#475569] dark:text-[#94A3B8]">{{ faq.answer }}</p>
                    </div>
                </div>

                <div class="mt-12 text-center">
                    <p class="text-[#475569] dark:text-[#94A3B8]">Still have questions?</p>
                    <a href="mailto:info@carerural.org" class="font-semibold text-[#0EA5E9] hover:text-[#0284C7]">
                        Email us at info@carerural.org
                    </a>
                </div>
            </div>
        </section>
    
</template>
