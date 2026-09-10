/**
 * Coach DK Global coaching packages — harvested verbatim from the live
 * /coachdk-services page during the Sep 2026 audit. Prices, durations,
 * formats and module names are all real and unchanged.
 */
export interface CoachingPackage {
  slug: "zulu-one" | "zulu-two";
  name: string;
  price: string;
  duration: string;
  focus: string;
  format: string;
  modules: string[];
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
      "Personal Vision & Life Direction",
      "Mindset Reprogramming & Confidence Building",
      "Emotional Intelligence & Relationship Mastery",
      "Personal Productivity & Time Management",
    ],
    outcome:
      "Participants gain clarity, renewed confidence, direction, and personal structure for success.",
  },
  {
    slug: "zulu-two",
    name: "ZuluTwo",
    price: "$750/month",
    duration: "2 months",
    focus: "Life transformation, leadership growth & financial empowerment",
    format: "Deep One-on-One Coaching — includes all ZuluOne modules, plus:",
    modules: [
      "Leadership Identity & Influence",
      "Wealth Mindset & Financial Growth Strategy",
      "Career / Business Direction Coaching",
      "Purpose-Driven Living & Spiritual Alignment",
    ],
    outcome:
      "Clients build leadership confidence, an income strategy, and a purpose-driven direction for the long term.",
  },
];
