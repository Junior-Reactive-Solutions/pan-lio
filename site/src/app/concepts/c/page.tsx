import type { Metadata } from "next";
import { ConceptC } from "@/components/concepts/c/ConceptC";

export const metadata: Metadata = {
  title: "Concept C — Founder-Led Authority",
  robots: { index: false, follow: false },
};

export default function ConceptCPage() {
  return <ConceptC />;
}
