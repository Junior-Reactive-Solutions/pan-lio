import type { Metadata } from "next";
import { ConceptA } from "@/components/concepts/a/ConceptA";

export const metadata: Metadata = {
  title: "Concept A — The Calendar Is the Product",
  robots: { index: false, follow: false },
};

export default function ConceptAPage() {
  return <ConceptA />;
}
