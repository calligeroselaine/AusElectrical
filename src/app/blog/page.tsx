import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Blog",
  description: "Electrical tips and news — blog coming soon.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <ComingSoon
      title="Blog"
      description="We're working on a library of electrical tips, safety guides and project stories. Check back soon."
    />
  );
}
