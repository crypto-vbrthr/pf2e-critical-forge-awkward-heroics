import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { AWKWARD_HEROICS_PACK } from "../scripts/packs/awkward-heroics-pack.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const decks = Object.entries(AWKWARD_HEROICS_PACK.decks);
const cards = decks.flatMap(([, deck]) => deck.cards);

const expected = new Map([
  ["attack|criticalHit", 12],
  ["attack|criticalFumble", 12],
  ["attack|spellCriticalHit", 12],
  ["attack|spellCriticalFumble", 12],
  ["fortitude|savingThrowCriticalSuccess", 12],
  ["fortitude|savingThrowCriticalFailure", 12],
  ["reflex|savingThrowCriticalSuccess", 12],
  ["reflex|savingThrowCriticalFailure", 12],
  ["will|savingThrowCriticalSuccess", 12],
  ["will|savingThrowCriticalFailure", 12]
]);

test("pack contains 120 cards across all requested critical categories", () => {
  assert.equal(cards.length, 120);

  const counts = new Map();
  for (const card of cards) {
    const key = `${card.deckType}|${card.category}`;
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }

  assert.deepEqual(counts, expected);
});

test("every card has a unique id, humorous tone, and a mechanical effect", () => {
  const ids = new Set();

  for (const card of cards) {
    assert.equal(ids.has(card.id), false, `duplicate card id: ${card.id}`);
    ids.add(card.id);

    assert.equal(card.tone, "humorous", card.id);
    assert.ok(["light", "moderate", "strong"].includes(card.impact), card.id);
    assert.equal(card.packId, AWKWARD_HEROICS_PACK.id, card.id);
    assert.ok(card.effect, `${card.id} must have an effect`);
    assert.ok(Array.isArray(card.effect.definition.components), card.id);
    assert.ok(card.effect.definition.components.length > 0, `${card.id} must contain at least one component`);
    assert.deepEqual(card.effect.definition.duration, {
      value: 1,
      unit: "rounds",
      expiry: "turn-end"
    });
  }
});

test("deck/category combinations are compatible with Critical Forge multi-deck rules", () => {
  const allowed = {
    attack: new Set(["criticalHit", "criticalFumble", "spellCriticalHit", "spellCriticalFumble"]),
    fortitude: new Set(["savingThrowCriticalSuccess", "savingThrowCriticalFailure"]),
    reflex: new Set(["savingThrowCriticalSuccess", "savingThrowCriticalFailure"]),
    will: new Set(["savingThrowCriticalSuccess", "savingThrowCriticalFailure"])
  };

  for (const card of cards) {
    assert.equal(allowed[card.deckType]?.has(card.category), true, card.id);
  }
});

test("German and English localization cover every card and effect name", () => {
  for (const lang of ["de", "en"]) {
    const data = JSON.parse(fs.readFileSync(path.join(root, "lang", `${lang}.json`), "utf8"));

    for (const card of cards) {
      for (const key of [card.titleKey, card.descriptionKey, card.effect.nameKey]) {
        const value = key.split(".").reduce((entry, part) => entry?.[part], data);
        assert.equal(typeof value, "string", `${lang}: missing ${key}`);
        assert.ok(value.trim().length > 0, `${lang}: empty ${key}`);
      }
    }
  }
});

test("the card text stays out of explicit slapstick territory", () => {
  const forbidden = [
    /\bpie\b/iu,
    /\bbanana\b/iu,
    /\bclown\b/iu,
    /\btorte\b/iu,
    /\bbanane\b/iu,
    /three stooges/iu
  ];

  for (const lang of ["de", "en"]) {
    const text = fs.readFileSync(path.join(root, "lang", `${lang}.json`), "utf8");
    for (const pattern of forbidden) {
      assert.equal(pattern.test(text), false, `${lang}: forbidden slapstick marker ${pattern}`);
    }
  }
});
