import { businessLineIcons } from "@/lib/icons";

/**
 * Pan-Lio Ltd's five business lines — copy harvested from the live
 * /pan-lio-services page during the Sep 2026 audit. Centralised here so
 * the homepage, /about, and anywhere else that lists them stay in sync.
 */
export const businessLines = [
  {
    icon: businessLineIcons.insurance,
    title: "International Life Insurance",
    blurb:
      "Protecting individuals, families and businesses across borders — Protecting today, securing tomorrow.",
  },
  {
    icon: businessLineIcons.realEstate,
    title: "Real Estate & Investment",
    blurb:
      "High-value residential and commercial development, from land banking to income-generating assets.",
  },
  {
    icon: businessLineIcons.leadership,
    title: "Strategic Leadership Training",
    blurb:
      "The programs behind the 2026 calendar — training, workshops and executive coaching that build discipline and strategy.",
  },
  {
    icon: businessLineIcons.transport,
    title: "Transport & Mobility",
    blurb:
      "Car hire, fleet management and mobility services that keep business operations moving.",
  },
  {
    icon: businessLineIcons.trade,
    title: "Trade & Commerce",
    blurb: "Connecting markets and opportunity across East and Southern Africa.",
  },
];
