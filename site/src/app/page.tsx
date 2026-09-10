import { Home } from "@/components/home/Home";

/**
 * The real homepage — see /docs/PROJECT_LOG.md for the direction history.
 * This replaced the temporary /concepts redirect once the user picked a
 * hybrid of Concept A (the live calendar) and Concept B (the two-door
 * audience split) as the direction to build the rest of the site around.
 * Metadata (title/description/OG/Twitter) is inherited from the root
 * layout, which already carries the verified brand copy for the homepage.
 */
export default function RootPage() {
  return <Home />;
}
