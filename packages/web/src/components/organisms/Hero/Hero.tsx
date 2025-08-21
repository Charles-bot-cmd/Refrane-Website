import { useState } from 'react';
import { ArrowRight, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { ToggleSwitch } from '@/components/molecules/ToggleSwitch';
import { cn } from '@/utils';
import { motion } from 'framer-motion';

export interface HeroProps {
  className?: string;
}

function Hero({ className }: HeroProps) {
  const [isRecruiteFlow, setIsRecruiteFlow] = useState(false);
  
  const dynamicContent = {
    business: {
      problemStatement: 'Growing a business is hard',
      description: 'Strategic business development that transforms startups into scalable enterprises. We provide the expertise and methodologies to accelerate your growth journey.',
      features: [
        { icon: TrendingUp, title: 'Revenue Growth', desc: 'Proven strategies that drive real results' },
        { icon: Users, title: 'Team Scaling', desc: 'Build high-performing teams that deliver' },
        { icon: ArrowRight, title: 'Market Entry', desc: 'Accelerate your path to market leadership' }
      ],
      stats: [
        { value: '300%', label: 'Average Revenue Growth' },
        { value: '50+', label: 'Startups Scaled' },
        { value: '24M+', label: 'Revenue Generated' }
      ]
    },
    recruite: {
      problemStatement: 'Hiring is chaos',
      description: 'Recruite Flow OS eliminates recruitment chaos with intelligent automation. Track candidates, streamline workflows, and make data-driven hiring decisions.',
      features: [
        { icon: Users, title: 'Candidate Pipeline', desc: 'Organized, automated candidate tracking' },
        { icon: TrendingUp, title: 'Analytics Dashboard', desc: 'Data-driven hiring insights' },
        { icon: ArrowRight, title: 'Workflow Automation', desc: 'Streamline every step of hiring' }
      ],
      stats: [
        { value: '75%', label: 'Time Saved' },
        { value: '200+', label: 'Companies Using' },
        { value: '10x', label: 'Faster Hiring' }
      ]
    }
  };
  
  const current = isRecruiteFlow ? dynamicContent.recruite : dynamicContent.business;
  
  return (
    <section className={cn('relative min-h-screen flex items-center', className)}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-mist/5 -z-10" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {/* Unified Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-charcoal mb-6">
              We Scale Businesses
              <span className="block text-primary">& Streamline Their Growth</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-mist-600 mb-12 max-w-4xl mx-auto">
              Partner with us for strategic business development or eliminate recruitment chaos 
              with Recruite Flow OS. Choose your path to accelerated growth.
            </p>
            
            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button size="xl" className="group text-lg px-8 py-4">
                Scale My Business
                <TrendingUp className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="secondary" size="xl" className="group text-lg px-8 py-4">
                Try Recruite Flow OS
                <Users className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Problem/Solution Toggle Section */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center space-x-6 bg-white rounded-full p-2 shadow-lg border border-mist-200">
              <button
                onClick={() => setIsRecruiteFlow(false)}
                className={cn(
                  'px-6 py-3 rounded-full text-sm font-medium transition-all duration-300',
                  !isRecruiteFlow 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-mist-600 hover:text-charcoal'
                )}
              >
                Growing a business is hard
              </button>
              <button
                onClick={() => setIsRecruiteFlow(true)}
                className={cn(
                  'px-6 py-3 rounded-full text-sm font-medium transition-all duration-300',
                  isRecruiteFlow 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-mist-600 hover:text-charcoal'
                )}
              >
                Hiring is chaos
              </button>
            </div>
          </div>

          {/* Dynamic Content */}
          <motion.div
            key={isRecruiteFlow ? 'recruite' : 'business'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Content Side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                {current.problemStatement}
              </h2>
              
              <p className="text-lg text-mist-600 mb-8">
                {current.description}
              </p>
              
              {/* Features Grid */}
              <div className="grid gap-6 mb-8">
                {current.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">{feature.title}</h3>
                      <p className="text-mist-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {current.stats.map((stat, index) => (
                  <motion.div
                    key={`${isRecruiteFlow}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-mist-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Animated Background Blob */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-3xl animate-pulse" />
              
              {/* Main Visual */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
                {!isRecruiteFlow ? (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <TrendingUp className="h-8 w-8 text-primary" />
                      <Badge variant="success">Active</Badge>
                    </div>
                    <div className="space-y-4">
                      <div className="h-4 bg-gradient-to-r from-primary to-primary/60 rounded-full" />
                      <div className="h-4 bg-gradient-to-r from-primary/60 to-primary/30 rounded-full w-4/5" />
                      <div className="h-4 bg-gradient-to-r from-primary/30 to-primary/10 rounded-full w-3/5" />
                    </div>
                    <div className="pt-4 border-t border-mist-200">
                      <div className="text-3xl font-bold text-charcoal">+284%</div>
                      <div className="text-sm text-mist-600">Revenue Growth</div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <Users className="h-8 w-8 text-primary" />
                      <Badge variant="success">Automated</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-mist-50 rounded-lg p-4">
                          <div className="h-2 bg-primary/30 rounded-full mb-2" />
                          <div className="h-2 bg-mist-300 rounded-full w-3/4" />
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-mist-200">
                      <div className="text-3xl font-bold text-charcoal">75%</div>
                      <div className="text-sm text-mist-600">Time Saved</div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 bg-primary text-white rounded-full p-3 shadow-lg"
              >
                <ArrowRight className="h-6 w-6" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export { Hero };