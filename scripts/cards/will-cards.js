import { defineAwkwardCard } from "../card-factory.js";

export const CARDS = Object.freeze([
  defineAwkwardCard({
    id: "will-success.no",
    group: "WillCriticalSuccess",
    key: "No",
    deckType: "will",
    category: "savingThrowCriticalSuccess",
    impact: "light",
    fallbackTitle: "No.",
    fallbackDescription: "The mental dispute ends with remarkable brevity. The will remains steadier for the next request.",
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
        "will"
      ]
    },
    tags: ["save", "will", "success"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "will-success.noted-and-rejected",
    group: "WillCriticalSuccess",
    key: "NotedAndRejected",
    deckType: "will",
    category: "savingThrowCriticalSuccess",
    impact: "light",
    fallbackTitle: "Noted and Rejected",
    fallbackDescription: "The effect receives a complete internal review and still no admission. Other defenses briefly benefit from the clarity.",
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
        "will"
      ]
    },
    tags: ["save", "will", "success", "boon"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "will-success.fear-appointment-cancelled",
    group: "WillCriticalSuccess",
    key: "FearAppointmentCancelled",
    deckType: "will",
    category: "savingThrowCriticalSuccess",
    impact: "moderate",
    fallbackTitle: "Fear Appointment Cancelled",
    fallbackDescription: "After that defense, fear has no available appointment for a short while.",
    target: "source",
    components: [
      {
        "type": "immunity",
        "immunityType": "frightened"
      }
    ],
    filters: {
      "saveTypes": [
        "will"
      ]
    },
    tags: ["save", "will", "success", "immunity"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "will-success.confidence-dividend",
    group: "WillCriticalSuccess",
    key: "ConfidenceDividend",
    deckType: "will",
    category: "savingThrowCriticalSuccess",
    impact: "light",
    fallbackTitle: "Confidence to Spare",
    fallbackDescription: "The mind wins cleanly enough to have a little certainty left over. The body turns it into temporary resilience.",
    target: "source",
    components: [
      {
        "type": "temporaryHitPoints",
        "value": 3
      }
    ],
    filters: {
      "saveTypes": [
        "will"
      ]
    },
    tags: ["save", "will", "success", "boon"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "will-success.argument-won",
    group: "WillCriticalSuccess",
    key: "ArgumentWon",
    deckType: "will",
    category: "savingThrowCriticalSuccess",
    impact: "light",
    fallbackTitle: "Argument Won",
    fallbackDescription: "The mind is unusually certain of itself. The next attack may benefit from this rare internal agreement.",
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
        "will"
      ]
    },
    tags: ["save", "will", "success", "boon"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "will-success.composure-restored",
    group: "WillCriticalSuccess",
    key: "ComposureRestored",
    deckType: "will",
    category: "savingThrowCriticalSuccess",
    impact: "light",
    fallbackTitle: "Composure Restored",
    fallbackDescription: "The mental defense is clean enough that even physical guard briefly looks more organized.",
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
        "will"
      ]
    },
    tags: ["save", "will", "success", "defense"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "will-success.mental-noise-reduced",
    group: "WillCriticalSuccess",
    key: "MentalNoiseReduced",
    deckType: "will",
    category: "savingThrowCriticalSuccess",
    impact: "moderate",
    fallbackTitle: "Mental Noise Reduced",
    fallbackDescription: "The defense briefly creates quiet in the mind. Mental damage has to work harder to make itself heard.",
    target: "source",
    components: [
      {
        "type": "resistance",
        "resistanceType": "mental",
        "value": 2
      }
    ],
    filters: {
      "saveTypes": [
        "will"
      ]
    },
    tags: ["save", "will", "success", "resistance"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "will-success.general-resolve",
    group: "WillCriticalSuccess",
    key: "GeneralResolve",
    deckType: "will",
    category: "savingThrowCriticalSuccess",
    impact: "moderate",
    fallbackTitle: "General Resolve",
    fallbackDescription: "The mental clarity briefly radiates surprisingly far. Even ordinary damage encounters a little more resistance.",
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
        "will"
      ]
    },
    tags: ["save", "will", "success", "resistance"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "will-success.nerves-begin-repairs",
    group: "WillCriticalSuccess",
    key: "NervesBeginRepairs",
    deckType: "will",
    category: "savingThrowCriticalSuccess",
    impact: "moderate",
    fallbackTitle: "The Nerves Begin Repairs",
    fallbackDescription: "The thoughts are orderly enough again that the body apparently begins post-processing immediately.",
    target: "source",
    components: [
      {
        "type": "fastHealing",
        "value": 2
      }
    ],
    filters: {
      "saveTypes": [
        "will"
      ]
    },
    tags: ["save", "will", "success", "recovery"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "will-success.body-follows-mind",
    group: "WillCriticalSuccess",
    key: "BodyFollowsMind",
    deckType: "will",
    category: "savingThrowCriticalSuccess",
    impact: "light",
    fallbackTitle: "The Body Follows the Mind",
    fallbackDescription: "The will prevails, and the body's defenses gratefully accept the unusually clear instruction.",
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
        "will"
      ]
    },
    tags: ["save", "will", "success", "boon"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "will-success.reflexes-get-the-memo",
    group: "WillCriticalSuccess",
    key: "ReflexesGetTheMemo",
    deckType: "will",
    category: "savingThrowCriticalSuccess",
    impact: "light",
    fallbackTitle: "Clarity Reaches the Feet",
    fallbackDescription: "For once, thought and motion agree immediately. The reflexes briefly sharpen.",
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
        "will"
      ]
    },
    tags: ["save", "will", "success", "boon"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "will-success.very-sure-about-this",
    group: "WillCriticalSuccess",
    key: "VerySureAboutThis",
    deckType: "will",
    category: "savingThrowCriticalSuccess",
    impact: "moderate",
    fallbackTitle: "Very Sure About This",
    fallbackDescription: "Confidence is currently unnecessarily high. The body prudently sets aside a little reserve.",
    target: "source",
    components: [
      {
        "type": "temporaryHitPoints",
        "value": 5
      }
    ],
    filters: {
      "saveTypes": [
        "will"
      ]
    },
    tags: ["save", "will", "success", "boon"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "will-failure.thought-had-priority",
    group: "WillCriticalFailure",
    key: "ThoughtHadPriority",
    deckType: "will",
    category: "savingThrowCriticalFailure",
    impact: "moderate",
    fallbackTitle: "The Thought Had Priority",
    fallbackDescription: "The foreign influence proceeds with surprising efficiency. The creature's own thoughts briefly need longer to catch up.",
    target: "source",
    components: [
      {
        "type": "condition",
        "slug": "stupefied",
        "value": 1
      }
    ],
    filters: {
      "saveTypes": [
        "will"
      ],
      "excludedSourceTraits": [
        "mindless"
      ]
    },
    tags: ["save", "will", "failure", "debuff"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "will-failure.uncomfortably-persuasive",
    group: "WillCriticalFailure",
    key: "UncomfortablyPersuasive",
    deckType: "will",
    category: "savingThrowCriticalFailure",
    impact: "moderate",
    fallbackTitle: "Uncomfortably Persuasive",
    fallbackDescription: "The effect makes a point one would rather not have understood. The rest of the situation briefly looks much more threatening.",
    target: "source",
    components: [
      {
        "type": "condition",
        "slug": "frightened",
        "value": 1
      }
    ],
    filters: {
      "saveTypes": [
        "will"
      ],
      "excludedSourceTraits": [
        "mindless"
      ]
    },
    tags: ["save", "will", "failure", "emotion"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "will-failure.internal-debate-continues",
    group: "WillCriticalFailure",
    key: "InternalDebateContinues",
    deckType: "will",
    category: "savingThrowCriticalFailure",
    impact: "light",
    fallbackTitle: "Internal Debate Continues",
    fallbackDescription: "The effect itself is over. The counterarguments are not. The next Will save suffers for it.",
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
    filters: {
      "saveTypes": [
        "will"
      ]
    },
    tags: ["save", "will", "failure", "debuff"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "will-failure.doubt-spreads",
    group: "WillCriticalFailure",
    key: "DoubtSpreads",
    deckType: "will",
    category: "savingThrowCriticalFailure",
    impact: "moderate",
    fallbackTitle: "Doubt Spreads",
    fallbackDescription: "One failed mental defense unfortunately raises questions about every other defensive mechanism.",
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
        "will"
      ]
    },
    tags: ["save", "will", "failure", "debuff"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "will-failure.attention-elsewhere",
    group: "WillCriticalFailure",
    key: "AttentionElsewhere",
    deckType: "will",
    category: "savingThrowCriticalFailure",
    impact: "light",
    fallbackTitle: "Part of You Is Still There",
    fallbackDescription: "The effect ends, but some attention stays behind with it. The outside world gets less of your guard.",
    target: "source",
    components: [
      {
        "type": "condition",
        "slug": "off-guard"
      }
    ],
    filters: {
      "saveTypes": [
        "will"
      ]
    },
    tags: ["save", "will", "failure", "control"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "will-failure.thinking-takes-time",
    group: "WillCriticalFailure",
    key: "ThinkingTakesTime",
    deckType: "will",
    category: "savingThrowCriticalFailure",
    impact: "strong",
    fallbackTitle: "Thinking Takes Time Right Now",
    fallbackDescription: "The thoughts need to put themselves back in the correct order. The flow of action waits for a moment.",
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
        "will"
      ]
    },
    tags: ["save", "will", "failure", "action-economy"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "will-failure.attack-needs-approval",
    group: "WillCriticalFailure",
    key: "AttackNeedsApproval",
    deckType: "will",
    category: "savingThrowCriticalFailure",
    impact: "light",
    fallbackTitle: "Too Many Voices, One Attack",
    fallbackDescription: "The mind gives itself competing instructions. The next attack pays for the disagreement.",
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
        "will"
      ]
    },
    tags: ["save", "will", "failure", "debuff"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "will-failure.defense-forgotten",
    group: "WillCriticalFailure",
    key: "DefenseForgotten",
    deckType: "will",
    category: "savingThrowCriticalFailure",
    impact: "light",
    fallbackTitle: "Defense Briefly Forgotten",
    fallbackDescription: "The mental strain consumes more attention than planned. Guard becomes slightly careless on the side.",
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
        "will"
      ]
    },
    tags: ["save", "will", "failure", "defense"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "will-failure.feet-await-instructions",
    group: "WillCriticalFailure",
    key: "FeetAwaitInstructions",
    deckType: "will",
    category: "savingThrowCriticalFailure",
    impact: "light",
    fallbackTitle: "Hesitation Reaches the Feet",
    fallbackDescription: "The mind stalls just long enough for movement to lose some urgency.",
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
        "will"
      ]
    },
    tags: ["save", "will", "failure", "movement"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "will-failure.mental-door-left-open",
    group: "WillCriticalFailure",
    key: "MentalDoorLeftOpen",
    deckType: "will",
    category: "savingThrowCriticalFailure",
    impact: "moderate",
    fallbackTitle: "Mental Door Left Open",
    fallbackDescription: "The effect leaves an inconveniently well-marked entry point for further mental damage.",
    target: "source",
    components: [
      {
        "type": "weakness",
        "weaknessType": "mental",
        "value": 2
      }
    ],
    filters: {
      "saveTypes": [
        "will"
      ],
      "excludedSourceTraits": [
        "mindless"
      ]
    },
    tags: ["save", "will", "failure", "vulnerability"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "will-failure.mind-body-scheduling-conflict",
    group: "WillCriticalFailure",
    key: "MindBodySchedulingConflict",
    deckType: "will",
    category: "savingThrowCriticalFailure",
    impact: "moderate",
    fallbackTitle: "Mind and Body Disagree on Timing",
    fallbackDescription: "Thought and movement do not arrive at quite the same time. Coordination briefly suffers.",
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
        "will"
      ]
    },
    tags: ["save", "will", "failure", "control"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "will-failure.psychic-nausea",
    group: "WillCriticalFailure",
    key: "PsychicNausea",
    deckType: "will",
    category: "savingThrowCriticalFailure",
    impact: "moderate",
    fallbackTitle: "Psychic Nausea",
    fallbackDescription: "Some thoughts sit more heavily in the stomach than their purely mental nature would suggest.",
    target: "source",
    components: [
      {
        "type": "condition",
        "slug": "sickened",
        "value": 1
      }
    ],
    filters: {
      "saveTypes": [
        "will"
      ],
      "excludedSourceTraits": [
        "mindless"
      ]
    },
    tags: ["save", "will", "failure", "debuff"],
    weight: 1
  }),
]);
