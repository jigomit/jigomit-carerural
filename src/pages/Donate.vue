<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const selectedAmount = ref(100);
const donationType = ref('one-time');
const customAmount = ref('');
const selectedBloodType = ref('');

const formData = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    location: '',
    eligibility: false,
});

const errors = ref({
    amount: '',
    bloodType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    location: '',
    eligibility: '',
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);

const donationAmounts = [25, 50, 100, 250, 500, 1000];

const impactLevels = [
    { amount: 25, impact: 'Provides medicines for 5 patients', icon: 'medicine' },
    { amount: 50, impact: 'Supports 1 telemedicine consultation', icon: 'video' },
    { amount: 100, impact: 'Funds health checkup camp for 20 people', icon: 'camp' },
    { amount: 250, impact: 'Trains 1 community health worker', icon: 'training' },
    { amount: 500, impact: 'Sponsors a mobile medical unit visit', icon: 'truck' },
    { amount: 1000, impact: 'Equips a rural health center for 1 month', icon: 'hospital' },
];

const donorBenefits = [
    'Tax-deductible donation receipt',
    'Quarterly impact reports',
    'Invitation to annual donor event',
    'Recognition on our donor wall',
    'Direct updates from the field',
];

function selectAmount(amount: number): void {
    selectedAmount.value = amount;
    customAmount.value = '';
    errors.value.amount = '';
}

function handleCustomAmount(): void {
    if (customAmount.value) {
        const amount = parseFloat(customAmount.value);
        if (amount < 1) {
            errors.value.amount = 'Amount must be at least $1';
            return;
        }
        if (amount > 100000) {
            errors.value.amount = 'Amount cannot exceed $100,000';
            return;
        }
        selectedAmount.value = amount;
        errors.value.amount = '';
    }
}

function validateAmount(): boolean {
    if (donationType.value === 'blood-donation') {
        return true; // No amount validation for blood donation
    }
    
    if (customAmount.value) {
        const amount = parseFloat(customAmount.value);
        if (isNaN(amount) || amount < 1) {
            errors.value.amount = 'Please enter a valid amount (minimum $1)';
            return false;
        }
        if (amount > 100000) {
            errors.value.amount = 'Amount cannot exceed $100,000';
            return false;
        }
    } else if (!selectedAmount.value || selectedAmount.value < 1) {
        errors.value.amount = 'Please select or enter a donation amount';
        return false;
    }
    errors.value.amount = '';
    return true;
}

function validateBloodType(): boolean {
    if (donationType.value === 'blood-donation' && !selectedBloodType.value) {
        errors.value.bloodType = 'Please select your blood type';
        return false;
    }
    errors.value.bloodType = '';
    return true;
}

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
    // Phone is optional, but if provided, validate format
    if (formData.value.phone.trim()) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(formData.value.phone) || formData.value.phone.replace(/\D/g, '').length < 10) {
            errors.value.phone = 'Please enter a valid phone number';
            return false;
        }
    }
    errors.value.phone = '';
    return true;
}

function validateDOB(): boolean {
    if (donationType.value === 'blood-donation') {
        if (!formData.value.dob) {
            errors.value.dob = 'Date of birth is required';
            return false;
        }
        // Check if age is between 18-65
        const today = new Date();
        const birthDate = new Date(formData.value.dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 18 || age > 65) {
            errors.value.dob = 'You must be between 18-65 years old to donate blood';
            return false;
        }
    }
    errors.value.dob = '';
    return true;
}

function validateLocation(): boolean {
    if (donationType.value === 'blood-donation' && !formData.value.location) {
        errors.value.location = 'Please select a preferred location';
        return false;
    }
    errors.value.location = '';
    return true;
}

function validateEligibility(): boolean {
    if (donationType.value === 'blood-donation' && !formData.value.eligibility) {
        errors.value.eligibility = 'You must confirm eligibility to donate blood';
        return false;
    }
    errors.value.eligibility = '';
    return true;
}

function validateForm(): boolean {
    const isValid = 
        validateAmount() &&
        validateBloodType() &&
        validateFirstName() &&
        validateLastName() &&
        validateEmail() &&
        validatePhone() &&
        validateDOB() &&
        validateLocation() &&
        validateEligibility();
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
            dob: '',
            location: '',
            eligibility: false,
        };
        if (donationType.value !== 'blood-donation') {
            selectedAmount.value = 100;
            customAmount.value = '';
        } else {
            selectedBloodType.value = '';
        }
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            submitSuccess.value = false;
        }, 5000);
    }, 1000);
}

