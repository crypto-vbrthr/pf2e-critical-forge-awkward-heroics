# PF2E Critical Forge: Awkward Heroics

**Awkward Heroics** is a Critical Forge add-on for Pathfinder 2e. It adds dryly humorous critical results that are funny because the situation is awkward, overconfident, unexpectedly precise, or professionally embarrassing rather than because the rules turn into slapstick.

The humor is optional flavor. Every card in the pack carries a real, self-contained mechanical effect that still works if the table ignores the joke completely.

## Content

Version 0.1.1 contains **120 cards**:

- 12 critical attack hits
- 12 critical attack fumbles
- 12 critical spell-attack hits
- 12 critical spell-attack fumbles
- 12 Fortitude critical successes
- 12 Fortitude critical failures
- 12 Reflex critical successes
- 12 Reflex critical failures
- 12 Will critical successes
- 12 Will critical failures

The cards use Critical Forge's specialized `attack`, `fortitude`, `reflex`, and `will` decks.

## Tone

The pack aims for:

- dry understatement
- awkward competence
- tactical embarrassment
- overly formal descriptions of very immediate problems
- short moments that make players and GMs grin without turning the encounter into a cartoon

It deliberately avoids pies, banana peels, random costume failures, equipment destruction, or comedy that requires the game world to stop taking itself seriously.

## Mechanics

Effects are intentionally short-lived and use ordinary Critical Forge / PF2e mechanics such as:

- Off-Guard, Clumsy, Enfeebled, Frightened, Sickened, Slowed, Stupefied, Prone, and Dazzled
- circumstance modifiers to AC, attacks, saves, and spell statistics
- temporary Hit Points and fast healing
- short movement bonuses and penalties
- brief resistances, weaknesses, and immunity

No card causes permanent injury, destroys equipment, or requires additional bookkeeping outside the normal Critical Forge effect workflow.

## Requirements

- Foundry VTT 14
- PF2e 8.1.2+
- PF2E Critical Forge 1.0.1-rc.6.1 or newer
- Critical Forge public API 0.9.7+

## Registration

The add-on registers one protected multi-deck pack through the Critical Forge extension contract when `pf2eCriticalForgeReady` fires. It does not modify the Critical Forge core module or world-managed packs.

## Development

```bash
npm test
```

The included tests check card counts, category/deck coverage, unique identifiers, localization completeness, and the presence of mechanical effects on every card.
