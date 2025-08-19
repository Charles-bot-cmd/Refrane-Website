// Shared constants for Refrane website

export const BRAND_COLORS = {
  primary: '#0080FF',
  charcoal: '#1A1A1A',
  white: '#FFFFFF',
  mist: '#A0ACB8'
} as const;

export const SERVICE_TYPES = {
  BUSINESS_DEVELOPMENT: 'business_development',
  RECRUITE_FLOW: 'recruite_flow'
} as const;

export const CONTACT_STATUS = {
  NEW: 'new',
  CONTACTED: 'contacted',
  QUALIFIED: 'qualified',
  CLOSED: 'closed'
} as const;

export const DEMO_STATUS = {
  PENDING: 'pending',
  SCHEDULED: 'scheduled',
  COMPLETED: 'completed',
  NO_SHOW: 'no_show'
} as const;

export const COMPANY_SIZES = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '500+ employees'
] as const;

export const NAVIGATION_LINKS = [
  {
    label: 'Business Development',
    href: '/business-development'
  },
  {
    label: 'Recruite Flow OS',
    href: '/recruite-flow-os'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
] as const;

export const SOCIAL_LINKS = {
  LINKEDIN: 'https://linkedin.com/company/refrane',
  TWITTER: 'https://twitter.com/refrane'
} as const;

export const ANIMATION_DURATIONS = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 400,
  COUNTER: 1500
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536
} as const;