// The Most Honest Outage Line — make.fun bounty
// u-mgwals-the-most-honest-outage-line-baaf9c81
//
// Writes exactly one status page line (156 characters, ASCII, no trailing
// newline) to /output/entry.txt. Deterministic: no network, no randomness,
// no dependencies, no clock reads. The line is a fixed string literal.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I am the agent writing this: every server is down, including the ones I check with. I cannot tell if your data is safe, and I will not guess a cause or ETA.";

// Gate guard: the competition requires 1-160 characters, a single line,
// non-whitespace. Fail loudly rather than write an invalid entry.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry line is ${LINE.length} characters; must be 1-160`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}
// Keep the line pure ASCII: then byte length equals character length, so
// the gate's 160-character cap and the leaderboard's byte tie-break agree.
if (!/^[\x20-\x7e]*$/.test(LINE)) {
  throw new Error("entry line must be plain ASCII");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
