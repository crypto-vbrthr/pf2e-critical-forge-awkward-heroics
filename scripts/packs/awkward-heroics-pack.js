import { MODULE_ID, MODULE_VERSION, PACK_ID } from "../constants.js";
import { CARDS as ATTACK_CARDS } from "../cards/attack-cards.js";
import { CARDS as FORTITUDE_CARDS } from "../cards/fortitude-cards.js";
import { CARDS as REFLEX_CARDS } from "../cards/reflex-cards.js";
import { CARDS as WILL_CARDS } from "../cards/will-cards.js";

export const AWKWARD_HEROICS_PACK = Object.freeze({
  schemaVersion: 1,
  id: PACK_ID,
  titleKey: "PF2E_CRITICAL_FORGE_AWKWARD_HEROICS.Pack.Title",
  descriptionKey: "PF2E_CRITICAL_FORGE_AWKWARD_HEROICS.Pack.Description",
  fallbackTitle: "Awkward Heroics",
  fallbackDescription: "Dryly humorous critical moments with fully functional PF2e effects.",
  version: MODULE_VERSION,
  sourceModule: MODULE_ID,
  priority: 30,
  enabled: true,
  metadata: Object.freeze({
    theme: "dry-humor",
    contentVersion: 1,
    cardCount: 120
  }),
  decks: Object.freeze({
    attack: Object.freeze({ cards: ATTACK_CARDS }),
    fortitude: Object.freeze({ cards: FORTITUDE_CARDS }),
    reflex: Object.freeze({ cards: REFLEX_CARDS }),
    will: Object.freeze({ cards: WILL_CARDS })
  })
});
