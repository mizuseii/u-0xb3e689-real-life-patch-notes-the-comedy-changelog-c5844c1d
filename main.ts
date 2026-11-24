// Real-life patch note: the brain replays embarrassing moments at 3 a.m.
// Writes exactly one line (156 chars, no trailing newline).
// Deterministic: no network, no clock, no randomness, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "v3.4.0: fixed a bug where the brain replayed your most embarrassing moment at 3 a.m. instead of sleeping. Replays are now scheduled for business hours only.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
