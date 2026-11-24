// v3.4.0 ships a fix for the 3 a.m. embarrassment replay.
// The program below emits the changelog line to the output file.
// No network, no clock, no randomness, no secrets: same bytes every run.
import fs from "node:fs";
import path from "node:path";

const head = "v3.4.0: fixed a bug where the brain replayed ";
const tail = "your most embarrassing moment at 3 a.m. instead of sleeping. Replays are now scheduled for business hours only.";
const note = head + tail;
const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, "entry.txt"), note, "utf8");
