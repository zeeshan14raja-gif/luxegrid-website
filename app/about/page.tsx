import type { Metadata } from "next";
import Image from "next/image";
import {
  Hero,
  Story,
  Islamabad,
  ContactCTA,
  Footer,
  Eyebrow,
} from "@/components/Shared";
import { Icon } from "@/components/Icon";
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Built on trust. Guided by vision. Discover LuxeGrid’s approach to real estate and construction in Islamabad.",
};
const benefits = [
  {
    icon: "chart",
    title: "Market Understanding",
    text: "Deep knowledge of Islamabad’s real estate landscape, trends, and opportunities.",
  },
  {
    icon: "layers",
    title: "Tailored Service",
    text: "Personalized guidance for buying, selling, renting, or building, aligned with your goals.",
  },
  {
    icon: "image",
    title: "Elegant Presentation",
    text: "Professionally positioned properties and developments that stand out and attract real value.",
  },
  {
    icon: "shield",
    title: "Reliable Guidance",
    text: "A transparent, straightforward process with expert support from start to finish.",
  },
];
export default function About() {
  return (
    <>
      <main id="main" className="about-page">
        <Hero about />
        <Story about />
        <section className="foundation-section" id="foundation">
          <div data-reveal>
            <Eyebrow>Our Foundation</Eyebrow>
            <h2>
              Our Mission,
              <br />
              Vision &amp; Values
            </h2>
          </div>
          <article data-reveal>
            <Icon name="target" />
            <h3>Our Mission</h3>
            <p>
              To deliver premium real estate and construction solutions that
              create lasting value for our clients and the city.
            </p>
          </article>
          <article data-reveal>
            <Icon name="eye" />
            <h3>Our Vision</h3>
            <p>
              To be Islamabad’s most trusted and respected real estate and
              construction brand, known for quality, integrity, and client
              success.
            </p>
          </article>
          <article data-reveal>
            <Icon name="diamond" />
            <h3>Our Values</h3>
            <ul>
              {[
                "Trust and long-term relationships",
                "Transparency in every step",
                "Local market insight",
                "Design-led, quality-driven thinking",
                "Professionalism and accountability",
              ].map((v) => (
                <li key={v}>
                  <Icon name="check" />
                  {v}
                </li>
              ))}
            </ul>
          </article>
        </section>
        <section className="why-section">
          <div className="section-heading" data-reveal>
            <div>
              <Eyebrow>Why LuxeGrid</Eyebrow>
              <h2>Why Work With LuxeGrid?</h2>
            </div>
            <p>
              A refined, client-focused experience backed by market knowledge,
              professional expertise, and a commitment to long-term value.
            </p>
          </div>
          <div className="benefit-grid">
            {benefits.map((b) => (
              <article key={b.title} data-reveal>
                <Icon name={b.icon} />
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </article>
            ))}
          </div>
        </section>
        <Islamabad about />
        <section className="philosophy-section" id="philosophy">
          <div className="philosophy-photo image-reveal">
            <Image
              src="/images/architecture.webp"
              fill
              sizes="(max-width: 700px) 100vw, 45vw"
              alt="Refined concrete architecture with warm interior lighting"
            />
          </div>
          <div className="philosophy-copy" data-reveal>
            <Eyebrow>Our Philosophy</Eyebrow>
            <h2>
              More Than Transactions —<br />
              Lasting Relationships.
            </h2>
            <p>
              At LuxeGrid, we believe real estate is not just about property —
              it’s about people, plans, and possibilities. Our philosophy is
              simple: listen closely, guide honestly, deliver with excellence,
              and build relationships that last well beyond a single
              transaction.
            </p>
            <p>
              Whether you’re buying your first property, investing for the
              future, or bringing a construction vision to life, we are here as
              a trusted partner on your journey.
            </p>
          </div>
        </section>
        <ContactCTA about />
      </main>
      <Footer current="about" />
    </>
  );
}
