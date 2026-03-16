import Image from "next/image";
import "../styles/home.css";

const trainers = [
  {
    name: "Sandeep Joshi",
    role: "Founder & Head Coach",
    specialty: "Competitive Bodybuilding · 25+ Years",
    img: "/coach/sandeepImg.jpg",
  },
];

export default function TrainersSection() {
  return (
    <section className="trainers" id="trainers">
      <div className="container">
        <div className="trainers-header">
          <div className="section-label">Expert Team</div>

          <h2 className="section-title">
            MEET THE
            <br />
            <span>COACH</span>
          </h2>
        </div>

        <div className="trainers-content">
          <div className="trainer-description">
            <p className="section-subtitle">
              <strong>About Coach : </strong>
              <br />
              <br />
              Sandeep Joshi is the founder and head coach of The Power Gym,
              bringing over 25+ years of experience in competitive bodybuilding
              and fitness training. Throughout his career he has competed in
              prestigious competitions including Mr. India, Mr. Universe and
              more than 20 national and local bodybuilding events, gaining deep
              practical knowledge of the sport. With decades of dedication to
              strength training and physique development, Sandeep has built a
              reputation for producing real results. He has successfully trained
              more than 70+ clients in bodybuilding, helping athletes improve
              their physique, strength and stage performance. His philosophy
              focuses on discipline, correct technique, structured nutrition and
              long-term physique development, making The Power Gym a trusted
              place for anyone serious about bodybuilding and fitness.
            </p>
          </div>

          <div className="trainers-grid">
            {trainers.map((trainer) => (
              <div key={trainer.name} className="trainer-card">
                <Image
                  src={trainer.img}
                  alt={trainer.name}
                  width={500}
                  height={650}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />

                <div className="trainer-overlay">
                  <div className="trainer-specialty">{trainer.specialty}</div>
                  <div className="trainer-name">{trainer.name}</div>
                  <div className="trainer-role">{trainer.role}</div>

                  <div className="trainer-socials">
                    {[
                      {
                        icon: "/socialApps/instagram.png",
                        link: "https://www.instagram.com/joshi_4567/",
                      },
                      {
                        icon: "/socialApps/youtube.png",
                        link: "https://www.youtube.com/@SandeepJoshi99",
                      },
                      {
                        icon: "/socialApps/facebook.png",
                        link: "https://www.facebook.com/sandeep.joshi.16547008?mibextid=wwXIfr&rdid=NyNoWOD0gy1YWzNa&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15wHuJpjEm%2F%3Fmibextid%3DwwXIfr",
                      },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        className="trainer-social"
                        target="_blank"
                      >
                        <img src={social.icon} alt="social" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
