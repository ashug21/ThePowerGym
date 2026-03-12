import Link from 'next/link';
import '../styles/home.css';

const plans = [
  {
    tier: 'Challenger',
    price: '89',
    period: 'per month',
    features: [
      { text: 'Full gym access (6AM–10PM)', enabled: true },
      { text: '2 group classes / week', enabled: true },
      { text: 'Fitness assessment', enabled: true },
      { text: 'Locker room & showers', enabled: true },
      { text: 'Personal training sessions', enabled: false },
      { text: 'Recovery suite access', enabled: false },
    ],
  },
  {
    tier: 'Elite',
    price: '149',
    period: 'per month',
    badge: 'Most Popular',
    featured: true,
    features: [
      { text: '24/7 full gym access', enabled: true },
      { text: 'Unlimited group classes', enabled: true },
      { text: 'Monthly fitness assessment', enabled: true },
      { text: 'Locker room & premium showers', enabled: true },
      { text: '2 PT sessions / month', enabled: true },
      { text: 'Recovery suite access', enabled: false },
    ],
  },
  {
    tier: 'Apex',
    price: '249',
    period: 'per month',
    features: [
      { text: '24/7 VIP gym access', enabled: true },
      { text: 'Unlimited group classes', enabled: true },
      { text: 'Bi-weekly assessments', enabled: true },
      { text: 'Private locker & concierge', enabled: true },
      { text: '4 PT sessions / month', enabled: true },
      { text: 'Full recovery suite access', enabled: true },
    ],
  },
];

export default function MembershipSection() {
  return (
    <section className="membership" id="membership">
      <div className="container">
        <div className="membership-header">
          <div className="section-label">Membership Plans</div>
          <h2 className="section-title">
            CHOOSE YOUR<br /><span>LEVEL</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Every tier gives you access to world-class facilities. The difference is how far you want to go.
          </p>
        </div>

        <div className="membership-grid">
          {plans.map((plan) => (
            <div
              key={plan.tier}
              className={`membership-card ${plan.featured ? 'featured' : ''}`}
            >
              {plan.badge && (
                <div className="membership-badge">{plan.badge}</div>
              )}
              <div className="membership-tier">{plan.tier}</div>
              <div className="membership-price">
                <span className="membership-currency">$</span>
                <span className="membership-amount">{plan.price}</span>
                <div className="membership-period">{plan.period}</div>
              </div>

              <div className="membership-divider" />

              <ul className="membership-features">
                {plan.features.map((feature) => (
                  <li key={feature.text} className={feature.enabled ? '' : 'disabled'}>
                    <span className="check">{feature.enabled ? '✓' : '–'}</span>
                    {feature.text}
                  </li>
                ))}
              </ul>

              <Link
                href="/enquiry"
                className={plan.featured ? 'btn-primary' : 'btn-secondary'}
                style={{ display: 'block', textAlign: 'center', justifyContent: 'center' }}
              >
                <span>Get Started</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
