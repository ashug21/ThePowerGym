import Link from 'next/link';
import Image from 'next/image';
import '../styles/home.css';

export default function CtaStrip() {
  return (
    <section className="cta-strip">
      <div className="cta-strip-bg">
        <Image
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80"
          alt="CTA Background"
          fill
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
      </div>
      <div className="cta-strip-overlay" />
      <div className="container">
        <div className="cta-strip-content">
          <div>
            <h2 className="cta-strip-title">
              READY TO<br /><span>TRANSFORM?</span>
            </h2>
            <p className="cta-strip-subtitle">
              Stop waiting for the perfect moment. The perfect moment is now. 
              Begin your The Power Gym journey today.
            </p>
          </div>
          <div className="cta-strip-actions">
            <Link href="/enquiry" className="btn-primary">
              <span>Enquire Now</span>
              <span>→</span>
            </Link>
            <Link href="/contact" className="btn-secondary">
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
