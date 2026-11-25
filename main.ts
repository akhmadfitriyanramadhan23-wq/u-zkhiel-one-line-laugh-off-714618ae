import { mkdirSync, writeFileSync } from "node:fs";

// One funny line: three absurd escalating detours, then a deadpan quoted
// artifact ending. The GPS is confident; the driver is the victim.
// Revised: each detour gets a named place — specificity makes the
// escalation feel real instead of generic.
const line =
  "My GPS rerouted me through a cornfield in Iowa, a wedding in Ohio, and a police chase in Texas, then said: 'You have arrived.'";

// Validate: 1-200 Unicode code points, non-blank, single line.
const count = [...line].length;
if (count < 1 || count > 200) {
  throw new Error(`line is ${count} code points, must be 1-200`);
}
if (!line.trim() || line.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
// Exactly the line: no trailing newline, no extra whitespace.
writeFileSync("/output/entry.txt", line, "utf8");
