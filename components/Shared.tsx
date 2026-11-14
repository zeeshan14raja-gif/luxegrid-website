import { SiteLink as Link } from "@/components/SiteLink";
import Image from "next/image";
import { Icon } from "./Icon";
import { Brand } from "./SiteHeader";
import { navigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      {children}
      <span />
    </div>
  );
}
export function ButtonLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link href={href} className={secondary ? "text-link" : "button-gold"}>
      {children}
      <Icon name="arrow" />
    </Link>
  );
}
export function Hero({ about = false }: { about?: boolean }) {
  return (
    <section className={`hero ${about ? "hero-about" : "hero-home"}`}>
      <div className="hero-image" data-parallax>
        <Image
          src="/images/hero.webp"
          alt="Contemporary residence with warm lighting at dusk"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero-shade" />
      <div className="hero-content">
        <Eyebrow>
          {about ? "About LuxeGrid" : "Real Estate / Construction / Marketing"}
        </Eyebrow>
        <h1 data-hero>
          {about ? (
            <>
              Built on Trust.
              <br />
              <em>Guided by Vision.</em>
            </>
          ) : (
            <>
              Your Property Journey,
              <br />
              <em>Simplified.</em>
            </>
          )}
        </h1>
        <p data-hero>
          {about
            ? "LuxeGrid Construction & Marketing is a premium real estate and construction brand in Islamabad, dedicated to creating lasting value through trusted guidance, thoughtful development, and a client-first approach."
            : "A real estate and construction partner in Islamabad, offering end-to-end solutions for buying, selling, renting, marketing, and building exceptional spaces."}
        </p>
        <div className="hero-actions" data-hero>
          <ButtonLink href={about ? "#our-story" : "#services"}>
            {about ? "Our Story" : "Explore Our Services"}
          </ButtonLink>
          <Link
            className="play-link"
            href={about ? "#foundation" : "/about/#our-story"}
          >
            <span className="play-circle">
              <Icon name="play" />
            </span>
            {about ? "Our Approach" : "Watch Our Story"}
          </Link>
        </div>
      </div>
      {!about && (
        <a className="scroll-cue" href="#about">
          <span>Scroll</span>
          <i />
        </a>
      )}
    </section>
  );
}
export function Story({ about = false }: { about?: boolean }) {
  return (
    <section
      className={`story-section ${about ? "story-about" : ""}`}
      id={about ? "our-story" : "about"}
    >
      <div className="story-photo image-reveal">
        <Image
          src="/images/interior.webp"
          alt="Warm, contemporary living space overlooking the hills"
          fill
          sizes="(max-width: 700px) 100vw, 42vw"
        />
      </div>
      <div className="story-copy" data-reveal>
        <Eyebrow>About LuxeGrid</Eyebrow>
        <h2>
          {about ? (
            "Our Story"
          ) : (
            <>
              A Modern Real Estate
              <br className="desktop-break" /> Company, Built on Trust.
            </>
          )}
        </h2>
        {about ? (
          <>
            <p>
              LuxeGrid was founded with a clear purpose — to bring a more
              refined, transparent, and client-focused real estate and
              construction experience to Islamabad. We combine market insight,
              development expertise, and a commitment to quality to help our
              clients buy, sell, rent, and build with confidence.
            </p>
            <p>
              From identifying the right opportunity to delivering well-planned
              construction solutions, our approach is rooted in trust, long-term
              value, and a genuine focus on our clients’ goals.
            </p>
          </>
        ) : (
          <p>
            LuxeGrid Construction &amp; Marketing is a real estate company based
            in Islamabad, dedicated to helping people make confident property
            decisions. From buying and selling to rentals, marketing, and
            construction, we offer integrated solutions with a focus on value,
            transparency, and long-term relationships.
          </p>
        )}
        <ButtonLink href={about ? "#philosophy" : "/about/"} secondary>
          {about ? "More About Our Journey" : "Learn More About Us"}
        </ButtonLink>
      </div>
      <aside
        className="story-aside"
        aria-label={about ? "Our focus" : "Our services"}
      >
        {about ? (
          <>
            Premium
            <br />
            Real Estate
            <br />
            &amp; Construction
            <br />
            in Islamabad
          </>
        ) : (
          <>
            Real Estate
            <br />
            Consultancy
            <br />
            Marketing
            <br />
            Construction
          </>
        )}
      </aside>
    </section>
  );
}
export function Islamabad({ about = false }: { about?: boolean }) {
  return (
    <section className="islamabad-section">
      <Image
        src="/images/islamabad.webp"
        alt="Faisal Mosque in Islamabad against the Margalla Hills"
        fill
        sizes="100vw"
      />
      <div className="islamabad-overlay" />
      <div className="islamabad-copy" data-reveal>
        <Eyebrow>Islamabad</Eyebrow>
        <h2>Rooted in Islamabad.</h2>
        <p>
          {about
            ? "Islamabad is the heart of everything we do. Our local market knowledge, on-ground experience, and strong network give our clients a clear advantage in a dynamic and growing city."
            : "With a deep understanding of Islamabad’s real estate landscape, LuxeGrid brings local knowledge, market insight, and on-ground expertise to every client."}
        </p>
      </div>
    </section>
  );
}
export function ContactCTA({ about = false }: { about?: boolean }) {
  return (
    <section className={`contact-cta ${about ? "about-cta" : ""}`}>
      <div className="cta-background" />
      <div className="cta-inner">
        <h2 data-reveal>
          {about ? (
            <>
              Let’s Start the
              <br />
              Right Conversation.
            </>
          ) : (
            <>
              Let’s Build
              <br />
              Your Next Chapter.
            </>
          )}
        </h2>
        <div className="cta-details" data-reveal>
          <p>
            {about
              ? "Have a plan, a question, or an idea in mind? Our team is here to listen, guide, and help you take the next step with confidence."
              : "Whether you’re planning to buy, sell, rent, or build, our team is here to guide you."}
          </p>
          <div className="cta-actions">
            <a className="button-gold" href="tel:+923267770162"><Icon name="phone"/>Call Us</a>
            <ButtonLink href="/contact/">
              {about ? "Contact Us" : "Get in Touch"}
            </ButtonLink>
            {siteConfig.whatsapp ? (
              <a
                className="whatsapp-link"
                href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" />
                Chat on WhatsApp
              </a>
            ) : (
              <span
                className="whatsapp-link unconfigured"
                aria-disabled="true"
                title="WhatsApp contact details have not been provided"
              >
                <Icon name="whatsapp" />
                Chat on WhatsApp
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export function Footer({ current }: { current: string }) {
  return (
    <footer className="site-footer">
      <Link href="/" className="footer-brand" aria-label="LuxeGrid home">
        <Brand />
      </Link>
      <nav aria-label="Footer navigation">
        {navigation.map(([name, url]) => (
          <Link
            key={name}
            className={name.toLowerCase() === current ? "active" : ""}
            href={url}
          >
            {name}
          </Link>
        ))}
      </nav>
      <a className="credits-link" href="/image-credits.html">Image credits</a>
      <div className="socials">
        {Object.entries(siteConfig.socials).map(([name, url]) =>
          url ? (
            <a
              href={url}
              key={name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
            >
              <Icon name={name} />
            </a>
          ) : (
            null
          ),
        )}
      </div>
    </footer>
  );
}
