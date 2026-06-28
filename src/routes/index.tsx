import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PostCard } from "@/components/PostCard";
import { posts } from "@/data/posts";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "مَجلّة مِداد — كتابةٌ هادئة بالعربية" },
      { name: "description", content: "مدوّنة عربية في الأدب والفكر والفنون. مقالاتٌ مُختارة بعنايةٍ للقارئ العربي." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured.slug);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero / Featured */}
        <section className="container-blog pt-12 pb-16">
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">
                المقال المختار
              </p>
              <h1 className="font-serif text-3xl md:text-4xl">هذا الأسبوع نقرأ</h1>
            </div>
            <Link to="/categories" className="hidden md:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
              كلّ التصنيفات <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>

          <Link
            to="/post/$slug"
            params={{ slug: featured.slug }}
            className="group grid md:grid-cols-2 gap-8 md:gap-12 items-center rounded-2xl overflow-hidden"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted order-1 md:order-2"
              style={{ boxShadow: "var(--shadow-soft)" }}>
              <img
                src={featured.image}
                alt={featured.title}
                width={1024}
                height={768}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-2 text-xs font-bold mb-4">
                <span className="text-primary">{featured.category}</span>
                <span className="text-muted-foreground font-normal">· {featured.readingTime}</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-4 group-hover:text-primary transition-colors">
                {featured.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-9 mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 text-accent font-bold">
                  {featured.author.charAt(0)}
                </span>
                <span className="font-bold text-foreground">{featured.author}</span>
                <span>·</span>
                <span>{featured.date}</span>
              </div>
            </div>
          </Link>
        </section>

        {/* Divider with motif */}
        <div className="container-blog">
          <div className="flex items-center gap-4 text-primary/40">
            <div className="h-px flex-1 bg-border" />
            <span className="font-serif text-2xl">❊</span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </div>

        {/* Latest posts */}
        <section className="container-blog py-16">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">أحدث المقالات</p>
            <h2 className="font-serif text-3xl md:text-4xl">قراءاتٌ جديدة</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* CTA banner */}
        <section className="container-blog">
          <div
            className="rounded-2xl p-10 md:p-14 text-center"
            style={{ background: "var(--gradient-warm)", color: "var(--primary-foreground)" }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-3">انضمّ إلى نشرتنا الأسبوعية</h2>
            <p className="opacity-90 mb-6 max-w-xl mx-auto leading-8">
              مقالٌ واحدٌ مُختار كلّ أسبوع، يصلك إلى بريدك في صباح الجمعة. بلا ضجيج، بلا إعلانات.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 rounded-md bg-background/95 text-foreground px-4 py-3 text-sm outline-none"
              />
              <button className="rounded-md bg-foreground text-background px-5 py-3 text-sm font-bold hover:opacity-90">
                اشترك الآن
              </button>
            </form>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
