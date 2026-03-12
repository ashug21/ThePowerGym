import Link from 'next/link';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand-logo">IRON<span>FORGE</span></div>
            <div className="footer-brand-tagline">Elite Fitness</div>
            <p className="footer-brand-desc">
              Where champions are forged. Premium training environments, 
              world-class coaching, and a community that pushes you beyond limits.
            </p>
            <div className="footer-social">
              {[
                { icon: '𝕏', label: 'Twitter' },
                { icon: 'in', label: 'Instagram' },
                { icon: '▶', label: 'YouTube' },
                { icon: 'f', label: 'Facebook' },
              ].map((s) => (
                <a key={s.label} href="#" className="footer-social-link" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="footer-col-title">Navigate</div>
            <ul className="footer-links">
              {[
                { href: '/', label: 'Home' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/enquiry', label: 'Enquiry' },
                { href: '/contact', label: 'Contact Us' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <div className="footer-col-title">Programs</div>
            <ul className="footer-links">
              {['Personal Training', 'Group Classes', 'Strength & Conditioning', 'Yoga & Recovery', 'Nutrition Coaching'].map((p) => (
                <li key={p}>
                  <a href="#">{p}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-col-title">Contact</div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">📍</div>
              <div className="footer-contact-text">
                14 Prestige Avenue, Suite 300<br />
                New York, NY 10001
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">📞</div>
              <div className="footer-contact-text">+1 (800) IRONFORGE</div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">✉</div>
              <div className="footer-contact-text">elite@ironforge.com</div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">🕐</div>
              <div className="footer-contact-text">
                Mon–Fri: 5AM – 11PM<br />
                Sat–Sun: 6AM – 10PM
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-text">
            © 2024 IRONFORGE Elite Fitness. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
