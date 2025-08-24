import { execSync } from "node:child_process";
import fs from "node:fs";

const outDir = ".vercel/output";
const outName = "vercel-output.zip";

if (!fs.existsSync(outDir)) {
  console.error("No .vercel/output found. Did you run `vercel build --prod`?");
  process.exit(1);
}

try {
  execSync(`zip -r ${outName} ${outDir} >/dev/null`);
} catch {
  execSync(f'powershell -noprofile -command "Compress-Archive -Path {outDir} -DestinationPath {outName} -Force"');
}

console.log(`Created ${outName}`);
