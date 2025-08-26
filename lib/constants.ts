export const SITE_CONFIG = {
  name: 'Refrane',
  title: 'Refrane - Intelligent Solutions for Modern Business',
  description: 'Transform your business with AI-powered automation, streamlining operations and accelerating growth through cutting-edge technology.',
  url: 'https://refrane.com',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/refrane',
    linkedin: 'https://linkedin.com/company/refrane',
    github: 'https://github.com/refrane'
  }
}

export const NAVIGATION_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' }
]

export const SERVICES = [
  {
    id: 'workflow-automation',
    icon: '🤖',
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks and streamline your business processes with our intelligent automation solutions.',
    features: [
      'Data entry automation',
      'Report generation',
      'Email management',
      'Task scheduling'
    ]
  },
  {
    id: 'ai-analytics',
    icon: '📊',
    title: 'AI Analytics',
    description: 'Gain deep insights from your data with advanced AI-powered analytics and predictive modeling.',
    features: [
      'Predictive analytics',
      'Customer behavior analysis',
      'Performance metrics',
      'Real-time dashboards'
    ]
  },
  {
    id: 'growth-acceleration',
    icon: '🚀',
    title: 'Growth Acceleration',
    description: 'Scale your business with AI-driven lead generation, personalized outreach, and automated content creation.',
    features: [
      'Lead generation',
      'Content automation',
      'Sales optimization',
      'Market analysis'
    ]
  }
]

export const PROCESS_STEPS = [
  {
    number: 1,
    title: 'Strategic Analysis',
    description: 'We assess your needs and identify AI solutions to streamline workflows and improve efficiency.'
  },
  {
    number: 2,
    title: 'AI Development',
    description: 'Our team builds intelligent automation systems tailored to your business processes.'
  },
  {
    number: 3,
    title: 'Implementation',
    description: 'We deploy and integrate solutions seamlessly, ensuring smooth adoption across your organization.'
  },
  {
    number: 4,
    title: 'Optimization',
    description: 'Continuous monitoring and improvement to maximize ROI and business impact.'
  }
]

export const STATS = [
  { number: '500+', label: 'Businesses Transformed' },
  { number: '95%', label: 'Client Satisfaction' },
  { number: '10M+', label: 'Tasks Automated' },
  { number: '3x', label: 'Average ROI' }
]

export const FLOATING_BADGES = [
  {
    id: 'workflow',
    title: 'Workflow Automation',
    subtitle: '500+ Tasks Automated',
    position: 'top-20 left-10'
  },
  {
    id: 'analytics',
    title: 'AI Analytics',
    subtitle: 'Real-time Insights',
    position: 'top-30 right-10'
  }
]