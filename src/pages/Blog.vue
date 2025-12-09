<script setup lang="ts">

import { ref } from 'vue';

const activeCategory = ref('all');

const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'health', label: 'Health Tips' },
    { id: 'stories', label: 'Success Stories' },
    { id: 'updates', label: 'Updates' },
    { id: 'education', label: 'Health Education' },
];

const featuredPost = {
    id: 0,
    title: 'Understanding Rural Healthcare Challenges: A Comprehensive Guide',
    excerpt: 'Exploring the unique challenges faced by rural communities in accessing quality healthcare and how organizations are working to bridge this gap.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    date: 'December 1, 2024',
    category: 'education',
    readTime: '8 min read',
    author: 'Dr. Sarah Mitchell',
    authorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80',
    fullContent: `Exploring the unique challenges faced by rural communities in accessing quality healthcare and how organizations are working to bridge this gap.

Rural healthcare presents a complex set of challenges that differ significantly from urban healthcare systems. Understanding these challenges is crucial for developing effective solutions that can truly make a difference in the lives of rural residents.

**Geographic Barriers**

One of the most significant challenges is the sheer distance between rural communities and healthcare facilities. Many rural residents must travel hours to reach the nearest hospital or specialist, making routine checkups and emergency care difficult to access. This geographic isolation not only delays care but also increases the cost of seeking medical attention.

**Workforce Shortages**

Rural areas consistently face shortages of healthcare professionals. Doctors, nurses, and specialists are often concentrated in urban areas, leaving rural communities underserved. This shortage creates a cycle where healthcare professionals are overworked, leading to burnout and further shortages.

**Limited Infrastructure**

Many rural areas lack the infrastructure necessary for comprehensive healthcare delivery. This includes not just hospitals and clinics, but also reliable internet connectivity for telemedicine, transportation systems for medical emergencies, and facilities equipped with modern medical technology.

**Economic Challenges**

Rural residents often face economic barriers to healthcare access. Lower average incomes combined with higher transportation costs create financial obstacles that prevent many from seeking timely medical care. Insurance coverage may also be limited or more expensive in rural areas.

**Solutions and Innovations**

Despite these challenges, innovative solutions are emerging. Mobile medical units bring healthcare directly to communities, telemedicine connects patients with specialists remotely, and community health worker programs train local residents to provide basic care. These approaches are making healthcare more accessible and affordable for rural populations.

The future of rural healthcare depends on continued innovation, investment in infrastructure, and commitment to ensuring that everyone, regardless of where they live, has access to quality healthcare services.`,
};