onMounted(() => {
    // Check URL query parameters
    const urlDonationType = route.query.donationType as string;
    const urlBloodType = route.query.bloodType as string;
    
    if (urlDonationType === 'blood-donation') {
        donationType.value = 'blood-donation';
    }
    
    if (urlBloodType) {
        selectedBloodType.value = urlBloodType.toUpperCase();
    }
});
</script>

<template>


        <!-- Hero -->
        <section class="relative overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] pt-24 sm:pt-28 md:pt-32 pb-24">
            <div class="absolute inset-0">
                <div class="blob absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#10B981]/10 dark:bg-[#10B981]/20 blur-3xl"></div>
                <div class="blob absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#0EA5E9]/10 dark:bg-[#0EA5E9]/20 blur-3xl"></div>
            </div>

            <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#10B981]/10 dark:bg-white/10 px-4 py-2 backdrop-blur-sm border border-[#10B981]/20 dark:border-transparent">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#10B981]"></div>
                        <span class="text-sm font-semibold text-[#10B981]">Support Our Mission</span>
                    </div>
                    <h1 class="mb-6 text-4xl font-bold text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl">
                        Your Donation <span class="gradient-text">Saves Lives</span>
                    </h1>
                    <p class="text-lg text-[#475569] dark:text-white/70">
                        Every contribution, no matter the size, makes a real difference in the lives of people in rural communities who need healthcare the most.
                    </p>
                </div>
            </div>
        </section>

        <!-- Donation Form -->
        <section class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid gap-12 lg:grid-cols-2">
                    <!-- Form Side -->
                    <div class="card-modern p-8 lg:p-12">
                        <h2 class="mb-2 text-2xl font-bold text-[#0F172A] dark:text-white">Make a Donation</h2>
                        <p class="mb-8 text-[#475569] dark:text-[#94A3B8]">Choose your donation type and amount</p>

                        <!-- Donation Type -->
                        <div class="mb-8">
                            <label class="mb-3 block text-sm font-medium text-[#0F172A] dark:text-white">Donation Type</label>
                            <div class="grid grid-cols-3 gap-4">
                                <button
                                    :class="[
                                        'rounded-xl border-2 py-3 font-semibold transition-all',
                                        donationType === 'one-time'
                                            ? 'border-[#0EA5E9] bg-[#0EA5E9]/10 text-[#0EA5E9]'
                                            : 'border-[#E2E8F0] dark:border-[#334155] text-[#475569] dark:text-[#94A3B8] hover:border-[#CBD5E1] dark:hover:border-[#475569]',
                                    ]"
                                    @click="donationType = 'one-time'; errors.bloodType = ''; errors.dob = ''; errors.location = ''; errors.eligibility = '';"
                                >
                                    One-Time
                                </button>
                                <button
                                    :class="[
                                        'rounded-xl border-2 py-3 font-semibold transition-all',
                                        donationType === 'monthly'
                                            ? 'border-[#0EA5E9] bg-[#0EA5E9]/10 text-[#0EA5E9]'
                                            : 'border-[#E2E8F0] dark:border-[#334155] text-[#475569] dark:text-[#94A3B8] hover:border-[#CBD5E1] dark:hover:border-[#475569]',
                                    ]"
                                    @click="donationType = 'monthly'; errors.bloodType = ''; errors.dob = ''; errors.location = ''; errors.eligibility = '';"
                                >
                                    Monthly
                                </button>
                                <button
                                    :class="[
                                        'rounded-xl border-2 py-3 font-semibold transition-all',
                                        donationType === 'blood-donation'
                                            ? 'border-[#EF4444] bg-[#EF4444]/10 text-[#EF4444]'
                                            : 'border-[#E2E8F0] dark:border-[#334155] text-[#475569] dark:text-[#94A3B8] hover:border-[#CBD5E1] dark:hover:border-[#475569]',
                                    ]"
                                    @click="donationType = 'blood-donation'; errors.amount = '';"
                                >
                                    Blood
                                </button>
                            </div>
                        </div>

                        <!-- Amount Selection (only for monetary donations) -->
                        <div v-if="donationType !== 'blood-donation'" class="mb-8">
                            <label class="mb-3 block text-sm font-medium text-[#0F172A] dark:text-white">Select Amount</label>
                            <div class="grid grid-cols-3 gap-3">
                                <button
                                    v-for="amount in donationAmounts"
                                    :key="amount"
                                    :class="[
                                        'rounded-xl py-3 font-semibold transition-all hover:-translate-y-1',
                                        selectedAmount === amount && !customAmount
                                            ? 'bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] text-white shadow-lg'
                                            : 'bg-[#F1F5F9] dark:bg-[#334155] text-[#475569] dark:text-[#94A3B8] hover:bg-[#E2E8F0] dark:hover:bg-[#475569]',
                                    ]"
                                    @click="selectAmount(amount)"
                                >
                                    ${{ amount }}
                                </button>
                            </div>
                            <div class="mt-4">
                                <input
                                    v-model="customAmount"
                                    type="number"
                                    min="1"
                                    max="100000"
                                    :class="['input-modern', errors.amount ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]' : '']"
                                    placeholder="Enter custom amount"
                                    @input="handleCustomAmount"
                                    @blur="validateAmount"
                                />
                                <p v-if="errors.amount" class="mt-1 text-sm text-[#EF4444]">{{ errors.amount }}</p>
                            </div>
                        </div>

                        <!-- Blood Type Selection (only for blood donation) -->
                        <div v-if="donationType === 'blood-donation'" class="mb-8">
                            <label class="mb-3 block text-sm font-medium text-[#0F172A] dark:text-white">Blood Type</label>
                            <div class="grid grid-cols-4 gap-3">
                                <button
                                    v-for="bloodType in ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']"
                                    :key="bloodType"
                                    :class="[
                                        'rounded-xl py-3 font-semibold transition-all hover:-translate-y-1',
                                        selectedBloodType === bloodType
                                            ? 'bg-gradient-to-r from-[#EF4444] to-[#EC4899] text-white shadow-lg'
                                            : 'bg-[#F1F5F9] dark:bg-[#334155] text-[#475569] dark:text-[#94A3B8] hover:bg-[#E2E8F0] dark:hover:bg-[#475569]',
                                    ]"
                                    @click="selectedBloodType = bloodType; validateBloodType()"
                                >
                                    {{ bloodType }}
                                </button>
                            </div>
                            <p v-if="errors.bloodType" class="mt-2 text-sm text-[#EF4444]">{{ errors.bloodType }}</p>
                        </div>

                        <!-- Donor Information -->
                        <form @submit="handleSubmit" class="space-y-4">
                            <!-- Success Message -->
                            <div v-if="submitSuccess" class="rounded-lg bg-[#10B981]/10 border border-[#10B981]/20 p-4">
                                <div class="flex items-center gap-3">
                                    <svg class="h-5 w-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                    <p class="text-sm font-medium text-[#10B981]">
                                        <span v-if="donationType === 'blood-donation'">
                                            Registration successful! We'll contact you soon to schedule your donation.
                                        </span>
                                        <span v-else>
                                            Thank you for your donation! You will receive a confirmation email shortly.
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div class="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label for="firstName" class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">First Name</label>
                                    <input 
                                        v-model="formData.firstName" 
                                        type="text" 
                                        id="firstName" 
                                        :class="['input-modern', errors.firstName ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]' : '']"
                                        placeholder="John"
                                        @blur="validateFirstName"
                                    />
                                    <p v-if="errors.firstName" class="mt-1 text-sm text-[#EF4444]">{{ errors.firstName }}</p>
                                </div>
                                <div>
                                    <label for="lastName" class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">Last Name</label>
                                    <input 
                                        v-model="formData.lastName" 
                                        type="text" 
                                        id="lastName" 
                                        :class="['input-modern', errors.lastName ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]' : '']"
                                        placeholder="Doe"
                                        @blur="validateLastName"
                                    />
                                    <p v-if="errors.lastName" class="mt-1 text-sm text-[#EF4444]">{{ errors.lastName }}</p>
                                </div>
                            </div>
                            <div>
                                <label for="email" class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">Email Address</label>
                                <input 
                                    v-model="formData.email" 
                                    type="email" 
                                    id="email" 
                                    :class="['input-modern', errors.email ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]' : '']"
                                    placeholder="john@example.com"
                                    @blur="validateEmail"
                                />
                                <p v-if="errors.email" class="mt-1 text-sm text-[#EF4444]">{{ errors.email }}</p>
                            </div>
                            <div>
                                <label for="phone" class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">Phone (Optional)</label>
                                <input 
                                    v-model="formData.phone" 
                                    type="tel" 
                                    id="phone" 
                                    :class="['input-modern', errors.phone ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]' : '']"
                                    placeholder="+1 (555) 123-4567"
                                    @blur="validatePhone"
                                />
                                <p v-if="errors.phone" class="mt-1 text-sm text-[#EF4444]">{{ errors.phone }}</p>
                            </div>

                            <div v-if="donationType === 'blood-donation'" class="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label for="dob" class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">Date of Birth</label>
                                    <input 
                                        v-model="formData.dob" 
                                        type="date" 
                                        id="dob" 
                                        :class="['input-modern', errors.dob ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]' : '']"
                                        @change="validateDOB"
                                    />
                                    <p v-if="errors.dob" class="mt-1 text-sm text-[#EF4444]">{{ errors.dob }}</p>
                                </div>
                                <div>
                                    <label for="location" class="mb-2 block text-sm font-medium text-[#0F172A] dark:text-white">Preferred Location</label>
                                    <select 
                                        v-model="formData.location" 
                                        id="location" 
                                        :class="['input-modern', errors.location ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]' : '']"
                                        @change="validateLocation"
                                    >
                                        <option value="">Select location</option>
                                        <option value="city-center">City Community Center</option>
                                        <option value="university">University Campus</option>
                                        <option value="corporate">Corporate Park</option>
                                        <option value="rural">Rural Health Center</option>
                                    </select>
                                    <p v-if="errors.location" class="mt-1 text-sm text-[#EF4444]">{{ errors.location }}</p>
                                </div>
                            </div>

                            <div v-if="donationType === 'blood-donation'" class="flex items-start gap-3">
                                <input 
                                    v-model="formData.eligibility" 
                                    type="checkbox" 
                                    id="eligibility" 
                                    class="mt-1 h-4 w-4 rounded border-[#CBD5E1] text-[#EF4444]"
                                    @change="validateEligibility"
                                />
                                <div class="flex-1">
                                    <label for="eligibility" class="text-sm text-[#475569] dark:text-[#94A3B8]">
                                        I confirm that I am between 18-65 years old, weigh at least 50 kg, and have not donated blood in the past 3 months.
                                    </label>
                                    <p v-if="errors.eligibility" class="mt-1 text-sm text-[#EF4444]">{{ errors.eligibility }}</p>
                                </div>
                            </div>

                            <div class="pt-4">
                                <button 
                                    type="submit" 
                                    :disabled="isSubmitting"
                                    :class="['btn-primary w-full text-lg', isSubmitting ? 'opacity-50 cursor-not-allowed' : '']"
                                >
                                    <span v-if="!isSubmitting">
                                        <span v-if="donationType === 'blood-donation'">
                                            Register to Donate Blood{{ selectedBloodType ? ` (${selectedBloodType})` : '' }}
                                        </span>
                                        <span v-else>
                                            Donate ${{ selectedAmount }} {{ donationType === 'monthly' ? '/month' : '' }}
                                        </span>
                                    </span>
                                    <span v-else class="flex items-center justify-center gap-2">
                                        <svg class="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </span>
                                </button>
                                <p class="mt-4 text-center text-xs text-[#94A3B8]">
                                    <span v-if="donationType === 'blood-donation'">
                                        Your information will be kept confidential. We'll contact you to schedule your donation.
                                    </span>
                                    <span v-else>
                                        Your donation is tax-deductible. You will receive a receipt via email.
                                    </span>
                                </p>
                            </div>
                        </form>

                        <!-- Trust badges -->
                        <div class="mt-8 flex flex-wrap items-center justify-center gap-6 border-t border-[#E2E8F0] dark:border-[#334155] pt-8">
                            <div class="flex items-center gap-2 text-sm text-[#64748B] dark:text-[#94A3B8]">
                                <svg class="h-5 w-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                Secure Payment
                            </div>
                            <div class="flex items-center gap-2 text-sm text-[#64748B] dark:text-[#94A3B8]">
                                <svg class="h-5 w-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                501(c)(3) Certified
                            </div>
                        </div>
                    </div>

                    <!-- Impact Side -->
                    <div>
                        <div class="card-modern overflow-hidden bg-gradient-to-br from-[#0EA5E9] via-[#8B5CF6] to-[#EC4899] p-1">
                            <div class="rounded-[1.25rem] bg-white dark:bg-[#1E293B] p-8 lg:p-12">
                                <h3 class="mb-6 text-2xl font-bold text-[#0F172A] dark:text-white">Your Impact</h3>

                                <div class="space-y-4">
                                    <div
                                        v-for="level in impactLevels"
                                        :key="level.amount"
                                        :class="[
                                            'flex items-center gap-4 rounded-xl p-4 transition-all',
                                            selectedAmount >= level.amount ? 'bg-[#10B981]/10' : 'bg-[#F8FAFC] dark:bg-[#334155]',
                                        ]"
                                    >
                                        <div :class="[
                                            'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-bold',
                                            selectedAmount >= level.amount ? 'bg-[#10B981] text-white' : 'bg-[#E2E8F0] dark:bg-[#475569] text-[#64748B] dark:text-[#94A3B8]',
                                        ]">
                                            ${{ level.amount }}
                                        </div>
                                        <p :class="selectedAmount >= level.amount ? 'text-[#0F172A] dark:text-white' : 'text-[#64748B] dark:text-[#94A3B8]'">
                                            {{ level.impact }}
                                        </p>
                                        <svg
                                            v-if="selectedAmount >= level.amount"
                                            class="ml-auto h-6 w-6 text-[#10B981]"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Donor Benefits -->
                        <div class="mt-8 card-modern p-8">
                            <h3 class="mb-4 text-lg font-bold text-[#0F172A] dark:text-white">Donor Benefits</h3>
                            <ul class="space-y-3">
                                <li v-for="benefit in donorBenefits" :key="benefit" class="flex items-center gap-3">
                                    <svg class="h-5 w-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="text-[#475569] dark:text-[#94A3B8]">{{ benefit }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Other Ways to Give -->
        <section class="bg-[#F8FAFC] dark:bg-[#1E293B] py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto mb-16 max-w-3xl text-center">
                    <h2 class="mb-4 text-3xl font-bold text-[#0F172A] dark:text-white">Other Ways to Give</h2>
                    <p class="text-lg text-[#475569] dark:text-[#94A3B8]">
                        Beyond monetary donations, there are many ways to support our mission.
                    </p>
                </div>

                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div class="card-modern p-6 text-center">
                        <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0EA5E9]/10">
                            <svg class="h-7 w-7 text-[#0EA5E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 class="mb-2 font-bold text-[#0F172A] dark:text-white">Corporate Giving</h3>
                        <p class="mb-4 text-sm text-[#475569] dark:text-[#94A3B8]">Partner with us for CSR initiatives</p>
                        <router-link to="/contact" class="text-sm font-semibold text-[#0EA5E9]">Learn More</router-link>
                    </div>

                    <div class="card-modern p-6 text-center">
                        <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#10B981]/10">
                            <svg class="h-7 w-7 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 class="mb-2 font-bold text-[#0F172A] dark:text-white">Legacy Giving</h3>
                        <p class="mb-4 text-sm text-[#475569] dark:text-[#94A3B8]">Include CareRural in your will</p>
                        <router-link to="/contact" class="text-sm font-semibold text-[#10B981]">Learn More</router-link>
                    </div>

                    <div class="card-modern p-6 text-center">
                        <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#8B5CF6]/10">
                            <svg class="h-7 w-7 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 class="mb-2 font-bold text-[#0F172A] dark:text-white">Fundraise</h3>
                        <p class="mb-4 text-sm text-[#475569] dark:text-[#94A3B8]">Start a fundraiser for us</p>
                        <router-link to="/contact" class="text-sm font-semibold text-[#8B5CF6]">Learn More</router-link>
                    </div>

                    <div class="card-modern p-6 text-center">
                        <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F59E0B]/10">
                            <svg class="h-7 w-7 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                        </div>
                        <h3 class="mb-2 font-bold text-[#0F172A] dark:text-white">In-Kind Donations</h3>
                        <p class="mb-4 text-sm text-[#475569] dark:text-[#94A3B8]">Donate medical supplies or equipment</p>
                        <router-link to="/contact" class="text-sm font-semibold text-[#F59E0B]">Learn More</router-link>
                    </div>
                </div>
            </div>
        </section>

</template>
