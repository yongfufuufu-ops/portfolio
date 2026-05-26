import type { Metadata } from "next";
import { BlogListPage } from "@/app/blog/_components/blog-list-page";
import { getPaginatedPosts } from "@/app/blog/_lib";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software development, life, and more.",
  openGraph: {
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
};

export default function BlogPage() {
  const { items, pagination } = getPaginatedPosts(1);

  return (
    <BlogListPage
      posts={items}
      page={pagination.page}
      totalPages={pagination.totalPages}
    />
  );
}
