import type { Metadata } from "next";
import { ConceptB } from "@/components/concepts/b/ConceptB";

export const metadata: Metadata = {
  title: "Concept B — Two Doors",
  robots: { index: false, follow: false },
};

export default function ConceptBPage() {
  return <ConceptB />;
}
