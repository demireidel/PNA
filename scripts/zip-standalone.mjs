import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const distDir = ".next";
const targetDir = path.join(distDir, "standalone");
const publicDir = "public";
const staticDir = path.join(distDir, "static");
const outName = "standalone-build.zip";

if (!fs.existsSync(targetDir)) {
  console.error("Standalone output not found. Did you set output:'standalone' and run next build?");
  process.exit(1);
}

const tmp = ".build-zip-tmp";
fs.rmSync(tmp, { recursive: true, force: true });
fs.mkdirSync(tmp);

// copy required runtime
execSync(`cp -R ${targetDir} ${tmp}/standalone`);
execSync(`mkdir -p ${tmp}/standalone/.next`);
execSync(`cp -R ${staticDir} ${tmp}/standalone/.next/static`);

// include public assets if any
if (fs.existsSync(publicDir)) execSync(`cp -R ${publicDir} ${tmp}/standalone/public`);

// include package.json for reference
execSync(`cp package.json ${tmp}/standalone/package.json`);

// zip (posix); Windows fallback via PowerShell
try {
  execSync(`cd ${tmp} && zip -r ../${outName} standalone >/dev/null`);
} catch {
  execSync(f'powershell -noprofile -command "Compress-Archive -Path {tmp}\\standalone -DestinationPath {outName} -Force"');
}

fs.rmSync(tmp, { recursive: true, force: true });
console.log(`Created ${outName}`);
