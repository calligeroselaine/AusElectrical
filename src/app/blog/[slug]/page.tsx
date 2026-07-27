import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return [];
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  return {
    title: params.slug,
    robots: { index: false, follow: true },
  };
}

export default function BlogPostPage() {
  return (
    <ComingSoon
      title="Blog Post"
      description="This post is coming soon — our blog is under construction."
    />
  );
}
