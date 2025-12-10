# CareRural - Healthcare for All

A modern, responsive web application for CareRural Foundation, a non-profit organization dedicated to bringing quality healthcare to rural communities. The platform showcases mobile medical camps, low-cost medicines, volunteer programs, and healthcare services.

## 🌟 Features

### Core Functionality
- **Mobile Medical Camps** - Information about mobile healthcare units serving remote villages
- **Low-Cost Medicines** - Affordable pharmacy network with up to 80% cost savings
- **Blood Donation** - Blood donation programs and health checkups
- **Volunteer Programs** - Opportunities for medical professionals and community volunteers
- **Impact Stories** - Real testimonials from patients, doctors, and community leaders
- **News & Updates** - Latest healthcare initiatives and community impact stories

### Technical Features
- ⚡ **High Performance** - Optimized for PageSpeed Insights score of 90+
- 📱 **Fully Responsive** - Seamless experience across mobile, tablet, and desktop
- 🌙 **Dark Mode** - Complete dark mode support with smooth theme switching
- ♿ **Accessible** - Semantic HTML and proper heading hierarchy
- 🎨 **Modern UI** - Beautiful gradient designs with smooth animations
- 🚀 **Fast Loading** - Optimized images, lazy loading, and code splitting

## 🛠️ Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Routing**: Vue Router 4
- **State Management**: Vue Composition API
- **Icons**: SVG Icons (inline)

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn
- Git

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/jigomit/jigomit-carerural.git
   cd carerular
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🚀 Build & Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

The production build will be generated in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

### Deployment
The project is configured for deployment on platforms like:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## 📁 Project Structure

```
carerular/
├── public/                 # Static assets
├── src/
│   ├── assets/            # CSS and other assets
│   ├── components/        # Reusable Vue components
│   │   ├── AboutSection.vue
│   │   ├── FooterSection.vue
│   │   ├── GetInvolvedSection.vue
│   │   ├── HeroSection.vue
│   │   ├── ImpactSection.vue
│   │   ├── NavHeader.vue
│   │   ├── ServicesSection.vue
│   │   └── TestimonialsSection.vue
│   ├── composables/       # Vue composables
│   │   └── useTheme.ts
│   ├── layouts/           # Layout components
│   │   └── MainLayout.vue
│   ├── pages/             # Page components
│   │   ├── About.vue
│   │   ├── Blog.vue
│   │   ├── BloodDonation.vue
│   │   ├── Contact.vue
│   │   ├── Donate.vue
│   │   ├── Home.vue
│   │   ├── Impact.vue
│   │   ├── LowCostMedicine.vue
│   │   ├── MobileMedicalCamps.vue
│   │   ├── News.vue
│   │   ├── Programs.vue
│   │   ├── Services.vue
│   │   ├── Testimonials.vue
│   │   └── Volunteer.vue
│   ├── router/            # Vue Router configuration
│   │   └── index.ts
│   ├── App.vue            # Root component
│   └── main.ts            # Application entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── tailwind.config.js     # Tailwind CSS configuration
```

## 🎨 Pages

- **Home** - Hero section, features, mission, testimonials, news
- **About** - Organization history, mission, values
- **Services** - Mobile camps, medicines, doctor network, health education
- **Programs** - Healthcare programs and initiatives
- **Impact** - Statistics, success stories, year-over-year growth
- **Donate** - Donation options and impact levels
- **Volunteer** - Volunteer opportunities and application form
- **Blood Donation** - Blood donation information and benefits
- **Low-Cost Medicine** - Pharmacy network and affordable medicines
- **Mobile Medical Camps** - Mobile clinic services and locations
- **Testimonials** - Stories from patients, doctors, and community
- **News** - Latest updates and healthcare stories
- **Blog** - Health education and awareness articles
- **Contact** - Contact information and inquiry form

## ⚡ Performance Optimizations

### Image Optimization
- Lazy loading for below-fold images
- Explicit width/height attributes to prevent layout shifts
- Optimized image formats and sizes
- Error fallbacks with SVG placeholders

### Code Optimization
- Code splitting with manual chunks
- Vendor bundle separation
- ESBuild minification
- CSS optimization and containment

### Loading Performance
- Preload hints for critical resources
- Module preload for faster JS loading
- Optimized font loading
- CSS containment for layout stability

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy (h1-h3)
- ARIA labels where needed
- Keyboard navigation support

## 🎯 Key Metrics

- **PageSpeed Score**: 90+ (Desktop & Mobile)
- **LCP**: Optimized with fetchpriority and eager loading
- **CLS**: Minimized with proper image dimensions and CSS containment
- **FCP**: Fast with optimized critical resources

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Code Style
- ESLint for code quality
- Prettier for code formatting
- TypeScript for type safety

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is private and proprietary to CareRural Foundation.

## 🤝 Contributing

This is a private project. For contributions or inquiries, please contact the project maintainers.

## 📧 Contact

- **Website**: [CareRural Foundation](https://jigomit-carerural-netlify-app.netlify.app)
- **Email**: info@carerural.org
- **Phone**: +1 (800) 555-CARE

## 🙏 Acknowledgments

- Built with Vue.js and modern web technologies
- Designed for accessibility and performance
- Optimized for rural healthcare outreach

---

**CareRural Foundation** - Bridging the healthcare gap in rural communities through accessible, affordable, and quality medical services since 2008.
