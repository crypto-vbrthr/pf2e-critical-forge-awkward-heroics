import {
  CRITICAL_FORGE_API_RANGE,
  MODULE_ID,
  MODULE_VERSION
} from "./constants.js";
import { AWKWARD_HEROICS_PACK } from "./packs/awkward-heroics-pack.js";

Hooks.once("pf2eCriticalForgeReady", (forge) => {
  try {
    const extension = forge.extensions.forModule(MODULE_ID, {
      version: MODULE_VERSION,
      requirements: {
        apiVersion: CRITICAL_FORGE_API_RANGE,
        extensionContractVersion: ">=1",
        cardSchemaVersion: ">=1",
        cardPackSchemaVersion: ">=1",
        capabilities: ["cards.multiDeckPacks"]
      }
    });

    extension.assertCompatible();
    extension.registerPack(AWKWARD_HEROICS_PACK);

    console.info(`${MODULE_ID} | Registered Awkward Heroics`, {
      version: MODULE_VERSION,
      packId: AWKWARD_HEROICS_PACK.id,
      cards: 120
    });
  } catch (error) {
    console.error(`${MODULE_ID} | Could not register Awkward Heroics.`, error);
    if (game.user?.isGM) {
      ui.notifications?.error?.(
        game.i18n.localize("PF2E_CRITICAL_FORGE_AWKWARD_HEROICS.Errors.Registration")
      );
    }
  }
});
