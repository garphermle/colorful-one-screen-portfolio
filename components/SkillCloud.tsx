import { skills } from "@/lib/portfolio-data";

export function SkillCloud() {
  return (
    <ul className="skill-cloud" aria-label="Technical skills">
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}
