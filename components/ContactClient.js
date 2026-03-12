"use client";

import { useState } from "react";
import "../styles/forms.css";

const hours = [
  { day: "Monday", time: "8:00 AM – 11:00 PM" },
  { day: "Tuesday", time: "8:00 AM – 11:00 PM" },
  { day: "Wednesday", time: "8:00 AM – 11:00 PM" },
  { day: "Thursday", time: "8:00 AM – 11:00 PM" },
  { day: "Friday", time: "8:00 AM – 11:00 PM" },
  { day: "Saturday", time: "8:00 AM – 11:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="form-page">
      <div className="container">
        <div className="contact-hero">
          <div className="section-label">Get In Touch</div>
          <h1 className="section-title">
            CONTACT
            <br />
            <span>US</span>
          </h1>
          <p className="section-subtitle">
            Questions, feedback, or ready to start? We&apos;re here for all of
            it.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-info-block">
              <div className="section-label" style={{ marginBottom: "8px" }}>
                Our Location
              </div>

              {[
                {
                  icon: "📍",
                  label: "Address",
                  value:
                    "Sandeep Fitness Gym, 1675 E/2, Govindpuri Extension, Kalkaji, New Delhi, Delhi 110019",
                  sub: "Ground floor",
                },
                {
                  icon: "📞",
                  label: "Phone",
                  value: "+91 9990586994",
                  sub: "Mon–Fri, 8AM–8PM EST",
                },
                {
                  icon: "✉",
                  label: "Email",
                  value: "ashmeetsinghkalsi.dev@gmail.com",
                  sub: "Response within 24 hours",
                },
              ].map((item) => (
                <div key={item.label} className="contact-info-item">
                  <div className="contact-info-icon">{item.icon}</div>
                  <div>
                    <div className="contact-info-label">{item.label}</div>
                    <div
                      className="contact-info-value"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {item.value}
                    </div>
                    <div className="contact-info-sub">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="section-label" style={{ marginBottom: "16px" }}>
                Opening Hours
              </div>
              <div className="hours-table">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className={`hours-row ${h.today ? "today" : ""}`}
                  >
                    <span className="hours-day">
                      {h.day}
                      {h.today ? " (Today)" : ""}
                    </span>
                    <span className="hours-time">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="contact-social-title">Follow Us</div>
              <div className="contact-socials">
                {[
                  {
                    icon: "/socialApps/whatsapp.png",
                    label: "Whatsapp",
                    link: "https://wa.me/9990586994",
                  },
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
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    aria-label={s.label}
                  >
                    <img src={s.icon} alt={s.label} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="contact-social-title">Find Us</div>
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56082.82210290116!2d77.18920111656189!3d28.53441768460988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce371e60fb6e9%3A0x6c137951116c72a4!2sSandeep%20Fitness%20Gym!5e0!3m2!1sen!2sin!4v1773337688385!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IRONFORGE Location"
                />
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div style={{ textAlign: "center", padding: "60px 0" }}>
                <div
                  style={{
                    fontSize: "52px",
                    marginBottom: "24px",
                    color: "var(--gold)",
                  }}
                >
                  ✓
                </div>
                <h2
                  className="contact-form-title"
                  style={{ marginBottom: "16px" }}
                >
                  Message Sent!
                </h2>
                <p
                  style={{
                    color: "var(--white-dim)",
                    lineHeight: "1.8",
                    marginBottom: "32px",
                  }}
                >
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
                <button
                  className="btn-primary"
                  onClick={() => setSubmitted(false)}
                  style={{ display: "inline-flex" }}
                >
                  <span>Send Another</span>
                </button>
              </div>
            ) : (
              <>
                <h2 className="contact-form-title">Send a Message</h2>
                <p className="contact-form-subtitle">
                  We read every message and respond within 24 hours.
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        className="form-input"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input
                        className="form-input"
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone *</label>
                    <input
                      className="form-input"
                      type="tel"
                      name="phone"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <select
                      className="form-select"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="trial">Request a Trial</option>
                      <option value="coaching">Personal Training</option>
                      <option value="corporate">Corporate Wellness</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      className="form-textarea"
                      name="message"
                      placeholder="How can we help you? Be as specific as you like..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{ minHeight: "200px" }}
                    />
                  </div>

                  <button type="submit" className="btn-primary form-submit">
                    <span>Send Message</span>
                    <span>→</span>
                  </button>

                  <p className="form-note">
                    By submitting this form, you agree to our Privacy Policy.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}