import { metrics, profile } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="availability">{profile.availability}</p>
        <h1 id="hero-title">
          {profile.name}
          <span>{profile.role}</span>
        </h1>
        <p className="hero-lede">{profile.headline}</p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button primary" href="#projects">
            View projects
          </a>
          <a className="button ghost" href="#contact">
            Contact me
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Portfolio visual profile">
        <div className="portrait-card">
          <div className="portrait-orbit" aria-hidden="true" />
          <div className="portrait-initials" aria-hidden="true">
            LT
          </div>
          <div className="portrait-caption">
            <span>{profile.location}</span>
            <strong>Spring Boot • Microservices • Kafka</strong>
          </div>
        </div>
      </div>

      <dl className="metrics" aria-label="Professional highlights">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <dt>{metric.value}</dt>
            <dd>{metric.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
