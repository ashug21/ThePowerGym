"use client";

import Image from "next/image";
import "../styles/forms.css";
import { useState } from "react";
import { toast } from "react-toastify";

export default function EnquiryClient() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [primarygoal, setPrimaryGoal] = useState("");
  const [message, setMessage] = useState("");

  const handleEnquiry = async (e) => {
    e.preventDefault();
  
    const toastId = toast.loading("Sending enquiry...");
  
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          phone,
          primarygoal,
          message,
        }),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        toast.update(toastId, {
          render: "Error sending enquiry",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        return;
      }
  
      toast.update(toastId, {
        render: "Enquiry sent successfully",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
  
      setFullName("");
      setEmail("");
      setPhone("");
      setPrimaryGoal("");
      setMessage("");
    } catch (error) {
      toast.update(toastId, {
        render: "Something went wrong",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      console.log(error);
    }
  };

  return (
    <div>
      <main className="form-page">
        <div className="enquiry-page">
          <div className="enquiry-left">
            <Image
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=85"
              alt="IRONFORGE Training"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="enquiry-left-overlay">
              <div className="enquiry-left-content">
                <div className="enquiry-left-label">
                  Begin Your Transformation
                </div>
                <h1 className="enquiry-left-title">
                  YOUR
                  <br />
                  <span>STORY</span>
                  <br />
                  STARTS
                  <br />
                  HERE
                </h1>

                <p className="enquiry-left-text">
                  Take the first step. Our team will reach out within 24 hours
                  to craft a personalized plan built around your goals.
                </p>

                <div className="enquiry-highlights">
                  {[
                    { icon: "⚡", text: "Free fitness assessment on joining" },
                    { icon: "🏆", text: "Matched with your ideal coach" },
                    { icon: "📋", text: "No-commitment consultation" },
                    { icon: "✓", text: "14-day satisfaction guarantee" },
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

          <div className="enquiry-right">
            <div className="enquiry-form-wrap">
              <h2 className="enquiry-form-title">Enquire Now</h2>

              <p className="enquiry-form-subtitle">
                Fill in your details and we&apos;ll be in touch within 24 hours.
              </p>
              <form className="enquiry-form" onSubmit={handleEnquiry}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      onChange={(e) => setFullName(e.target.value)}
                      value={fullname}
                      className="form-input"
                      type="text"
                      name="full_name"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                      className="form-input"
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Primary Goal</label>
                  <select
                    className="form-select"
                    onChange={(e) => setPrimaryGoal(e.target.value)}
                    value={primarygoal}
                    name="primary_goal"
                  >
                    <option value="">Select a goal</option>
                    <option value="fat-loss">Fat Loss Transformation</option>
                    <option value="muscle-gain">Muscle Gain Program</option>
                    <option value="bodybuilding-prep">
                      Bodybuilding Competition Prep
                    </option>
                    <option value="strength-training">
                      Strength & Fitness Training
                    </option>
                    <option value="online-coaching">
                      Online Personal Coaching
                    </option>
                    <option value="custom-plan">
                      Custom Diet + Workout Plan
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className="form-textarea"
                    name="message"
                    placeholder="Tell us about your fitness background, goals, and any questions you have..."
                  />
                </div>

                <button type="submit" className="btn-primary form-submit">
                  <span>Send Enquiry</span>
                  <span>→</span>
                </button>

                <p className="form-note">
                  We respect your privacy. Your information will never be shared
                  with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
