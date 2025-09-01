export function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="logo">
          <div className="logo-icon">R</div>
          REFRANE
        </div>
        <ul className="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div style={{color: 'var(--gray-light)'}}>
          © 2025 Refrane. All rights reserved.
        </div>
      </div>
    </footer>
  )
}