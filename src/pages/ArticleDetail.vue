<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// Import articles data (same as News.vue)
const featuredArticle = {
    id: 0,
    title: 'CareRural Expands to 350 Villages: A Milestone in Rural Healthcare',
    excerpt: 'After 15 years of dedicated service, CareRural celebrates reaching 350 villages across the country, providing healthcare access to over 75,000 patients annually.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=75',
    date: 'November 30, 2024',
    category: 'updates',
    readTime: '5 min read',
    fullContent: `After 15 years of dedicated service, CareRural celebrates reaching 350 villages across the country, providing healthcare access to over 75,000 patients annually.

This milestone represents a significant achievement in our mission to bring quality healthcare to rural communities. Since our founding in 2008, we have worked tirelessly to bridge the healthcare gap between urban and rural areas.

Our expansion to 350 villages means that thousands of families now have access to essential healthcare services that were previously unavailable. Through our mobile medical units, telemedicine services, and community health worker programs, we have created a sustainable healthcare infrastructure in these underserved areas.

The journey to 350 villages has been marked by numerous challenges and triumphs. From navigating difficult terrain to building trust within communities, our team has demonstrated unwavering commitment to our mission. Each new village represents hours of planning, coordination, and dedication from our staff and volunteers.

Looking ahead, we remain committed to expanding our reach and deepening our impact. Our goal is to serve 500 villages by 2026, ensuring that even more rural communities have access to quality healthcare services.`,
};

