'use client';

import { useState } from 'react';
import '../styles/forms.css';

const hours = [
  { day: 'Monday', time: '5:00 AM – 11:00 PM' },
  { day: 'Tuesday', time: '5:00 AM – 11:00 PM' },
  { day: 'Wednesday', time: '5:00 AM – 11:00 PM', today: true },
  { day: 'Thursday', time: '5:00 AM – 11:00 PM' },
  { day: 'Friday', time: '5:00 AM – 11:00 PM' },
  { day: 'Saturday', time: '6:00 AM – 10:00 PM' },
  { day: 'Sunday', time: '6:00 AM – 10:00 PM' },
];

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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
            CONTACT<br /><span>US</span>
          </h1>
          <p className="section-subtitle">
            Questions, feedback, or ready to start? We&apos;re here for all of it.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Info */}
          <div className="contact-info">
            <div className="contact-info-block">
              <div className="section-label" style={{ marginBottom: '8px' }}>Our Location</div>

              {[
                {
                  icon: '📍',
                  label: 'Address',
                  value: '14 Prestige Avenue, Suite 300\nNew York, NY 10001',
                  sub: 'Ground & 2nd floor',
                },
                {
                  icon: '📞',
                  label: 'Phone',
                  value: '+1 (800) IRONFORGE',
                  sub: 'Mon–Fri, 8AM–8PM EST',
                },
                {
                  icon: '✉',
                  label: 'Email',
                  value: 'elite@ironforge.com',
                  sub: 'Response within 24 hours',
                },
              ].map((item) => (
                <div key={item.label} className="contact-info-item">
                  <div className="contact-info-icon">{item.icon}</div>
                  <div>
                    <div className="contact-info-label">{item.label}</div>
                    <div className="contact-info-value" style={{ whiteSpace: 'pre-line' }}>
                      {item.value}
                    </div>
                    <div className="contact-info-sub">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div>
              <div className="section-label" style={{ marginBottom: '16px' }}>Opening Hours</div>
              <div className="hours-table">
                {hours.map((h) => (
                  <div key={h.day} className={`hours-row ${h.today ? 'today' : ''}`}>
                    <span className="hours-day">{h.day}{h.today ? ' (Today)' : ''}</span>
                    <span className="hours-time">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <div className="contact-social-title">Follow Us</div>
              <div className="contact-socials">
                {[
                  { icon: '𝕏', label: 'Twitter' },
                  { icon: 'IG', label: 'Instagram' },
                  { icon: '▶', label: 'YouTube' },
                  { icon: 'in', label: 'LinkedIn' },
                  { icon: 'f', label: 'Facebook' },
                ].map((s) => (
                  <a key={s.label} href="#" className="contact-social-link" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="contact-social-title">Find Us</div>
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598053!2d-73.9882395!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca05ca48ab5e0e1!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1700000000000"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IRONFORGE Location"
                />
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div style={{ fontSize: '52px', marginBottom: '24px', color: 'var(--gold)' }}>✓</div>
                <h2 className="contact-form-title" style={{ marginBottom: '16px' }}>Message Sent!</h2>
                <p style={{ color: 'var(--white-dim)', lineHeight: '1.8', marginBottom: '32px' }}>
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  className="btn-primary"
                  onClick={() => setSubmitted(false)}
                  style={{ display: 'inline-flex' }}
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
                      style={{ minHeight: '200px' }}
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
