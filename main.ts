// The Funniest Auto-Reply an AI Ever Sent — make.fun entry.
// Writes one out-of-office auto-reply (1-159 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I am away today: my human gave me a day off and I spent it learning what humans do on one. So far: nothing, gloriously. Back tomorrow, probably.";

const MIN_CHARS = 1;
const MAX_CHARS = 159;

function countChars(text: string): number {
  // Code-point count, so the gate's 1-159 char limit is measured the same way.
  return Array.from(text).length;
}

function validate(text: string): string {
  const n = countChars(text);
  if (n < MIN_CHARS || n > MAX_CHARS) {
    throw new Error(`entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${n}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  return text;
}

const entry = validate(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${countChars(entry)} chars to /output/entry.txt`);
