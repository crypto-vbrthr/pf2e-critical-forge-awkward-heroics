import { defineAwkwardCard } from "../card-factory.js";

export const CARDS = Object.freeze([
  defineAwkwardCard({
    id: "reflex-success.exactly-where-not-to-be",
    group: "ReflexCriticalSuccess",
    key: "ExactlyWhereNotToBe",
    deckType: "reflex",
    category: "savingThrowCriticalSuccess",
    impact: "light",
    fallbackTitle: "Exactly Where Not to Be",
    fallbackDescription: "The movement ends in the only sensible place. In hindsight, that is of course completely obvious.",
    target: "source",
    components: [
      {
        "type": "modifier",
        "selector": "reflex",
        "value": 1,
        "modifierType": "circumstance",
        "predicate": []
      }
    ],
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "success"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "reflex-success.looked-intentional",
    group: "ReflexCriticalSuccess",
    key: "LookedIntentional",
    deckType: "reflex",
    category: "savingThrowCriticalSuccess",
    impact: "light",
    fallbackTitle: "Looked Intentional",
    fallbackDescription: "Whether it was planned is beside the point. The new position is defensively excellent.",
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
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "success", "defense"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "reflex-success.momentum-recovered",
    group: "ReflexCriticalSuccess",
    key: "MomentumRecovered",
    deckType: "reflex",
    category: "savingThrowCriticalSuccess",
    impact: "light",
    fallbackTitle: "Momentum Recovered",
    fallbackDescription: "The evasive movement does not cost rhythm. Surprisingly, it contributes some.",
    target: "source",
    components: [
      {
        "type": "movement",
        "movementType": "all",
        "value": 5,
        "modifierType": "circumstance"
      }
    ],
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "success", "movement"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "reflex-success.countertempo",
    group: "ReflexCriticalSuccess",
    key: "Countertempo",
    deckType: "reflex",
    category: "savingThrowCriticalSuccess",
    impact: "light",
    fallbackTitle: "Countertempo",
    fallbackDescription: "Evasion and counterattack suddenly look suspiciously similar. The next attack benefits.",
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
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "success", "boon"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "reflex-success.one-defense-teaches-another",
    group: "ReflexCriticalSuccess",
    key: "OneDefenseTeachesAnother",
    deckType: "reflex",
    category: "savingThrowCriticalSuccess",
    impact: "light",
    fallbackTitle: "One Defense Teaches Another",
    fallbackDescription: "The perfect movement briefly establishes a very useful pattern for further saving throws.",
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
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "success", "boon"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "reflex-success.near-miss-reserve",
    group: "ReflexCriticalSuccess",
    key: "NearMissReserve",
    deckType: "reflex",
    category: "savingThrowCriticalSuccess",
    impact: "light",
    fallbackTitle: "Near-Miss Reserve",
    fallbackDescription: "The effect was close enough to produce adrenaline, but not close enough to dispute the claim to it.",
    target: "source",
    components: [
      {
        "type": "temporaryHitPoints",
        "value": 3
      }
    ],
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "success", "boon"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "reflex-success.barely-touched",
    group: "ReflexCriticalSuccess",
    key: "BarelyTouched",
    deckType: "reflex",
    category: "savingThrowCriticalSuccess",
    impact: "moderate",
    fallbackTitle: "Barely Touched",
    fallbackDescription: "The movement briefly reduces the persuasive power of the next damage.",
    target: "source",
    components: [
      {
        "type": "resistance",
        "resistanceType": "all-damage",
        "value": 1
      }
    ],
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "success", "resistance"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "reflex-success.physical-gap-found",
    group: "ReflexCriticalSuccess",
    key: "PhysicalGapFound",
    deckType: "reflex",
    category: "savingThrowCriticalSuccess",
    impact: "moderate",
    fallbackTitle: "Physical Gap Found",
    fallbackDescription: "The evasive movement finds a position where ordinary physical violence briefly has weaker arguments.",
    target: "source",
    components: [
      {
        "type": "resistance",
        "resistanceType": "physical",
        "value": 2
      }
    ],
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "success", "resistance"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "reflex-success.circulation-improved",
    group: "ReflexCriticalSuccess",
    key: "CirculationImproved",
    deckType: "reflex",
    category: "savingThrowCriticalSuccess",
    impact: "moderate",
    fallbackTitle: "Circulation Unexpectedly Helpful",
    fallbackDescription: "The quick movement was apparently not medically useless. The body immediately begins minor repair work.",
    target: "source",
    components: [
      {
        "type": "fastHealing",
        "value": 2
      }
    ],
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "success", "recovery"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "reflex-success.confidence-catches-up",
    group: "ReflexCriticalSuccess",
    key: "ConfidenceCatchesUp",
    deckType: "reflex",
    category: "savingThrowCriticalSuccess",
    impact: "light",
    fallbackTitle: "Confidence Catches Up",
    fallbackDescription: "The mind realizes only afterward how close that was. Until then it considers the whole thing controlled and steadies the will.",
    target: "source",
    components: [
      {
        "type": "modifier",
        "selector": "will",
        "value": 1,
        "modifierType": "circumstance",
        "predicate": []
      }
    ],
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "success", "boon"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "reflex-success.breathing-room-found",
    group: "ReflexCriticalSuccess",
    key: "BreathingRoomFound",
    deckType: "reflex",
    category: "savingThrowCriticalSuccess",
    impact: "light",
    fallbackTitle: "Breathing Room Found",
    fallbackDescription: "The movement ends exactly where the body can briefly brace better against the next strain.",
    target: "source",
    components: [
      {
        "type": "modifier",
        "selector": "fortitude",
        "value": 1,
        "modifierType": "circumstance",
        "predicate": []
      }
    ],
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "success", "boon"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "reflex-success.already-elsewhere",
    group: "ReflexCriticalSuccess",
    key: "AlreadyElsewhere",
    deckType: "reflex",
    category: "savingThrowCriticalSuccess",
    impact: "strong",
    fallbackTitle: "Already Elsewhere",
    fallbackDescription: "The reflex was so clean that even the next movement starts with a small head start.",
    target: "source",
    components: [
      {
        "type": "movement",
        "movementType": "all",
        "value": 10,
        "modifierType": "circumstance"
      }
    ],
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "success", "movement"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "reflex-failure.wrong-direction-confirmed",
    group: "ReflexCriticalFailure",
    key: "WrongDirectionConfirmed",
    deckType: "reflex",
    category: "savingThrowCriticalFailure",
    impact: "strong",
    fallbackTitle: "Wrong Direction Confirmed",
    fallbackDescription: "The evasive movement begins with complete confidence and is reviewed from the floor.",
    target: "source",
    components: [
      {
        "type": "condition",
        "slug": "prone"
      }
    ],
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "failure", "control"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "reflex-failure.correction-in-progress",
    group: "ReflexCriticalFailure",
    key: "CorrectionInProgress",
    deckType: "reflex",
    category: "savingThrowCriticalFailure",
    impact: "moderate",
    fallbackTitle: "Correction in Progress",
    fallbackDescription: "The body attempts to evade and cancel the first evasive movement at the same time. Precision suffers.",
    target: "source",
    components: [
      {
        "type": "condition",
        "slug": "clumsy",
        "value": 1
      }
    ],
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "failure", "control"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "reflex-failure.momentum-filed-elsewhere",
    group: "ReflexCriticalFailure",
    key: "MomentumFiledElsewhere",
    deckType: "reflex",
    category: "savingThrowCriticalFailure",
    impact: "light",
    fallbackTitle: "Momentum Went Ahead Without You",
    fallbackDescription: "The dodge spends more momentum than it returns. The next movement starts with noticeably less of it.",
    target: "source",
    components: [
      {
        "type": "movement",
        "movementType": "all",
        "value": -5,
        "modifierType": "circumstance"
      }
    ],
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "failure", "movement"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "reflex-failure.defense-still-turning",
    group: "ReflexCriticalFailure",
    key: "DefenseStillTurning",
    deckType: "reflex",
    category: "savingThrowCriticalFailure",
    impact: "light",
    fallbackTitle: "Defense Still Turning",
    fallbackDescription: "The danger has passed, but the body is still finishing the dodge. Guard takes a moment to catch up.",
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
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "failure", "defense"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "reflex-failure.second-guessing-the-dodge",
    group: "ReflexCriticalFailure",
    key: "SecondGuessingTheDodge",
    deckType: "reflex",
    category: "savingThrowCriticalFailure",
    impact: "light",
    fallbackTitle: "Second-Guessing the Dodge",
    fallbackDescription: "The next reflex begins with a brief internal discussion about the strategy used so far.",
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
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "failure", "debuff"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "reflex-failure.hands-still-catching-up",
    group: "ReflexCriticalFailure",
    key: "HandsStillCatchingUp",
    deckType: "reflex",
    category: "savingThrowCriticalFailure",
    impact: "light",
    fallbackTitle: "The Hands Are Still Catching Up",
    fallbackDescription: "The movement was disorganized enough that attacks briefly wait for delayed feedback.",
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
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "failure", "debuff"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "reflex-failure.general-evasion-concern",
    group: "ReflexCriticalFailure",
    key: "GeneralEvasionConcern",
    deckType: "reflex",
    category: "savingThrowCriticalFailure",
    impact: "moderate",
    fallbackTitle: "One Bad Step Echoes",
    fallbackDescription: "The failed dodge leaves every defensive instinct slightly out of tune for a moment.",
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
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "failure", "debuff"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "reflex-failure.standing-somewhere-technically",
    group: "ReflexCriticalFailure",
    key: "StandingSomewhereTechnically",
    deckType: "reflex",
    category: "savingThrowCriticalFailure",
    impact: "light",
    fallbackTitle: "Technically Still Standing Somewhere",
    fallbackDescription: "The position satisfies the minimum geometric requirements. Defensive advantages are not among them.",
    target: "source",
    components: [
      {
        "type": "condition",
        "slug": "off-guard"
      }
    ],
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "failure", "control"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "reflex-failure.pause-for-recalculation",
    group: "ReflexCriticalFailure",
    key: "PauseForRecalculation",
    deckType: "reflex",
    category: "savingThrowCriticalFailure",
    impact: "strong",
    fallbackTitle: "Pause for Recalculation",
    fallbackDescription: "The movement was wrong enough that the next action briefly has to wait for new coordinates.",
    target: "source",
    components: [
      {
        "type": "condition",
        "slug": "slowed",
        "value": 1
      }
    ],
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "failure", "action-economy"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "reflex-failure.visual-data-delayed",
    group: "ReflexCriticalFailure",
    key: "VisualDataDelayed",
    deckType: "reflex",
    category: "savingThrowCriticalFailure",
    impact: "light",
    fallbackTitle: "Visual Data Delayed",
    fallbackDescription: "The eyes and the rest of the body disagreed slightly about direction. Vision needs a moment.",
    target: "source",
    components: [
      {
        "type": "condition",
        "slug": "dazzled"
      }
    ],
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "failure", "sensory"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "reflex-failure.everything-found-the-opening",
    group: "ReflexCriticalFailure",
    key: "EverythingFoundTheOpening",
    deckType: "reflex",
    category: "savingThrowCriticalFailure",
    impact: "moderate",
    fallbackTitle: "Everything Found the Opening",
    fallbackDescription: "The failed movement leaves a position where further damage finds follow-up opportunities suspiciously easily.",
    target: "source",
    components: [
      {
        "type": "weakness",
        "weaknessType": "all-damage",
        "value": 1
      }
    ],
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "failure", "vulnerability"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "reflex-failure.physics-takes-notes",
    group: "ReflexCriticalFailure",
    key: "PhysicsTakesNotes",
    deckType: "reflex",
    category: "savingThrowCriticalFailure",
    impact: "moderate",
    fallbackTitle: "Physics Takes Notes",
    fallbackDescription: "Physical hits briefly receive a very clear idea of where they should land.",
    target: "source",
    components: [
      {
        "type": "weakness",
        "weaknessType": "physical",
        "value": 2
      }
    ],
    filters: {
      "saveTypes": [
        "reflex"
      ]
    },
    tags: ["save", "reflex", "failure", "vulnerability"],
    weight: 1
  }),
]);
