import type { NavLink } from "@/components/layout/SiteHeader";

/**
 * Site-wide nav config, kept in one place so every page's header links stay
 * consistent as real routes come online one at a time. All five link here
 * now resolve to real pages.
 */
export const siteNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Coaching", href: "/coaching" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
