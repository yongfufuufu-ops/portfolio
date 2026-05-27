import { BlogListPage } from "@/app/blog/_components/blog-list-page";
import {
  getPaginatedPosts,
  getTotalBlogPages,
} from "@/app/blog/_lib";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const STATIC_EXPORT_FALLBACK_PAGE = "2";

export async function generateStaticParams() {
  const totalPages = getTotalBlogPages();

  if (totalPages < 2) {
    return [{ page: STATIC_EXPORT_FALLBACK_PAGE }];
  }

  return Array.from({ length: totalPages - 1 }, (_, index) => ({
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
