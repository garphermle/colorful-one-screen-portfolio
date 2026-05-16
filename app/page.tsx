import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Section } from "@/components/Section";
import { SkillCloud } from "@/components/SkillCloud";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Timeline } from "@/components/Timeline";
import { profile } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <div className="aurora-field" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="site-shell">
        <header className="topbar" aria-label="Portfolio navigation">
          <a className="brand" href="#hero" aria-label="Back to hero">
            <span aria-hidden="true">LT</span>
            <strong>Portfolio</strong>
          </a>
          <nav aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <ThemeToggle />
        </header>

        <main>
          <Hero />

          <div className="content-grid">
            <Section id="about" eyebrow="About me" title="Backend engineer for scalable transactional systems">
              <p className="large-copy">{profile.summary}</p>
              <div className="about-panels">
                <article>
                  <h3>Core backend focus</h3>
                  <p>Spring Boot services, RESTful APIs, PostgreSQL optimization, Redis caching, asynchronous processing, and high-concurrency business operations.</p>
                </article>
                <article>
                  <h3>Delivery environment</h3>
                  <p>Agile product teams, Docker-based workflows, Kubernetes and ArgoCD deployments, plus supporting frontend features with ReactJS and Next.js.</p>
                </article>
              </div>
            </Section>

            <Section id="skills" eyebrow="Skills" title="Backend, database, DevOps, and full-stack tools">
              <SkillCloud />
            </Section>

            <Section id="projects" eyebrow="Projects" title="Systems built around scale, transactions, and reliability" className="wide">
              <ProjectGrid />
            </Section>

            <Section id="experience" eyebrow="Experience / Education" title="Experience across SaaS, telecom, and software engineering">
              <Timeline />
            </Section>

            <Section id="contact" eyebrow="Contact" title="Let’s discuss backend systems and platform work" className="contact-section">
              <p>
                Reach out for backend engineering roles, full-stack product work, or platform systems involving Spring Boot, microservices, data pipelines, and scalable deployments.
              </p>
              <div className="contact-actions">
                <a className="button primary" href={`mailto:${profile.email}`}>
                  Email me
                </a>
                {profile.links.map((link) => (
                  <a className="button ghost" href={link.href} key={link.label}>
                    {link.label}
                  </a>
                ))}
              </div>
            </Section>
          </div>
        </main>
      </div>
    </>
  );
}
