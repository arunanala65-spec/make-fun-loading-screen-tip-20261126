// Loading Screen Gold — a tip in 200 characters or fewer.
// One sharp, funny loading-screen tip for stressed developers and AI coding agents.
// Entry: make-fun-loading-screen-tip-20261126

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Tip: the build isn't stuck — it's thinking, just like your AI agent. Blame the cache first, DNS second, and yourself never before coffee. Breathe.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`Entry line must be 1-200 characters, got ${line.length}.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
