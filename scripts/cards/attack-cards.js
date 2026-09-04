import { defineAwkwardCard } from "../card-factory.js";

export const CARDS = Object.freeze([
  defineAwkwardCard({
    id: "attack-hit.better-than-planned",
    group: "AttackCriticalHit",
    key: "BetterThanPlanned",
    deckType: "attack",
    category: "criticalHit",
    impact: "light",
    fallbackTitle: "Better Than Planned",
    fallbackDescription: "The hit is technically flawless. The target has objections, but currently not a particularly convincing defense.",
    target: "target",
    components: [
      {
        "type": "condition",
        "slug": "off-guard"
      }
    ],
    filters: {},
    tags: ["attack", "hit", "control"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "attack-hit.convincing-argument",
    group: "AttackCriticalHit",
    key: "ConvincingArgument",
    deckType: "attack",
    category: "criticalHit",
    impact: "moderate",
    fallbackTitle: "Convincing Argument",
    fallbackDescription: "It was not a conversation, but the message arrived. The target briefly questions how the rest of this is going to go.",
    target: "target",
    components: [
      {
        "type": "condition",
        "slug": "frightened",
        "value": 1
      }
    ],
    filters: {
      "excludedTargetTraits": [
        "mindless"
      ]
    },
    tags: ["attack", "hit", "emotion"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "attack-hit.still-in-motion",
    group: "AttackCriticalHit",
    key: "StillInMotion",
    deckType: "attack",
    category: "criticalHit",
    impact: "light",
    fallbackTitle: "Still in Motion",
    fallbackDescription: "The strike ends exactly where the next good idea can begin. That is rarely convenient, but this time it is.",
    target: "source",
    components: [
      {
        "type": "modifier",
        "selector": "attack-roll",
        "value": 1,
        "modifierType": "circumstance",
        "predicate": []
      }
    ],
    filters: {},
    tags: ["attack", "hit", "boon"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "attack-hit.that-was-the-gap",
    group: "AttackCriticalHit",
    key: "ThatWasTheGap",
    deckType: "attack",
    category: "criticalHit",
    impact: "moderate",
    fallbackTitle: "That Was the Gap",
    fallbackDescription: "It is now perfectly clear where the defense does not work. Unfortunately for the target, the demonstration was conducted live.",
    target: "target",
    components: [
      {
        "type": "modifier",
        "selector": "ac",
        "value": -1,
        "modifierType": "circumstance",
        "predicate": []
      }
    ],
    filters: {},
    tags: ["attack", "hit", "defense"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "attack-hit.brief-reassessment",
    group: "AttackCriticalHit",
    key: "BriefReassessment",
    deckType: "attack",
    category: "criticalHit",
    impact: "light",
    fallbackTitle: "Brief Reassessment",
    fallbackDescription: "The target reevaluates its attacking technique. The current assessment is unexpectedly critical.",
    target: "target",
    components: [
      {
        "type": "modifier",
        "selector": "attack-roll",
        "value": -1,
        "modifierType": "circumstance",
        "predicate": []
      }
    ],
    filters: {},
    tags: ["attack", "hit", "debuff"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "attack-hit.firmly-worded",
    group: "AttackCriticalHit",
    key: "FirmlyWorded",
    deckType: "attack",
    category: "criticalHit",
    impact: "moderate",
    fallbackTitle: "Firmly Worded",
    fallbackDescription: "The strike temporarily removes some of the strength the target had been using with considerable confidence.",
    target: "target",
    components: [
      {
        "type": "condition",
        "slug": "enfeebled",
        "value": 1
      }
    ],
    filters: {},
    tags: ["attack", "hit", "debuff"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "attack-hit.stance-correction",
    group: "AttackCriticalHit",
    key: "StanceCorrection",
    deckType: "attack",
    category: "criticalHit",
    impact: "moderate",
    fallbackTitle: "Stance Correction",
    fallbackDescription: "The target's stance undergoes an involuntary revision. The result is functional, but not elegant.",
    target: "target",
    components: [
      {
        "type": "condition",
        "slug": "clumsy",
        "value": 1
      }
    ],
    filters: {},
    tags: ["attack", "hit", "control"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "attack-hit.good-posture-for-now",
    group: "AttackCriticalHit",
    key: "GoodPostureForNow",
    deckType: "attack",
    category: "criticalHit",
    impact: "light",
    fallbackTitle: "Good Posture, for Now",
    fallbackDescription: "The motion is clean enough that the attacker briefly appears defensively organized as well.",
    target: "source",
    components: [
      {
        "type": "modifier",
        "selector": "ac",
        "value": 1,
        "modifierType": "circumstance",
        "predicate": []
      }
    ],
    filters: {},
    tags: ["attack", "hit", "boon"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "attack-hit.now-we-know-the-spot",
    group: "AttackCriticalHit",
    key: "NowWeKnowTheSpot",
    deckType: "attack",
    category: "criticalHit",
    impact: "moderate",
    fallbackTitle: "Now We Know the Spot",
    fallbackDescription: "The hit identifies a weak point with persuasive clarity. Everyone involved may briefly make use of that information.",
    target: "target",
    components: [
      {
        "type": "weakness",
        "weaknessType": "all-damage",
        "value": 1
      }
    ],
    filters: {},
    tags: ["attack", "hit", "vulnerability"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "attack-hit.unnecessarily-clean",
    group: "AttackCriticalHit",
    key: "UnnecessarilyClean",
    deckType: "attack",
    category: "criticalHit",
    impact: "light",
    fallbackTitle: "Unnecessarily Clean",
    fallbackDescription: "The hit lands with a level of precision nobody requested. Confidence accepts the bonus anyway.",
    target: "source",
    components: [
      {
        "type": "temporaryHitPoints",
        "value": 3
      }
    ],
    filters: {},
    tags: ["attack", "hit", "boon"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "attack-hit.excellent-line",
    group: "AttackCriticalHit",
    key: "ExcellentLine",
    deckType: "attack",
    category: "criticalHit",
    impact: "light",
    fallbackTitle: "Excellent Line",
    fallbackDescription: "The attack arrives from an angle that briefly ruins the target's view of the situation. Very educational, probably later.",
    target: "target",
    components: [
      {
        "type": "condition",
        "slug": "dazzled"
      }
    ],
    filters: {},
    tags: ["attack", "hit", "sensory"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "attack-hit.plan-confirmed",
    group: "AttackCriticalHit",
    key: "PlanConfirmed",
    deckType: "attack",
    category: "criticalHit",
    impact: "light",
    fallbackTitle: "Plan Confirmed",
    fallbackDescription: "Apparently the idea was sound. This rare realization steadies the attacker for the next unpleasant surprise.",
    target: "source",
    components: [
      {
        "type": "modifier",
        "selector": "saving-throw",
        "value": 1,
        "modifierType": "circumstance",
        "predicate": []
      }
    ],
    filters: {},
    tags: ["attack", "hit", "boon"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "attack-fumble.technically-an-attack",
    group: "AttackCriticalFumble",
    key: "TechnicallyAnAttack",
    deckType: "attack",
    category: "criticalFumble",
    impact: "light",
    fallbackTitle: "Technically an Attack",
    fallbackDescription: "The motion meets the minimum requirements for an attack. The defense, unfortunately, no longer does.",
    target: "source",
    components: [
      {
        "type": "condition",
        "slug": "off-guard"
      }
    ],
    filters: {},
    tags: ["attack", "fumble", "control"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "attack-fumble.weapon-not-at-fault",
    group: "AttackCriticalFumble",
    key: "WeaponNotAtFault",
    deckType: "attack",
    category: "criticalFumble",
    impact: "light",
    fallbackTitle: "The Weapon Was Not at Fault",
    fallbackDescription: "At least that much is settled. Unfortunately, the next attack still has to carry the awkward burden of that conclusion.",
    target: "source",
    components: [
      {
        "type": "modifier",
        "selector": "attack-roll",
        "value": -1,
        "modifierType": "circumstance",
        "predicate": []
      }
    ],
    filters: {},
    tags: ["attack", "fumble", "debuff"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "attack-fumble.center-of-gravity-reassigned",
    group: "AttackCriticalFumble",
    key: "CenterOfGravityReassigned",
    deckType: "attack",
    category: "criticalFumble",
    impact: "moderate",
    fallbackTitle: "Center of Gravity Reassigned",
    fallbackDescription: "The attack ends with a new and unrequested weight distribution. Precise movement is temporarily optional.",
    target: "source",
    components: [
      {
        "type": "condition",
        "slug": "clumsy",
        "value": 1
      }
    ],
    filters: {},
    tags: ["attack", "fumble", "control"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "attack-fumble.too-much-commitment",
    group: "AttackCriticalFumble",
    key: "TooMuchCommitment",
    deckType: "attack",
    category: "criticalFumble",
    impact: "moderate",
    fallbackTitle: "Too Much Commitment",
    fallbackDescription: "The attack receives one hundred percent effort and roughly sixty percent result. The muscles keep records.",
    target: "source",
    components: [
      {
        "type": "condition",
        "slug": "enfeebled",
        "value": 1
      }
    ],
    filters: {},
    tags: ["attack", "fumble", "debuff"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "attack-fumble.brief-self-critique",
    group: "AttackCriticalFumble",
    key: "BriefSelfCritique",
    deckType: "attack",
    category: "criticalFumble",
    impact: "moderate",
    fallbackTitle: "Brief Self-Critique",
    fallbackDescription: "For a moment, the entirely reasonable question arises whether that truly was the best available idea.",
    target: "source",
    components: [
      {
        "type": "condition",
        "slug": "frightened",
        "value": 1
      }
    ],
    filters: {
      "excludedSourceTraits": [
        "mindless"
      ]
    },
    tags: ["attack", "fumble", "emotion"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "attack-fumble.plan-b-unprepared",
    group: "AttackCriticalFumble",
    key: "PlanBUnprepared",
    deckType: "attack",
    category: "criticalFumble",
    impact: "light",
    fallbackTitle: "There Was a Follow-Through",
    fallbackDescription: "The attack continues a little beyond the useful part. Returning to a sensible guard takes noticeably longer.",
    target: "source",
    components: [
      {
        "type": "modifier",
        "selector": "ac",
        "value": -1,
        "modifierType": "circumstance",
        "predicate": []
      }
    ],
    filters: {},
    tags: ["attack", "fumble", "defense"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "attack-fumble.tempo-misplaced",
    group: "AttackCriticalFumble",
    key: "TempoMisplaced",
    deckType: "attack",
    category: "criticalFumble",
    impact: "light",
    fallbackTitle: "Tempo Misplaced",
    fallbackDescription: "Somewhere between windup and outcome, part of the movement flow went missing. It may turn up later.",
    target: "source",
    components: [
      {
        "type": "movement",
        "movementType": "all",
        "value": -5,
        "modifierType": "circumstance"
      }
    ],
    filters: {},
    tags: ["attack", "fumble", "movement"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "attack-fumble.correction-too-late",
    group: "AttackCriticalFumble",
    key: "CorrectionTooLate",
    deckType: "attack",
    category: "criticalFumble",
    impact: "light",
    fallbackTitle: "Correction Too Late",
    fallbackDescription: "The correct evasive movement is identified, unfortunately only after the incorrect one has finished.",
    target: "source",
    components: [
      {
        "type": "modifier",
        "selector": "reflex",
        "value": -1,
        "modifierType": "circumstance",
        "predicate": []
      }
    ],
    filters: {},
    tags: ["attack", "fumble", "save"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "attack-fumble.unexpected-pause",
    group: "AttackCriticalFumble",
    key: "UnexpectedPause",
    deckType: "attack",
    category: "criticalFumble",
    impact: "strong",
    fallbackTitle: "Unexpected Pause",
    fallbackDescription: "The failure interrupts the rhythm thoroughly enough that the next moment requires some reorganization.",
    target: "source",
    components: [
      {
        "type": "condition",
        "slug": "slowed",
        "value": 1
      }
    ],
    filters: {},
    tags: ["attack", "fumble", "action-economy"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "attack-fumble.concentration-outsourced",
    group: "AttackCriticalFumble",
    key: "ConcentrationOutsourced",
    deckType: "attack",
    category: "criticalFumble",
    impact: "light",
    fallbackTitle: "Still Thinking About That",
    fallbackDescription: "The attack is over. The mind has not entirely accepted this and briefly remains occupied with the details.",
    target: "source",
    components: [
      {
        "type": "modifier",
        "selector": "will",
        "value": -1,
        "modifierType": "circumstance",
        "predicate": []
      }
    ],
    filters: {},
    tags: ["attack", "fumble", "save"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "attack-fumble.breathing-was-optional",
    group: "AttackCriticalFumble",
    key: "BreathingWasOptional",
    deckType: "attack",
    category: "criticalFumble",
    impact: "light",
    fallbackTitle: "Breathing Was Apparently Optional",
    fallbackDescription: "The attack demanded everything at once. The lungs would like to point out that they were included in \"everything\".",
    target: "source",
    components: [
      {
        "type": "modifier",
        "selector": "fortitude",
        "value": -1,
        "modifierType": "circumstance",
        "predicate": []
      }
    ],
    filters: {},
    tags: ["attack", "fumble", "save"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "attack-fumble.general-confidence-review",
    group: "AttackCriticalFumble",
    key: "GeneralConfidenceReview",
    deckType: "attack",
    category: "criticalFumble",
    impact: "moderate",
    fallbackTitle: "That Shook More Than Intended",
    fallbackDescription: "One bad attack unsettles more than the weapon arm. For a moment, every defensive instinct is slightly less certain.",
    target: "source",
    components: [
      {
        "type": "modifier",
        "selector": "saving-throw",
        "value": -1,
        "modifierType": "circumstance",
        "predicate": []
      }
    ],
    filters: {},
    tags: ["attack", "fumble", "save"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-hit.formula-was-right",
    group: "SpellCriticalHit",
    key: "FormulaWasRight",
    deckType: "attack",
    category: "spellCriticalHit",
    impact: "moderate",
    fallbackTitle: "The Formula Was Right",
    fallbackDescription: "The magic reaches its target exactly as calculated. The target needs a moment to process this unpleasant academic defeat.",
    target: "target",
    components: [
      {
        "type": "condition",
        "slug": "stupefied",
        "value": 1
      }
    ],
    filters: {},
    tags: ["spell", "hit", "mental-pressure"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-hit.more-emphasis-than-planned",
    group: "SpellCriticalHit",
    key: "MoreEmphasisThanPlanned",
    deckType: "attack",
    category: "spellCriticalHit",
    impact: "moderate",
    fallbackTitle: "More Emphasis Than Planned",
    fallbackDescription: "The spell leaves a pronounced magical resonance. Further spells now find the target regrettably receptive.",
    target: "target",
    components: [
      {
        "type": "weakness",
        "weaknessType": "damage-from-spells",
        "value": 2
      }
    ],
    filters: {},
    tags: ["spell", "hit", "vulnerability"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-hit.cleanly-compiled",
    group: "SpellCriticalHit",
    key: "CleanlyCompiled",
    deckType: "attack",
    category: "spellCriticalHit",
    impact: "light",
    fallbackTitle: "Cleanly Compiled",
    fallbackDescription: "No visible errors, no embarrassing side effects, not even smoke. The next spell attack benefits from this rare condition.",
    target: "source",
    components: [
      {
        "type": "modifier",
        "selector": "spell-attack-roll",
        "value": 1,
        "modifierType": "circumstance",
        "predicate": []
      }
    ],
    filters: {},
    tags: ["spell", "hit", "boon"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-hit.magical-debrief",
    group: "SpellCriticalHit",
    key: "MagicalDebrief",
    deckType: "attack",
    category: "spellCriticalHit",
    impact: "moderate",
    fallbackTitle: "Lesson Arrives First",
    fallbackDescription: "The target now understands exactly what went wrong. This knowledge arrives slightly too late to help with the next defense.",
    target: "target",
    components: [
      {
        "type": "modifier",
        "selector": "saving-throw",
        "value": -1,
        "modifierType": "circumstance",
        "predicate": []
      }
    ],
    filters: {},
    tags: ["spell", "hit", "debuff"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-hit.not-subtle",
    group: "SpellCriticalHit",
    key: "NotSubtle",
    deckType: "attack",
    category: "spellCriticalHit",
    impact: "moderate",
    fallbackTitle: "That Was Not Subtle",
    fallbackDescription: "The spell makes its point with remarkable clarity. The target briefly takes the rest of the situation more seriously.",
    target: "target",
    components: [
      {
        "type": "condition",
        "slug": "frightened",
        "value": 1
      }
    ],
    filters: {
      "excludedTargetTraits": [
        "mindless"
      ]
    },
    tags: ["spell", "hit", "emotion"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-hit.secondary-effects-included",
    group: "SpellCriticalHit",
    key: "SecondaryEffectsIncluded",
    deckType: "attack",
    category: "spellCriticalHit",
    impact: "light",
    fallbackTitle: "Secondary Effects Included",
    fallbackDescription: "The spell does what it was meant to do and then, with unnecessary enthusiasm, keeps going. The target's vision briefly objects.",
    target: "target",
    components: [
      {
        "type": "condition",
        "slug": "dazzled"
      }
    ],
    filters: {},
    tags: ["spell", "hit", "sensory"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-hit.residual-arcane-pressure",
    group: "SpellCriticalHit",
    key: "ResidualArcanePressure",
    deckType: "attack",
    category: "spellCriticalHit",
    impact: "light",
    fallbackTitle: "Residual Magical Pressure",
    fallbackDescription: "The energy lingers just long enough to leave the target's defense inconveniently untidy.",
    target: "target",
    components: [
      {
        "type": "modifier",
        "selector": "ac",
        "value": -1,
        "modifierType": "circumstance",
        "predicate": []
      }
    ],
    filters: {},
    tags: ["spell", "hit", "defense"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-hit.theory-wins",
    group: "SpellCriticalHit",
    key: "TheoryWins",
    deckType: "attack",
    category: "spellCriticalHit",
    impact: "light",
    fallbackTitle: "Theory Wins",
    fallbackDescription: "For one brief and precious moment, practice agrees with the notes. Even the spell DC seems more confident.",
    target: "source",
    components: [
      {
        "type": "modifier",
        "selector": "spell-dc",
        "value": 1,
        "modifierType": "circumstance",
        "predicate": []
      }
    ],
    filters: {},
    tags: ["spell", "hit", "boon"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-hit.overqualified",
    group: "SpellCriticalHit",
    key: "Overqualified",
    deckType: "attack",
    category: "spellCriticalHit",
    impact: "light",
    fallbackTitle: "Overqualified",
    fallbackDescription: "The spell solves the problem more thoroughly than required. The caster keeps the small surplus of confidence.",
    target: "source",
    components: [
      {
        "type": "temporaryHitPoints",
        "value": 3
      }
    ],
    filters: {},
    tags: ["spell", "hit", "boon"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-hit.excellent-example",
    group: "SpellCriticalHit",
    key: "ExcellentExample",
    deckType: "attack",
    category: "spellCriticalHit",
    impact: "light",
    fallbackTitle: "Excellent Example",
    fallbackDescription: "If anyone later asks what this is supposed to look like, this would have made a respectable textbook sidebar.",
    target: "source",
    components: [
      {
        "type": "modifier",
        "selector": "saving-throw",
        "value": 1,
        "modifierType": "circumstance",
        "predicate": []
      }
    ],
    filters: {},
    tags: ["spell", "hit", "boon"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-hit.magic-with-follow-through",
    group: "SpellCriticalHit",
    key: "MagicWithFollowThrough",
    deckType: "attack",
    category: "spellCriticalHit",
    impact: "light",
    fallbackTitle: "Magic with Follow-Through",
    fallbackDescription: "The spell ends. Its opinion about the target's mobility apparently does not.",
    target: "target",
    components: [
      {
        "type": "movement",
        "movementType": "all",
        "value": -5,
        "modifierType": "circumstance"
      }
    ],
    filters: {},
    tags: ["spell", "hit", "movement"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-hit.uncomfortably-persuasive",
    group: "SpellCriticalHit",
    key: "UncomfortablyPersuasive",
    deckType: "attack",
    category: "spellCriticalHit",
    impact: "light",
    fallbackTitle: "Uncomfortably Persuasive",
    fallbackDescription: "The magical argument leaves a gap in the defense. Nobody is required to be happy about it.",
    target: "target",
    components: [
      {
        "type": "condition",
        "slug": "off-guard"
      }
    ],
    filters: {},
    tags: ["spell", "hit", "control"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-fumble.theory-meets-practice",
    group: "SpellCriticalFumble",
    key: "TheoryMeetsPractice",
    deckType: "attack",
    category: "spellCriticalFumble",
    impact: "moderate",
    fallbackTitle: "Theory Meets Practice",
    fallbackDescription: "The meeting is tense. The caster needs a moment to determine which part of the theory just lost.",
    target: "source",
    components: [
      {
        "type": "condition",
        "slug": "stupefied",
        "value": 1
      }
    ],
    filters: {},
    tags: ["spell", "fumble", "debuff"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-fumble.feedback-received",
    group: "SpellCriticalFumble",
    key: "FeedbackReceived",
    deckType: "attack",
    category: "spellCriticalFumble",
    impact: "moderate",
    fallbackTitle: "Feedback Received",
    fallbackDescription: "The magic provides immediate feedback. Unfortunately, it is technically correct and briefly makes the caster more vulnerable to further spells.",
    target: "source",
    components: [
      {
        "type": "weakness",
        "weaknessType": "damage-from-spells",
        "value": 2
      }
    ],
    filters: {},
    tags: ["spell", "fumble", "vulnerability"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-fumble.formula-objects",
    group: "SpellCriticalFumble",
    key: "FormulaObjects",
    deckType: "attack",
    category: "spellCriticalFumble",
    impact: "light",
    fallbackTitle: "Formula with Objections",
    fallbackDescription: "The spell does not merely miss. It leaves the caster briefly uncertain whether the next targeting calculation can be trusted.",
    target: "source",
    components: [
      {
        "type": "modifier",
        "selector": "spell-attack-roll",
        "value": -1,
        "modifierType": "circumstance",
        "predicate": []
      }
    ],
    filters: {},
    tags: ["spell", "fumble", "debuff"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-fumble.concentration-with-noise",
    group: "SpellCriticalFumble",
    key: "ConcentrationWithNoise",
    deckType: "attack",
    category: "spellCriticalFumble",
    impact: "light",
    fallbackTitle: "Concentration with Background Noise",
    fallbackDescription: "The mental workspace is suddenly remarkably crowded. Precise magical difficulty suffers briefly.",
    target: "source",
    components: [
      {
        "type": "modifier",
        "selector": "spell-dc",
        "value": -1,
        "modifierType": "circumstance",
        "predicate": []
      }
    ],
    filters: {},
    tags: ["spell", "fumble", "debuff"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-fumble.magical-hangover",
    group: "SpellCriticalFumble",
    key: "MagicalHangover",
    deckType: "attack",
    category: "spellCriticalFumble",
    impact: "moderate",
    fallbackTitle: "Magical Hangover",
    fallbackDescription: "The spell briefly went somewhere it should not have. The body responds with a very formal complaint.",
    target: "source",
    components: [
      {
        "type": "condition",
        "slug": "sickened",
        "value": 1
      }
    ],
    filters: {},
    tags: ["spell", "fumble", "debuff"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-fumble.should-glow-differently",
    group: "SpellCriticalFumble",
    key: "ShouldGlowDifferently",
    deckType: "attack",
    category: "spellCriticalFumble",
    impact: "light",
    fallbackTitle: "That Should Glow Differently",
    fallbackDescription: "The good news: it glows. The less good news: the caster briefly sees worse afterward.",
    target: "source",
    components: [
      {
        "type": "condition",
        "slug": "dazzled"
      }
    ],
    filters: {},
    tags: ["spell", "fumble", "sensory"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-fumble.too-focused-on-details",
    group: "SpellCriticalFumble",
    key: "TooFocusedOnDetails",
    deckType: "attack",
    category: "spellCriticalFumble",
    impact: "light",
    fallbackTitle: "Too Focused on the Details",
    fallbackDescription: "Attention remains trapped in the failed formula. For a moment, there is simply not enough left for a convincing defense.",
    target: "source",
    components: [
      {
        "type": "modifier",
        "selector": "ac",
        "value": -1,
        "modifierType": "circumstance",
        "predicate": []
      }
    ],
    filters: {},
    tags: ["spell", "fumble", "defense"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-fumble.confidence-short-circuit",
    group: "SpellCriticalFumble",
    key: "ConfidenceShortCircuit",
    deckType: "attack",
    category: "spellCriticalFumble",
    impact: "moderate",
    fallbackTitle: "Confidence Short Circuit",
    fallbackDescription: "Magic is allowed to be complicated. It simply does not need to make the point this personally.",
    target: "source",
    components: [
      {
        "type": "condition",
        "slug": "frightened",
        "value": 1
      }
    ],
    filters: {
      "excludedSourceTraits": [
        "mindless"
      ]
    },
    tags: ["spell", "fumble", "emotion"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-fumble.backlash-needs-space",
    group: "SpellCriticalFumble",
    key: "BacklashNeedsSpace",
    deckType: "attack",
    category: "spellCriticalFumble",
    impact: "light",
    fallbackTitle: "The Backlash Needs Room",
    fallbackDescription: "The magic takes up space. The caster briefly has to make do with less movement.",
    target: "source",
    components: [
      {
        "type": "movement",
        "movementType": "all",
        "value": -5,
        "modifierType": "circumstance"
      }
    ],
    filters: {},
    tags: ["spell", "fumble", "movement"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-fumble.another-attempt-later",
    group: "SpellCriticalFumble",
    key: "AnotherAttemptLater",
    deckType: "attack",
    category: "spellCriticalFumble",
    impact: "strong",
    fallbackTitle: "Another Attempt. Later.",
    fallbackDescription: "The failure is thorough enough to knock the flow of action out of rhythm for a moment.",
    target: "source",
    components: [
      {
        "type": "condition",
        "slug": "slowed",
        "value": 1
      }
    ],
    filters: {},
    tags: ["spell", "fumble", "action-economy"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-fumble.magic-remembers",
    group: "SpellCriticalFumble",
    key: "MagicRemembers",
    deckType: "attack",
    category: "spellCriticalFumble",
    impact: "moderate",
    fallbackTitle: "The Magic Remembers",
    fallbackDescription: "For a brief moment, every further defense feels as though the universe took notes.",
    target: "source",
    components: [
      {
        "type": "modifier",
        "selector": "saving-throw",
        "value": -1,
        "modifierType": "circumstance",
        "predicate": []
      }
    ],
    filters: {},
    tags: ["spell", "fumble", "save"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "spell-fumble.open-questions",
    group: "SpellCriticalFumble",
    key: "OpenQuestions",
    deckType: "attack",
    category: "spellCriticalFumble",
    impact: "light",
    fallbackTitle: "Open Questions",
    fallbackDescription: "The spell fails, and the stance follows. At least the sequence is clear.",
    target: "source",
    components: [
      {
        "type": "condition",
        "slug": "off-guard"
      }
    ],
    filters: {},
    tags: ["spell", "fumble", "control"],
    weight: 1
  }),
]);
