import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { cn } from '@shared/utils';

export interface FooterProps {
  className?: string;
}

function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    services: [
      { label: 'Business Development', to: '/business-development' },
      { label: 'Strategic Consulting', to: '/business-development#consulting' },
      { label: 'Market Entry', to: '/business-development#market-entry' },
      { label: 'Partnership Development', to: '/business-development#partnerships' }
    ],
    product: [
      { label: 'Recruite Flow OS', to: '/recruite-flow' },
      { label: 'Features', to: '/recruite-flow#features' },
      { label: 'Pricing', to: '/recruite-flow#pricing' },
      { label: 'Demo', to: '/recruite-flow#demo' }
    ],
    company: [
      { label: 'About Us', to: '/about' },
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Contact', to: '/contact' },
      { label: 'Careers', to: '/careers' }
    ],
    legal: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
      { label: 'Cookie Policy', to: '/cookies' }
    ]
  };
  
  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/refrane', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/refrane', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/refrane', label: 'GitHub' }
  ];
  
  return (
    <footer className={cn('bg-charcoal-900 text-white', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="text-2xl font-bold text-primary">R</div>
                <span className="text-xl font-semibold text-white">Refrane</span>
              </Link>
              <p className="text-mist-300 mb-6">
                We scale businesses and streamline their growth through strategic development and innovative tools.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:hello@refrane.com"
                  className="flex items-center space-x-2 text-mist-300 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>hello@refrane.com</span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 text-mist-300 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>+1 (234) 567-890</span>
                </a>
                <div className="flex items-center space-x-2 text-mist-300">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
            
            {/* Services Links */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-mist-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Product Links */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-mist-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-mist-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Legal Links */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-mist-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-charcoal-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-mist-400 text-sm">
              © {currentYear} Refrane. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mist-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };