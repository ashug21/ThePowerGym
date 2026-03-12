import '../styles/home.css';

const features = [
  {
    icon: '⚡',
    title: 'Elite Equipment',
    desc: 'Over 500 premium machines and free weights. Every tool you need to push beyond your limits, always maintained to perfection.',
  },
  {
    icon: '🏆',
    title: 'World-Class Coaches',
    desc: 'Train with certified professionals, Olympic athletes, and sports science experts who are obsessed with your results.',
  },
  {
    icon: '🔬',
    title: 'Science-Based Programs',
    desc: 'Personalized training protocols backed by sports science and nutrition strategy — built for real, measurable progress.',
  },
  {
    icon: '🧘',
    title: 'Recovery & Wellness',
    desc: 'Premium recovery facilities including cryo chambers, infrared saunas, and sports therapy to maximize every session.',
  },
  {
    icon: '🌐',
    title: 'Community & Culture',
    desc: 'Join a tribe of high-performers. Our events, challenges, and member network fuel the drive to keep going.',
  },
  {
    icon: '📊',
    title: 'Progress Tracking',
    desc: 'Advanced body composition analysis, performance metrics, and regular check-ins ensure you always move forward.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <div>
            <div className="section-label">What We Offer</div>
            <h2 className="section-title">
              BUILT FOR<br /><span>CHAMPIONS</span>
            </h2>
          </div>
          <p className="features-intro">
            Every detail of IRONFORGE is designed to help you perform at your absolute best. 
            From the equipment to the environment — nothing here is ordinary.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div key={f.title} className="feature-card">
              <div className="feature-number">0{i + 1}</div>
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
