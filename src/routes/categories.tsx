import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PostCard } from "@/components/PostCard";
import { categories, posts } from "@/data/posts";
import { useState } from "react";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "التصنيفات — مَجلّة مِداد" },
      { name: "description", content: "تصفّح مقالات مَجلّة مِداد حسب التصنيف: أدب، فكر، فنون، عمارة، كتب، ثقافة." },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  const [active, setActive] = useState<string | null>(null);
  const visible = active ? posts.filter((p) => p.category === active) : posts;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 container-blog py-12">
        <header className="mb-10">
          <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">استكشف</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-3">التصنيفات</h1>
          <p className="text-muted-foreground text-lg">اختر تصنيفًا لتصفية المقالات.</p>
        </header>

        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActive(null)}
            className={`rounded-full border px-4 py-1.5 text-sm font-bold transition ${
              !active
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-foreground/70 hover:border-primary hover:text-primary"
            }`}
          >
            الكل
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-1.5 text-sm font-bold transition ${
                active === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-foreground/70 hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
