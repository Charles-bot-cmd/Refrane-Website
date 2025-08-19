import { AnalyticsEvent } from '@shared/types';

export class AnalyticsService {
  /**
   * Track an event (Phase 1: Console log, Phase 2: GA4)
   */
  static trackEvent(event: string, properties: Record<string, any> = {}): void {
    const analyticsEvent: AnalyticsEvent = {
      event,
      properties,
      timestamp: new Date()
    };
    
    // Phase 1: Console logging for development
    console.log('📊 Analytics Event:', analyticsEvent);
    
    // Phase 2: Will send to GA4
    // gtag('event', event, properties);
  }

  /**
   * Track page view
   */
  static trackPageView(pagePath: string, pageTitle?: string): void {
    this.trackEvent('page_view', {
      page_path: pagePath,
      page_title: pageTitle || document.title
    });
  }

  /**
   * Track button click
   */
  static trackButtonClick(buttonText: string, location: string): void {
    this.trackEvent('button_click', {
      button_text: buttonText,
      location
    });
  }

  /**
   * Track form submission
   */
  static trackFormSubmission(formType: string, success: boolean): void {
    this.trackEvent('form_submission', {
      form_type: formType,
      success
    });
  }

  /**
   * Track CTA interaction
   */
  static trackCTAClick(ctaText: string, service: 'business_development' | 'recruite_flow'): void {
    this.trackEvent('cta_click', {
      cta_text: ctaText,
      service
    });
  }

  /**
   * Track problem/solution toggle
   */
  static trackToggleInteraction(selectedOption: 'business' | 'recruitment'): void {
    this.trackEvent('toggle_interaction', {
      selected_option: selectedOption
    });
  }
}