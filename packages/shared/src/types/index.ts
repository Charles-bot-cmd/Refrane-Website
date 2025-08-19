// Core shared types for Refrane website

export interface User {
  id: string;
  email: string;
  full_name: string;
  company: string;
  role: string;
  phone?: string;
  created_at: Date;
  updated_at: Date;
}

export interface ContactSubmission {
  id: string;
  user_id?: string;
  service_type: 'business_development' | 'recruite_flow';
  name: string;
  email: string;
  company: string;
  message: string;
  status: 'new' | 'contacted' | 'qualified' | 'closed';
  created_at: Date;
}

export interface DemoRequest {
  id: string;
  user_id?: string;
  request_type: 'demo' | 'early_access';
  company_size: string;
  current_ats: string;
  pain_points: string;
  scheduled_date?: Date;
  status: 'pending' | 'scheduled' | 'completed' | 'no_show';
  created_at: Date;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metrics: Array<{
      label: string;
      value: string;
      improvement?: string;
    }>;
    testimonial?: string;
  };
  service_type: 'business_development' | 'recruite_flow';
  featured: boolean;
  published: boolean;
  created_at: Date;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  service_type: 'business_development' | 'recruite_flow';
}

export interface DemoRequestFormData {
  name: string;
  email: string;
  company: string;
  company_size: string;
  current_ats: string;
  pain_points: string;
  request_type: 'demo' | 'early_access';
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  error?: string;
  success: boolean;
}

export interface ApiError {
  error: {
    code: string;
    message: string;
    details?: Record<string, any>;
    timestamp: string;
    requestId: string;
  };
}

// UI Component types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface CardProps {
  variant?: 'default' | 'elevated' | 'interactive' | 'feature';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// Navigation types
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface MenuItem extends NavLink {
  children?: NavLink[];
}

// Analytics types
export interface AnalyticsEvent {
  event: string;
  properties: Record<string, any>;
  userId?: string;
  timestamp?: Date;
}

export type ServiceType = 'business_development' | 'recruite_flow';