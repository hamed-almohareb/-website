import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PostCard } from "@/components/PostCard";
import { getPost, posts } from "@/data/posts";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/post/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — مَجلّة مِداد` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:image", content: loaderData.post.image },
          { name: "twitter:image", content: loaderData.post.image },
        ]
      : [],
  }),
  component: PostPage,
  notFoundComponent: NotFoundPost,
  errorComponent: ({ error }) => (
    <div className="container-blog py-20 text-center" dir="rtl">
      <p className="text-destructive">حدث خطأ: {error.message}</p>
    </div>
  ),
});

function NotFoundPost() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <div className="container-blog py-24 text-center">
        <h1 className="font-serif text-4xl mb-3">المقال غير موجود</h1>
        <Link to="/" className="text-primary hover:underline">العودة للرئيسية</Link>
      </div>
      <SiteFooter />
    </div>
  );
}

function PostPage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const fallback = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const suggestions = related.length ? related : fallback;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <article>
          {/* Header */}
          <header className="container-blog pt-12 pb-10 max-w-3xl">
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-8"
            >
              <ArrowRight className="h-4 w-4" />
              العودة للمقالات
            </Link>
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">{post.category}</p>
            <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6">{post.title}</h1>
            <p className="text-xl text-muted-foreground leading-9 mb-8">{post.excerpt}</p>
            <div className="flex items-center gap-3 text-sm text-muted-foreground border-t border-border pt-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent font-bold">
                {post.author.charAt(0)}
              </span>
              <div>
                <div className="font-bold text-foreground">{post.author}</div>
                <div className="text-xs">{post.date} · {post.readingTime}</div>
              </div>
            </div>
          </header>

          {/* Cover */}
          <div className="container-blog mb-12">
            <div
              className="aspect-[16/9] overflow-hidden rounded-2xl bg-muted"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <img
                src={post.image}
                alt={post.title}
                width={1600}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Body */}
          <div className="container-blog max-w-3xl">
            <div className="prose-ar">
              {post.body.map((p: string, i: number) => (
                <p key={i}>
                  {i === 0 ? (
                    <>
                      <span className="float-right font-serif text-6xl leading-[0.85] ml-2 mt-1 text-primary">
                        {p.charAt(0)}
                      </span>
                      {p.slice(1)}
                    </>
                  ) : (
                    p
                  )}
                </p>
              ))}
            </div>

            <div className="my-12 flex items-center gap-4 text-primary/40">
              <div className="h-px flex-1 bg-border" />
              <span className="font-serif text-2xl">❊</span>
              <div className="h-px flex-1 bg-border" />
            </div>
          </div>
        </article>

        {/* Related */}
        <section className="container-blog py-12">
          <h2 className="font-serif text-2xl md:text-3xl mb-8">قراءاتٌ ذات صِلة</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {suggestions.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
