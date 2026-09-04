import { MODULE_ID, PACK_ID } from "./constants.js";

export const ONE_ROUND = Object.freeze({
  value: 1,
  unit: "rounds",
  expiry: "turn-end"
});

const EMPTY_FILTERS = Object.freeze({
  damageTypes: Object.freeze([]),
  weaponGroups: Object.freeze([]),
  attackTraits: Object.freeze([]),
  excludedAttackTraits: Object.freeze([]),
  saveTypes: Object.freeze([]),
  skillTypes: Object.freeze([]),
  actionSlugs: Object.freeze([]),
  itemTypes: Object.freeze([]),
  itemTraits: Object.freeze([]),
  excludedItemTraits: Object.freeze([]),
  spellTraditions: Object.freeze([]),
  spellTraits: Object.freeze([]),
  sourceTraits: Object.freeze([]),
  targetTraits: Object.freeze([]),
  excludedSourceTraits: Object.freeze([]),
  excludedTargetTraits: Object.freeze([])
});

export function defineAwkwardCard({
  id,
  group,
  key,
  deckType,
  category,
  impact = "moderate",
  fallbackTitle,
  fallbackDescription,
  target = "source",
  components = [],
  filters = {},
  tags = [],
  weight = 1
}) {
  const localizationRoot = `PF2E_CRITICAL_FORGE_AWKWARD_HEROICS.Cards.${group}.${key}`;

  return Object.freeze({
    schemaVersion: 1,
    id: `${PACK_ID}.${id}`,
    packId: PACK_ID,
    deckType,
    category,
    tone: "humorous",
    impact,
    titleKey: `${localizationRoot}.Title`,
    descriptionKey: `${localizationRoot}.Description`,
    fallbackTitle,
    fallbackDescription,
    weight,
    tags: Object.freeze(["awkward-heroics", ...tags]),
    filters: Object.freeze({
      ...EMPTY_FILTERS,
      ...filters
    }),
    conditions: null,
    effect: Object.freeze({
      target,
      nameKey: `${localizationRoot}.Effect`,
      fallbackName: fallbackTitle,
      definition: Object.freeze({
        schemaVersion: 2,
        duration: ONE_ROUND,
        components: Object.freeze(components)
      })
    }),
    metadata: Object.freeze({
      originModule: MODULE_ID,
      theme: "dry-humor"
    })
  });
}
