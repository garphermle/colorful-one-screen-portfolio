import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();

function read(path) {
  return readFileSync(join(root, path), "utf8");
}

test("portfolio app exposes required sections, SEO metadata, theme, and maintainable data", () => {
  const requiredFiles = [
    "app/layout.tsx",
    "app/page.tsx",
    "app/globals.css",
    "components/Hero.tsx",
    "components/ThemeToggle.tsx",
    "lib/portfolio-data.ts",
  ];

  for (const file of requiredFiles) {
    assert.equal(existsSync(join(root, file)), true, `${file} should exist`);
  }

  const renderedSource = [
    "app/page.tsx",
    "components/Hero.tsx",
    "components/Section.tsx",
    "components/SkillCloud.tsx",
    "components/ProjectGrid.tsx",
    "components/Timeline.tsx",
  ]
    .map(read)
    .join("\n");
  const layout = read("app/layout.tsx");
  const css = read("app/globals.css");
  const data = read("lib/portfolio-data.ts");
  const themeToggle = read("components/ThemeToggle.tsx");

  for (const id of [
    "hero",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ]) {
    assert.match(renderedSource, new RegExp(`id=["']${id}["']`), `${id} section should be rendered`);
  }

  assert.match(layout, /metadata/, "Next metadata should be declared for SEO");
  assert.match(layout, /openGraph/, "Open Graph metadata should be declared");
  assert.match(layout, /data-theme="dark"/, "dark mode should be the default theme");
  assert.match(themeToggle, /localStorage/, "theme preference should persist");
  assert.doesNotMatch(
    themeToggle,
    /prefers-color-scheme:\s*light/,
    "theme toggle should not override the default dark theme from system light preference",
  );
  assert.match(css, /prefers-reduced-motion/, "motion should respect reduced-motion preference");
  assert.match(css, /@media \(max-width: 760px\)/, "mobile responsive rules should exist");
  assert.match(css, /aurora-field/, "colorful background layer should exist");
  assert.doesNotMatch(css, /mesh-drift/, "background should avoid heavy infinite mesh animation");
  assert.doesNotMatch(css, /card-shimmer/, "cards should avoid heavy shimmer animation");
  assert.doesNotMatch(css, /backdrop-filter/, "scrolling UI should avoid expensive backdrop filters");
  assert.doesNotMatch(css, /mix-blend-mode/, "scrolling UI should avoid expensive blend modes");
  assert.doesNotMatch(css, /position:\s*fixed;[\s\S]{0,120}z-index:\s*-/, "background layers should not be fixed behind the page");
  assert.match(css, /lt-reveal/, "LT mark should keep a lightweight reveal effect");
  assert.match(css, /orbit-spin/, "LT orbit should keep a lightweight rotating animation");
  assert.match(data, /projects/, "project data should be centralized");
  assert.match(data, /skills/, "skill data should be centralized");
  assert.match(data, /timeline/, "experience or education data should be centralized");
  assert.doesNotMatch(data, /Resume/, "contact links should not include Resume");
  assert.ok(
    data.indexOf('title: "Tendoo Platform"') < data.indexOf('title: "Viettel Digital Ecosystem"'),
    "Tendoo should be listed before Viettel Digital Ecosystem",
  );
  assert.ok(
    data.indexOf('place: "Viettel Digital Ecosystem"') < data.indexOf('place: "TLH Vietnam Technology Joint Stock Company"'),
    "company experience should be near the end after project timeline entries",
  );

  for (const cvFact of [
    "LE VAN TUAN",
    "Backend Software Engineer",
    "letuanptm@gmail.com",
    "Tendoo Platform",
    "Viettel Digital Ecosystem",
    "Spring Boot",
    "Kafka",
    "PostgreSQL",
    "Electric Power University",
  ]) {
    assert.match(
      `${layout}\n${renderedSource}\n${data}`,
      new RegExp(cvFact.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"),
      `${cvFact} should be represented from the CV`,
    );
  }
});
