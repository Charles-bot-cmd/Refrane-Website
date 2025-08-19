# Refrane Website

Modern website for Refrane business development agency and Recruite Flow OS product.

## 🏗️ Architecture

- **Frontend:** React 18 + Vite + TypeScript
- **Backend:** Supabase (PostgreSQL + Auth + Storage + Edge Functions)
- **Styling:** Tailwind CSS with custom design system
- **State:** Zustand + TanStack Query
- **Structure:** npm workspaces monorepo

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm 9+
- Git

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Edit .env.local with your values
# For Phase 1: Just use placeholder values

# Start development server
npm run dev
```

### Development Commands

```bash
# Start frontend development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 📁 Project Structure

```
refrane-website/
├── packages/
│   ├── web/                 # React frontend
│   │   ├── src/
│   │   │   ├── components/  # UI components (atoms/molecules/organisms)
│   │   │   ├── pages/       # Page components
│   │   │   ├── services/    # API services
│   │   │   ├── hooks/       # Custom hooks
│   │   │   └── utils/       # Utilities
│   │   └── package.json
│   └── shared/              # Shared types and utilities
│       ├── src/
│       │   ├── types/       # TypeScript interfaces
│       │   ├── constants/   # Shared constants
│       │   └── utils/       # Shared utilities
│       └── package.json
├── docs/                    # Project documentation
│   ├── prd.md
│   ├── front-end-spec.md
│   └── architecture.md
└── package.json
```

## 🎨 Design System

### Brand Colors

- **Primary Blue:** `#0080FF`
- **Charcoal Gray:** `#1A1A1A`
- **White:** `#FFFFFF`
- **Mist Gray:** `#A0ACB8`

### Typography

- **Logo:** Opensauce Semi-Bold
- **Headlines:** Migra
- **Body:** TT Ramillas

## 🔄 Development Phases

### Phase 1: Team Showcase (Current)
- ✅ Complete website with all UI/UX functionality
- ✅ Contact forms saving to Supabase
- ✅ Demo requests captured (no live booking)
- ✅ Full responsive design and animations
- ✅ Analytics logging to console

### Phase 2: Live Integrations (Post-showcase)
- 📧 SendGrid email notifications
- 📅 Calendly live booking
- 📊 Google Analytics tracking
- 🔍 Production monitoring

## 🛠️ Epic Progress

- ✅ **Epic 1:** Foundation & Core Infrastructure
- ⏳ **Epic 2:** Homepage & Navigation (Next)
- ⏳ **Epic 3:** Service Pages & Content
- ⏳ **Epic 4:** Conversion & Contact Systems
- ⏳ **Epic 5:** Polish & Launch

## 🔧 Configuration

### Environment Variables

Required for Phase 1:
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key

### Supabase Setup

1. Create Supabase project
2. Run database migrations (coming in Epic 1)
3. Update environment variables
4. Test connection

## 📈 Analytics (Phase 1)

Currently logs events to browser console:
- Page views
- Button clicks
- Form submissions
- CTA interactions
- Toggle interactions

## 🧪 Testing

- **Unit Tests:** Vitest + React Testing Library
- **E2E Tests:** Playwright
- **Linting:** ESLint + Prettier

## 🚀 Deployment

- **Frontend:** Vercel/Netlify
- **Backend:** Supabase Cloud
- **CI/CD:** GitHub Actions

## 📝 Documentation

See `/docs` folder for:
- Product Requirements Document (PRD)
- UI/UX Specifications
- Technical Architecture
- PO Validation Report

## 🤝 Contributing

1. Follow Epic/Story structure from PRD
2. Use atomic design for components
3. Implement TypeScript strictly
4. Follow accessibility guidelines (WCAG AA)
5. Test on multiple devices

## 📄 License

MIT License - see LICENSE file for details.

---

**Built with ❤️ by the Refrane team**