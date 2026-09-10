/**
 * Pan-Lio & Coach DK 2026 Training Calendar
 *
 * Source of truth: transcribed by hand from the five original calendar images
 * (see /docs/COURSE_DATA.md for the full transcription log, source image URLs,
 * and cross-verification notes). 58 course deliveries, Jan–Dec 2026.
 *
 * This is the fix for audit §8.3: the calendar previously existed only as
 * scanned PNG images and was invisible to search engines and screen readers.
 * It now exists as real, structured, typed data.
 *
 * Repeated course titles (same course run in multiple cities/cohorts) share a
 * `courseSlug` so /courses/[slug] can consolidate them onto one canonical page
 * listing every upcoming cohort — avoiding the audit §8.5 thin/duplicate-page
 * problem this time applied to 58 rows instead of 5.
 */

export type CourseCategory =
  | "Marketing & Brand"
  | "Security & Risk"
  | "Technology & AI"
  | "Governance & Leadership"
  | "Strategy & Business Growth"
  | "Finance & Audit"
  | "HR & People"
  | "Customer Experience"
  | "Operations & Supply Chain";

export interface CourseDelivery {
  /** Unique per delivery/cohort — stable, never reused. */
  id: string;
  /** Row number from the original calendar (1–58), kept for traceability. */
  sourceRow: number;
  title: string;
  /** Shared across repeated deliveries of the same course. */
  courseSlug: string;
  category: CourseCategory;
  /** ISO 8601 date, e.g. "2026-01-05" */
  startDate: string;
  endDate: string;
  city: string;
  country: string;
}

