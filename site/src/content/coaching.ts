/**
 * Coach DK Global coaching packages, as supplied by the client (Oct 2026).
 */
export interface CoachingModule {
  number: number;
  title: string;
  topics: string[];
}

export interface CoachingPackage {
  slug: "zulu-one" | "zulu-two";
  name: string;
  price: string;
  duration: string;
  focus: string;
  format: string;
  /** Shown above the module list when a package builds on another one. */
  includes?: string;
  modules: CoachingModule[];
  outcome: string;
}

export const coachingPackages: CoachingPackage[] = [
  {
    slug: "zulu-one",
    name: "ZuluOne",
    price: "$500/month",
    duration: "2 months",
    focus: "Personal clarity, mindset reset & foundational life alignment",
    format: "One-on-One Coaching",
    modules: [
      {
        number: 1,
        title: "Personal Vision & Life Direction",
        topics: [
          "Discovering purpose and calling",
          "Life audit (where you are vs where you should be)",
          "Vision crafting & goal setting framework",
          "Designing a personal life blueprint",
        ],
      },
      {
        number: 2,
        title: "Mindset Reprogramming & Confidence Building",
        topics: [
          "Breaking limiting beliefs",
          "Building self-esteem & bold decision making",
          "Overcoming fear, stagnation & procrastination",
          "Winning habits and discipline systems",
        ],
      },
      {
        number: 3,
        title: "Emotional Intelligence & Relationship Mastery",
        topics: [
          "Managing emotions under pressure",
          "Communication confidence",
          "Personal boundaries & self-respect",
          "Conflict navigation",
        ],
      },
      {
        number: 4,
        title: "Personal Productivity & Time Management",
        topics: [
          "Structuring a winning daily routine",
          "Focus systems for high performers",
          "Priority management & energy alignment",
        ],
      },
    ],
    outcome:
      "Participants gain clarity, renewed confidence, direction, and personal structure for success.",
  },
  {
    slug: "zulu-two",
    name: "ZuluTwo",
    price: "$750/month",
    duration: "3 months",
    focus: "Life transformation, leadership growth & financial empowerment",
    format: "Deep One-on-One Coaching",
    includes: "Includes all ZuluOne modules, plus:",
    modules: [
      {
        number: 5,
        title: "Leadership Identity & Influence",
        topics: [
          "Developing executive presence",
          "Personal branding & positioning",
          "Decision making like a leader",
          "Influence & impact strategies",
        ],
      },
      {
        number: 6,
        title: "Wealth Mindset & Financial Growth Strategy",
        topics: [
          "Money psychology & abundance thinking",
          "Creating multiple income pathways",
          "Personal financial planning framework",
          "Opportunity recognition & strategic risk",
        ],
      },
      {
        number: 7,
        title: "Career / Business Direction Coaching",
        topics: [
          "Career transition strategy",
          "Business idea validation",
          "Strategic networking & partnerships",
          "Growth execution plan",
        ],
      },
      {
        number: 8,
        title: "Purpose-Driven Living & Spiritual Alignment",
        topics: [
          "Values-based life decisions",
          "Faith & purpose integration in success",
          "Resilience through adversity",
          "Living intentionally",
        ],
      },
    ],
    outcome:
      "Clients achieve life direction, leadership confidence, income strategy, and long-term success planning.",
  },
];
