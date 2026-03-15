import Image from 'next/image';
import '../styles/home.css';

const testimonials = [
  {
    text: "Joining The Power Gym was the best decision for my fitness. The trainers guide you properly, the environment is very motivating, and the equipment is top quality. After two years here, I feel stronger and healthier than ever.",
    name: 'Rahul Maan',
    detail: 'Regular Member · 1 Year',
    avatar: '/clients/img5.png',
  },
  {
    text: "As someone who trains seriously, I needed a gym with proper equipment and experienced trainers. The Power Gym has everything — great machines, disciplined training environment, and excellent support from the coaches.",
    name: 'Vinay Joshi',
    detail: 'Advanced Member · 3 Years',
    avatar: '/clients/img2.jpeg',
  },
  {
    text: "At first I thought the membership might be expensive, but after training here I realised it's completely worth it. The trainers are supportive, the gym is always clean, and the atmosphere keeps you motivated to improve.",
    name: 'Ashish Barua',
    detail: 'Premium Member · 5 Years',
    avatar: '/clients/img4.png',
  },
  {
    text: "The Power Gym has helped me stay consistent with my workouts. The trainers give proper guidance and the overall vibe of the gym pushes you to work harder every day.",
    name: 'Neeraj Rathor',
    detail: 'Premium Member · 5 Years',
    avatar: '/clients/img6.png',
  },
  {
    text: "I joined to improve my fitness and stamina, and the results have been amazing. The trainers are friendly, the equipment is modern, and the energy in the gym keeps you motivated to train regularly.",
    name: 'Javed Ali',
    detail: 'Advanced Member · 3 Years',
    avatar: '/clients/img7.png',
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
