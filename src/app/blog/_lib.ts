import { paginate } from "@/lib/pagination";
import { allPosts } from "content-collections";

export type BlogPost = (typeof allPosts)[number];

export const BLOG_PAGE_SIZE = 5;

export function getSortedPosts() {
  return [...allPosts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }

    return 1;
  });
}

export function getTotalBlogPages(posts = getSortedPosts()) {
  return Math.max(1, Math.ceil(posts.length / BLOG_PAGE_SIZE));
}

export function getPaginatedPosts(page: number) {
  const posts = getSortedPosts();

  return {
    posts,
    ...paginate(posts, {
      page,
      pageSize: BLOG_PAGE_SIZE,
    }),
  };
}

export function getBlogPageHref(page: number) {
  return page <= 1 ? "/blog" : `/blog/page/${page}`;
}
