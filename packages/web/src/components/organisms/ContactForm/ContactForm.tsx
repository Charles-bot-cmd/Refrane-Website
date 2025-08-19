import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import { FormField } from '@/components/molecules/FormField';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/molecules/Card';
import { cn } from '@/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name is required'),
  phone: z.string().optional(),
  serviceType: z.enum(['business_development', 'recruite_flow']),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormData = z.infer<typeof contactSchema>;

export interface ContactFormProps {
  className?: string;
  defaultService?: 'business_development' | 'recruite_flow';
  onSubmit?: (data: ContactFormData) => Promise<void>;
}

function ContactForm({ className, defaultService = 'business_development', onSubmit }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      serviceType: defaultService
    }
  });
  
  const handleFormSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        // Default submission logic
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Form submitted:', data);
      }
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (isSuccess) {
    return (
      <Card className={cn('max-w-2xl mx-auto', className)}>
        <CardContent className="py-12 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-charcoal mb-2">Thank You!</h3>
          <p className="text-mist-600">
            We've received your message and will get back to you within 24 hours.
          </p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className={cn('max-w-2xl mx-auto', className)}>
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription>
          Tell us about your needs and we'll help you find the perfect solution.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              label="Full Name"
              required
              error={errors.name?.message}
              {...register('name')}
              placeholder="John Doe"
            />
            
            <FormField
              label="Email"
              type="email"
              required
              error={errors.email?.message}
              {...register('email')}
              placeholder="john@company.com"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              label="Company"
              required
              error={errors.company?.message}
              {...register('company')}
              placeholder="Acme Inc."
            />
            
            <FormField
              label="Phone"
              type="tel"
              error={errors.phone?.message}
              {...register('phone')}
              placeholder="+1 (555) 123-4567"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-charcoal-700 mb-2">
              Service Interest <span className="text-red-500">*</span>
            </label>
            <div className="grid md:grid-cols-2 gap-4">
              <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors">
                <input
                  type="radio"
                  value="business_development"
                  {...register('serviceType')}
                  className="mr-3"
                />
                <div>
                  <div className="font-medium">Business Development</div>
                  <div className="text-sm text-mist-600">Strategic growth consulting</div>
                </div>
              </label>
              
              <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors">
                <input
                  type="radio"
                  value="recruite_flow"
                  {...register('serviceType')}
                  className="mr-3"
                />
                <div>
                  <div className="font-medium">Recruite Flow OS</div>
                  <div className="text-sm text-mist-600">Recruitment automation</div>
                </div>
              </label>
            </div>
            {errors.serviceType && (
              <p className="text-sm text-red-600 mt-1">{errors.serviceType.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-charcoal-700 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register('message')}
              rows={4}
              className={cn(
                'flex w-full rounded-md border bg-white px-3 py-2 text-sm',
                'placeholder:text-mist-500 focus-visible:outline-none focus-visible:ring-2',
                'focus-visible:ring-primary focus-visible:ring-offset-2',
                'disabled:cursor-not-allowed disabled:opacity-50',
                errors.message ? 'border-red-500' : 'border-mist-300 hover:border-mist-400'
              )}
              placeholder="Tell us about your project or requirements..."
            />
            {errors.message && (
              <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>
            )}
          </div>
          
          <Button
            type="submit"
            size="lg"
            className="w-full"
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            {!isSubmitting && <Send className="mr-2 h-4 w-4" />}
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export { ContactForm };