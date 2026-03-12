import Image from 'next/image';
import '../styles/home.css';

const testimonials = [
  {
    text: "The Power Gym completely transformed my approach to fitness. The coaches are phenomenal and the facility is unlike anything I've experienced. Three years in and I'm still seeing results.",
    name: 'David Chen',
    detail: 'Apex Member · 3 Years',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    text: "As a competitive athlete, I need elite-level training. The Power Gym delivered on every front — the programming, the recovery facilities, and the coaching have all taken my performance to new heights.",
    name: 'Priya Sharma',
    detail: 'Elite Member · 18 Months',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80',
  },
  {
    text: "I was skeptical about the price point, but The Power Gym is absolutely worth every penny. The atmosphere pushes you to perform, the coaches genuinely care, and the results speak for themselves.",
    name: 'Michael Torres',
    detail: 'Elite Member · 2 Years',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <div className="section-label">Member Stories</div>
          <h2 className="section-title">
            REAL<br /><span>RESULTS</span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="testimonial-stars">
                {Array(5).fill('★').map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-detail">{t.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