const blogPosts = [
    {
        id: 1,
        title: 'How Mobile Medical Camps Transform Communities',
        excerpt: 'A deep dive into the impact of mobile medical camps on rural healthcare access.',
        image: '/Gemini_Generated_Image_rz9p6xrz9p6xrz9p.png',
        date: 'November 20, 2024',
        category: 'stories',
        readTime: '6 min read',
        author: 'Dr. Priya Sharma',
        authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
        fullContent: `A deep dive into the impact of mobile medical camps on rural healthcare access.

Mobile medical camps represent one of the most innovative solutions to rural healthcare challenges. These fully-equipped medical units travel to remote communities, bringing comprehensive healthcare services directly to people's doorsteps.

**The Impact**

The transformation begins the moment a mobile medical camp arrives in a community. For many residents, it's their first opportunity to receive professional medical care without traveling long distances. The impact extends far beyond immediate medical treatment.

**Comprehensive Services**

These camps provide a wide range of services including general health checkups, vaccinations, maternal care, dental services, eye examinations, and diagnostic tests. This comprehensive approach ensures that multiple health needs can be addressed in a single visit.

**Building Trust**

One of the most significant benefits is the trust that develops between healthcare providers and community members. Regular visits create lasting relationships, making community members more comfortable seeking medical care and following medical advice.

**Education and Prevention**

Mobile camps also serve as platforms for health education. Community members learn about preventive care, healthy living practices, and how to recognize early warning signs of health problems. This education empowers communities to take better care of their health.

**Long-term Change**

The impact of mobile medical camps extends beyond immediate care. They create a foundation for better health outcomes, reduce emergency situations through preventive care, and demonstrate the value of regular health checkups to communities that may have been skeptical of modern medicine.

Through consistent service delivery and community engagement, mobile medical camps are transforming rural healthcare access and improving lives across rural communities.`,
    },
    {
        id: 3,
        title: 'The Role of Community Health Workers in Rural Healthcare',
        excerpt: 'Exploring how trained community health workers are revolutionizing healthcare delivery in rural areas.',
        image: '/Gemini_Generated_Image_ses3ehses3ehses3.png',
        date: 'November 15, 2024',
        category: 'education',
        readTime: '7 min read',
        author: 'Dr. Michael Chen',
        authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=150&q=80',
        fullContent: `Exploring how trained community health workers are revolutionizing healthcare delivery in rural areas.

Community health workers (CHWs) are local residents trained to provide basic healthcare services and health education within their own communities. This model has proven to be one of the most effective approaches to improving rural healthcare access.

**Local Knowledge and Trust**

CHWs understand the local culture, language, and community dynamics in ways that external healthcare providers cannot. This deep understanding allows them to build trust quickly and communicate health information in ways that resonate with community members.

**Accessibility**

Because CHWs live in the communities they serve, they are always accessible. Community members can reach out to them at any time, whether for health questions, minor treatments, or referrals to more advanced care. This constant availability is crucial in rural areas where healthcare facilities are far away.

**Cost-Effective Care**

Training local residents as CHWs is significantly more cost-effective than building new healthcare facilities or bringing in external healthcare providers. This makes healthcare more sustainable and scalable in resource-limited rural settings.

**Preventive Focus**

CHWs excel at preventive care. They can conduct regular health screenings, provide health education, monitor chronic conditions, and identify health problems early before they become serious. This preventive approach reduces the need for expensive emergency care.

**Bridging the Gap**

CHWs serve as a crucial bridge between communities and formal healthcare systems. They can identify when community members need advanced care and facilitate referrals, ensuring that people receive appropriate treatment at the right time.

The success of CHW programs demonstrates that effective healthcare doesn't always require expensive infrastructure or highly specialized equipment. Sometimes, the most powerful healthcare tool is a trusted neighbor with the right training and a commitment to community health.`,
    },
    {
        id: 4,
        title: 'Nutrition and Wellness in Rural Communities',
        excerpt: 'Understanding the unique nutritional challenges and opportunities in rural living.',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80',
        date: 'November 10, 2024',
        category: 'health',
        readTime: '6 min read',
        author: 'Dr. Emily Rodriguez',
        authorImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=150&q=80',
        fullContent: `Understanding the unique nutritional challenges and opportunities in rural living.

Rural communities face unique nutritional challenges, but they also have access to resources that can support excellent health and wellness.

**Challenges**

Limited access to fresh produce, especially during certain seasons, can be a challenge. Grocery stores may be far away, and options may be limited. Additionally, processed foods are often more readily available and affordable than fresh, healthy options.

**Opportunities**

However, rural living also offers unique opportunities for healthy eating. Many rural residents have access to gardens, local farms, and fresh produce. Home cooking is more common, and there's often more space for physical activity.

**Practical Solutions**

Community gardens, farmers' markets, and food cooperatives can help address nutritional challenges. These initiatives bring fresh, affordable produce to communities while also building social connections.

**Education and Support**

Nutrition education programs can help rural residents make the most of available resources. Learning about food preservation, seasonal eating, and budget-friendly healthy meals can significantly improve nutritional outcomes.

**The Role of Healthcare Providers**

Healthcare providers in rural areas play a crucial role in nutritional counseling. They can help patients understand how to make healthy choices with limited resources and connect them with local food programs and resources.

By understanding both the challenges and opportunities, rural communities can develop strategies that support excellent nutrition and overall wellness.`,
    },
    {
        id: 5,
        title: 'Mental Health Support in Rural Communities',
        excerpt: 'Addressing the unique mental health challenges and solutions for rural residents.',
        image: '/Gemini_Generated_Image_ldhui0ldhui0ldhu.png',
        date: 'October 30, 2024',
        category: 'health',
        readTime: '7 min read',
        author: 'Dr. Lisa Thompson',
        authorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80',
        fullContent: `Addressing the unique mental health challenges and solutions for rural residents.

Mental health is a critical component of overall wellness, yet rural communities often face significant barriers to accessing mental health services.

**Unique Challenges**

Rural residents may face isolation, limited access to mental health professionals, and stigma around seeking mental health care. These factors can prevent people from getting the help they need.

**Solutions**

Telepsychiatry, community-based programs, and peer support groups are helping to address these challenges. Training community health workers in basic mental health support can also make a significant difference.

**Breaking Stigma**

Education and awareness campaigns are crucial for breaking down stigma around mental health. When community leaders and healthcare providers openly discuss mental health, it encourages others to seek help.

**Building Support Networks**

Strong community connections can serve as a foundation for mental health support. Neighbors, community groups, and local organizations can provide social support that is crucial for mental wellness.

**The Path Forward**

Improving rural mental health care requires a multi-faceted approach that combines technology, community support, and professional services. By addressing mental health needs comprehensively, we can improve overall health outcomes in rural communities.`,
    },
    {
        id: 6,
        title: 'Preventive Care: The Key to Long-term Health in Rural Areas',
        excerpt: 'Why preventive care matters more in rural communities and how to make it accessible.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
        date: 'October 25, 2024',
        category: 'health',
        readTime: '6 min read',
        author: 'Dr. Maria Garcia',
        authorImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=150&q=80',
        fullContent: `Why preventive care matters more in rural communities and how to make it accessible.

Preventive care is the foundation of good health, and it's especially critical in rural areas where access to emergency and specialized care may be limited.

**The Importance of Prevention**

In rural communities, where healthcare facilities may be hours away, preventing health problems before they occur becomes even more important. Regular checkups, screenings, and vaccinations can catch health issues early when they're easier and less expensive to treat.

**Common Preventive Measures**

Regular health screenings for blood pressure, cholesterol, diabetes, and cancer can identify problems early. Vaccinations protect against preventable diseases. Health education helps community members understand how to maintain good health through lifestyle choices.

**Making Prevention Accessible**

Mobile health camps, community health workers, and telemedicine services are making preventive care more accessible in rural areas. These approaches bring screenings and health education directly to communities, removing barriers of distance and cost.

**Community Involvement**

Successful preventive care programs involve the entire community. Health fairs, educational workshops, and community health worker programs engage residents and create a culture of health awareness.

**Long-term Benefits**

Investing in preventive care pays dividends in improved health outcomes, reduced healthcare costs, and better quality of life. By focusing on prevention, rural communities can reduce the need for emergency care and improve overall health.

Preventive care isn't just about individual health—it's about building healthier, stronger communities that can thrive for generations to come.`,
    },
    {
        id: 7,
        title: 'Women\'s Health Initiatives: Empowering Rural Communities',
        excerpt: 'How targeted women\'s health programs are making a difference in rural areas.',
        image: '/Gemini_Generated_Image_witfrlwitfrlwitf.png',
        date: 'October 20, 2024',
        category: 'stories',
        readTime: '7 min read',
        author: 'Dr. Priya Sharma',
        authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
        fullContent: `How targeted women's health programs are making a difference in rural areas.

Women's health is a critical component of community wellness, and specialized programs are addressing the unique needs of women in rural communities.

**Comprehensive Care**

Women's health programs provide comprehensive care including reproductive health services, prenatal and postnatal care, breast and cervical cancer screenings, and family planning services. These services are tailored to meet the specific needs of rural women.

**Breaking Barriers**

Cultural barriers, distance, and lack of awareness can prevent women from accessing healthcare. Women's health programs work to break down these barriers through community engagement, education, and culturally sensitive care delivery.

**Maternal Health Focus**

Maternal health is a particular focus, with programs providing prenatal care, safe delivery services, and postnatal support. These services have significantly reduced maternal and infant mortality rates in rural communities.

**Education and Empowerment**

Health education programs empower women with knowledge about their health, reproductive rights, and available services. This education helps women make informed decisions about their health and the health of their families.

**Community Health Workers**

Trained female community health workers play a crucial role in women's health programs. They understand local culture and can provide care and education in ways that resonate with community members.

**Success Stories**

The impact of these programs is evident in improved health outcomes, increased awareness, and empowered communities. Women who have access to these services report better health, increased confidence, and improved quality of life.

Women's health initiatives are not just about healthcare—they're about empowering women and strengthening entire communities.`,
    },
    {
        id: 8,
        title: 'How to Access Quality Healthcare When Living in Remote Rural Areas',
        excerpt: 'A comprehensive guide to finding and accessing quality healthcare services when you live far from major medical facilities.',
        image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80',
        date: 'October 15, 2024',
        category: 'education',
        readTime: '8 min read',
        author: 'Dr. James Wilson',
        authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
        fullContent: `A comprehensive guide to finding and accessing quality healthcare services when you live far from major medical facilities.

Living in a remote rural area doesn't mean you have to sacrifice quality healthcare. There are numerous strategies and resources available to help you access the medical care you need.

**Understanding Your Options**

The first step is understanding what healthcare options are available in your area. This includes local clinics, mobile medical units, telemedicine services, and community health workers. Each option has its own benefits and can be used for different types of care.

**Mobile Medical Camps**

Mobile medical camps are one of the most accessible options for rural residents. These fully-equipped medical units travel to communities on a regular schedule, providing comprehensive healthcare services. Find out when mobile camps visit your area and mark those dates on your calendar.

**Telemedicine Services**

Telemedicine allows you to consult with healthcare providers remotely through video calls. Many rural health centers now have telemedicine kiosks where you can access specialists without traveling long distances. This is particularly useful for follow-up appointments and specialist consultations.

**Community Health Workers**

Community health workers are trained local residents who can provide basic healthcare services and health education. They're often your first point of contact for health concerns and can help you determine when you need to see a doctor or visit a hospital.

**Planning Ahead**

When living in a remote area, planning ahead is crucial. Schedule regular checkups, keep a well-stocked first aid kit, maintain a relationship with local healthcare providers, and know the fastest route to the nearest hospital for emergencies.

**Emergency Preparedness**

Have an emergency plan in place. Know the location of the nearest hospital, keep emergency contact numbers handy, and have transportation arranged for medical emergencies. Consider joining a community health program that provides emergency response services.

**Building a Healthcare Network**

Build relationships with healthcare providers in your area. This includes local doctors, community health workers, and staff at nearby clinics. These relationships can help you get faster appointments and better care coordination.

**Utilizing Technology**

Use technology to your advantage. Health apps can help you track symptoms, medications, and appointments. Online resources can provide health information, though always consult with healthcare professionals for medical advice.

**Financial Assistance**

Many programs offer financial assistance for rural healthcare. Look into government programs, nonprofit organizations, and sliding-scale fee clinics that can help reduce healthcare costs.

**Staying Informed**

Stay informed about new healthcare services and programs in your area. Follow local health departments, community organizations, and healthcare providers on social media or through newsletters to learn about new services and health initiatives.

Accessing quality healthcare in remote areas requires planning, knowledge, and utilizing available resources. With the right approach, you can receive excellent healthcare regardless of where you live.`,
    },
    {
        id: 9,
        title: 'What Are the Best Practices for Managing Chronic Diseases in Rural Communities',
        excerpt: 'Essential strategies and best practices for effectively managing chronic conditions like diabetes, hypertension, and heart disease in rural settings.',
        image: '/Gemini_Generated_Image_kruwr7kruwr7kruw.png',
        date: 'October 10, 2024',
        category: 'health',
        readTime: '9 min read',
        author: 'Dr. Michael Chen',
        authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=150&q=80',
        fullContent: `Essential strategies and best practices for effectively managing chronic conditions like diabetes, hypertension, and heart disease in rural settings.

Managing chronic diseases in rural communities presents unique challenges, but with the right strategies and support, excellent outcomes are achievable.

**Regular Monitoring**

Regular monitoring is crucial for chronic disease management. This includes checking blood pressure, blood sugar levels, and other relevant metrics. Many rural health programs provide monitoring equipment and training so patients can track their conditions at home.

**Medication Management**

Consistent medication adherence is essential. Work with healthcare providers to ensure you have reliable access to medications. Many rural pharmacies and medicine programs offer affordable options and delivery services to help maintain medication schedules.

**Lifestyle Modifications**

Lifestyle changes are often the foundation of chronic disease management. This includes dietary changes, regular exercise, stress management, and avoiding harmful habits. Community health workers can provide guidance and support for making these changes.

**Regular Healthcare Visits**

Even though travel may be challenging, regular visits to healthcare providers are important. These visits allow for monitoring, medication adjustments, and early detection of complications. Plan visits strategically and combine multiple appointments when possible.

**Support Systems**

Building a support system is crucial. This includes family members, friends, community health workers, and support groups. Having people who understand your condition and can provide encouragement makes management much easier.

**Education and Self-Management**

Education about your condition empowers you to take an active role in management. Learn about your disease, understand your medications, recognize warning signs, and know when to seek immediate care. Many programs offer patient education workshops.

**Technology Tools**

Use technology to support disease management. Apps can help track symptoms, medications, and appointments. Telemedicine allows for regular check-ins with healthcare providers without extensive travel.

**Preventive Care**

Focus on preventing complications through regular screenings and preventive care. This includes eye exams for diabetes, heart monitoring for cardiovascular conditions, and other relevant preventive measures.

**Emergency Planning**

Have a plan for emergencies. Know the warning signs that require immediate medical attention, have emergency contact information readily available, and know the fastest route to medical care.

**Community Resources**

Take advantage of community resources. Many rural communities have programs specifically designed to support chronic disease management, including support groups, educational programs, and affordable medication programs.

Effective chronic disease management in rural communities requires a combination of self-care, community support, and access to healthcare services. With the right approach and resources, you can successfully manage your condition and maintain good health.`,
    },
    {
        id: 10,
        title: '10 Essential Health Tips for Families Living in Rural Areas Without Nearby Hospitals',
        excerpt: 'Practical health advice and essential tips to help rural families maintain good health and handle medical situations when hospitals are far away.',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80',
        date: 'October 5, 2024',
        category: 'health',
        readTime: '10 min read',
        author: 'Dr. Emily Rodriguez',
        authorImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=150&q=80',
        fullContent: `Practical health advice and essential tips to help rural families maintain good health and handle medical situations when hospitals are far away.

Living in a rural area without nearby hospitals requires proactive health management and preparation. Here are ten essential tips to help your family stay healthy and safe.

**1. Maintain a Well-Stocked First Aid Kit**

Keep a comprehensive first aid kit at home that includes bandages, antiseptics, pain relievers, thermometer, and basic medical supplies. This kit can handle minor injuries and provide initial care before professional help arrives.

**2. Learn Basic First Aid and CPR**

Take first aid and CPR courses. These skills can be lifesaving in emergencies when professional help is far away. Many organizations offer free or low-cost training in rural areas.

**3. Build Relationships with Local Healthcare Providers**

Establish relationships with local doctors, nurses, and community health workers. They can provide guidance, answer questions, and help coordinate care when needed.

**4. Keep Emergency Contact Information Handy**

Maintain a list of emergency contacts including local healthcare providers, nearest hospital, ambulance services, and poison control. Keep this information easily accessible and share it with all family members.

**5. Plan Regular Health Checkups**

Schedule regular health checkups for all family members. Don't wait for problems to arise. Preventive care can catch issues early when they're easier to treat.

**6. Stay Up to Date with Vaccinations**

Ensure all family members are current with vaccinations. This is especially important in rural areas where access to emergency care may be limited.

**7. Maintain a Healthy Lifestyle**

Focus on prevention through healthy eating, regular exercise, adequate sleep, and stress management. A healthy lifestyle reduces the need for medical intervention.

**8. Know When to Seek Immediate Care**

Learn to recognize signs that require immediate medical attention, such as chest pain, difficulty breathing, severe injuries, or signs of stroke. Don't hesitate to seek emergency care when needed.

**9. Utilize Telemedicine Services**

Take advantage of telemedicine for non-emergency consultations. This can save time and travel while ensuring you receive professional medical advice.

**10. Build a Community Support Network**

Connect with neighbors and community members. In rural areas, neighbors often become your first line of support during health emergencies or when you need assistance getting to medical appointments.

**Additional Considerations**

Keep important medical records organized and accessible. Maintain a list of current medications, allergies, and medical history for each family member. This information is crucial during emergencies or when seeing new healthcare providers.

**Emergency Transportation**

Have a plan for emergency transportation. Know who can drive you to the hospital, have vehicle maintenance up to date, and consider joining programs that provide emergency medical transportation.

**Health Education**

Stay informed about health topics relevant to your family. Attend health education workshops, read reliable health information, and ask healthcare providers questions about maintaining good health.

**Preventive Screenings**

Don't skip preventive screenings. Regular screenings for various conditions can detect problems early when they're most treatable, reducing the need for emergency care.

**Mental Health**

Don't neglect mental health. Rural living can be isolating, so make efforts to maintain social connections and seek help if you're struggling with mental health issues.

By following these tips and being proactive about health, rural families can maintain excellent health even when hospitals are far away. Preparation, prevention, and community support are key to thriving in rural areas.`,
    },
    {
        id: 11,
        title: 'How Mobile Medical Units Are Revolutionizing Healthcare Access in Underserved Rural Villages',
        excerpt: 'An in-depth look at how mobile medical units are transforming healthcare delivery and improving health outcomes in remote rural villages.',
        image: '/Gemini_Generated_Image_rz9p6xrz9p6xrz9p.png',
        date: 'September 30, 2024',
        category: 'updates',
        readTime: '8 min read',
        author: 'Dr. Sarah Mitchell',
        authorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80',
        fullContent: `An in-depth look at how mobile medical units are transforming healthcare delivery and improving health outcomes in remote rural villages.

Mobile medical units represent one of the most innovative and effective solutions to the challenge of providing healthcare in underserved rural villages. These fully-equipped medical facilities on wheels are revolutionizing how healthcare is delivered.

**The Concept**

Mobile medical units are essentially traveling clinics equipped with medical equipment, supplies, and healthcare professionals. They bring comprehensive healthcare services directly to villages, eliminating the need for residents to travel long distances for medical care.

**Comprehensive Services**

These units provide a wide range of services including general health checkups, vaccinations, maternal and child care, dental services, eye examinations, diagnostic tests, and minor surgical procedures. This comprehensive approach ensures that multiple health needs can be addressed in a single visit.

**Overcoming Geographic Barriers**

The primary advantage of mobile medical units is their ability to overcome geographic barriers. They can navigate difficult terrain, reach remote locations, and bring healthcare to communities that would otherwise have limited or no access to medical services.

**Regular Scheduled Visits**

Most mobile medical units operate on a regular schedule, visiting villages on specific dates each month or quarter. This predictability allows communities to plan ahead, prepare for visits, and ensure that residents can access services when needed.

**Building Trust and Relationships**

Regular visits create lasting relationships between healthcare providers and community members. This trust is crucial for effective healthcare delivery, as it encourages people to seek care, follow medical advice, and participate in health programs.

**Preventive Care Focus**

Mobile medical units excel at providing preventive care. Regular health screenings, vaccinations, and health education help prevent diseases and catch health problems early, reducing the need for emergency care and improving overall health outcomes.

**Cost-Effective Solution**

Mobile medical units are a cost-effective solution compared to building permanent healthcare facilities in every village. They can serve multiple communities, maximizing the use of resources and healthcare professionals.

**Community Engagement**

Successful mobile medical unit programs involve the community in planning and implementation. Community health workers help organize visits, spread awareness, and facilitate communication between healthcare providers and residents.

**Technology Integration**

Modern mobile medical units are equipped with technology including telemedicine capabilities, digital health records, and diagnostic equipment. This technology enhances the quality of care and allows for better coordination with larger healthcare facilities.

**Measurable Impact**

The impact of mobile medical units is measurable and significant. Communities served by these units show improved health outcomes, increased vaccination rates, better management of chronic diseases, and reduced emergency situations.

**Challenges and Solutions**

While mobile medical units face challenges such as difficult terrain, weather conditions, and maintenance, these are being addressed through better vehicle design, strategic planning, and community support.

**The Future**

As technology improves and programs expand, mobile medical units will play an increasingly important role in rural healthcare. They represent a scalable, sustainable solution that can reach even the most remote communities.

Mobile medical units are not just vehicles—they're lifelines connecting underserved rural villages to quality healthcare. They demonstrate that innovative thinking and commitment can overcome even the most challenging barriers to healthcare access.`,
    },
    {
        id: 12,
        title: 'Why Telemedicine Services Are Essential for Elderly Patients in Remote Rural Locations',
        excerpt: 'Understanding the critical importance of telemedicine for senior citizens living in rural areas and how it improves their access to healthcare.',
        image: '/Gemini_Generated_Image_ey45iaey45iaey45.png',
        date: 'September 25, 2024',
        category: 'education',
        readTime: '7 min read',
        author: 'Dr. Robert Kim',
        authorImage: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=150&q=80',
        fullContent: `Understanding the critical importance of telemedicine for senior citizens living in rural areas and how it improves their access to healthcare.

Telemedicine services are particularly essential for elderly patients in remote rural locations, offering solutions to many of the unique challenges they face in accessing healthcare.

**Unique Challenges for Elderly Rural Residents**

Elderly patients in rural areas face multiple barriers to healthcare access. Physical limitations may make long-distance travel difficult or impossible. Transportation may be unavailable or unreliable. Weather conditions can make travel dangerous. These factors combine to create significant obstacles to receiving regular medical care.

**How Telemedicine Helps**

Telemedicine eliminates the need for travel, allowing elderly patients to consult with healthcare providers from their homes or local health centers. This is especially valuable for routine checkups, medication management, and follow-up appointments that don't require physical examination.

**Chronic Disease Management**

Many elderly patients have chronic conditions that require regular monitoring and management. Telemedicine allows for frequent check-ins with healthcare providers, medication adjustments, and monitoring of vital signs without the stress and difficulty of travel.

**Specialist Access**

Rural areas often lack specialists such as cardiologists, endocrinologists, or neurologists. Telemedicine connects elderly patients with these specialists remotely, ensuring they receive expert care without traveling to distant medical centers.

**Medication Management**

Telemedicine facilitates better medication management. Healthcare providers can review medications, check for interactions, adjust dosages, and ensure patients understand how to take their medications correctly—all through virtual consultations.

**Reduced Stress and Fatigue**

Traveling to medical appointments can be physically and emotionally taxing for elderly patients. Telemedicine eliminates this stress, allowing patients to focus on their health without the added burden of travel.

**Family Involvement**

Telemedicine makes it easier for family members to participate in healthcare decisions. Family members can join virtual consultations from anywhere, providing support and helping ensure that elderly patients understand and follow medical advice.

**Regular Monitoring**

Telemedicine enables regular monitoring of health conditions. Healthcare providers can check in frequently, monitor symptoms, and adjust treatment plans as needed. This regular contact helps prevent complications and ensures timely intervention when problems arise.

**Mental Health Support**

Elderly patients often face mental health challenges including depression, anxiety, and isolation. Telemedicine provides access to mental health services, counseling, and support that might not be available locally.

**Emergency Triage**

Telemedicine can help determine when an elderly patient needs immediate in-person care versus when a virtual consultation is sufficient. This triage capability ensures that patients receive appropriate care while avoiding unnecessary travel.

**Technology Support**

Many telemedicine programs provide support for elderly patients who may not be comfortable with technology. Community health workers or family members can help facilitate virtual consultations, ensuring that technology doesn't become a barrier.

**Cost Savings**

Telemedicine reduces costs for elderly patients by eliminating travel expenses, reducing time away from home, and potentially reducing the need for emergency care through better preventive management.

**Building Confidence**

As elderly patients become more comfortable with telemedicine, they gain confidence in managing their health. This empowerment leads to better health outcomes and improved quality of life.

**The Human Connection**

Despite being virtual, telemedicine maintains the human connection between patients and healthcare providers. This relationship is crucial for effective care, especially for elderly patients who may feel isolated.

Telemedicine is not just a convenience for elderly rural patients—it's a necessity that ensures they receive the regular, quality healthcare they need to maintain their health and independence. As telemedicine continues to evolve, it will become an even more integral part of healthcare for rural seniors.`,
    },
];

