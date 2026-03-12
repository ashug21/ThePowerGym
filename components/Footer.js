import Link from "next/link";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand-logo">
              The Power<span>Gym</span>
            </div>
            <div className="footer-brand-tagline">Elite Fitness</div>
            <p className="footer-brand-desc">
              Where champions are forged. Premium training environments,
              coaching from world class athlete, and a community that pushes you
              beyond limits.
            </p>
            <div className="footer-social">
              {[
                {
                  icon: "/socialApps/instagram.png",
                  label: "Instagram",
                  link: "https://www.instagram.com/joshi_4567/",
                },
                {
                  icon: "/socialApps/youtube.png",
                  label: "YouTube",
                  link: "https://www.youtube.com/@SandeepJoshi99",
                },
                {
                  icon: "/socialApps/whatsapp.png",
                  label: "Whatsapp",
                  link: "https://wa.me/9990586994",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={s.label}
                >
                  <img src={s.icon} alt={s.label} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="footer-col-title">Navigate</div>
            <ul className="footer-links">
              {[
                { href: "/", label: "Home" },
                { href: "/gallery", label: "Gallery" },
                { href: "/enquiry", label: "Enquiry" },
                { href: "/contact", label: "Contact Us" },
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
              {[
                "Personal Training",
                "Group Classes",
                "Strength & Conditioning",
                "Nutrition Coaching",
                "Workout Guidance"
              ].map((p) => (
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
              Sandeep Fitness Gym, 1675 E/2, Govindpuri Extension, Kalkaji, New Delhi, Delhi 110019
                <br />

              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">📞</div>
              <div className="footer-contact-text">+91 9990586994</div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">✉</div>
              <div className="footer-contact-text">ashmeetsinghkalsi.dev@gmail.com</div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">🕐</div>
              <div className="footer-contact-text">
                Mon–Sat: 8AM – 11PM
                <br />
                Sun: Closed
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-text">
            © 2026 The Power Gym. All rights reserved.
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
