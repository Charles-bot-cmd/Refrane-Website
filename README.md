# Refrane Website - Modern AI Business Solutions Platform

A cutting-edge, responsive web application built with Next.js 14+, TypeScript, and Tailwind CSS. This project showcases modern web development practices with a focus on performance, accessibility, and user experience.

## 🚀 Features

### Core Features
- **Next.js 14+ App Router** - Latest Next.js with modern routing
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS** - Utility-first CSS with custom design system
- **Framer Motion** - Smooth animations and micro-interactions
- **Radix UI** - Accessible component primitives
- **Zustand** - Lightweight state management
- **Responsive Design** - Mobile-first approach with perfect scaling

### UI/UX Features
- **Dark/Light Theme Support** - System preference detection
- **Glass Morphism Design** - Modern glassmorphic UI elements
- **Gradient Animations** - Dynamic gradient backgrounds
- **Particle System** - Interactive particle animations
- **Smooth Scroll** - Seamless navigation between sections
- **Loading States** - Skeleton loaders and spinners
- **Error Boundaries** - Graceful error handling

### Performance & SEO
- **Lighthouse 90+** - Optimized for Core Web Vitals
- **Code Splitting** - Automatic bundle optimization
- **Image Optimization** - Next.js Image component integration
- **SEO Optimized** - Complete meta tags and Open Graph
- **Accessibility (WCAG AA)** - Screen reader and keyboard navigation support

### Sections
- **Hero Section** - Animated landing with floating badges
- **Services Section** - Interactive service cards with hover effects
- **Process Section** - Step-by-step process visualization
- **Stats Section** - Animated counter statistics
- **CTA Section** - Call-to-action with trust indicators
- **Navigation** - Responsive header with mobile menu
- **Footer** - Clean footer with social links

## 🛠️ Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **State Management**: Zustand
- **Build Tool**: Next.js built-in
- **Deployment**: Vercel-ready

## 📦 Project Structure

```
refrane-website/
├── app/                     # Next.js App Router
│   ├── globals.css         # Global styles and CSS variables
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── loading.tsx         # Loading UI
│   ├── error.tsx           # Error boundary
│   └── not-found.tsx       # 404 page
├── components/             # React components
│   ├── ui/                 # Base UI components
│   │   ├── button.tsx      # Button variants
│   │   ├── card.tsx        # Card components
│   │   ├── badge.tsx       # Badge variants
│   │   └── loading.tsx     # Loading components
│   ├── layout/             # Layout components
│   │   ├── Navigation.tsx  # Main navigation
│   │   └── Footer.tsx      # Site footer
│   ├── sections/           # Page sections
│   │   ├── HeroSection.tsx     # Hero landing
│   │   ├── ServicesSection.tsx # Services showcase
│   │   ├── ProcessSection.tsx  # Process steps
│   │   ├── StatsSection.tsx    # Statistics
│   │   └── CTASection.tsx      # Call to action
│   └── common/             # Shared components
│       └── ErrorBoundary.tsx   # Error boundary
├── lib/                    # Utilities and configuration
│   ├── utils.ts            # Utility functions
│   ├── constants.ts        # App constants
│   ├── metadata.ts         # SEO metadata
│   ├── store.ts            # Zustand stores
│   └── hooks/              # Custom hooks
│       └── useAccessibility.ts # A11y utilities
├── public/                 # Static assets
├── styles/                 # Additional styles
└── next.config.js          # Next.js configuration
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd refrane-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript compiler
```

## 🎨 Design System

### Color Palette
- **Primary**: `hsl(271 81% 56%)` - Purple gradient
- **Accent**: `hsl(330 81% 60%)` - Pink accent
- **Background**: `hsl(0 0% 4%)` - Dark background
- **Foreground**: `hsl(0 0% 100%)` - White text
- **Muted**: `hsl(0 0% 64%)` - Muted text

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: 800 font weight, gradient text effects
- **Body**: 400 font weight, optimized line height
- **Code**: Monospace for statistics and technical content

### Components
- **Buttons**: Multiple variants with hover animations
- **Cards**: Glass morphism with gradient borders
- **Badges**: Glow effects and animated dots
- **Navigation**: Sticky header with backdrop blur

## ♿ Accessibility Features

- **WCAG AA Compliant** - Color contrast and text sizing
- **Keyboard Navigation** - Full keyboard accessibility
- **Screen Reader Support** - Proper ARIA labels and landmarks
- **Focus Management** - Visible focus indicators
- **Reduced Motion** - Respects user motion preferences
- **High Contrast** - Adapts to system preferences

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific settings:

```env
NEXT_PUBLIC_SITE_URL=https://refrane.com
NEXT_PUBLIC_GTM_ID=your-gtm-id
```

### Customization
- **Colors**: Modify `app/globals.css` CSS variables
- **Content**: Update `lib/constants.ts` for site content
- **Metadata**: Customize `lib/metadata.ts` for SEO
- **Animations**: Adjust Framer Motion settings in components

## 📈 Performance

### Optimization Features
- **Code Splitting** - Automatic route-based splitting
- **Image Optimization** - Next.js Image component
- **Bundle Analysis** - Use `npm run build` to analyze
- **Caching** - Optimized caching strategies
- **Critical CSS** - Inline critical styles

### Performance Metrics
- **First Contentful Paint** < 1.8s
- **Largest Contentful Paint** < 2.5s
- **Time to Interactive** < 3.5s
- **Cumulative Layout Shift** < 0.1
- **First Input Delay** < 100ms

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub/GitLab/Bitbucket
2. Import project in Vercel dashboard
3. Configure environment variables
4. Deploy automatically on push

### Other Platforms
- **Netlify**: Use `npm run build` output
- **AWS Amplify**: Configure build settings
- **Docker**: Create Dockerfile with Node.js base

## 📊 Browser Support

- **Modern Browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **Mobile**: iOS Safari 14+, Chrome Mobile 88+
- **Features**: CSS Grid, Flexbox, CSS Custom Properties
- **Fallbacks**: Graceful degradation for older browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - Amazing React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives
- **Lucide** - Beautiful icon library

---

**Built with ❤️ for the future of AI business solutions**