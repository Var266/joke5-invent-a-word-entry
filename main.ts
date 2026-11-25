import { mkdirSync, writeFileSync } from "node:fs";

// Winner of 13 candidates, picked pairwise against the judge brief:
// a real gap everyone recognises, an exact one-line definition, a
// well-formed transparent compound, and a fresh single-word coinage.
// (Tabnesia and roomnesia were rejected: both already exist online
// with the same meaning.)
const entry =
  'goodbyeloop (n.) The extra waves, "bye"s and "see you"s after a goodbye has already ended.';

// Fail loudly instead of submitting an over-long entry: the gate is 140 chars.
if (entry.length > 140 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} chars, must be 1-140`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
