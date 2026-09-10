/**
 * Central icon mapping. Every icon here is chosen to precisely match the
 * thing it represents — see /docs/MASTER_PROMPT.md non-negotiable constraint:
 * "Match every icon precisely to the thing it represents ... no decorative
 * mismatches." Change an icon here, it changes everywhere consistently.
 */
import {
  Landmark,
  TrendingUp,
  Megaphone,
  ShieldAlert,
  Calculator,
  Cpu,
  Users,
  Heart,
  Boxes,
  Building2,
  Truck,
  Handshake,
  ShieldCheck,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import type { CourseCategory } from "@/content/courses";

/** One icon per course category — used on calendar cards, filter chips, stat tiles. */
export const categoryIcons: Record<CourseCategory, LucideIcon> = {
  "Governance & Leadership": Landmark, // boardroom / institutional oversight
  "Strategy & Business Growth": TrendingUp, // growth trajectory
  "Marketing & Brand": Megaphone, // amplifying a message
  "Security & Risk": ShieldAlert, // threat / risk posture
  "Finance & Audit": Calculator, // numbers, reconciliation
  "Technology & AI": Cpu, // computation / systems
  "HR & People": Users, // people, teams
  "Customer Experience": Heart, // care, loyalty
  "Operations & Supply Chain": Boxes, // goods in transit / inventory
};

/** One icon per Pan-Lio Ltd business line (from /pan-lio-services). */
export const businessLineIcons = {
  realEstate: Building2, // property / development
  transport: Truck, // fleet, mobility
  trade: Handshake, // commerce, partnership
  insurance: ShieldCheck, // protection, coverage
  leadership: GraduationCap, // training, education
} as const;