const filteredPosts = ref(blogPosts);

function filterByCategory(category: string): void {
    activeCategory.value = category;
    if (category === 'all') {
        filteredPosts.value = blogPosts;
    } else {
        filteredPosts.value = blogPosts.filter(post => post.category === category);
    }
}

function getCategoryColor(category: string): string {
    const colors: Record<string, string> = {
        health: 'bg-[#10B981]/10 text-[#10B981]',
        stories: 'bg-[#EC4899]/10 text-[#EC4899]',
        updates: 'bg-[#0EA5E9]/10 text-[#0EA5E9]',
        education: 'bg-[#8B5CF6]/10 text-[#8B5CF6]',
    };
    return colors[category] || 'bg-[#64748B]/10 text-[#64748B]';
}

const selectedPost = ref<any>(null);
const showFullPost = ref(false);

function openFullPost(post: any): void {
    selectedPost.value = post;
    showFullPost.value = true;
    document.body.style.overflow = 'hidden';
}

function closeFullPost(): void {
    showFullPost.value = false;
    selectedPost.value = null;
    document.body.style.overflow = '';
}

</script>

<template>
    
    
        <!-- Hero -->
        <section class="relative overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#E0F2FE] to-[#F0FDF4] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] pt-32 pb-24">
            <div class="absolute inset-0">
                <div class="blob absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#8B5CF6]/10 dark:bg-[#8B5CF6]/20 blur-3xl"></div>
                <div class="blob absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#0EA5E9]/10 dark:bg-[#0EA5E9]/20 blur-3xl"></div>
            </div>

            <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-3xl text-center">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#8B5CF6]/10 dark:bg-white/10 px-4 py-2 backdrop-blur-sm border border-[#8B5CF6]/20 dark:border-transparent">
                        <div class="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]"></div>
                        <span class="text-sm font-semibold text-[#8B5CF6]">Health Blog</span>
                    </div>
                    <h1 class="mb-6 text-4xl font-bold text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl">
                        Health & Wellness <span class="gradient-text">Blog</span>
                    </h1>
                    <p class="text-lg text-[#475569] dark:text-white/70">
                        Expert insights, health tips, success stories, and updates on rural healthcare initiatives.
                    </p>
                </div>
            </div>
        </section>

        <!-- Featured Post -->
        <section class="relative -mt-16 z-10 pb-12 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="card-modern group overflow-hidden">
                    <div class="grid lg:grid-cols-2">
                        <div class="relative h-64 lg:h-auto">
                            <img
                                :src="featuredPost.image"
                                :alt="featuredPost.title"
                                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div class="absolute inset-0 bg-gradient-to-r from-[#0F172A]/60 to-transparent lg:hidden"></div>
                        </div>
                        <div class="p-8 lg:p-12">
                            <div class="mb-4 flex items-center gap-4">
                                <span :class="['rounded-full px-3 py-1 text-sm font-medium capitalize', getCategoryColor(featuredPost.category)]">
                                    Featured
                                </span>
                                <span class="text-sm text-[#64748B] dark:text-[#94A3B8]">{{ featuredPost.date }}</span>
                                <span class="text-sm text-[#64748B] dark:text-[#94A3B8]">{{ featuredPost.readTime }}</span>
                            </div>
                            <h2 class="mb-4 text-2xl font-bold text-[#0F172A] dark:text-white lg:text-3xl">
                                {{ featuredPost.title }}
                            </h2>
                            <p class="mb-6 text-lg text-[#475569] dark:text-[#94A3B8]">{{ featuredPost.excerpt }}</p>
                            <div class="mb-6 flex items-center gap-3">
                                <img :src="featuredPost.authorImage" :alt="featuredPost.author" class="h-10 w-10 rounded-full object-cover" />
                                <div>
                                    <p class="text-sm font-medium text-[#0F172A] dark:text-white">{{ featuredPost.author }}</p>
                                    <p class="text-xs text-[#64748B] dark:text-[#94A3B8]">Healthcare Expert</p>
                                </div>
                            </div>
                            <button @click="openFullPost(featuredPost)" class="inline-flex items-center gap-2 font-semibold text-[#0EA5E9] transition-colors hover:text-[#0284C7]">
                                Read Full Article
                                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
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
                                : 'bg-[#F1F5F9] dark:bg-[#334155] text-[#475569] dark:text-[#94A3B8] hover:bg-[#E2E8F0] dark:hover:bg-[#475569]',
                        ]"
                        @click="filterByCategory(category.id)"
                    >
                        {{ category.label }}
                    </button>
                </div>
            </div>
        </section>

        <!-- Blog Posts Grid -->
        <section class="py-24 lg:py-32 bg-white dark:bg-[#0F172A]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <article
                        v-for="post in filteredPosts"
                        :key="post.id"
                        class="card-modern group overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl"
                    >
                        <div class="relative h-48 overflow-hidden">
                            <img
                                :src="post.image"
                                :alt="post.title"
                                class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                            />
                            <span :class="['absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-medium capitalize', getCategoryColor(post.category)]">
                                {{ post.category }}
                            </span>
                        </div>
                        <div class="p-6">
                            <div class="mb-3 flex items-center gap-3 text-sm text-[#64748B] dark:text-[#94A3B8]">
                                <span>{{ post.date }}</span>
                                <span>{{ post.readTime }}</span>
                            </div>
                            <h3 class="mb-3 text-lg font-bold text-[#0F172A] dark:text-white transition-colors group-hover:text-[#0EA5E9]">
                                {{ post.title }}
                            </h3>
                            <p class="mb-4 text-[#475569] dark:text-[#94A3B8]">{{ post.excerpt }}</p>
                            <div class="mb-4 flex items-center gap-3">
                                <img :src="post.authorImage" :alt="post.author" class="h-8 w-8 rounded-full object-cover" />
                                <div>
                                    <p class="text-xs font-medium text-[#0F172A] dark:text-white">{{ post.author }}</p>
                                </div>
                            </div>
                            <button @click="openFullPost(post)" class="inline-flex items-center gap-2 text-sm font-semibold text-[#0EA5E9] transition-colors hover:text-[#0284C7]">
                                Read More
                                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- Full Post Modal -->
        <div
            v-if="showFullPost && selectedPost"
            class="fixed inset-0 z-50 overflow-y-auto"
        >
            <!-- Backdrop -->
            <div class="fixed inset-0 bg-[#0F172A]/80 backdrop-blur-sm"></div>
            
            <!-- Modal Content -->
            <div class="relative min-h-screen px-4 py-12 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-4xl">
                    <article class="card-modern bg-white dark:bg-[#1E293B] overflow-hidden relative">
                        <!-- Close Button -->
                        <button
                            @click="closeFullPost"
                            class="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 dark:bg-[#334155] text-[#0F172A] dark:text-white transition-colors hover:bg-white dark:hover:bg-[#475569] shadow-lg"
                        >
                            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <!-- Post Image -->
                        <div class="relative h-64 sm:h-96 overflow-hidden">
                            <img
                                :src="selectedPost.image"
                                :alt="selectedPost.title"
                                class="h-full w-full object-cover"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent"></div>
                            <div class="absolute bottom-6 left-6 right-6">
                                <span :class="['inline-block rounded-full px-3 py-1 text-sm font-medium capitalize mb-3', getCategoryColor(selectedPost.category)]">
                                    {{ selectedPost.category }}
                                </span>
                                <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                                    {{ selectedPost.title }}
                                </h1>
                                <div class="flex items-center gap-4 text-sm text-white/80">
                                    <span>{{ selectedPost.date }}</span>
                                    <span>{{ selectedPost.readTime }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Post Content -->
                        <div class="p-8 sm:p-12">
                            <div class="mb-6 flex items-center gap-3 border-b border-[#E2E8F0] dark:border-[#334155] pb-6">
                                <img :src="selectedPost.authorImage" :alt="selectedPost.author" class="h-12 w-12 rounded-full object-cover" />
                                <div>
                                    <p class="font-medium text-[#0F172A] dark:text-white">{{ selectedPost.author }}</p>
                                    <p class="text-sm text-[#64748B] dark:text-[#94A3B8]">Healthcare Expert</p>
                                </div>
                            </div>
                            <div class="prose prose-lg dark:prose-invert max-w-none">
                                <p class="text-xl text-[#475569] dark:text-[#94A3B8] mb-6 leading-relaxed">
                                    {{ selectedPost.excerpt }}
                                </p>
                                <div class="text-[#475569] dark:text-[#94A3B8] leading-relaxed whitespace-pre-line">
                                    {{ selectedPost.fullContent }}
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    
</template>

