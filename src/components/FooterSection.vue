<script setup lang="ts">
const currentYear = new Date().getFullYear();

const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Impact', href: '#impact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Get Involved', href: '#get-involved' },
];

const services = [
    { name: 'Mobile Medical Camps', href: '#services' },
    { name: 'Low-Cost Medicines', href: '#services' },
    { name: 'Doctor Network', href: '#services' },
    { name: 'Health Education', href: '#services' },
    { name: 'Emergency Care', href: '#services' },
];

const contact = {
    address: '123 Healthcare Avenue, Rural District, State 12345',
    phone: '+1 (555) 123-4567',
    email: 'info@carerural.org',
};

const socialLinks = [
    { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com' },
    { name: 'Twitter', icon: 'twitter', href: 'https://www.twitter.com' },
    { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com' },
    { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com' },
    { name: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com' },
];
</script>

<template>
    <footer class="relative overflow-hidden bg-[#0F172A]">
        <!-- Background decoration -->
        <div class="absolute inset-0">
            <div class="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-[#0EA5E9]/5 blur-3xl"></div>
            <div class="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#8B5CF6]/5 blur-3xl"></div>
        </div>

        <!-- Main Footer -->
        <div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div class="grid gap-12 lg:grid-cols-4">
                <!-- Brand Column -->
                <div class="lg:col-span-1">
                    <a href="#home" class="group mb-6 flex items-center gap-3">
                        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] shadow-lg transition-transform group-hover:scale-110">
                            <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <div>
                            <span class="text-xl font-bold text-white">CareRural</span>
                            <span class="block text-[10px] font-medium tracking-wider text-[#64748B]">HEALTHCARE FOR ALL</span>
                        </div>
                    </a>
                    <p class="mb-8 text-[#94A3B8]">
                        Bridging the healthcare gap in rural communities through accessible, affordable, and quality medical services.
                    </p>

                    <!-- Social Links -->
                    <div class="flex gap-3">
                        <a
                            v-for="social in socialLinks"
                            :key="social.name"
                            :href="social.href"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[#94A3B8] transition-all hover:bg-gradient-to-br hover:from-[#0EA5E9] hover:to-[#8B5CF6] hover:text-white"
                            :aria-label="social.name"
                        >
                            <!-- Facebook -->
                            <svg v-if="social.icon === 'facebook'" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                            </svg>
                            <!-- Twitter -->
                            <svg v-else-if="social.icon === 'twitter'" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                            </svg>
                            <!-- Instagram -->
                            <svg v-else-if="social.icon === 'instagram'" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            <!-- LinkedIn -->
                            <svg v-else-if="social.icon === 'linkedin'" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            <!-- YouTube -->
                            <svg v-else class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="mb-6 text-lg font-bold text-white">Quick Links</h4>
                    <ul class="space-y-4">
                        <li v-for="link in quickLinks" :key="link.name">
                            <a :to="link.href" class="group flex items-center gap-2 text-[#94A3B8] transition-colors hover:text-white">
                                <span class="h-1.5 w-1.5 rounded-full bg-[#0EA5E9] opacity-0 transition-opacity group-hover:opacity-100"></span>
                                {{ link.name }}
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Our Services -->
                <div>
                    <h4 class="mb-6 text-lg font-bold text-white">Our Services</h4>
                    <ul class="space-y-4">
                        <li v-for="service in services" :key="service.name">
                            <a :to="service.href" class="group flex items-center gap-2 text-[#94A3B8] transition-colors hover:text-white">
                                <span class="h-1.5 w-1.5 rounded-full bg-[#10B981] opacity-0 transition-opacity group-hover:opacity-100"></span>
                                {{ service.name }}
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div>
                    <h4 class="mb-6 text-lg font-bold text-white">Contact Us</h4>
                    <ul class="space-y-4">
                        <li class="flex gap-4">
                            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0EA5E9]/10">
                                <svg class="h-5 w-5 text-[#0EA5E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <span class="text-[#94A3B8]">{{ contact.address }}</span>
                        </li>
                        <li class="flex gap-4">
                            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#10B981]/10">
                                <svg class="h-5 w-5 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <a :to="`tel:${contact.phone}`" class="text-[#94A3B8] transition-colors hover:text-white">{{ contact.phone }}</a>
                        </li>
                        <li class="flex gap-4">
                            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#8B5CF6]/10">
                                <svg class="h-5 w-5 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <a :to="`mailto:${contact.email}`" class="text-[#94A3B8] transition-colors hover:text-white">{{ contact.email }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="relative border-t border-white/10">
            <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p class="text-sm text-[#64748B]">
                        &copy; {{ currentYear }} CareRural Foundation. All rights reserved.
                    </p>
                    <div class="flex gap-6">
                        <a href="#" class="text-sm text-[#64748B] transition-colors hover:text-white">Privacy Policy</a>
                        <a href="#" class="text-sm text-[#64748B] transition-colors hover:text-white">Terms of Service</a>
                        <a href="#" class="text-sm text-[#64748B] transition-colors hover:text-white">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
