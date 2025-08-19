# Refrane Website Product Requirements Document (PRD)

## Goals and Background Context

### Goals
- Launch a modern, sleek website for Refrane that effectively communicates both business development services and the Recruite Flow OS product
- Establish Refrane as a trusted partner for scaling startups and scale-ups through strategic business development
- Successfully introduce and showcase Recruite Flow OS as the first of Refrane's SaaS products
- Drive conversions through dual pathways: business development consultations and Recruite Flow OS trials/demos
- Achieve 90+ PageSpeed score while maintaining beautiful, interactive user experience

### Background Context
Refrane is evolving from a pure business development agency into a hybrid model that combines strategic consulting with innovative SaaS products. The company helps startups and scale-ups increase profitability through strategic business development while also developing tools that eliminate operational chaos. Recruite Flow OS, their first SaaS product, addresses the critical pain point of messy recruitment tracking and time wasted on manual tasks. This website must serve as the digital front door for both offerings, providing clear pathways for different user segments while maintaining a cohesive brand experience.

### Change Log
| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2025-08-15 | 1.0 | Initial PRD creation from brainstorm | PM Agent |
| 2025-08-15 | 1.1 | Updated to use React instead of Next.js | PM Agent |

## Requirements

### Functional
- FR1: The website shall feature a unified hero section with dual value proposition - "We Scale Businesses & Streamline Their Growth" with two distinct CTAs
- FR2: The homepage shall implement an interactive problem/solution toggle that switches between "Growing a business is hard" (Refrane) and "Hiring is chaos" (Recruite Flow)
- FR3: The system shall provide dedicated landing pages for /business-development and /recruite-flow-os with deep-dive content
- FR4: The website shall display dynamic case studies and success metrics relevant to the selected problem/solution context
- FR5: The Recruite Flow OS section shall include interactive product tour, feature demonstrations, and pricing information
- FR6: The website shall implement dual conversion paths with appropriate tracking for "Scale My Business" and "Try Recruite Flow OS" CTAs
- FR7: The system shall provide a unified contact/booking system that routes inquiries to appropriate teams based on interest
- FR8: The website shall maintain consistent branding while allowing for sub-brand differentiation between Refrane and Recruite Flow OS

### Non Functional
- NFR1: The website shall achieve a PageSpeed score of 90+ on both mobile and desktop
- NFR2: The website shall meet WCAG 2.1 AA accessibility standards across all pages
- NFR3: All pages shall load within 2 seconds on 4G mobile connections
- NFR4: The website shall be fully SEO optimized with proper meta tags, structured data, and sitemap
- NFR5: The system shall integrate with analytics platforms (GA4, Hotjar, or similar) for conversion tracking
- NFR6: The website shall be built using React with TypeScript for type safety

## User Interface Design Goals

### Overall UX Vision
Create a sophisticated, modern interface that seamlessly blends professional business consulting aesthetics with cutting-edge SaaS product design. The experience should feel premium yet approachable, using smooth animations and micro-interactions to guide users through their journey.

### Key Interaction Paradigms
- **Smart Content Switching**: Interactive toggle that transforms content based on user's primary need (business scaling vs recruitment)
- **Progressive Disclosure**: Reveal deeper information as users show interest, avoiding overwhelming first-time visitors
- **Dual-Track Navigation**: Clear pathways that allow users to explore either service without losing context
- **Visual Storytelling**: Use of icons, animations, and visual metaphors to explain complex concepts simply

### Core Screens and Views
- Homepage with unified hero and smart routing
- Business Development landing page with services, approach, and case studies
- Recruite Flow OS product page with tour, features, and pricing
- About page showcasing team and company values
- Contact/Booking page with smart routing based on interest
- Case Studies/Success Stories gallery
- Resources/Blog section (future consideration)

### Accessibility: WCAG AA
Full compliance with WCAG 2.1 AA standards including keyboard navigation, screen reader support, and proper contrast ratios.

