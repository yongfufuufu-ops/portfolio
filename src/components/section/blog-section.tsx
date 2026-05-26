import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { allPosts } from "content-collections";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

function getLatestPosts() {
  return [...allPosts]
    .sort((a, b) => {
      if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .slice(0, 3);
}

export default function BlogSection() {
  const latestPosts = getLatestPosts();

  if (latestPosts.length === 0) {
    return null;
  }

  return (
    <section id="blog">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">博客</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Blog</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              记录一些关于开发、工程实践和日常思考的内容。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
          {latestPosts.map((post, index) => {
            const slug = post._meta.path.replace(/\.mdx$/, "");
            return (
              <BlurFade
                key={slug}
                delay={BLUR_FADE_DELAY * 14 + index * 0.05}
                className={index === 2 ? "sm:col-span-2" : undefined}
              >
                <Link
                  href={`/blog/${slug}`}
                  className="group flex h-full flex-col gap-4 rounded-xl border border-border bg-background p-5 transition-all duration-200 hover:ring-2 hover:ring-muted"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col gap-2">
                      <time className="text-xs text-muted-foreground">
                        {formatDate(post.publishedAt)}
                      </time>
                      <h3 className="text-lg font-semibold leading-snug">
                        {post.title}
                      </h3>
                    </div>
                    <ChevronRight
                      className="mt-0.5 size-4 shrink-0 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                      aria-hidden
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {post.summary}
                  </p>
                </Link>
              </BlurFade>
            );
          })}
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 14 + latestPosts.length * 0.05}>
          <div className="flex justify-center">
            <Button asChild variant="outline" className="rounded-xl">
              <Link href="/blog" className="inline-flex items-center gap-2">
                查看全部博客
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
