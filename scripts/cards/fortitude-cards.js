import { defineAwkwardCard } from "../card-factory.js";

export const CARDS = Object.freeze([
  defineAwkwardCard({
    id: "fortitude-success.was-that-all",
    group: "FortitudeCriticalSuccess",
    key: "WasThatAll",
    deckType: "fortitude",
    category: "savingThrowCriticalSuccess",
    impact: "light",
    fallbackTitle: "Was That All?",
    fallbackDescription: "The strain arrives, makes its case, and is ignored with physically impressive rudeness.",
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
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "success"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "fortitude-success.more-durable-than-theory",
    group: "FortitudeCriticalSuccess",
    key: "MoreDurableThanTheory",
    deckType: "fortitude",
    category: "savingThrowCriticalSuccess",
    impact: "light",
    fallbackTitle: "More Durable Than the Theory",
    fallbackDescription: "By every reasonable assumption, that should have been worse. The body keeps the difference as reserve.",
    target: "source",
    components: [
      {
        "type": "temporaryHitPoints",
        "value": 3
      }
    ],
    filters: {
      "saveTypes": [
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "success", "boon"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "fortitude-success.complaint-rejected",
    group: "FortitudeCriticalSuccess",
    key: "ComplaintRejected",
    deckType: "fortitude",
    category: "savingThrowCriticalSuccess",
    impact: "light",
    fallbackTitle: "Not Today",
    fallbackDescription: "Whatever tried to get through meets a body that has chosen stubbornness as a short-term survival strategy.",
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
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "success", "boon"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "fortitude-success.system-still-running",
    group: "FortitudeCriticalSuccess",
    key: "SystemStillRunning",
    deckType: "fortitude",
    category: "savingThrowCriticalSuccess",
    impact: "moderate",
    fallbackTitle: "The System Is Still Running",
    fallbackDescription: "Everything important still works. Several parts seem mildly surprised and begin repairs immediately.",
    target: "source",
    components: [
      {
        "type": "fastHealing",
        "value": 2
      }
    ],
    filters: {
      "saveTypes": [
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "success", "recovery"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "fortitude-success.surprisingly-intact",
    group: "FortitudeCriticalSuccess",
    key: "SurprisinglyIntact",
    deckType: "fortitude",
    category: "savingThrowCriticalSuccess",
    impact: "moderate",
    fallbackTitle: "Surprisingly Intact",
    fallbackDescription: "The body absorbs the strain so cleanly that the next damage briefly has to work harder to make its case.",
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
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "success", "resistance"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "fortitude-success.stable-enough",
    group: "FortitudeCriticalSuccess",
    key: "StableEnough",
    deckType: "fortitude",
    category: "savingThrowCriticalSuccess",
    impact: "light",
    fallbackTitle: "Stable Enough",
    fallbackDescription: "The strain barely changes the stance. For the next attack, it even looks remarkably organized.",
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
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "success", "defense"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "fortitude-success.adrenaline-approved",
    group: "FortitudeCriticalSuccess",
    key: "AdrenalineApproved",
    deckType: "fortitude",
    category: "savingThrowCriticalSuccess",
    impact: "light",
    fallbackTitle: "Adrenaline Has an Opinion",
    fallbackDescription: "The body's answer is immediate and not especially subtle: keep going. The next attack benefits.",
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
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "success", "boon"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "fortitude-success.extra-step-available",
    group: "FortitudeCriticalSuccess",
    key: "ExtraStepAvailable",
    deckType: "fortitude",
    category: "savingThrowCriticalSuccess",
    impact: "light",
    fallbackTitle: "Another Gear Available",
    fallbackDescription: "Apparently there were still reserves available. Nobody knows why they were not reported earlier.",
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
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "success", "movement"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "fortitude-success.not-even-flinching",
    group: "FortitudeCriticalSuccess",
    key: "NotEvenFlinching",
    deckType: "fortitude",
    category: "savingThrowCriticalSuccess",
    impact: "moderate",
    fallbackTitle: "Did Not Even Flinch",
    fallbackDescription: "That was physically impressive enough that fear briefly decides to try someone else.",
    target: "source",
    components: [
      {
        "type": "immunity",
        "immunityType": "frightened"
      }
    ],
    filters: {
      "saveTypes": [
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "success", "immunity"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "fortitude-success.reserve-tank",
    group: "FortitudeCriticalSuccess",
    key: "ReserveTank",
    deckType: "fortitude",
    category: "savingThrowCriticalSuccess",
    impact: "moderate",
    fallbackTitle: "Reserve Buffer",
    fallbackDescription: "The strain encounters more substance than expected. The surplus remains briefly available.",
    target: "source",
    components: [
      {
        "type": "temporaryHitPoints",
        "value": 5
      }
    ],
    filters: {
      "saveTypes": [
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "success", "boon"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "fortitude-success.unreasonably-healthy",
    group: "FortitudeCriticalSuccess",
    key: "UnreasonablyHealthy",
    deckType: "fortitude",
    category: "savingThrowCriticalSuccess",
    impact: "moderate",
    fallbackTitle: "Unreasonably Healthy",
    fallbackDescription: "Physical damage briefly faces an exceptionally poor cost-benefit calculation.",
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
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "success", "resistance"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "fortitude-success.recovery-already-started",
    group: "FortitudeCriticalSuccess",
    key: "RecoveryAlreadyStarted",
    deckType: "fortitude",
    category: "savingThrowCriticalSuccess",
    impact: "moderate",
    fallbackTitle: "Repairs Already Underway",
    fallbackDescription: "The effect is barely over before the body starts post-processing. Efficient, almost suspiciously so.",
    target: "source",
    components: [
      {
        "type": "fastHealing",
        "value": 3
      }
    ],
    filters: {
      "saveTypes": [
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "success", "recovery"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "fortitude-failure.formal-complaint",
    group: "FortitudeCriticalFailure",
    key: "FormalComplaint",
    deckType: "fortitude",
    category: "savingThrowCriticalFailure",
    impact: "moderate",
    fallbackTitle: "Formal Complaint",
    fallbackDescription: "The body takes the strain personally and expresses its dissatisfaction with remarkable clarity.",
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
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "failure", "debuff"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "fortitude-failure.strength-budget-cut",
    group: "FortitudeCriticalFailure",
    key: "StrengthBudgetCut",
    deckType: "fortitude",
    category: "savingThrowCriticalFailure",
    impact: "moderate",
    fallbackTitle: "Used More Than Expected",
    fallbackDescription: "The strain draws deeper on the muscles than expected. For a short while, force comes with a smaller reserve.",
    target: "source",
    components: [
      {
        "type": "condition",
        "slug": "enfeebled",
        "value": 1
      }
    ],
    filters: {
      "saveTypes": [
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "failure", "debuff"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "fortitude-failure.need-a-moment",
    group: "FortitudeCriticalFailure",
    key: "NeedAMoment",
    deckType: "fortitude",
    category: "savingThrowCriticalFailure",
    impact: "strong",
    fallbackTitle: "A Moment, Please",
    fallbackDescription: "The body requests a very brief interruption. The request is approved without consultation.",
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
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "failure", "action-economy"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "fortitude-failure.legs-have-questions",
    group: "FortitudeCriticalFailure",
    key: "LegsHaveQuestions",
    deckType: "fortitude",
    category: "savingThrowCriticalFailure",
    impact: "light",
    fallbackTitle: "The Legs Have Questions",
    fallbackDescription: "The strain is over, but the legs are not entirely convinced. They proceed with noticeable caution.",
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
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "failure", "movement"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "fortitude-failure.follow-up-exam",
    group: "FortitudeCriticalFailure",
    key: "FollowUpExam",
    deckType: "fortitude",
    category: "savingThrowCriticalFailure",
    impact: "light",
    fallbackTitle: "The Body Remembers",
    fallbackDescription: "Whatever just happened leaves the body distinctly less eager to endure a repeat performance.",
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
    filters: {
      "saveTypes": [
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "failure", "debuff"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "fortitude-failure.general-system-warning",
    group: "FortitudeCriticalFailure",
    key: "GeneralSystemWarning",
    deckType: "fortitude",
    category: "savingThrowCriticalFailure",
    impact: "moderate",
    fallbackTitle: "General System Warning",
    fallbackDescription: "One failure produces a surprising number of warning messages. Temporarily, every defense is affected.",
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
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "failure", "debuff"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "fortitude-failure.posture-needs-maintenance",
    group: "FortitudeCriticalFailure",
    key: "PostureNeedsMaintenance",
    deckType: "fortitude",
    category: "savingThrowCriticalFailure",
    impact: "light",
    fallbackTitle: "Posture Requires Maintenance",
    fallbackDescription: "The strain leaves the defense visibly less organized than intended.",
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
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "failure", "defense"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "fortitude-failure.power-delivery-delayed",
    group: "FortitudeCriticalFailure",
    key: "PowerDeliveryDelayed",
    deckType: "fortitude",
    category: "savingThrowCriticalFailure",
    impact: "light",
    fallbackTitle: "Power Delivery Delayed",
    fallbackDescription: "The muscles are still occupied with the previous problem. Attacks briefly receive less precise support.",
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
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "failure", "debuff"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "fortitude-failure.everything-feels-worse",
    group: "FortitudeCriticalFailure",
    key: "EverythingFeelsWorse",
    deckType: "fortitude",
    category: "savingThrowCriticalFailure",
    impact: "moderate",
    fallbackTitle: "Everything Feels Worse",
    fallbackDescription: "The strain leaves the body inconveniently receptive to further problems. Very cooperative of it.",
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
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "failure", "vulnerability"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "fortitude-failure.physical-warranty-expired",
    group: "FortitudeCriticalFailure",
    key: "PhysicalWarrantyExpired",
    deckType: "fortitude",
    category: "savingThrowCriticalFailure",
    impact: "moderate",
    fallbackTitle: "Everything Has a Tender Spot",
    fallbackDescription: "For a brief moment, ordinary blows keep finding places that are already sore enough to notice.",
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
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "failure", "vulnerability"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "fortitude-failure.coordination-also-affected",
    group: "FortitudeCriticalFailure",
    key: "CoordinationAlsoAffected",
    deckType: "fortitude",
    category: "savingThrowCriticalFailure",
    impact: "moderate",
    fallbackTitle: "Coordination Also Affected",
    fallbackDescription: "Apparently the strain was not content with hurting. It also leaves the body's timing briefly out of step.",
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
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "failure", "control"],
    weight: 1
  }),
  defineAwkwardCard({
    id: "fortitude-failure.guard-on-sick-leave",
    group: "FortitudeCriticalFailure",
    key: "GuardOnSickLeave",
    deckType: "fortitude",
    category: "savingThrowCriticalFailure",
    impact: "light",
    fallbackTitle: "Hands Full Elsewhere",
    fallbackDescription: "Too much attention is busy keeping the body together. The outside guard is briefly less convincing.",
    target: "source",
    components: [
      {
        "type": "condition",
        "slug": "off-guard"
      }
    ],
    filters: {
      "saveTypes": [
        "fortitude"
      ]
    },
    tags: ["save", "fortitude", "failure", "control"],
    weight: 1
  }),
]);
