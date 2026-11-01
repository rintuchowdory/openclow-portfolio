#!/usr/bin/env node
import { mkdirSync, readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const url =
  process.env.LIGHTHOUSE_URL ??
  "https://rintuchowdory.github.io/openclow-portfolio/";
const outputDir = resolve(
  process.env.LIGHTHOUSE_OUTPUT_DIR ?? "artifacts/lighthouse"
);
mkdirSync(outputDir, { recursive: true });
const thresholds = {
  performance: Number(process.env.LIGHTHOUSE_MIN_PERFORMANCE ?? 0),
  accessibility: Number(process.env.LIGHTHOUSE_MIN_ACCESSIBILITY ?? 0),
  seo: Number(process.env.LIGHTHOUSE_MIN_SEO ?? 0),
};
const failures = [];

const runs = [
  { name: "desktop", extraArgs: ["--preset=desktop"] },
  { name: "mobile", extraArgs: [] },
];

for (const run of runs) {
  const outputPath = resolve(outputDir, `${run.name}.json`);
  const args = [
    "--yes",
    "lighthouse@13.6.0",
    url,
    "--only-categories=performance,accessibility,seo",
    "--output=json",
    `--output-path=${outputPath}`,
    "--chrome-flags=--headless=new --no-sandbox",
    "--quiet",
    "--no-enable-error-reporting",
    ...run.extraArgs,
  ];
  const result = spawnSync("npx", args, { stdio: "inherit", shell: false });
  if (result.status !== 0) process.exit(result.status ?? 1);

  const report = JSON.parse(readFileSync(outputPath, "utf8"));
  const score = category =>
    Math.round((report.categories[category]?.score ?? 0) * 100);
  const audit = id => report.audits[id]?.displayValue ?? "n/a";
  console.log(`\n${run.name.toUpperCase()} — ${url}`);
  console.log(`Performance: ${score("performance")}`);
  console.log(`Accessibility: ${score("accessibility")}`);
  console.log(`SEO: ${score("seo")}`);
  console.log(
    `FCP: ${audit("first-contentful-paint")} | LCP: ${audit("largest-contentful-paint")} | CLS: ${audit("cumulative-layout-shift")} | TBT: ${audit("total-blocking-time")}`
  );

  for (const category of Object.keys(thresholds)) {
    const actual = score(category);
    const minimum = thresholds[category];
    if (minimum > 0 && actual < minimum) {
      failures.push(`${run.name} ${category}: ${actual} < ${minimum}`);
    }
  }
}

console.log(`\nJSON reports: ${outputDir}`);
if (failures.length > 0) {
  console.error(`Lighthouse thresholds failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}