export const courses: CourseDelivery[] = [
  { id: "d01", sourceRow: 1, title: "Strategic Marketing and Business Success", courseSlug: "strategic-marketing-and-business-success", category: "Marketing & Brand", startDate: "2026-01-05", endDate: "2026-01-09", city: "Kampala", country: "Uganda" },
  { id: "d02", sourceRow: 2, title: "Security Coordination and Management", courseSlug: "security-coordination-and-management", category: "Security & Risk", startDate: "2026-01-12", endDate: "2026-01-16", city: "Mombasa", country: "Kenya" },
  { id: "d03", sourceRow: 3, title: "Physical Security and Innovation", courseSlug: "physical-security-and-innovation", category: "Security & Risk", startDate: "2026-01-19", endDate: "2026-01-23", city: "Kigali", country: "Rwanda" },
  { id: "d04", sourceRow: 4, title: "Public Relations and Marketing", courseSlug: "public-relations-and-marketing", category: "Marketing & Brand", startDate: "2026-01-19", endDate: "2026-01-23", city: "Mombasa", country: "Kenya" },
  { id: "d05", sourceRow: 5, title: "Transforming Business with Artificial Intelligence", courseSlug: "transforming-business-with-artificial-intelligence", category: "Technology & AI", startDate: "2026-01-26", endDate: "2026-01-30", city: "Kampala", country: "Uganda" },
  { id: "d06", sourceRow: 6, title: "Board Governance in a Digital World: Cybersecurity and Technology Oversight", courseSlug: "board-governance-in-a-digital-world", category: "Governance & Leadership", startDate: "2026-01-26", endDate: "2026-01-30", city: "Dubai", country: "United Arab Emirates" },
  { id: "d07", sourceRow: 7, title: "Performance Evaluation: Measuring Board Effectiveness", courseSlug: "performance-evaluation-measuring-board-effectiveness", category: "Governance & Leadership", startDate: "2026-02-02", endDate: "2026-02-06", city: "Dubai", country: "United Arab Emirates" },
  { id: "d08", sourceRow: 8, title: "Product Strategy and Innovation", courseSlug: "product-strategy-and-innovation", category: "Strategy & Business Growth", startDate: "2026-02-02", endDate: "2026-02-06", city: "Kampala", country: "Uganda" },
  { id: "d09", sourceRow: 9, title: "Blueprint for Strategic Business Growth: Unlocking Scalable Success in Competitive Markets", courseSlug: "blueprint-for-strategic-business-growth", category: "Strategy & Business Growth", startDate: "2026-02-16", endDate: "2026-02-20", city: "Kigali", country: "Rwanda" },
  { id: "d10", sourceRow: 10, title: "Advanced IT Auditing: Protecting Digital Infrastructure", courseSlug: "advanced-it-auditing-protecting-digital-infrastructure", category: "Finance & Audit", startDate: "2026-02-23", endDate: "2026-02-27", city: "Nairobi", country: "Kenya" },
  { id: "d11", sourceRow: 11, title: "Customer Experience and Brand Activation Management", courseSlug: "customer-experience-and-brand-activation-management", category: "Customer Experience", startDate: "2026-03-02", endDate: "2026-03-06", city: "Gaborone", country: "Botswana" },
  { id: "d12", sourceRow: 12, title: "Mastering Strategy and Governance: Driving Excellence in Business Leadership", courseSlug: "mastering-strategy-and-governance", category: "Governance & Leadership", startDate: "2026-03-09", endDate: "2026-03-13", city: "Dubai", country: "United Arab Emirates" },
  { id: "d13", sourceRow: 13, title: "HR Analytics and Data-Driven HR", courseSlug: "hr-analytics-and-data-driven-hr", category: "HR & People", startDate: "2026-03-16", endDate: "2026-03-20", city: "Nairobi", country: "Kenya" },
  { id: "d14", sourceRow: 14, title: "Strategic Marketing Plan", courseSlug: "strategic-marketing-plan", category: "Marketing & Brand", startDate: "2026-03-23", endDate: "2026-03-27", city: "Nairobi", country: "Kenya" },
  { id: "d15", sourceRow: 15, title: "Board Governance in a Digital World: Cybersecurity and Technology Oversight", courseSlug: "board-governance-in-a-digital-world", category: "Governance & Leadership", startDate: "2026-03-23", endDate: "2026-03-27", city: "Dubai", country: "United Arab Emirates" },
  { id: "d16", sourceRow: 16, title: "Performance Evaluation: Measuring Board Effectiveness", courseSlug: "performance-evaluation-measuring-board-effectiveness", category: "Governance & Leadership", startDate: "2026-04-06", endDate: "2026-04-10", city: "Dubai", country: "United Arab Emirates" },
  { id: "d17", sourceRow: 17, title: "Procurement Audit and Systems for Prevention and Detection of Fraud", courseSlug: "procurement-audit-and-systems-for-prevention-and-detection-of-fraud", category: "Finance & Audit", startDate: "2026-04-06", endDate: "2026-04-10", city: "Mombasa", country: "Kenya" },
  { id: "d18", sourceRow: 18, title: "Regulatory Compliance in a Digital World: Managing Cyber and Data Risks", courseSlug: "regulatory-compliance-in-a-digital-world", category: "Governance & Leadership", startDate: "2026-04-06", endDate: "2026-04-10", city: "Kigali", country: "Rwanda" },
  { id: "d19", sourceRow: 19, title: "Mastering Customer Care and Service Excellence in a Competitive Market", courseSlug: "mastering-customer-care-and-service-excellence", category: "Customer Experience", startDate: "2026-04-13", endDate: "2026-04-17", city: "Mombasa", country: "Kenya" },
  { id: "d20", sourceRow: 20, title: "Marketing, Communication and Media Planning", courseSlug: "marketing-communication-and-media-planning", category: "Marketing & Brand", startDate: "2026-04-20", endDate: "2026-04-24", city: "Dubai", country: "United Arab Emirates" },
  { id: "d21", sourceRow: 21, title: "Procurement Audit and Systems for Prevention and Detection of Fraud", courseSlug: "procurement-audit-and-systems-for-prevention-and-detection-of-fraud", category: "Finance & Audit", startDate: "2026-04-26", endDate: "2026-05-01", city: "Kampala", country: "Uganda" },
  { id: "d22", sourceRow: 22, title: "Sales Metrics and Performance Analysis", courseSlug: "sales-metrics-and-performance-analysis", category: "Strategy & Business Growth", startDate: "2026-05-04", endDate: "2026-05-08", city: "Kampala", country: "Uganda" },
  { id: "d23", sourceRow: 23, title: "Strategic Selling for Business Growth in a Cut-throat Market", courseSlug: "strategic-selling-for-business-growth", category: "Strategy & Business Growth", startDate: "2026-05-11", endDate: "2026-05-15", city: "Kigali", country: "Rwanda" },
  { id: "d24", sourceRow: 24, title: "Mastering the Art of Inspiring and Empowering Teams, to Drive Business Growth", courseSlug: "mastering-the-art-of-inspiring-and-empowering-teams", category: "HR & People", startDate: "2026-05-18", endDate: "2026-05-22", city: "Kigali", country: "Rwanda" },
  { id: "d25", sourceRow: 25, title: "Product Strategy and Innovation Course", courseSlug: "product-strategy-and-innovation", category: "Strategy & Business Growth", startDate: "2026-05-25", endDate: "2026-05-29", city: "Kigali", country: "Rwanda" },
  { id: "d26", sourceRow: 26, title: "Fraud Audit and Investigation Course", courseSlug: "fraud-audit-and-investigation-course", category: "Finance & Audit", startDate: "2026-06-01", endDate: "2026-06-05", city: "Gaborone", country: "Botswana" },
  { id: "d27", sourceRow: 27, title: "Security Awareness and Operations Course", courseSlug: "security-awareness-and-operations-course", category: "Security & Risk", startDate: "2026-06-08", endDate: "2026-06-12", city: "Gaborone", country: "Botswana" },
  { id: "d28", sourceRow: 28, title: "Leading with Emotional Intelligence and Resilience", courseSlug: "leading-with-emotional-intelligence-and-resilience", category: "HR & People", startDate: "2026-06-15", endDate: "2026-06-19", city: "Addis Ababa", country: "Ethiopia" },
  { id: "d29", sourceRow: 29, title: "Customer Loyalty and Brand Advocacy in a Competitive Market", courseSlug: "customer-loyalty-and-brand-advocacy", category: "Customer Experience", startDate: "2026-06-22", endDate: "2026-06-26", city: "Addis Ababa", country: "Ethiopia" },
  { id: "d30", sourceRow: 30, title: "Strategic Thinking for Leaders: From Vision to Execution", courseSlug: "strategic-thinking-for-leaders", category: "Governance & Leadership", startDate: "2026-06-22", endDate: "2026-06-26", city: "Dubai", country: "United Arab Emirates" },
  { id: "d31", sourceRow: 31, title: "Board Governance in a Digital World: Cybersecurity and Technology Oversight", courseSlug: "board-governance-in-a-digital-world", category: "Governance & Leadership", startDate: "2026-06-22", endDate: "2026-06-26", city: "Dubai", country: "United Arab Emirates" },
  { id: "d32", sourceRow: 32, title: "The Effective Brand Champion: Transforming Loyal Customers into Powerful Brand Advocates", courseSlug: "the-effective-brand-champion", category: "Marketing & Brand", startDate: "2026-07-06", endDate: "2026-07-10", city: "Kampala", country: "Uganda" },
  { id: "d33", sourceRow: 33, title: "Mastering Procurement and Supply Chain Management Course", courseSlug: "mastering-procurement-and-supply-chain-management", category: "Operations & Supply Chain", startDate: "2026-07-13", endDate: "2026-07-17", city: "Kampala", country: "Uganda" },
  { id: "d34", sourceRow: 34, title: "Internal Controls Over Financial Reporting Course", courseSlug: "internal-controls-over-financial-reporting", category: "Finance & Audit", startDate: "2026-07-20", endDate: "2026-07-24", city: "Kigali", country: "Rwanda" },
  { id: "d35", sourceRow: 35, title: "Business Development and Strategic Management Course", courseSlug: "business-development-and-strategic-management", category: "Strategy & Business Growth", startDate: "2026-07-27", endDate: "2026-07-31", city: "Kigali", country: "Rwanda" },
  { id: "d36", sourceRow: 36, title: "The Art of Brand Reinvention: Thriving in a World of Constant Change", courseSlug: "the-art-of-brand-reinvention", category: "Marketing & Brand", startDate: "2026-08-03", endDate: "2026-08-07", city: "Nairobi", country: "Kenya" },
  { id: "d37", sourceRow: 37, title: "Forensic Accounting and Fraud Control", courseSlug: "forensic-accounting-and-fraud-control", category: "Finance & Audit", startDate: "2026-08-10", endDate: "2026-08-14", city: "Nairobi", country: "Kenya" },
  { id: "d38", sourceRow: 38, title: "AI and Digital Transformation in HR", courseSlug: "ai-and-digital-transformation-in-hr", category: "Technology & AI", startDate: "2026-08-17", endDate: "2026-08-21", city: "Addis Ababa", country: "Ethiopia" },
  { id: "d39", sourceRow: 39, title: "Physical Security Design and Implementation Course", courseSlug: "physical-security-design-and-implementation", category: "Security & Risk", startDate: "2026-08-17", endDate: "2026-08-21", city: "Dubai", country: "United Arab Emirates" },
  { id: "d40", sourceRow: 40, title: "Cybersecurity and Data Privacy Course", courseSlug: "cybersecurity-and-data-privacy", category: "Security & Risk", startDate: "2026-08-17", endDate: "2026-08-21", city: "Dubai", country: "United Arab Emirates" },
  { id: "d41", sourceRow: 41, title: "Cybersecurity and Data Privacy Course", courseSlug: "cybersecurity-and-data-privacy", category: "Security & Risk", startDate: "2026-08-24", endDate: "2026-08-28", city: "Addis Ababa", country: "Ethiopia" },
  { id: "d42", sourceRow: 42, title: "Strategic Thinking for Leaders: From Vision to Execution", courseSlug: "strategic-thinking-for-leaders", category: "Governance & Leadership", startDate: "2026-08-24", endDate: "2026-08-28", city: "Nairobi", country: "Kenya" },
  { id: "d43", sourceRow: 43, title: "Product Management, Processing and Marketing Course", courseSlug: "product-management-processing-and-marketing", category: "Marketing & Brand", startDate: "2026-08-31", endDate: "2026-09-04", city: "Mombasa", country: "Kenya" },
  { id: "d44", sourceRow: 44, title: "Crisis Communication Mastery: Protecting and Rebuilding Your Brand Under Pressure", courseSlug: "crisis-communication-mastery", category: "Marketing & Brand", startDate: "2026-09-07", endDate: "2026-09-11", city: "Mombasa", country: "Kenya" },
  { id: "d45", sourceRow: 45, title: "Strategic Marketing and Business Success", courseSlug: "strategic-marketing-and-business-success", category: "Marketing & Brand", startDate: "2026-09-14", endDate: "2026-09-18", city: "Kigali", country: "Rwanda" },
  { id: "d46", sourceRow: 46, title: "Corporate Security, Investigations and Intelligence", courseSlug: "corporate-security-investigations-and-intelligence", category: "Security & Risk", startDate: "2026-09-21", endDate: "2026-09-25", city: "Kigali", country: "Rwanda" },
  { id: "d47", sourceRow: 47, title: "Risk Management in Procurement and Supply Chain Operations", courseSlug: "risk-management-in-procurement-and-supply-chain-operations", category: "Operations & Supply Chain", startDate: "2026-09-28", endDate: "2026-10-02", city: "Kampala", country: "Uganda" },
  { id: "d48", sourceRow: 48, title: "Bootstrapping Public Relations and Media Magnetism", courseSlug: "bootstrapping-public-relations-and-media-magnetism", category: "Marketing & Brand", startDate: "2026-10-05", endDate: "2026-10-09", city: "Kampala", country: "Uganda" },
  { id: "d49", sourceRow: 49, title: "Brand Positioning for the Modern Marketplace", courseSlug: "brand-positioning-for-the-modern-marketplace", category: "Marketing & Brand", startDate: "2026-10-12", endDate: "2026-10-16", city: "Mombasa", country: "Kenya" },
  { id: "d50", sourceRow: 50, title: "Physical Security Design and Implementation Course", courseSlug: "physical-security-design-and-implementation", category: "Security & Risk", startDate: "2026-10-19", endDate: "2026-10-23", city: "Mombasa", country: "Kenya" },
  { id: "d51", sourceRow: 51, title: "Digital HR: Leveraging Technology for Talent Management Course", courseSlug: "digital-hr-leveraging-technology-for-talent-management", category: "HR & People", startDate: "2026-10-26", endDate: "2026-10-30", city: "Nairobi", country: "Kenya" },
  { id: "d52", sourceRow: 52, title: "From Prospect to Loyal Customer", courseSlug: "from-prospect-to-loyal-customer", category: "Customer Experience", startDate: "2026-11-02", endDate: "2026-11-06", city: "Addis Ababa", country: "Ethiopia" },
  { id: "d53", sourceRow: 53, title: "Building a Culture of Accountability: From Excuses to Excellence", courseSlug: "building-a-culture-of-accountability", category: "HR & People", startDate: "2026-11-09", endDate: "2026-11-13", city: "Addis Ababa", country: "Ethiopia" },
  { id: "d54", sourceRow: 54, title: "Cyber Crime, Electronic Evidence and Digital Forensic Course", courseSlug: "cyber-crime-electronic-evidence-and-digital-forensics", category: "Security & Risk", startDate: "2026-11-16", endDate: "2026-11-20", city: "Mombasa", country: "Kenya" },
  { id: "d55", sourceRow: 55, title: "Information Security and Forensic Computing", courseSlug: "information-security-and-forensic-computing", category: "Security & Risk", startDate: "2026-11-23", endDate: "2026-11-27", city: "Mombasa", country: "Kenya" },
  { id: "d56", sourceRow: 56, title: "Board Governance in a Digital World: Cybersecurity and Technology Oversight", courseSlug: "board-governance-in-a-digital-world", category: "Governance & Leadership", startDate: "2026-11-30", endDate: "2026-12-04", city: "Dubai", country: "United Arab Emirates" },
  { id: "d57", sourceRow: 57, title: "Performance Evaluation: Measuring Board Effectiveness", courseSlug: "performance-evaluation-measuring-board-effectiveness", category: "Governance & Leadership", startDate: "2026-12-07", endDate: "2026-12-11", city: "Dubai", country: "United Arab Emirates" },
  { id: "d58", sourceRow: 58, title: "Finance for Non-Financial Managers: Understanding the Numbers", courseSlug: "finance-for-non-financial-managers", category: "Finance & Audit", startDate: "2026-12-14", endDate: "2026-12-18", city: "Nairobi", country: "Kenya" },
];

