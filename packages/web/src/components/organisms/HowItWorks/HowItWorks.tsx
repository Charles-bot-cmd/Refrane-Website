import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Calendar, 
  Users, 
  BarChart3, 
  Rocket,
  ArrowRight,
  Play
} from 'lucide-react';
import { cn } from '@/utils';

export interface HowItWorksProps {
  className?: string;
}

function HowItWorks({ className }: HowItWorksProps) {
  const [activeProcess, setActiveProcess] = useState<'business' | 'recruite'>('business');

  const businessProcess = [
    {
      step: 1,
      icon: MessageCircle,
      title: 'Discovery & Strategy',
      description: 'Deep-dive consultation to understand your business, challenges, and growth objectives.',
      details: [
        'Business assessment and audit',
        'Market opportunity analysis',
        'Competitive landscape review',
        'Growth goal definition'
      ],
      timeline: '1-2 weeks'
    },
    {
      step: 2,
      icon: Target,
      title: 'Custom Roadmap',
      description: 'Tailored growth strategy with clear milestones and actionable steps.',
      details: [
        'Strategic roadmap creation',
        'Priority initiative identification',
        'Resource requirement planning',
        'Success metrics definition'
      ],
      timeline: '2-3 weeks'
    },
    {
      step: 3,
      icon: Rocket,
      title: 'Implementation',
      description: 'Hands-on execution support with ongoing guidance and optimization.',
      details: [
        'Strategic initiative execution',
        'Team coaching and training',
        'Process optimization',
        'Performance monitoring'
      ],
      timeline: '3-6 months'
    },
    {
      step: 4,
      icon: TrendingUp,
      title: 'Scale & Optimize',
      description: 'Continuous improvement and scaling based on results and market feedback.',
      details: [
        'Results analysis and reporting',
        'Strategy refinement',
        'Scaling preparation',
        'Long-term partnership'
      ],
      timeline: 'Ongoing'
    }
  ];

  const recruiteProcess = [
    {
      step: 1,
      icon: Calendar,
      title: 'Quick Setup',
      description: 'Get started in minutes with our intuitive onboarding process.',
      details: [
        'Account creation and setup',
        'Team member invitations',
        'Integration configuration',
        'Workflow customization'
      ],
      timeline: '15 minutes'
    },
    {
      step: 2,
      icon: Users,
      title: 'Import & Organize',
      description: 'Import your existing candidates and create organized pipelines.',
      details: [
        'Candidate data import',
        'Pipeline structure setup',
        'Job posting creation',
        'Team role assignment'
      ],
      timeline: '1-2 hours'
    },
    {
      step: 3,
      icon: BarChart3,
      title: 'Automate & Track',
      description: 'Let AI handle routine tasks while you focus on strategic decisions.',
      details: [
        'Automated candidate scoring',
        'Smart email sequences',
        'Interview scheduling',
        'Progress tracking'
      ],
      timeline: 'Immediate'
    },
    {
      step: 4,
      icon: CheckCircle,
      title: 'Hire Better',
      description: 'Make data-driven decisions with comprehensive analytics and insights.',
      details: [
        'Performance analytics',
        'Hiring metrics tracking',
        'Team collaboration',
        'Continuous optimization'
      ],
      timeline: 'Ongoing'
    }
  ];

  const currentProcess = activeProcess === 'business' ? businessProcess : recruiteProcess;

  return (
    <section className={cn('py-24 bg-white', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              How We Drive
              <span className="block text-primary">Real Results</span>
            </h2>
            <p className="text-xl text-mist-600 max-w-3xl mx-auto">
              Our proven methodologies have helped hundreds of companies achieve 
              their growth objectives. Here's how we make it happen.
            </p>
          </motion.div>
        </div>

        {/* Process Toggle */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-mist-50 rounded-full p-2">
            <button
              onClick={() => setActiveProcess('business')}
              className={cn(
                'px-8 py-4 rounded-full text-base font-medium transition-all duration-300',
                activeProcess === 'business'
                  ? 'bg-white text-charcoal shadow-sm'
                  : 'text-mist-600 hover:text-charcoal'
              )}
            >
              Business Development Process
            </button>
            <button
              onClick={() => setActiveProcess('recruite')}
              className={cn(
                'px-8 py-4 rounded-full text-base font-medium transition-all duration-300',
                activeProcess === 'recruite'
                  ? 'bg-white text-charcoal shadow-sm'
                  : 'text-mist-600 hover:text-charcoal'
              )}
            >
              Recruite Flow OS Setup
            </button>
          </div>
        </div>

        {/* Process Steps */}
        <motion.div
          key={activeProcess}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-px h-full w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-16">
            {currentProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={cn(
                  'relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center',
                  index % 2 === 1 && 'lg:direction-reverse'
                )}
              >
                {/* Step Number Circle */}
                <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  {step.step}
                </div>

                {/* Content */}
                <div className={cn(
                  'relative',
                  index % 2 === 1 && 'lg:order-2'
                )}>
                  <div className="bg-gradient-to-br from-white to-mist-50/50 rounded-3xl p-8 shadow-sm border border-mist-100">
                    {/* Mobile Step Number */}
                    <div className="lg:hidden w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-6">
                      {step.step}
                    </div>

                    {/* Icon and Timeline */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-mist-500 uppercase tracking-wide">Timeline</div>
                        <div className="text-primary font-semibold">{step.timeline}</div>
                      </div>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-2xl font-bold text-charcoal mb-4">{step.title}</h3>
                    <p className="text-mist-600 mb-6">{step.description}</p>

                    {/* Details */}
                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-mist-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className={cn(
                  'relative',
                  index % 2 === 1 && 'lg:order-1'
                )}>
                  <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
                    {/* Placeholder Visual - would be replaced with actual screenshots/graphics */}
                    <div className="aspect-square bg-white rounded-xl shadow-lg p-6 flex items-center justify-center">
                      <div className="text-center">
                        <step.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                        <div className="text-sm text-mist-500">Step {step.step} Visual</div>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-pulse" />
                    <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-primary/20 rounded-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-charcoal via-charcoal/95 to-charcoal rounded-3xl p-12 text-white">
            <Play className="h-12 w-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              See Our Process in Action
            </h3>
            <p className="text-xl text-mist-300 mb-8 max-w-2xl mx-auto">
              {activeProcess === 'business' 
                ? 'Watch how we\'ve helped startups achieve 10x growth using our proven methodology.'
                : 'See how Recruite Flow OS transforms chaotic hiring into streamlined success.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                {activeProcess === 'business' ? 'Schedule Consultation' : 'Start Free Trial'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { HowItWorks };