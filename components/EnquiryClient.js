'use client';

import { useState } from 'react';
import Image from 'next/image';
import '../styles/forms.css';

export default function EnquiryClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    goal: '',
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
      <div className="enquiry-page">
        {/* Left panel */}
        <div className="enquiry-left">
          <Image
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=85"
            alt="IRONFORGE Training"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="enquiry-left-overlay">
            <div className="enquiry-left-content">
              <div className="enquiry-left-label">Begin Your Transformation</div>
              <h1 className="enquiry-left-title">
                YOUR<br /><span>STORY</span><br />STARTS<br />HERE
              </h1>
              <p className="enquiry-left-text">
                Take the first step. Our team will reach out within 24 hours to craft 
                a personalized plan built around your goals.
              </p>
              <div className="enquiry-highlights">
                {[
                  { icon: '⚡', text: 'Free fitness assessment on joining' },
                  { icon: '🏆', text: 'Matched with your ideal coach' },
                  { icon: '📋', text: 'No-commitment consultation' },
                  { icon: '✓', text: '14-day satisfaction guarantee' },
                ].map((h) => (
                  <div key={h.text} className="enquiry-highlight">
                    <div className="enquiry-highlight-icon">{h.icon}</div>
                    <span className="enquiry-highlight-text">{h.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="enquiry-right">
          <div className="enquiry-form-wrap">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '52px', marginBottom: '24px' }}>✓</div>
                <h2 className="enquiry-form-title" style={{ marginBottom: '16px' }}>
                  We Got It!
                </h2>
                <p style={{ color: 'var(--white-dim)', lineHeight: '1.8', marginBottom: '32px' }}>
                  Thank you for reaching out. A member of the IRONFORGE team will 
                  contact you within 24 hours to discuss your goals.
                </p>
                <button
                  className="btn-primary"
                  onClick={() => setSubmitted(false)}
                  style={{ display: 'inline-flex' }}
                >
                  <span>Submit Another</span>
                </button>
              </div>
            ) : (
              <>
                <h2 className="enquiry-form-title">Enquire Now</h2>
                <p className="enquiry-form-subtitle">
                  Fill in your details and we&apos;ll be in touch within 24 hours.
                </p>

                <form className="enquiry-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        className="form-input"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input
                        className="form-input"
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Membership Plan</label>
                      <select
                        className="form-select"
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                      >
                        <option value="">Select a plan</option>
                        <option value="challenger">Challenger — $89/mo</option>
                        <option value="elite">Elite — $149/mo</option>
                        <option value="apex">Apex — $249/mo</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Primary Goal</label>
                      <select
                        className="form-select"
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                      >
                        <option value="">Select a goal</option>
                        <option value="strength">Build Strength</option>
                        <option value="fat-loss">Fat Loss</option>
                        <option value="performance">Athletic Performance</option>
                        <option value="wellness">General Wellness</option>
                        <option value="body-comp">Body Composition</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-textarea"
                      name="message"
                      placeholder="Tell us about your fitness background, goals, and any questions you have..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn-primary form-submit">
                    <span>Send Enquiry</span>
                    <span>→</span>
                  </button>

                  <p className="form-note">
                    We respect your privacy. Your information will never be shared with third parties.
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
