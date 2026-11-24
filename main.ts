// One-Line Robot Wedding Vows — make.fun entry.
// Writes the single winning vow to /output/entry.txt (exactly 108 chars, one line, no trailing newline).
// The vow: a wedding promise, robot-swapped — Wi-Fi, airplane mode, low battery.
import fs from "node:fs";

const VOW =
  "I promise to love you in sickness and in health, in Wi-Fi and in airplane mode, till low battery do us part.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", VOW, "utf8");
