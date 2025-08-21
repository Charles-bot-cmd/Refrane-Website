import { useEffect } from 'react';
import { Hero } from '@/components/organisms/Hero';
import { Features } from '@/components/organisms/Features';
import { HowItWorks } from '@/components/organisms/HowItWorks';
import { Testimonials } from '@/components/organisms/Testimonials';
import { ContactForm } from '@/components/organisms/ContactForm';
import { Button } from '@/components/atoms/Button';
import { AnalyticsService } from '@/services';

export function HomePage() {
  useEffect(() => {
    AnalyticsService.trackPageView('/');
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <Features />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-mist/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-mist-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful companies that have scaled with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => window.location.href = '/business-development'}>
              Explore Business Development
            </Button>
            <Button variant="secondary" size="lg" onClick={() => window.location.href = '/recruite-flow'}>
              Discover Recruite Flow OS
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Let's Start a Conversation
            </h2>
            <p className="text-lg text-mist-600 max-w-2xl mx-auto">
              Tell us about your challenges and we'll show you how we can help.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}