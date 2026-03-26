# 🛠️ Sabbak Alriyadh — Plumbing Services Website

A high-performance, SEO-optimized plumbing services website for Riyadh, Saudi Arabia.
Built with modern frontend technologies to deliver **fast loading, excellent user experience, and high conversion rates** (Calls & WhatsApp leads).

---

## 🌍 Overview

**Sabbak Alriyadh** is a professional service website designed for plumbing businesses in Riyadh.
The platform provides users with easy access to services such as leak detection, pipe repair, heater installation, and maintenance.

The main goal of the project is to:

- Increase customer conversions 📞
- Improve search engine visibility 🔍
- Provide a clean and trustworthy user experience 💡

---

## 🚀 Live Demo

> 🔗 [_(Add your deployed link here — e.g. Vercel / Netlify)_](https://sabak-alriyadh.vercel.app/)

---

## 🎯 Key Features

### ⚡ Performance

- Built with **Vite** for ultra-fast development and build times
- Optimized bundle size
- Lazy-loaded pages (optional enhancement)

---

### 📱 Responsive Design

- Mobile-first approach
- Fully responsive across all devices
- Optimized layouts for tablets and desktops

---

### 📞 Conversion-Focused UX

- Sticky **Call Now** button
- Floating **WhatsApp CTA**
- Clear service sections
- Strong call-to-action messaging

---

### 🧭 Routing & Navigation

- Multi-page structure using **React Router DOM**
- Clean URL structure for SEO
- Dedicated pages for each service

---

### 🎨 UI & Animations

- Built with **Tailwind CSS**
- Smooth transitions using **Framer Motion**
- Clean and modern UI components

---

### 🔍 SEO Optimization

- SEO-friendly page structure
- Separate landing page for each service
- Optimized headings (H1, H2, etc.)
- `robots.txt` and `sitemap.xml` included
- Ready for meta tags (Helmet)

---

## 🛠️ Tech Stack

### Frontend

- **React 18**
- **Vite**
- **React Router DOM**

### Styling

- **Tailwind CSS**
- **tailwind-merge**
- **clsx**

### UI Libraries

- **Radix UI**
- **Lucide React Icons**

### Animations

- **Framer Motion**

### Utilities

- Custom utility functions (`lib/utils.js`)

---

## 📂 Project Structure

```bash
src/
│
├── components/
│   ├── services/                # Sections used inside service pages
│   │   ├── ArticleSection.jsx
│   │   ├── CTASection.jsx
│   │   ├── FeatureSection.jsx
│   │   ├── RelatedServices.jsx
│   │   └── ServiceHero.jsx
│   │
│   └── ui/                      # Global reusable components
│       ├── Navbar.jsx
│       ├── Footer.jsx
│       └── WhatsAppFloat.jsx
│
├── pages/
│   ├── services/                # SEO landing pages per service
│   │   ├── LeakDetectionPage.jsx
│   │   ├── HeaterInstallationPage.jsx
│   │   ├── DrainCleaningPage.jsx
│   │   ├── PipeRepairPage.jsx
│   │   ├── FaucetInstallationPage.jsx
│   │   └── MaintenancePage.jsx
│   │
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── ServicesPage.jsx
│   ├── ContactPage.jsx
│   ├── TestimonialsPage.jsx
│   └── SitemapPage.jsx
│
├── lib/
│   └── utils.js
│
├── App.jsx                      # Routing logic
├── main.jsx                     # App entry point
├── index.css                   # Global styles
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/sabbak-alriyadh.git
```

### 2️⃣ Navigate to Project

```bash
cd sabbak-alriyadh
```

### 3️⃣ Install Dependencies

```bash
yarn install
```

or

```bash
npm install
```

---

### 4️⃣ Start Development Server

```bash
yarn dev
```

App will run on:

```bash
http://localhost:5173
```

---

## 🏗️ Build for Production

```bash
yarn build
```

Preview production build:

```bash
yarn preview
```

---

## 📞 Contact & Integration

- 📱 Phone: **+966 56 087 7272**
- 💬 WhatsApp:

  ```
  https://wa.me/966560877272
  ```

- 📍 Location: Riyadh, Saudi Arabia

---

## 📈 SEO Strategy

This project is designed with **local SEO in mind**:

- Each service has its own dedicated page
- Keyword-focused titles (e.g., _Best Plumber in Riyadh_)
- Internal linking between services
- Structured content hierarchy
- Sitemap & robots configuration

---

## 💡 Conversion Optimization

- Prominent CTA buttons
- Minimal navigation friction
- Trust signals (testimonials)
- Fast load time (critical for ads)

---

## 🔥 Future Enhancements

- [ ] Admin dashboard for managing leads
- [ ] Backend API integration
- [ ] Form submission with email/CRM
- [ ] Google Maps embed
- [ ] Multi-language support (Arabic / English)
- [ ] Blog system for SEO growth

---

## 🧪 Best Practices Used

- Component-based architecture
- Reusable UI system
- Clean folder structure
- Separation of concerns
- Scalable design patterns

---

## 👨‍💻 Author

**Eng. Rabea Shaban**
Frontend Developer (React.js | Next.js)

- 🌐 Portfolio: [https://rabea-shaban.com](https://rabea-shaban.com)
- 💼 LinkedIn: [https://linkedin.com/in/rabea-sh-elzayat](https://linkedin.com/in/rabea-sh-elzayat)
- 📧 Email: [rabea.elzayate@gmail.com](mailto:rabea.elzayate@gmail.com)
- 📱 Phone: +201156807072

---

## 📄 License

This project is built for client use.
For reuse, customization, or commercial licensing, please contact the author.

---

## ⭐ Support

If you found this project useful:

- ⭐ Star the repository
- 🔁 Share it
- 💬 Contact for collaboration
