import Image from "next/image";
import { SiteLink as Link } from "@/components/SiteLink";
import {
  Hero,
  Story,
  Islamabad,
  ContactCTA,
  Footer,
  Eyebrow,
} from "@/components/Shared";
import { Icon } from "@/components/Icon";
import { services } from "@/lib/site-config";
export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Story />
        <section className="services-section" id="services">
          <div className="section-heading" data-reveal>
            <div>
              <Eyebrow>Our Services</Eyebrow>
              <h2>
                Comprehensive Solutions
                <br />
                for Your Property Needs.
              </h2>
            </div>
            <p>
              A complete range of real estate and construction services,
              designed to make your property journey seamless and rewarding.
            </p>
          </div>
          <div className="service-grid">
            {services.map((s) => (
              <Link
                href={`/services/#${s.id}`}
                className="service-card"
                key={s.id}
                data-reveal
              >
                <Image
                  src={`/images/${s.image}`}
                  alt=""
                  fill
                  sizes="(max-width: 600px) 75vw, (max-width: 900px) 30vw, 16vw"
                />
                <div className="service-gradient" />
                <div className="service-content">
                  <Icon name={s.icon} />
                  <h3>{s.name}</h3>
                  <p>{s.description}</p>
                  <span className="service-arrow">
                    <Icon name="arrow" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className="approach-section" id="approach">
          <div data-reveal>
            <Eyebrow>Our Approach</Eyebrow>
            <h2>
              A Clear, Collaborative
              <br />
              Process.
            </h2>
          </div>
          <div className="approach-details">
            <p data-reveal>
              We keep things straightforward — understand your goals, create the
              right plan, and guide you at every step.
            </p>
            <div className="approach-steps">
              {[
                {
                  name: "Understand",
                  text: "We take the time to learn about your needs and goals.",
                },
                {
                  name: "Plan",
                  text: "A tailored strategy for buying, selling, renting or building.",
                },
                {
                  name: "Execute",
                  text: "With expert support and clear communication, we make it happen.",
                },
              ].map((s, i) => (
                <article key={s.name} data-reveal>
                  <div className="step-number">
                    <span>0{i + 1}</span>
                    <i />
                  </div>
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <Islamabad />
        <ContactCTA />
      </main>
      <Footer current="home" />
    </>
  );
}
