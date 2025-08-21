import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3, 
  Clock, 
  Zap, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Globe,
  Lightbulb,
  Rocket
} from 'lucide-react';
import { cn } from '@/utils';

export interface FeaturesProps {
  className?: string;
}

function Features({ className }: FeaturesProps) {
  const [activeTab, setActiveTab] = useState<'business' | 'recruite'>('business');

  const businessFeatures = [
    {
      icon: TrendingUp,
      title: 'Strategic Growth Planning',
      description: 'Comprehensive growth strategies tailored to your startup\'s unique challenges and market position.',
      benefits: ['Market Analysis', 'Competitive Intelligence', 'Growth Roadmapping', 'KPI Definition']
    },
    {
      icon: Target,
      title: 'Go-to-Market Strategy',
      description: 'Launch products successfully with proven methodologies that accelerate market penetration.',
      benefits: ['Market Positioning', 'Customer Segmentation', 'Pricing Strategy', 'Launch Planning']
    },
    {
      icon: Users,
      title: 'Team & Culture Scaling',
      description: 'Build high-performing teams and sustainable culture that supports rapid growth.',
      benefits: ['Hiring Strategy', 'Culture Design', 'Leadership Development', 'Team Optimization']
    },
    {
      icon: BarChart3,
      title: 'Revenue Optimization',
      description: 'Identify and capitalize on revenue opportunities while optimizing existing streams.',
      benefits: ['Revenue Analysis', 'Pricing Optimization', 'Sales Process', 'Customer Retention']
    },
    {
      icon: Globe,
      title: 'Partnership Development',
      description: 'Strategic partnerships that open new markets and accelerate growth.',
      benefits: ['Partner Identification', 'Deal Structure', 'Relationship Management', 'Joint Ventures']
    },
    {
      icon: Rocket,
      title: 'Operational Excellence',
      description: 'Streamline operations to support scale without sacrificing quality or culture.',
      benefits: ['Process Optimization', 'System Integration', 'Quality Assurance', 'Performance Metrics']
    }
  ];

  const recruiteFeatures = [
    {
      icon: Users,
      title: 'Intelligent Candidate Pipeline',
      description: 'Automated candidate tracking with AI-powered scoring and intelligent matching.',
      benefits: ['Auto-scoring', 'Smart Matching', 'Pipeline Management', 'Candidate Insights']
    },
    {
      icon: Clock,
      title: 'Workflow Automation',
      description: 'Eliminate manual tasks with intelligent automation that handles routine processes.',
      benefits: ['Email Automation', 'Interview Scheduling', 'Status Updates', 'Reminder Systems']
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Data-driven insights to optimize your hiring process and improve outcomes.',
      benefits: ['Hiring Metrics', 'Performance Analytics', 'Time-to-Hire', 'Cost Analysis']
    },
    {
      icon: Zap,
      title: 'Real-time Collaboration',
      description: 'Seamless team collaboration with real-time updates and communication tools.',
      benefits: ['Team Chat', 'Live Updates', 'Shared Notes', 'Decision Tracking']
    },
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Ensure regulatory compliance with built-in checks and audit trails.',
      benefits: ['GDPR Compliance', 'Audit Trails', 'Data Security', 'Privacy Controls']
    },
    {
      icon: Target,
      title: 'Integration Ecosystem',
      description: 'Connect with your favorite tools through our extensive integration library.',
      benefits: ['ATS Integration', 'Calendar Sync', 'Email Providers', 'Custom APIs']
    }
  ];

  const currentFeatures = activeTab === 'business' ? businessFeatures : recruiteFeatures;

  return (
    <section className={cn('py-24 bg-gradient-to-b from-white to-mist-50/30', className)}>
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
              Everything You Need to
              <span className="block text-primary">Scale & Succeed</span>
            </h2>
            <p className="text-xl text-mist-600 max-w-3xl mx-auto">
              Whether you're scaling your business or streamlining your hiring process, 
              we provide comprehensive solutions that drive real results.
            </p>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-2 shadow-lg border border-mist-200">
            <button
              onClick={() => setActiveTab('business')}
              className={cn(
                'px-8 py-4 rounded-full text-base font-medium transition-all duration-300',
                activeTab === 'business'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-mist-600 hover:text-charcoal'
              )}
            >
              Business Development
            </button>
            <button
              onClick={() => setActiveTab('recruite')}
              className={cn(
                'px-8 py-4 rounded-full text-base font-medium transition-all duration-300',
                activeTab === 'recruite'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-mist-600 hover:text-charcoal'
              )}
            >
              Recruite Flow OS
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-mist-100 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-charcoal mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-mist-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-mist-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12">
            <Lightbulb className="h-12 w-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
              Ready to Transform Your {activeTab === 'business' ? 'Business' : 'Hiring Process'}?
            </h3>
            <p className="text-lg text-mist-600 mb-8 max-w-2xl mx-auto">
              {activeTab === 'business' 
                ? 'Let\'s discuss how our strategic approach can accelerate your growth and unlock your full potential.'
                : 'Experience the power of intelligent recruitment automation and streamline your hiring workflow.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg"
              >
                {activeTab === 'business' ? 'Book Consultation' : 'Start Free Trial'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/10 transition-colors"
              >
                {activeTab === 'business' ? 'View Case Studies' : 'See Demo'}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { Features };