import { supabase } from './supabase';
import { ContactSubmission, ContactFormData } from '@shared/types';

export class ContactService {
  /**
   * Submit a contact form (Phase 1: Store to DB, no email yet)
   */
  static async submitContact(data: ContactFormData): Promise<ContactSubmission> {
    const submissionData = {
      service_type: data.service_type,
      name: data.name,
      email: data.email,
      company: data.company,
      message: data.message,
      status: 'new' as const
    };

    const { data: submission, error } = await supabase
      .from('contact_submissions')
      .insert(submissionData)
      .select()
      .single();
    
    if (error) {
      console.error('Contact submission error:', error);
      throw new Error('Failed to submit contact form. Please try again.');
    }
    
    // Phase 1: Just log for now, Phase 2: Send actual email
    console.log('📧 Contact submission received:', submission.id);
    
    return submission;
  }

  /**
   * Get contact submissions (admin only - for later)
   */
  static async getSubmissions(serviceType?: string): Promise<ContactSubmission[]> {
    let query = supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (serviceType) {
      query = query.eq('service_type', serviceType);
    }
    
    const { data, error } = await query;
    
    if (error) {
      console.error('Error fetching submissions:', error);
      throw new Error('Failed to fetch contact submissions');
    }
    
    return data || [];
  }
}