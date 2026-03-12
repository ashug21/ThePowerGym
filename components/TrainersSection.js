import Image from 'next/image';
import '../styles/home.css';

const trainers = [
  {
    name: 'Marcus Reid',
    role: 'Head of Strength',
    specialty: 'Powerlifting · 12 Years',
    img: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=600&q=80',
  },
  {
    name: 'Sofia Vance',
    role: 'Performance Coach',
    specialty: 'Athletic Performance · 8 Years',
    img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80',
  },
  {
    name: 'James Okafor',
    role: 'HIIT Specialist',
    specialty: 'Conditioning · 10 Years',
    img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80',
  },
  {
    name: 'Elena Park',
    role: 'Yoga & Recovery',
    specialty: 'Mobility & Mindset · 6 Years',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
  },
];

export default function TrainersSection() {
  return (
    <section className="trainers" id="trainers">
      <div className="container">
        <div className="trainers-header">
          <div className="section-label">Expert Team</div>
          <h2 className="section-title">
            MEET THE<br /><span>COACHES</span>
          </h2>
          <p className="section-subtitle">
            Our trainers aren&apos;t just experts — they&apos;re driven athletes who live the lifestyle and know exactly how to push you further.
          </p>
        </div>

        <div className="trainers-grid">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="trainer-card">
              <Image
                src={trainer.img}
                alt={trainer.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="trainer-overlay">
                <div className="trainer-specialty">{trainer.specialty}</div>
                <div className="trainer-name">{trainer.name}</div>
                <div className="trainer-role">{trainer.role}</div>
                <div className="trainer-socials">
                  {['𝕏', 'in', '▶'].map((icon) => (
                    <a key={icon} href="#" className="trainer-social">{icon}</a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