const articles = [
    {
        id: 1,
        title: 'New Mobile Clinic Launches in Eastern Region',
        excerpt: 'Our newest mobile medical unit begins serving 50 villages in the Eastern mountain region with state-of-the-art equipment.',
        image: 'https://egov.eletsonline.com/wp-content/uploads/2020/03/Tamil-Nadu-to-launch-47-mobile-clinics-for-construction-workers.jpg',
        date: 'November 28, 2024',
        category: 'updates',
        readTime: '3 min read',
        fullContent: `Our newest mobile medical unit begins serving 50 villages in the Eastern mountain region with state-of-the-art equipment.

The launch of this mobile clinic marks a significant expansion of our services in the Eastern region. This fully-equipped medical unit is designed to navigate the challenging terrain of mountain villages, bringing essential healthcare services directly to communities that have limited access to medical facilities.

The mobile clinic features advanced diagnostic equipment, including portable X-ray machines, ultrasound scanners, and laboratory facilities. It is staffed by a team of experienced healthcare professionals, including doctors, nurses, and community health workers who understand the unique needs of mountain communities.

Over the next six months, the mobile clinic will visit each of the 50 villages on a rotating schedule, providing comprehensive health checkups, vaccinations, maternal care services, and treatment for common ailments. The clinic will also serve as a hub for health education programs, teaching community members about preventive care and healthy living practices.

This initiative is part of our broader strategy to ensure that geographic barriers do not prevent anyone from accessing quality healthcare. We are committed to reaching every village, no matter how remote.`,
    },
    {
        id: 2,
        title: '10,000 Children Vaccinated This Quarter',
        excerpt: 'Our vaccination program reaches milestone, protecting thousands of children from preventable diseases.',
        image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=662&q=75',
        date: 'November 15, 2024',
        category: 'stories',
        readTime: '4 min read',
        fullContent: `Our vaccination program reaches milestone, protecting thousands of children from preventable diseases.

This quarter, we achieved a significant milestone by vaccinating 10,000 children across our service areas. This achievement reflects our commitment to protecting the health of the next generation and preventing the spread of vaccine-preventable diseases in rural communities.

Our vaccination program covers a comprehensive range of immunizations, including routine childhood vaccines such as measles, mumps, rubella, polio, and hepatitis B. We also provide seasonal flu vaccines and COVID-19 boosters for eligible children and their families.

The success of this program is attributed to our dedicated team of healthcare workers who travel to remote villages, often on foot or by motorcycle, to ensure that every child receives their vaccinations. We work closely with community leaders and parents to build trust and address any concerns about vaccination.

Through door-to-door visits, community meetings, and mobile vaccination camps, we have been able to reach children in even the most isolated areas. Our goal is to achieve 100% vaccination coverage in all communities we serve, ensuring that no child is left unprotected.`,
    },
    {
        id: 3,
        title: 'Partnership with Global Health Initiative',
        excerpt: 'New partnership will expand our telemedicine services to 100 additional communities.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vvDfLZq_qOCvmlurrJ7s2X9ze0zzzxU8JXDKUOmRKh_WVh5JIUP_fzPKyA49HocC75Q&usqp=CAU',
        date: 'November 1, 2024',
        category: 'press',
        readTime: '3 min read',
        fullContent: `New partnership will expand our telemedicine services to 100 additional communities.

We are thrilled to announce a strategic partnership with Global Health Initiative that will significantly expand our telemedicine capabilities. This collaboration will enable us to bring virtual healthcare consultations to 100 additional rural communities, connecting patients with healthcare providers regardless of geographic barriers.

Through this partnership, we will receive funding for telemedicine equipment, training for our staff, and technical support to ensure seamless service delivery. The Global Health Initiative brings decades of experience in implementing telemedicine programs in underserved areas, and we are excited to leverage their expertise.

The expanded telemedicine services will include virtual consultations with specialists, remote monitoring of chronic conditions, and tele-psychiatry services for mental health support. Patients will be able to access these services through our community health centers, where trained staff will facilitate the virtual consultations.

This partnership represents a major step forward in our mission to make quality healthcare accessible to all, regardless of where they live. We believe that technology can be a powerful tool in bridging healthcare gaps, and this collaboration will help us reach even more people in need.`,
    },
    {
        id: 4,
        title: 'Annual Gala Raises $2 Million for Rural Healthcare',
        excerpt: 'Our annual fundraising gala brings together supporters and raises record funds for expanding services.',
        image: '/Gemini_Generated_Image_w2p2vyw2p2vyw2p2.png',
        date: 'October 20, 2024',
        category: 'events',
        readTime: '4 min read',
        fullContent: `Our annual fundraising gala brings together supporters and raises record funds for expanding services.

The 2024 Annual Gala was a resounding success, raising $2 million to support our rural healthcare initiatives. The event, held at the Grand Convention Center, brought together over 500 supporters, including donors, volunteers, healthcare professionals, and community leaders.

The evening featured inspiring stories from the field, showcasing the impact of our programs on rural communities. Several patients shared their experiences, highlighting how CareRural has transformed their lives and the lives of their families.

The funds raised will be used to expand our mobile medical unit fleet, establish new community health centers, and train additional community health workers. A portion of the funds will also support our telemedicine expansion and low-cost medicine program, ensuring that our services remain accessible to those who need them most.

We are deeply grateful to all our supporters who made this record-breaking achievement possible. Their generosity enables us to continue our mission of bringing quality healthcare to rural communities. Together, we are making a real difference in the lives of thousands of people.`,
    },
    {
        id: 5,
        title: 'Community Health Worker Training Program Graduates 100th Batch',
        excerpt: 'Celebrating the graduation of our 100th batch of certified community health workers.',
        image: '/Gemini_Generated_Image_ses3ehses3ehses3.png',
        date: 'October 10, 2024',
        category: 'stories',
        readTime: '5 min read',
        fullContent: `Celebrating the graduation of our 100th batch of certified community health workers.

Today, we celebrate a remarkable milestone: the graduation of our 100th batch of certified community health workers. This achievement represents over 5,000 trained healthcare professionals who are now serving their communities, providing essential healthcare services and health education.

The six-month training program covers a comprehensive curriculum including basic medical care, first aid, maternal and child health, disease prevention, and health promotion. Graduates are equipped with the knowledge and skills needed to serve as the first line of healthcare in their communities.

These community health workers play a crucial role in our healthcare delivery model. They conduct health screenings, provide basic treatments, refer patients to our mobile clinics or telemedicine services, and educate community members about preventive care and healthy living.

The impact of this program extends far beyond the numbers. Each trained community health worker serves an average of 500 people in their community, creating a multiplier effect that reaches tens of thousands of individuals. They are trusted members of their communities, speaking local languages and understanding cultural contexts, which makes them uniquely effective in delivering healthcare services.

As we celebrate this milestone, we remain committed to training even more community health workers, with a goal of reaching 10,000 trained workers by 2026.`,
    },
    {
        id: 6,
        title: 'Zero Maternal Deaths Achieved in Mountain Valley Region',
        excerpt: 'For the first time in history, Mountain Valley Region records zero maternal deaths in 2024.',
        image: '/Gemini_Generated_Image_witfrlwitfrlwitf.png',
        date: 'October 5, 2024',
        category: 'stories',
        readTime: '6 min read',
        fullContent: `For the first time in history, Mountain Valley Region records zero maternal deaths in 2024.

This historic achievement is the result of years of dedicated work by our maternal health program team, community health workers, and local healthcare partners. Through comprehensive prenatal care, safe delivery services, and postnatal support, we have successfully eliminated maternal deaths in the Mountain Valley Region.

Our maternal health program includes regular prenatal checkups, nutrition counseling, high-risk pregnancy identification and management, skilled birth attendance, emergency obstetric care, and postnatal visits. We also provide training to traditional birth attendants and community health workers on safe delivery practices.

The program has been particularly effective because of its community-centered approach. We work closely with local leaders, women's groups, and families to ensure that pregnant women receive the care they need throughout their pregnancy and after delivery.

This achievement demonstrates that with the right resources, training, and community support, maternal deaths are preventable. We are now working to replicate this success in other regions, with the goal of achieving zero maternal deaths across all our service areas by 2026.

The women of Mountain Valley Region can now give birth safely, knowing that they have access to quality maternal healthcare services. This is a testament to what can be achieved when communities, healthcare providers, and organizations work together toward a common goal.`,
    },
    {
        id: 7,
        title: 'CareRural Receives WHO Recognition',
        excerpt: 'World Health Organization recognizes CareRural for innovative approach to rural healthcare delivery.',
        image: '/Gemini_Generated_Image_d158dfd158dfd158.png',
        date: 'September 25, 2024',
        category: 'press',
        readTime: '3 min read',
        fullContent: `World Health Organization recognizes CareRural for innovative approach to rural healthcare delivery.

We are honored to announce that CareRural has been recognized by the World Health Organization (WHO) for our innovative approach to rural healthcare delivery. This recognition highlights our efforts to make quality healthcare accessible to underserved rural communities through mobile medical units, telemedicine, and community health worker programs.

The WHO recognition acknowledges our comprehensive healthcare model, which combines multiple service delivery approaches to reach remote communities. Our mobile medical units bring healthcare directly to villages, while our telemedicine services connect patients with specialists, and our community health worker program ensures ongoing care and health education.

This recognition is particularly meaningful because it validates our approach to addressing healthcare disparities. The WHO has noted our focus on preventive care, community engagement, and sustainable healthcare solutions as key factors in our success.

As part of this recognition, we will be sharing our best practices and lessons learned with other organizations working in rural healthcare. We believe that collaboration and knowledge sharing are essential to improving healthcare access globally.

This recognition motivates us to continue innovating and expanding our services. We remain committed to our mission of ensuring that everyone, regardless of where they live, has access to quality healthcare.`,
    },
    {
        id: 8,
        title: 'Diabetes Awareness Month: Free Screening Camps',
        excerpt: 'Join us throughout November for free diabetes screening camps across 50 locations.',
        image: 'https://img.freepik.com/premium-photo/modern-digital-poster-world-diabetes-day-with-bold-typography-medical-icons_964852-14636.jpg?semt=ais_hybrid&w=740&q=80',
        date: 'September 15, 2024',
        category: 'events',
        readTime: '2 min read',
        fullContent: `Join us throughout November for free diabetes screening camps across 50 locations.

In recognition of Diabetes Awareness Month, we are organizing free diabetes screening camps at 50 locations throughout our service areas. These camps will provide free blood glucose testing, health consultations, and education about diabetes prevention and management.

Diabetes is a growing concern in rural communities, where access to regular health checkups and diabetes management services is limited. Through these screening camps, we aim to identify individuals with diabetes or pre-diabetes early, enabling timely intervention and treatment.

Each camp will be staffed by healthcare professionals who will conduct blood glucose tests, provide counseling on diabetes management, and refer patients for further care if needed. We will also distribute educational materials about healthy eating, exercise, and diabetes prevention.

The camps are open to all community members, and no prior registration is required. We encourage everyone, especially those with a family history of diabetes or those experiencing symptoms like frequent urination, excessive thirst, or unexplained weight loss, to attend.

Early detection and management of diabetes can prevent serious complications and improve quality of life. Through these screening camps, we hope to raise awareness about diabetes and help community members take control of their health.`,
    },
];