### Branding
- **Primary Blue (#0080FF)**: Used for CTAs, links, and primary brand elements
- **Charcoal Gray (#1A1A1A)**: Primary text and headers
- **White (#FFFFFF)**: Backgrounds and reverse text
- **Mist Gray (#A0ACB8)**: Secondary text and subtle UI elements
- **Typography**: Opensauce Semi-Bold for logos, Migra for headers, TT Ramillas for body text
- **Voice**: Professional yet friendly, inspirational, energetic, smooth, stylish, exclusive, authentic, with subtle cheekiness

### Target Device and Platforms: Web Responsive
Full responsive design optimized for desktop (1920x1080), tablet (768px), and mobile (375px) breakpoints with fluid scaling between.

## Technical Assumptions

### Repository Structure: Monorepo
Single repository containing all website code, components, and assets for easier maintenance and deployment.

### Service Architecture
Modern SPA architecture with:
- **Frontend**: React 18+ with TypeScript for type-safe component development
- **Routing**: React Router v6 for client-side navigation
- **Styling**: Tailwind CSS for utility-first styling with custom design system
- **State Management**: Zustand or Context API for global state
- **Backend**: Supabase for authentication, database, and real-time features
- **API Layer**: Supabase client SDK for data fetching and mutations
- **Hosting**: Vercel or Netlify for optimized static site hosting
- **Build Tool**: Vite for fast development and optimized production builds

### Testing Requirements
- Unit tests for utility functions and custom hooks using Vitest
- Component testing with React Testing Library
- Integration tests for Supabase interactions
- E2E tests for critical user journeys (booking flow, trial signup) with Playwright
- Visual regression testing for component library
- Accessibility testing automated in CI/CD

### Additional Technical Assumptions and Requests
- Implement React Error Boundaries for graceful error handling
- Use React Query/TanStack Query for data fetching with Supabase
- Implement React Helmet or similar for SEO meta tag management
- Set up monitoring with Sentry for error tracking
- Use GitHub Actions for CI/CD pipeline
- Implement proper security headers and CSP policies
- Set up staging environment for client review before production
- Use React.lazy() and Suspense for code splitting
- Implement service worker for offline capabilities and caching

## Epic List

1. **Epic 1: Foundation & Core Infrastructure** - Establish React project with routing, design system, and basic pages structure
2. **Epic 2: Homepage & Navigation** - Build unified hero, smart content switching, and core navigation experience
3. **Epic 3: Service Pages & Content** - Create dedicated pages for business development and Recruite Flow OS with full content
4. **Epic 4: Conversion & Contact Systems** - Implement booking, trial signup, and contact forms with proper routing
5. **Epic 5: Polish & Launch** - Add animations, optimize performance, conduct testing, and deploy to production

## Epic 1: Foundation & Core Infrastructure

**Goal**: Establish the React project foundation with proper tooling, design system implementation, and basic page structure. This epic delivers a fully deployed skeleton application with proper CI/CD, allowing stakeholders to see progress from day one.

### Story 1.1: Project Setup & Configuration
As a developer,
I want to set up the React project with proper tooling and configuration,
so that the team has a solid foundation for development.

**Acceptance Criteria:**
1. React 18+ project initialized with Vite and TypeScript
2. Git repository created with proper .gitignore and branch protection
3. ESLint and Prettier configured with team standards
4. Tailwind CSS installed and configured with custom color palette from brand guidelines
5. Basic folder structure established (components/, lib/, pages/, hooks/, etc.)
6. Environment variables setup for local and production (.env files)
7. README with setup instructions and project overview

### Story 1.2: Supabase Integration & Setup
As a developer,
I want to configure Supabase backend services,
so that we have authentication and database ready.

**Acceptance Criteria:**
1. Supabase project created and configured
2. Database schema designed for contacts, trials, and content
3. Row Level Security (RLS) policies configured
4. Authentication setup with email/password and social providers
5. Supabase client initialized in React app
6. Environment variables for Supabase URL and anon key
7. Type generation setup for TypeScript support

### Story 1.3: Design System Foundation
As a developer,
I want to implement the core design system components,
so that we maintain consistent branding throughout the site.

**Acceptance Criteria:**
1. Typography system implemented using brand fonts (Opensauce, Migra, TT Ramillas)
2. Color tokens created matching brand palette (#0080FF, #1A1A1A, #FFFFFF, #A0ACB8)
3. Basic component library started (Button, Card, Container, Section)
4. Logo components created for both Refrane and Recruite Flow OS
5. Spacing and sizing scales defined in Tailwind config
6. Component documentation with Storybook or similar

### Story 1.4: Routing & Navigation Shell
As a user,
I want to see consistent navigation and layout across all pages,
so that I can easily navigate the website.

**Acceptance Criteria:**
1. React Router v6 configured with all main routes
2. Header component with logo and navigation menu
3. Footer component with links and company information
4. Layout wrapper implementing header/footer on all pages
5. Mobile-responsive hamburger menu with smooth animations
6. Active state styling for current route
7. Smooth scroll behavior for anchor links

### Story 1.5: Deployment & CI/CD Pipeline
As a developer,
I want automated deployment and testing,
so that code quality is maintained and deployments are reliable.

**Acceptance Criteria:**
1. Vercel/Netlify project connected to GitHub repository
2. GitHub Actions workflow for linting, type checking, and tests
3. Preview deployments for pull requests
4. Production deployment on main branch
5. Environment variables configured in hosting platform
6. Basic health check route returning 200 OK
7. Custom domain configured (if available)

## Epic 2: Homepage & Navigation

**Goal**: Build the complete homepage experience with unified hero section, interactive problem/solution toggle, and smart content switching. This delivers the primary user interface that introduces both service offerings.

### Story 2.1: Unified Hero Section
As a visitor,
I want to immediately understand Refrane's dual offering,
so that I can choose the path most relevant to my needs.

**Acceptance Criteria:**
1. Hero section with "We Scale Businesses & Streamline Their Growth" headline
2. Subheading explaining both offerings clearly
3. Two prominent CTAs: "Scale My Business" and "Try Recruite Flow OS"
4. Background animation or visual element enhancing premium feel
5. Responsive layout maintaining impact on mobile
6. CTAs properly tracked with analytics events
7. Lazy-loaded background images for performance

### Story 2.2: Problem/Solution Toggle
As a visitor,
I want to explore solutions based on my specific problem,
so that I see relevant content for my situation.

**Acceptance Criteria:**
1. Interactive toggle component using React state
2. Toggle between "Growing a business is hard" and "Hiring is chaos"
3. Content areas that transform based on selection
4. Smooth animation with Framer Motion or similar
5. Toggle state persists in session storage
6. Default state shows business development content

### Story 2.3: Services/Features Grid
As a visitor,
I want to see key services and features at a glance,
so that I understand the value proposition quickly.

**Acceptance Criteria:**
1. Dynamic grid component that shows relevant services based on toggle selection
2. Icons and brief descriptions for each service/feature
3. Hover effects revealing more detail
4. React Router links to respective landing pages
5. Minimum 3-4 items per context
6. Mobile-optimized card layout with touch interactions

### Story 2.4: Success Metrics Section
As a visitor,
I want to see proof of success,
so that I trust Refrane's capabilities.

**Acceptance Criteria:**
1. Dynamic metrics fetched from Supabase based on selected context
2. Animated number counters using Intersection Observer
3. Brief context for each metric
4. Visually appealing presentation (charts using Recharts or similar)
5. Real data from Supabase or realistic placeholder data
6. Mobile-responsive layout

### Story 2.5: Homepage CTA Sections
As a visitor,
I want clear next steps throughout the page,
so that I can easily take action when ready.

**Acceptance Criteria:**
1. Mid-page CTA section with contextual messaging
2. Bottom-page dual CTA matching hero options
3. Proper spacing and visual hierarchy
4. Consistent button styling from design system
5. All CTAs tracked in analytics (GA4 events)
6. Hover and focus states implemented

## Epic 3: Service Pages & Content

**Goal**: Create comprehensive landing pages for both business development services and Recruite Flow OS product, providing detailed information that converts interested visitors into leads or trial users.

### Story 3.1: Business Development Landing Page
As a startup founder,
I want to understand Refrane's business development services,
so that I can decide if they can help scale my business.

**Acceptance Criteria:**
1. Clear value proposition for business development services
2. "Our Approach" section with methodology explanation
3. Services grid with detailed descriptions
4. Case studies fetched from Supabase
5. Team/expertise credibility section
6. "Book Consultation" CTA throughout page
7. SEO optimization with React Helmet

### Story 3.2: Recruite Flow OS Product Page
As a recruiter or hiring manager,
I want to understand how Recruite Flow OS works,
so that I can evaluate if it solves my recruitment challenges.

**Acceptance Criteria:**
1. Product hero with clear value proposition
2. Interactive product tour component or demo video
3. Key features section with benefits
4. Pricing table component with plan comparison
5. "Start Free Trial" and "Book Demo" CTAs
6. FAQ section with expandable items
7. Integration capabilities highlighted

### Story 3.3: About Page
As a visitor,
I want to learn about Refrane's story and team,
so that I can trust them with my business needs.

**Acceptance Criteria:**
1. Company story and mission/vision
2. Team section with data from Supabase
3. Company values and culture
4. Timeline or milestones component
5. Office/contact information
6. Links to both service offerings
7. Professional photography or illustrations

### Story 3.4: Case Studies Template
As a visitor,
I want to read detailed success stories,
so that I can see real results Refrane has delivered.

**Acceptance Criteria:**
1. Reusable case study component template
2. Challenge/Solution/Results format
3. Client testimonials from Supabase
4. Metrics and data visualization components
5. Industry and company size indicators
6. Related case studies suggestions
7. CTA to contact for similar results

## Epic 4: Conversion & Contact Systems

**Goal**: Implement all conversion mechanisms including forms, booking systems, and trial signups with proper Supabase integration for data handling.

### Story 4.1: Smart Contact Form
As a visitor,
I want to easily contact Refrane with my specific needs,
so that I get routed to the right team.

**Acceptance Criteria:**
1. React Hook Form implementation with validation
2. Service interest selection dropdown
3. Loading states during submission
4. Success confirmation with next steps
5. Data saved to Supabase database
6. Supabase Edge Function for email notifications
7. Accessibility compliant with ARIA labels

### Story 4.2: Consultation Booking System
As a potential client,
I want to book a consultation call,
so that I can discuss my business needs.

**Acceptance Criteria:**
1. Calendar integration (Calendly embed or custom React component)
2. Pre-call questionnaire form
3. Timezone handling with date-fns
4. Booking data stored in Supabase
5. Confirmation email via Supabase Edge Functions
6. Reminder system using Supabase scheduled functions
7. Mobile-responsive booking flow

### Story 4.3: Recruite Flow Trial Signup
As a potential user,
I want to start a free trial quickly,
so that I can test the product.

**Acceptance Criteria:**
1. Streamlined signup form with React Hook Form
2. Supabase Auth email verification
3. User account creation in Supabase
4. Welcome email via Edge Functions
5. Trial period tracking in database
6. Upgrade prompts component
7. Social signup with Supabase Auth (Google/LinkedIn)

### Story 4.4: Analytics & Tracking Implementation
As a marketing team member,
I want to track user behavior and conversions,
so that we can optimize the website performance.

**Acceptance Criteria:**
1. Google Analytics 4 integration with react-ga4
2. Custom hooks for event tracking
3. Form submission tracking
4. Page view tracking with React Router
5. UTM parameter handling
6. Hotjar or Clarity integration
7. Privacy-compliant with cookie consent component

## Epic 5: Polish & Launch

**Goal**: Apply final polish including animations, performance optimization, and thorough testing to ensure a flawless launch experience that represents Refrane's premium brand.

### Story 5.1: Animation & Interactions
As a visitor,
I want smooth, professional animations,
so that the site feels modern and premium.

**Acceptance Criteria:**
1. Page transition animations with Framer Motion
2. Scroll-triggered animations with Intersection Observer
3. Micro-interactions on buttons and links
4. Loading animations for async content
5. Parallax effects using React libraries
6. Reduced motion option for accessibility
7. Performance impact under 10% on PageSpeed

### Story 5.2: Performance Optimization
As a visitor,
I want fast page loads,
so that I have a smooth browsing experience.

**Acceptance Criteria:**
1. PageSpeed score of 90+ achieved
2. Images optimized with lazy loading
3. Code splitting with React.lazy and Suspense
4. Critical CSS extracted and inlined
5. Fonts optimized with font-display
6. Static assets cached with service worker
7. CDN configuration for assets

### Story 5.3: SEO Implementation
As a marketing team member,
I want the website fully SEO optimized,
so that we rank well in search results.

**Acceptance Criteria:**
1. React Helmet for dynamic meta tags
2. Open Graph tags for social sharing
3. Sitemap generation script
4. Robots.txt properly configured
5. Structured data with JSON-LD
6. Canonical URLs implemented
7. 301 redirects configured in hosting platform

### Story 5.4: Cross-Browser & Device Testing
As a visitor,
I want the website to work perfectly on my device,
so that I have a consistent experience.

**Acceptance Criteria:**
1. Tested on Chrome, Safari, Firefox, Edge
2. Mobile tested on iOS and Android
3. Tablet layouts verified
4. Form functionality verified across browsers
5. Animation performance checked on lower-end devices
6. Accessibility tested with screen readers
7. Bug fixes for any discovered issues

### Story 5.5: Launch Preparation
As a stakeholder,
I want a smooth, coordinated launch,
so that the website goes live without issues.

**Acceptance Criteria:**
1. Final content review and sign-off
2. Legal pages added (Privacy, Terms)
3. SSL certificate verified
4. Backup of current site (if applicable)
5. DNS records prepared for switchover
6. Launch communication plan executed
7. Post-launch monitoring with Sentry

## Checklist Results Report

*[This section will be populated after running the pm-checklist]*

## Next Steps

### UX Expert Prompt
"Review this PRD for the Refrane website project and create comprehensive UX architecture including wireframes, user flows, and design specifications that align with the brand guidelines and dual-service model outlined in this document."

### Architect Prompt
"Using this PRD, create the technical architecture document for the Refrane website, detailing the React SPA implementation with Supabase backend, component structure, API design, and deployment strategy that will support both the business development and Recruite Flow OS offerings."