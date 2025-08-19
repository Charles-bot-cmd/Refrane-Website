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
  
  const content = {
    business: {
      badge: 'Business Development',
      title: 'We Scale Businesses',
      subtitle: 'Through Strategic Growth',
      description: 'Partner with us to unlock your startup\'s full potential. We provide strategic business development that drives real revenue growth.',
      cta: 'Scale My Business',
      ctaLink: '/business-development',
      stats: [
        { value: '300%', label: 'Average Revenue Growth' },
        { value: '50+', label: 'Startups Scaled' },
        { value: '2.5x', label: 'Faster Market Entry' }
      ]
    },
    recruite: {
      badge: 'Recruite Flow OS',
      title: 'Streamline Your Hiring',
      subtitle: 'With Smart Automation',
      description: 'Eliminate recruitment chaos with our intelligent operating system. Track, manage, and optimize your entire hiring process in one place.',
      cta: 'Try Recruite Flow',
      ctaLink: '/recruite-flow',
      stats: [
        { value: '75%', label: 'Time Saved' },
        { value: '200+', label: 'HR Teams Using' },
        { value: '10x', label: 'Faster Hiring' }
      ]
    }
  };
  
  const current = isRecruiteFlow ? content.recruite : content.business;
  
  return (
    <section className={cn('relative min-h-screen flex items-center', className)}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-mist/5 -z-10" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            key={isRecruiteFlow ? 'recruite' : 'business'}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Toggle Switch */}
            <div className="mb-8">
              <div className="flex items-center space-x-4">
                <span className={cn(
                  'text-sm font-medium transition-colors',
                  !isRecruiteFlow ? 'text-charcoal' : 'text-mist-500'
                )}>
                  Growing a business is hard
                </span>
                <ToggleSwitch
                  checked={isRecruiteFlow}
                  onCheckedChange={setIsRecruiteFlow}
                />
                <span className={cn(
                  'text-sm font-medium transition-colors',
                  isRecruiteFlow ? 'text-charcoal' : 'text-mist-500'
                )}>
                  Hiring is chaos
                </span>
              </div>
            </div>
            
            {/* Badge */}
            <Badge variant="default" className="mb-4">
              {current.badge}
            </Badge>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
              {current.title}
              <span className="block text-primary mt-2">{current.subtitle}</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg text-mist-600 mb-8 max-w-xl">
              {current.description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="group">
                {current.cta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {current.stats.map((stat, index) => (
                <motion.div
                  key={`${isRecruiteFlow}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-mist-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
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
        </div>
      </div>
    </section>
  );
}

export { Hero };