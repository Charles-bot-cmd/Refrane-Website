import { supabase } from './supabase';
import { DemoRequest, DemoRequestFormData } from '@shared/types';

export class DemoService {
  /**
   * Submit a demo request (Phase 1: Store to DB, no Calendly yet)
   */
  static async submitDemoRequest(data: DemoRequestFormData): Promise<DemoRequest> {
    // Create user profile if needed
    let user_id: string | undefined;
    
    // Check if user exists
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('email', data.email)
      .single();
    
    if (!existingUser) {
      // Create user profile
      const { data: newUser, error: userError } = await supabase
        .from('users')
        .insert({
          email: data.email,
          full_name: data.name,
          company: data.company,
          role: 'Unknown' // We don't collect role in demo form
        })
        .select('id')
        .single();
      
      if (!userError && newUser) {
        user_id = newUser.id;
      }
    } else {
      user_id = existingUser.id;
    }

    const requestData = {
      user_id,
      request_type: data.request_type,
      company_size: data.company_size,
      current_ats: data.current_ats,
      pain_points: data.pain_points,
      status: 'pending' as const
    };

    const { data: request, error } = await supabase
      .from('demo_requests')
      .insert(requestData)
      .select()
      .single();
    
    if (error) {
      console.error('Demo request error:', error);
      throw new Error('Failed to submit demo request. Please try again.');
    }
    
    // Phase 1: Just log for now, Phase 2: Integrate with Calendly
    console.log('📅 Demo request received:', request.id);
    
    return request;
  }

  /**
   * Get demo requests (admin only - for later)
   */
  static async getRequests(): Promise<DemoRequest[]> {
    const { data, error } = await supabase
      .from('demo_requests')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching demo requests:', error);
      throw new Error('Failed to fetch demo requests');
    }
    
    return data || [];
  }
}