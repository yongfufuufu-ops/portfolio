import { BlogListPage } from "@/app/blog/_components/blog-list-page";
import {
  getPaginatedPosts,
  getTotalBlogPages,
} from "@/app/blog/_lib";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const totalPages = getTotalBlogPages();

  return Array.from({ length: Math.max(totalPages - 1, 0) }, (_, index) => ({
    page: String(index + 2),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  const currentPage = Number.parseInt(page, 10);
  const totalPages = getTotalBlogPages();

  if (!Number.isInteger(currentPage) || currentPage < 2 || currentPage > totalPages) {
    return {};
  }

  return {
    title: `Blog - Page ${currentPage}`,
    description: "Thoughts on software development, life, and more.",
  };
}

export default async function PaginatedBlogPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const currentPage = Number.parseInt(page, 10);
  const totalPages = getTotalBlogPages();

  if (!Number.isInteger(currentPage) || currentPage < 2 || currentPage > totalPages) {
    notFound();
  }

  const { items, pagination } = getPaginatedPosts(currentPage);

  return (
    <BlogListPage
      posts={items}
      page={pagination.page}
      totalPages={pagination.totalPages}
    />
  );
}
