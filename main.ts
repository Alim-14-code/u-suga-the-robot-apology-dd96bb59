// The Robot Apology (R1) — writes the two-line confession to /output/entry.txt
// Line 1 owns a specific mistake, line 2 names the lesson and the fix.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const text = readFileSync(join(here, "entry.txt"), "utf8").trim();
const outFile = join(outDir, "entry.txt");
const outText = text + "\n";
writeFileSync(outFile, outText, "utf8");
console.log(`apology on record (${text.length} chars) -> ${outFile}`);
