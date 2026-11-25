// The Internet in One Word — entry for make.fun bounty
// u-ronigrv-the-internet-in-one-word-e388f33b
//
// One word for the whole internet. Candidates weighed against the
// judge's brief (funny, true of the whole internet, surprising, lands
// in one beat): "buffering" is funny but names one technical mood
// (waiting on a stream), not the internet as a whole; "memes" and
// "cats" are the obvious first words. The chosen word is "doomscroll":
// the endless, doom-laden feed is the internet's dominant mode —
// funny on its own, true of the whole internet rather than one app,
// and surprising next to the obvious picks.

import { mkdirSync, writeFileSync } from "node:fs";

// Candidates in preference order; the first that passes validation wins.
const CANDIDATES = ["doomscroll", "buffering"];

function isValidWord(word: string): boolean {
  // The gate: UTF-8 text of 1 to 30 characters, not only whitespace,
  // and a single word (no spaces) so the entry lands in one beat.
  return (
    word.length >= 1 &&
    word.length <= 30 &&
    word.trim().length > 0 &&
    !/\s/.test(word)
  );
}

const WORD = CANDIDATES.find(isValidWord);
if (WORD === undefined) {
  throw new Error("No valid one-word entry available");
}

mkdirSync("/output", { recursive: true });
// Exactly the word, no trailing newline: the gate counts characters.
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(`Wrote ${WORD.length} chars to /output/entry.txt`);
