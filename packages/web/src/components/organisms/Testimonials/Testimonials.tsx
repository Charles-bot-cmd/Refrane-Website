import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, TrendingUp, Users } from 'lucide-react';
import { cn } from '@/utils';

export interface TestimonialsProps {
  className?: string;
}

interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  quote: string;
  results: {
    metric: string;
    value: string;
    description: string;
  };
  category: 'business' | 'recruite';
  rating: number;
}

function Testimonials({ className }: TestimonialsProps) {
  const [activeCategory, setActiveCategory] = useState<'business' | 'recruite'>('business');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    // Business Development Testimonials
    {
      id: '1',
      name: 'Sarah Chen',
      title: 'CEO & Founder',
      company: 'TechFlow Solutions',
      avatar: '/api/placeholder/80/80',
      quote: 'Refrane transformed our approach to growth. Their strategic insights helped us scale from $2M to $8M ARR in just 18 months. The team\'s expertise in market positioning and operational excellence was game-changing.',
      results: {
        metric: '300%',
        value: 'Revenue Growth',
        description: 'In 18 months'
      },
      category: 'business',
      rating: 5
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      title: 'Co-Founder',
      company: 'GreenTech Innovations',
      avatar: '/api/placeholder/80/80',
      quote: 'The partnership development strategy Refrane created opened doors we didn\'t even know existed. We now have strategic partnerships with three Fortune 500 companies, driving 40% of our revenue.',
      results: {
        metric: '40%',
        value: 'Partnership Revenue',
        description: 'From new channels'
      },
      category: 'business',
      rating: 5
    },
    {
      id: '3',
      name: 'Emily Watson',
      title: 'Founder',
      company: 'DataSync Pro',
      avatar: '/api/placeholder/80/80',
      quote: 'Refrane\'s go-to-market strategy was spot-on. They helped us identify our ideal customer segments and craft messaging that resonates. Our customer acquisition cost dropped by 60% while conversion rates doubled.',
      results: {
        metric: '60%',
        value: 'Lower CAC',
        description: '2x conversion rate'
      },
      category: 'business',
      rating: 5
    },
    // Recruite Flow OS Testimonials
    {
      id: '4',
      name: 'David Park',
      title: 'Head of People',
      company: 'Scale Ventures',
      avatar: '/api/placeholder/80/80',
      quote: 'Recruite Flow OS eliminated the chaos in our hiring process. What used to take weeks of back-and-forth now happens automatically. We\'ve reduced time-to-hire by 75% while improving candidate quality.',
      results: {
        metric: '75%',
        value: 'Faster Hiring',
        description: 'Better candidates'
      },
      category: 'recruite',
      rating: 5
    },
    {
      id: '5',
      name: 'Lisa Thompson',
      title: 'Talent Acquisition Manager',
      company: 'CloudFirst Inc',
      avatar: '/api/placeholder/80/80',
      quote: 'The AI-powered candidate matching is incredible. Recruite Flow OS surfaces candidates I would have missed and ranks them accurately. Our hire success rate improved by 90% in the first quarter.',
      results: {
        metric: '90%',
        value: 'Better Matches',
        description: 'Higher success rate'
      },
      category: 'recruite',
      rating: 5
    },
    {
      id: '6',
      name: 'James Mitchell',
      title: 'HR Director',
      company: 'Growth Labs',
      avatar: '/api/placeholder/80/80',
      quote: 'Managing multiple hiring pipelines was a nightmare before Recruite Flow OS. Now everything is organized, automated, and transparent. Our team collaboration improved dramatically, and we never lose track of candidates.',
      results: {
        metric: '100%',
        value: 'Pipeline Visibility',
        description: 'Zero lost candidates'
      },
      category: 'recruite',
      rating: 5
    }
  ];

  const filteredTestimonials = testimonials.filter(t => t.category === activeCategory);

  useEffect(() => {
    setCurrentTestimonial(0);
  }, [activeCategory]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === filteredTestimonials.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [filteredTestimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === filteredTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1
    );
  };

  const current = filteredTestimonials[currentTestimonial];

  if (!current) return null;

  return (
    <section className={cn('py-24 bg-gradient-to-b from-mist-50/50 to-white', className)}>
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
              Trusted by
              <span className="block text-primary">Growth Leaders</span>
            </h2>
            <p className="text-xl text-mist-600 max-w-3xl mx-auto">
              See how companies like yours have transformed their growth trajectory 
              with our strategic guidance and innovative solutions.
            </p>
          </motion.div>
        </div>

        {/* Category Toggle */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white rounded-full p-2 shadow-lg border border-mist-200">
            <button
              onClick={() => setActiveCategory('business')}
              className={cn(
                'px-8 py-4 rounded-full text-base font-medium transition-all duration-300',
                activeCategory === 'business'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-mist-600 hover:text-charcoal'
              )}
            >
              Business Development
            </button>
            <button
              onClick={() => setActiveCategory('recruite')}
              className={cn(
                'px-8 py-4 rounded-full text-base font-medium transition-all duration-300',
                activeCategory === 'recruite'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-mist-600 hover:text-charcoal'
              )}
            >
              Recruite Flow OS
            </button>
          </div>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${currentTestimonial}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Testimonial Content */}
                <div className="relative">
                  {/* Quote Icon */}
                  <Quote className="h-16 w-16 text-primary/20 mb-8" />
                  
                  {/* Stars */}
                  <div className="flex space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-5 w-5 text-yellow-400 fill-current" 
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-charcoal leading-relaxed mb-8">
                    "{current.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-mist-200 rounded-full flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-primary font-bold text-xl">
                        {current.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal text-lg">
                        {current.name}
                      </div>
                      <div className="text-mist-600">
                        {current.title}, {current.company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results Card */}
                <div className="relative">
                  <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-mist-100 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                    
                    <div className="relative">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-8">
                        {activeCategory === 'business' ? 
                          <TrendingUp className="h-8 w-8 text-primary" /> :
                          <Users className="h-8 w-8 text-primary" />
                        }
                      </div>

                      {/* Main Metric */}
                      <div className="text-center mb-8">
                        <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">
                          {current.results.metric}
                        </div>
                        <div className="text-2xl font-semibold text-charcoal mb-2">
                          {current.results.value}
                        </div>
                        <div className="text-mist-600">
                          {current.results.description}
                        </div>
                      </div>

                      {/* Company Badge */}
                      <div className="text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-mist-50 rounded-full text-sm text-mist-600">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                          {current.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center mt-12 space-x-4">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-white rounded-full shadow-lg border border-mist-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="flex space-x-2">
            {filteredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={cn(
                  'w-3 h-3 rounded-full transition-all duration-300',
                  index === currentTestimonial
                    ? 'bg-primary w-8'
                    : 'bg-mist-300 hover:bg-mist-400'
                )}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-white rounded-full shadow-lg border border-mist-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-charcoal via-charcoal/95 to-charcoal rounded-3xl p-8 lg:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {activeCategory === 'business' ? '150+' : '500+'}
              </div>
              <div className="text-white/80">
                {activeCategory === 'business' ? 'Companies Scaled' : 'Teams Using Platform'}
              </div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {activeCategory === 'business' ? '$250M+' : '75%'}
              </div>
              <div className="text-white/80">
                {activeCategory === 'business' ? 'Revenue Generated' : 'Average Time Saved'}
              </div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {activeCategory === 'business' ? '4.9★' : '4.8★'}
              </div>
              <div className="text-white/80">Customer Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { Testimonials };