/** All distinct categories, in a sensible display order. */
export const courseCategories: CourseCategory[] = [
  "Governance & Leadership",
  "Strategy & Business Growth",
  "Marketing & Brand",
  "Security & Risk",
  "Finance & Audit",
  "Technology & AI",
  "HR & People",
  "Customer Experience",
  "Operations & Supply Chain",
];

/** All distinct cities the calendar visits, for filter UI. */
export const courseCities = Array.from(new Set(courses.map((c) => c.city))).sort();

/**
 * One canonical entry per unique course title, with every upcoming delivery
 * (cohort) attached. This is what /courses/[slug] renders, so a course
 * delivered 4 times (e.g. Board Governance) gets ONE strong indexable page
 * listing 4 dates — not 4 thin duplicate pages.
 */
export interface CourseGroup {
  slug: string;
  title: string;
  category: CourseCategory;
  deliveries: CourseDelivery[];
}

export function getCourseGroups(): CourseGroup[] {
  const map = new Map<string, CourseGroup>();
  for (const delivery of courses) {
    const existing = map.get(delivery.courseSlug);
    if (existing) {
      existing.deliveries.push(delivery);
    } else {
      map.set(delivery.courseSlug, {
        slug: delivery.courseSlug,
        title: delivery.title,
        category: delivery.category,
        deliveries: [delivery],
      });
    }
  }
  // Sort each group's deliveries chronologically, and sort groups by their
  // next upcoming delivery so the course list reads soonest-first.
  const groups = Array.from(map.values());
  for (const g of groups) {
    g.deliveries.sort((a, b) => a.startDate.localeCompare(b.startDate));
  }
  groups.sort((a, b) => a.deliveries[0].startDate.localeCompare(b.deliveries[0].startDate));
  return groups;
}

/** A single course group by its slug — powers /courses/[slug]. */
export function getCourseGroupBySlug(slug: string): CourseGroup | undefined {
  return getCourseGroups().find((g) => g.slug === slug);
}

/** Other course groups in the same category, for "related courses" links. */
export function getRelatedCourseGroups(slug: string, limit = 3): CourseGroup[] {
  const groups = getCourseGroups();
  const current = groups.find((g) => g.slug === slug);
  if (!current) return [];
  return groups.filter((g) => g.slug !== slug && g.category === current.category).slice(0, limit);
}
