export function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="section-header">
        <h2 className="section-title">AI Solutions That Transform<br/>Your Business Operations</h2>
        <p className="section-description">
          We design, develop, and implement intelligent tools that help you work 
          smarter, not harder. Unlock the full potential of your business.
        </p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">⚡</div>
          <h3 className="service-title">Workflow Automation</h3>
          <p className="service-description">
            Automate repetitive tasks and streamline your business processes 
            with our intelligent automation solutions.
          </p>
          <ul className="service-features">
            <li>Data entry automation</li>
            <li>Report generation</li>
            <li>Email management</li>
            <li>Task scheduling</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">🧠</div>
          <h3 className="service-title">AI Analytics</h3>
          <p className="service-description">
            Gain deep insights from your data with advanced AI-powered 
            analytics and predictive modeling.
          </p>
          <ul className="service-features">
            <li>Predictive analytics</li>
            <li>Customer behavior analysis</li>
            <li>Performance metrics</li>
            <li>Real-time dashboards</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">💎</div>
          <h3 className="service-title">Growth Acceleration</h3>
          <p className="service-description">
            Scale your business with AI-driven lead generation, personalized 
            outreach, and automated content creation.
          </p>
          <ul className="service-features">
            <li>Lead generation</li>
            <li>Content automation</li>
            <li>Sales optimization</li>
            <li>Market analysis</li>
          </ul>
        </div>
      </div>
    </section>
  )
}