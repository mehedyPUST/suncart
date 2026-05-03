# SunCart - Summer Essentials Store

## Purpose
SunCart is a modern, single-page e-commerce showcase website designed to promote and sell summer essential products. It highlights hot deals, flash sales, new arrivals, and provides valuable summer care tips to engage visitors and drive sales for items like UV protection sunglasses, beach flip flops, and straw hats.

## Live URL
[https://suncart-gamma.vercel.app](https://suncart-gamma.vercel.app)

## Key Features
- **Hero Sections:** Displays current promotions like "Summer Sale - 50% OFF" and "Flash Deals - 70% OFF" with call-to-action buttons.
- **Product Highlights:** Showcases featured products (sunglasses, flip flops, straw hat) with key benefits (e.g., UV protection, non-slip sole).
- **Service Icons:** Lists customer-friendly policies: Free Delivery (on orders over ৳1000), Cash on Delivery, Secure Payment, and Easy Returns (7 days).
- **Summer Wellness Guide:** Provides practical summer care tips (hydration, sun protection, clothing, diet) and a "Daily Hydration Tracker" statistic section.
- **Brand Trust Section:** Displays a scrolling list of trusted brand logos (e.g., SunShade, SunnyWear, ComfortStep) and a customer count (10,000+).
- **Fully Responsive Layout:** Adapts seamlessly to desktop, tablet, and mobile screen sizes.
- **Authentication Ready:** Includes Better Auth setup with MongoDB adapter for user management.
- **Toast Notifications:** Provides user feedback using react-hot-toast.

## NPM Packages Used

### Core Framework
- `next` (16.2.4) - React framework for production
- `react` (19.2.4) - UI library
- `react-dom` (19.2.4) - DOM rendering

### UI Component Libraries
- `@heroui/react` (3.0.3) - Beautiful component library
- `@heroui/badge`, `@heroui/button`, `@heroui/card`, `@heroui/chip`, `@heroui/image` - Individual HeroUI components
- `@heroui/styles` (3.0.3) - HeroUI styling system
- `lucide-react` (1.14.0) - Modern icon set
- `react-icons` (5.6.0) - Popular icon library
- `@gravity-ui/icons` (2.18.0) - Additional icon set
- `animate.css` (4.1.1) - CSS animations

### Authentication & Database
- `better-auth` (1.6.9) - Authentication library
- `@better-auth/mongo-adapter` (1.6.9) - MongoDB adapter for Better Auth
- `mongodb` (7.2.0) - MongoDB driver

### Utilities
- `react-hot-toast` (2.6.0) - Toast notification system

### Styling & Dev Tools
- `tailwindcss` (4) - Utility-first CSS framework
- `@tailwindcss/postcss` (4) - PostCSS plugin for Tailwind
- `eslint` (9) - Code linting
- `eslint-config-next` (16.2.4) - Next.js ESLint configuration

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint