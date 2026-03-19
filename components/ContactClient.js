"use client";

import { useState } from "react";
import "../styles/forms.css";
import { toast } from "react-toastify";

const hours = [
  { day: "Monday", time: "( 6:00 AM – 10:00 AM ) &  ( 5:00 PM - 11:00 PM ) " },
  { day: "Tuesday", time: "( 6:00 AM – 10:00 AM ) &  ( 5:00 PM - 11:00 PM ) " },
  { day: "Wednesday", time: "( 6:00 AM – 10:00 AM ) &  ( 5:00 PM - 11:00 PM ) "  },
  { day: "Thursday", time: "( 6:00 AM – 10:00 AM ) &  ( 5:00 PM - 11:00 PM ) "  },
  { day: "Friday", time: "( 6:00 AM – 10:00 AM ) &  ( 5:00 PM - 11:00 PM ) "  },
  { day: "Saturday",time: "( 6:00 AM – 10:00 AM ) &  ( 5:00 PM - 11:00 PM ) " },
  { day: "Sunday", time: "Closed" },
];

export default function ContactClient() {


  const [fullname , setFullName] = useState("");
  const [email , setEmail] = useState("");
  const [phone , setPhone] = useState("");
  const [subject , setSubject] = useState("");
  const [message , setMessage] = useState("");

  const handleContact = async (e) => {
    e.preventDefault();
  
    if (!fullname || !email || !phone || !subject || !message) {
      toast.error("All Fields are required !");
      return;
    }

    if(phone.length != 10){
      toast.error("Enter a Valid Phone Number");
      return;
    }
  
    const toastId = toast.loading("Sending message...");
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          phone,
          subject,
          message,
        }),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        toast.update(toastId, {
          render: "Error submitting form",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        return;
      }
  
      toast.update(toastId, {
        render: "Contact form sent successfully",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
  
      setFullName("");
      setEmail("");
      setPhone("");
      setSubject("");
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
                  value: "sandeepjoshi786687@gmail.com",
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
                  <div key={h.day} className="hours-row">
                    <span className="hours-day">{h.day}</span>
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
                  {
                    icon: "/socialApps/facebook.png",
                    label: "Facebook",
                    link: "https://www.facebook.com/sandeep.joshi.16547008?mibextid=wwXIfr&rdid=NyNoWOD0gy1YWzNa&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15wHuJpjEm%2F%3Fmibextid%3DwwXIfr",
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
            <h2 className="contact-form-title">Send a Message</h2>
            <p className="contact-form-subtitle">
              We read every message and respond within 24 hours.
            </p>

            <form 
            onSubmit={handleContact}
              className="contact-form"
            >
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullname}
                    className="form-input"
                    type="text"
                    name="full_name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Phone *</label>
                <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                  className="form-input"
                  type="tel"
                  name="phone"
                  placeholder="9990586994"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <select className="form-select" name="subject" onChange={(e) => setSubject(e.target.value)}
                  value={subject}>
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
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                  className="form-textarea"
                  name="message"
                  placeholder="How can we help you? Be as specific as you like..."
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
          </div>
        </div>
      </div>
    </main>
  );
}