const allArticles = [featuredArticle, ...articles];

const articleId = computed(() => parseInt(route.params.id as string));
const article = computed(() => allArticles.find(a => a.id === articleId.value));

function getCategoryColor(category: string): string {
    const colors: Record<string, string> = {
        updates: 'bg-[#0EA5E9]/10 text-[#0EA5E9]',
        stories: 'bg-[#10B981]/10 text-[#10B981]',
        events: 'bg-[#F59E0B]/10 text-[#F59E0B]',
        press: 'bg-[#8B5CF6]/10 text-[#8B5CF6]',
    };
    return colors[category] || 'bg-[#64748B]/10 text-[#64748B]';
}

// Update document title when article changes
watch(article, (newArticle) => {
    if (newArticle) {
        document.title = `${newArticle.title} - CareRural | News & Updates`;
    }
}, { immediate: true });

// Redirect to news page if article not found
if (!article.value) {
    router.push('/news');
}
</script>

<template>
    <div v-if="article">
        <!-- Hero Section -->
        <section class="relative overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] pt-32 pb-12 sm:pb-16">
            <div class="absolute inset-0">
                <div class="blob absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#F59E0B]/10 dark:bg-[#F59E0B]/20 blur-3xl"></div>
                <div class="blob absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#0EA5E9]/10 dark:bg-[#0EA5E9]/20 blur-3xl"></div>
            </div>

            <div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <!-- Back Button -->
                <router-link
                    to="/news"
                    class="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#475569] dark:text-white/70 hover:text-[#0EA5E9] transition-colors"
                >
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to News
                </router-link>

                <!-- Article Header -->
                <div class="mb-6">
                    <span :class="['inline-block rounded-full px-3 py-1 text-sm font-medium capitalize mb-4', getCategoryColor(article.category)]">
                        {{ article.category }}
                    </span>
                    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] dark:text-white mb-4 leading-tight">
                        {{ article.title }}
                    </h1>
                    <div class="flex flex-wrap items-center gap-4 text-sm sm:text-base text-[#64748B] dark:text-[#94A3B8]">
                        <span>{{ article.date }}</span>
                        <span>{{ article.readTime }}</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Article Image -->
        <section class="relative -mt-8 z-10 pb-8 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div class="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
                    <img
                        :src="article.image"
                        :alt="article.title"
                        class="h-full w-full object-cover"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent"></div>
                </div>
            </div>
        </section>

        <!-- Article Content -->
        <section class="py-12 sm:py-16 lg:py-24 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <article class="prose prose-sm sm:prose-base md:prose-lg dark:prose-invert max-w-none">
                    <p class="text-lg sm:text-xl md:text-2xl text-[#475569] dark:text-[#94A3B8] mb-6 sm:mb-8 leading-relaxed font-medium">
                        {{ article.excerpt }}
                    </p>
                    <div class="text-base sm:text-lg text-[#475569] dark:text-[#94A3B8] leading-relaxed whitespace-pre-line">
                        {{ article.fullContent }}
                    </div>
                </article>

                <!-- Back to News Button -->
                <div class="mt-12 sm:mt-16 pt-8 border-t border-[#E2E8F0] dark:border-[#334155]">
                    <router-link
                        to="/news"
                        class="btn-secondary inline-flex items-center gap-2"
                    >
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to All News
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

