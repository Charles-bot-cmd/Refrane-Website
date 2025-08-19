import { useEffect } from 'react';
import { Hero } from '@/components/organisms/Hero';
import { ContactForm } from '@/components/organisms/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/molecules/Card';
import { Badge } from '@/components/atoms/Badge';
import { Icon } from '@/components/atoms/Icon';
import { Button } from '@/components/atoms/Button';
import { TrendingUp, Users, Zap, Target, Rocket, Shield } from 'lucide-react';
import { AnalyticsService } from '@/services';

export function HomePage() {
  useEffect(() => {
    AnalyticsService.trackPageView('/');
  }, []);

  const features = [
    {
      icon: TrendingUp,
      title: 'Strategic Growth',
      description: 'Data-driven strategies that accelerate your business growth and market expansion.'
    },
    {
      icon: Users,
      title: 'Smart Recruitment',
      description: 'Streamline your hiring process with our intelligent recruitment operating system.'
    },
    {
      icon: Zap,
      title: 'Fast Implementation',
      description: 'Get results quickly with our proven methodologies and automation tools.'
    },
    {
      icon: Target,
      title: 'Targeted Solutions',
      description: 'Customized approaches tailored to your specific industry and business needs.'
    },
    {
      icon: Rocket,
      title: 'Scale Rapidly',
      description: 'Achieve 3x faster growth with our comprehensive scaling frameworks.'
    },
    {
      icon: Shield,
      title: 'Proven Results',
      description: 'Join 50+ successful startups that have scaled with our expertise.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-mist-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="default" className="mb-4">Why Choose Refrane</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-mist-600 max-w-2xl mx-auto">
              Whether you're scaling your business or optimizing recruitment, we have the tools and expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} variant="interactive" className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon icon={feature.icon} size="lg" color="primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-mist-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
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